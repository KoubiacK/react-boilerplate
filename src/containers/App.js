import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as LoginActions from '../actions/LoginActions'
//Bootstap imports
import { Grid, Row } from 'react-bootstrap'
//Components import
import NavBar from '../components/Nav/NavBar.jsx'
//auth
import * as auth from '../api/auth/auth'

class App extends Component {
   constructor(props) {
     super(props)
     this.state = { isAuthenticated: false, loaded: false }
   }

   componentDidMount() {
     //Check if we have hash in localStorage
     let wasAuth = localStorage.getItem('auth:tkn') ? true : false

     if (wasAuth) {
       let credentials = localStorage.getItem('auth:tkn').split('.', 2)
       let data = { ID: credentials[0], hash: credentials[1] }
       let that = this
       auth.relog(data, that)
     }
   }

   componentWillReceiveProps(nextProps) {
     this.setState({ isAuthenticated: nextProps.isAuthenticated })
   }

   handleLogout() {
     this.props.actions.Logout()
     localStorage.clear()
   }

   render() {
     return (
       <div>
         <NavBar />
           <Grid>
           <Row className='main-app-content'>
             {this.props.children}
           </Row>
         </Grid>
       </div>
     )
   }
 }
const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
  user: state.login.user.email
})
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch)
  }
}
export default connect(
   mapStateToProps,
   mapDispatchToProps,
   null,
   { pure: false }
 )(App)
