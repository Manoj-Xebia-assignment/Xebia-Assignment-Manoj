import React, { Component } from 'react';

class LoginComponent extends Component {
    render() {
        if (this.props.isLoginShow) {
            return (
                <div className="LoginContainer">
                    <h2>Welcome to Login Page, Please login to Proceed</h2>
                    <div className="LoginComponent">
                        <span className="TextLabel bold">User Name:  </span>
                        <input type="text"
                            className="LoginInput"
                            value={this.props.modal.userName}
                            onChange={this.props.handleFirstChange} />
                        <span className="TextLabel bold">Password:  </span>
                        <input type="password"
                            className="LoginInput" />
                        <input type="button"
                            className="button"
                            value="Login"
                            onClick={this.props.handleLogin} />
                    </div>
                </div>
            );
        } else {
            return <div></div>
        }
    }
}

export default LoginComponent;
