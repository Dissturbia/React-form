import React , {Component} from "react";
import User from "./User";


class UserList extends Component {
    render () {
        return (
            <ul>
                {this.props.users.map(u => { //map devuelve por cada elemento un componente user
                    return (
                        <User
                        key={u.id}
                        name={u.name}
                        email={u.email}
                        />
                    );
                })}
                </ul>
        );
    }
}

export default UserList;