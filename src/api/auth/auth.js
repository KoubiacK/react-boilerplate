//XHR CROSSDOMAINS
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ('withCredentials' in xhr) {
    xhr.open(method, url, true)
  } else if (typeof XDomainRequest != 'undefined') {
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    xhr = null;
  }
  return xhr;
}

module.exports = {

  login(data, that) {
    var xhr = createCORSRequest('POST', 'http://localhost/lab/koub-react/dist/api/auth/SignIn.php')

    if (!xhr) {
      throw new Error('CORS not supported');
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
          alert('Error while login you in')
        }
      }
      else {
        alert('Woops, there was an error making the request.')
      }
    }

    // console.log('xhrSent :', JSON.stringify(data))
    xhr.send(JSON.stringify(data))
  },

  signup(data, that) {
    var xhr = createCORSRequest('POST', 'http://localhost/lab/koub-react/dist/api/auth/SignUp.php')

    if (!xhr) {
      throw new Error('CORS not supported');
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
    var xhr = createCORSRequest('POST', 'http://localhost/lab/koub-react/dist/api/auth/Relog.php')

    if (!xhr) {
      throw new Error('CORS not supported');
    }
    xhr.onload = function() {
      if (xhr.status === 200) {
        const res = xhr.responseText
        // console.log('xhrResponse :', res)
        var Email = JSON.parse(res).Email
        that.props.actions.Login(Email)
      }
      else {
        alert('Woops, there was an error making the request.')
      }
    }
    // console.log('xhrSent :', JSON.stringify(data))
    xhr.send(JSON.stringify(data))
  },

  LogOut(data, that) {
    var xhr = createCORSRequest('POST', 'http://localhost/lab/koub-react/dist/api/auth/LogOut.php')

    if (!xhr) {
      throw new Error('CORS not supported');
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
  }

}
