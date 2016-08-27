import { LOGIN, LOGOUT } from '../actions/LoginActions'

const initialState = {
  isAuthenticated: false,
  token: null,
  user:{
    email: '',
    password: ''
  }
}
export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        isAuthenticated: true,
        token: action.tkn,
        user:{
          email: action.email,
          password: action.password
        }
      })
      case LOGOUT:
      return initialState
    default:
      return state;
  }
}
