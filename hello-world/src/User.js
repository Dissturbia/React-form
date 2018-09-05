import React , {Component} from "react";
//// two props name and mail that will render in a list li

class User extends Component {
    render() {
        return (
            <li>
                {this.props.name} - {this.props.email}
            </li>
        )
    }
}

export default User;