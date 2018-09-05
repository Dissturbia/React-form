import React, {Component} from 'react';


//propagacion de eventos

export default class UserForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onAddUser}>
                <input type = "text" placeholder = "Nombre" name = "nombre"/>
                <input type = "email" placeholder = "Email" name = "email"/>
                <input type = "submit" value = "Guardar"/> 
            </form>   
            //Cada vez que se pulse el botón guardar el formulario disparará el evento onSubmit()
            //llama a una función que recibirá del componente padre a través de la propiedad props.OnAddUser
            //Callbacks
        );
    }

}
