export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

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
