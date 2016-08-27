export const LOGIN = 'LOGIN'
export const SET_TOKEN = 'SET_TOKEN'

export function Authenticate(email, password, tkn) {
  return dispatch => dispatch({
    type: LOGIN,
    email,
    password,
    tkn
  })
}
