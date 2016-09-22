//XHR CROSSDOMAINS
module.exports = {

  login(data, that) {
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

    var xhr = createCORSRequest('POST', 'http://localhost/lab/koub-react/dist/api/auth/SignIn.php')

    if (!xhr) {
      throw new Error('CORS not supported');
    }
    xhr.onload = function() {
      if (xhr.status === 200) {
        const res = JSON.parse(xhr.responseText)
        console.log('xhrResponse :', res)
        if (res.error.status === false) {
          alert('Tout est ok')
          //Envoie au redux store
          that.props.actions.Login(data.email, data.password)

          //Stockage en local
          localStorage.setItem('auth:tkn', res.token)

        } else {
          switch (res.error.message) {
            case 'WRONG_PASSWORD':
              that.setState({'Valid_password': 'error'})
              break;
            case 'NO_USER':
              that.setState({'Valid_email': 'error'})
              break;
            default:

          }
        }

      }
      else if (xhr.status !== 200) {
        alert('Request failed.  Returned status of ' + xhr.status)
      }
    }
    xhr.onerror = function() {
      alert('Woops, there was an error making the request.')
    }
    console.log('xhrSent :', JSON.stringify(data))
    xhr.send(JSON.stringify(data))
  },
  signup(data, that) {
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

    var xhr = createCORSRequest('POST', 'http://localhost/lab/koub-react/dist/api/auth/SignUp.php')

    if (!xhr) {
      throw new Error('CORS not supported');
    }
    xhr.onload = function() {
      if (xhr.status === 200) {
        const res = xhr.responseText
        console.log('xhrResponse :', res)

      }
      else if (xhr.status !== 200) {
        alert('Request failed.  Returned status of ' + xhr.status)
      }
    }
    xhr.onerror = function() {
      alert('Woops, there was an error making the request.')
    }
    console.log('xhrSent :', JSON.stringify(data))
    xhr.send(JSON.stringify(data))
  }
}
