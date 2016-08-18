import React, { Component } from 'react'
import { Link } from 'react-router'



class Users extends Component {
constructor(props) {
  super(props)
}

    // void componentWillMount()
    // Invoked once, both on the client and server, immediately before the initial rendering occurs.
    // If you call setState within this method, render() will see the updated state and will be executed only once despite the state change.
    componentWillMount() {

        //console.log(this.context.julha_config);

        // before rendering, set the state of the component
        this.setState(this.context.julha_config)
    }

    render() {


        return (
            <div>

              { /* menu */ }
              <h2>Users</h2>


              { /* list */ }
              <div className="master">
                <ul>
                  {this.state.users.map(user => (
                    <li key={user.id}><Link to={`/user/${user.id}`} activeStyle={this.context.julha_config.ACTIVE}>{user.name}</Link></li>
                  ))}
                </ul>
              </div>

              { /* child component */ }
              <div className="detail">
                {this.props.children}
                </div>


            </div>
        )
    }
}

// global variable, accessible in all child with .contextTypes
Users.contextTypes = {
    julha_config: React.PropTypes.object
}

// export the component
module.exports = Users
