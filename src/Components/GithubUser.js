import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGithub } from '../Actions/index'
import { bindActionCreators } from 'redux'
import '../App.css'

class GithubUser extends Component {

    handle() {
       return this.props.fetchGithub()
    }

    render() {
        
        return(
            <div>
                <h2>Hello Github User here is your info:</h2>
                <button onClick={this.handle}>Get User Info</button>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        githubInfo: state.githubInfo
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchGithub}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GithubUser)



