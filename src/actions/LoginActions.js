export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export function Login(email) {
  return dispatch => setTimeout(
    () => dispatch(
      {
      type: LOGIN,
      email
    }), 0)
}
export function Logout() {
  return dispatch => setTimeout(
    () => dispatch(
      {
      type: LOGOUT
    }), 700)
}
