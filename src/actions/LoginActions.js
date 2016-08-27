export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

const initialState = {
  isAuthenticated: false,
  token: null,
  user:{
    email: '',
    password: ''
  }
}

export function Login(email, password, tkn) {
  return dispatch => setTimeout(
    () => dispatch(
      {
      type: LOGIN,
      email,
      password,
      tkn
    }), 0)
}
export function Logout() {
  return dispatch => setTimeout(
    () => dispatch(
      {
      type: LOGOUT
    }), 700)
}
