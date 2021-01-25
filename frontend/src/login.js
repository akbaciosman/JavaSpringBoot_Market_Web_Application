import React, { Component } from 'react'

class login extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <input type="text" className="userName" placeholder="Please enter username.." />
                    <br />
                    <input type="password" className="password" placeholder="Please enter password.." />
                    <br />
                    <button type="submit" >Login</button>
                </form>


            </div>
        )
    }
}

export default login;