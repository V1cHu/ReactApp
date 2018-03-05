import React from 'react';
import { connect } from 'react-redux';
import {push} from 'react-router-redux';
import { authenticateUser } from '../actions/userActions';

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: '',
                password: ''
            }
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(e, type) {
        e.preventDefault();
        if (type == 'username') {
            this.setState({
                user: {
                    username: e.target.value,
                    password: this.state.user.password
                }
            })
        } else {
            this.setState({
                user: {
                    username: this.state.user.username,
                    password: e.target.value
                }
            })
        }

    }

    submitHandler(e) {
        e.preventDefault();
        if(this.state.user.username =='' || this.state.user.password ==''){
            return;
        }
        this.props.authenticateUser(this.state.user);
    }

    render() {
        return (
            <div className="row justify-content-center">
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input className="form-control" type="text" onChange={(e) => this.changeHandler(e, 'username')} placeholder="Enter your username" />
                        <label htmlFor="username">Password:</label>
                        <input className="form-control"  type="password" onChange={(e) => this.changeHandler(e, 'password')} placeholder="Enter your password" />
                    </div>
                    <button className="btn btn-primary btn-block" onClick={this.submitHandler}>Login</button>
                </form>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    authenticateUser: user => {
        dispatch(authenticateUser(user));
        dispatch(push('/'));
    }
})

export default connect(null, mapDispatchToProps)(Login);