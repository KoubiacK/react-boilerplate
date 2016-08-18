import React, { Component } from 'react'


class User extends Component {


    // custom functions
    findUserById(userId) {
        //console.log(userId);
        console.log(this.context.julha_config.usersObj[userId])

        return this.context.julha_config.usersObj[userId]
    }



    // void componentWillMount()
    // Invoked once, both on the client and server, immediately before the initial rendering occurs.
    // If you call setState within this method, render() will see the updated state and will be executed only once despite the state change.
    componentWillMount() {

        // before rendering, set the state of the component
        // user informations
        this.setState({
            //user: this.findUserById(this.props.params.userId)
        })
    }

    // affiche le nom de l'utilsateur
    render() {

        // récup les infos du user
        var user = this.findUserById(this.props.params.userId)

        return (
            <div>
              <h2>{user.name}</h2>
            </div>
        )
    }
}

// global variable, accessible in all child with .contextTypes
User.contextTypes = {
    julha_config: React.PropTypes.object
}

// export the component
module.exports = User
