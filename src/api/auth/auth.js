//XHR CROSSDOMAINS
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest()
  if ('withCredentials' in xhr) {
    xhr.open(method, url, true)
  } else if (typeof XDomainRequest != 'undefined') {
    xhr = new XDomainRequest()
    xhr.open(method, url)
  } else {
    xhr = null
  }
  return xhr
}

module.exports = {

  login(data, that) {
    var xhr = createCORSRequest('POST', 'http://localhost/lab/koub-react/dist/api/auth/SignIn.php')

    if (!xhr) {
      throw new Error('CORS not supported')
    }
    xhr.onload = function() {
      if (xhr.status === 200) {
        const res = JSON.parse(xhr.responseText)
        // console.log('xhrResponse :', res)

        if (typeof res.hash !== 'undefined') {
          //Envoie au redux store
          that.props.actions.Login(data.email)
          //Stockage en local
          localStorage.setItem('auth:tkn', res.hash)
        } else {
          that.setState({ Error: { status: true, message: res.Error } })
        }
      }
      else { alert('Woops, there was an error making the request.') }
    }

    // console.log('xhrSent :', JSON.stringify(data))
    xhr.send(JSON.stringify(data))
  },

  signup(data, that) {
    let xhr = createCORSRequest('POST', 'http://localhost/lab/koub-react/dist/api/auth/SignUp.php')

    if (!xhr) {
      throw new Error('CORS not supported')
    }
    xhr.onload = function() {
      if (xhr.status === 200) {
        const res = xhr.responseText
        // console.log('xhrResponse :', res)
      }
      else {
        alert('Woops, there was an error making the request.')
      }
    }
    // console.log('xhrSent :', JSON.stringify(data))
    xhr.send(JSON.stringify(data))
  },

  relog(data, that) {
    let xhr = createCORSRequest('POST', 'http://localhost/lab/koub-react/dist/api/auth/Relog.php')

    if (!xhr) {
      throw new Error('CORS not supported')
    }
    xhr.onload = function() {
      if (xhr.status === 200) {
        const res = xhr.responseText
        // console.log('xhrResponse :', res)
        let Email = JSON.parse(res).Email
        that.props.actions.Login(Email)
      }
      else { alert('Woops, there was an error making the request.') }
    }
    // console.log('xhrSent :', JSON.stringify(data))
    xhr.send(JSON.stringify(data))
  },

  LogOut(data, that) {
    let xhr = createCORSRequest('POST', 'http://localhost/lab/koub-react/dist/api/auth/LogOut.php')

    if (!xhr) {
      throw new Error('CORS not supported')
    }
    xhr.onload = function() {
      if (xhr.status === 200) {
        
      }
      else {
        alert('Woops, there was an error making the request.')
      }
    }
    // console.log('xhrSent :', JSON.stringify(data))
    xhr.send(JSON.stringify(data))
  },

  getProfil(hash, that) {
    let xhr = createCORSRequest('POST', 'http://localhost/lab/koub-react/dist/api/auth/Profil.php')

    if (!xhr) {
      throw new Error('CORS not supported')
    }
    xhr.onload = function() {
      if (xhr.status === 200) {
        const res = xhr.responseText
        // console.log('xhrResponse :', res)
        that.state.InputValues = { firstName: JSON.parse(res).firstName,
                                  lastName: JSON.parse(res).lastName,
                                  email: JSON.parse(res).Email,
                                  password1: 'password',
                                  password2: 'password' }
        that.state.User.email = JSON.parse(res).Email
        that.forceUpdate() // PROVISOIRE
      }
      else {
        that.setState({ error: { status: true, message: 'Can\'t get User Infos' } })
      }
    }
    xhr.send(hash)
  }

}
