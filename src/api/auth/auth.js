module.exports = {
  login(data, that) {
    let request = new Request('http://localhost/lab/koub-react/dist/api/auth/SignIn.php', {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors'
    })
    fetch(request).then(function(response) {
      return response.json()
    }).then(function(res) {
      // console.log('res', res)
      if (typeof res.hash !== 'undefined') {
        //Envoie au redux store
        that.props.actions.Login(data.email)
        //Stockage en local
        localStorage.setItem('auth:tkn', res.hash)
        localStorage.setItem('auth:name', res.firstName + '.' + res.lastName)
      } else {
        that.setState({ Error: { status: true, message: res.Error } })
      }
    })
  },

  signup(data, that) {
    let request = new Request('http://localhost/lab/koub-react/dist/api/auth/SignUp.php', {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors'
    })
    fetch(request).then(function(response) {
      return response.json()
    }).then(function(res) {
      // console.log('res', res)
        // that.setState({ Error: { status: true, message: res.Error } })
    })
  },

  relog(data, that) {
    let request = new Request('http://localhost/lab/koub-react/dist/api/auth/Relog.php', {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors'
    })
    fetch(request).then(function(response) {
      return response.json()
    }).then(function(res) {
      // console.log('Relog:res', res)
      that.props.actions.Login(res.Email)
        // that.setState({ Error: { status: true, message: res.Error } })
    })
  },

  LogOut(data, that) {
    let request = new Request('http://localhost/lab/koub-react/dist/api/auth/LogOut.php', {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors'
    })
    fetch(request).then(function(response) {
      return response.json()
    }).then(function(res) {
      // console.log('res', res)
        // that.setState({ Error: { status: true, message: res.Error } })
    })
  },

  getProfil(hash, that) {
    let request = new Request('http://localhost/lab/koub-react/dist/api/auth/Profil.php', {
      method: 'POST',
      body: hash,
      mode: 'cors'
    })
    fetch(request).then(function(response) {
      return response.json()
    }).then(function(res) {
      // console.log('Profil:res', res)
      that.state.InputValues = { firstName: res.firstName,
                                 lastName: res.lastName,
                                 email: res.Email,
                                 password1: 'password',
                                 password2: 'password' }
      that.state.User.email = res.Email
      that.setState({ hadInputs: true })
          // that.forceUpdate() // PROVISOIRE
        // that.setState({ Error: { status: true, message: res.Error } })
    })
    // let xhr = createCORSRequest('POST', 'http://localhost/lab/koub-react/dist/api/auth/Profil.php')
    //
    // if (!xhr) {
    //   throw new Error('CORS not supported')
    // }
    // xhr.onload = function() {
    //   if (xhr.status === 200) {
    //     const res = xhr.responseText
    //     // console.log('xhrResponse :', res)
    //     that.state.InputValues = { firstName: JSON.parse(res).firstName,
    //                               lastName: JSON.parse(res).lastName,
    //                               email: JSON.parse(res).Email,
    //                               password1: 'password',
    //                               password2: 'password' }
    //     that.state.User.email = JSON.parse(res).Email
    //     that.forceUpdate() // PROVISOIRE
    //   }
    //   else {
    //     that.setState({ error: { status: true, message: 'Can\'t get User Infos' } })
    //   }
    // }
    // xhr.send(hash)
  }

}
