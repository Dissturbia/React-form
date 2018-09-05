import React, { Component } from 'react';


class App extends Component {
  constructor (){
    super();
    this.state = {
      users : [
        {id : 1 , name: "Gisela",email:"srtagise.ramirez@gmail.com"},
        {id : 2 , name:"test" , email:"test@test.com"},
        

      ]

        
        

      
    }
  }

  handleOnAddUser(event){
    event.preventDefault();
    let User = {
      name : event.target.name.value,
      email : event.target.email.value
    };
    this.setState({
      users : this.state.users
    })
  }








    render() {
      return (
        <UserList users = {this.state.users} />
      );
    }


}

export default App;