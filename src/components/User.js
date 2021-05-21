import React, {useState} from "react";
import '../User.scss';
import Edit from './Edit';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class User extends React.Component{
  
render() {
  return (
    <>
    {this.props.user.map(userData => {
      return (
      <div className="user-container" key={userData.id}>
      <p>
         <span className="text">Name: {userData.name}</span><br/>
         <span className="text">Username: {userData.username}</span><br/>
         <span className="text">Email: {userData.email}</span><br/>
         <span className="text">website: {userData.website}</span>
      </p>
      <div>
      <button className="btn">Edit Contact</button>
      <button className="btn" onClick={() => {this.props.delete(userData.id)}}>Delete User</button>
      </div>
      </div>
      )
    })}
    </>
)
}
   
}

export default User;