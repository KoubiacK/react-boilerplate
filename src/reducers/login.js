const LOGIN = 'LOGIN'

export default function login(state = false, action) {
  switch (action.type) {
  case LOGIN:
    return !state;
  default:
    return state;
  }
}
