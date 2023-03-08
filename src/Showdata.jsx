import axios from "axios";
import React, { Component } from "react";

class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8083/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        <center>
          <div className='q'>
      <table border={1}>
      <thead>
        <tr>
          <th>id</th>
          <th>username</th>
          <th>email</th>
          <th>password</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </center>
    );
  }}
  
export default Showdata;
