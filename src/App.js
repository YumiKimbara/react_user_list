import './App.scss';
import React from 'react'
import User from './components/User';
import Edit from './components/Edit';

class App extends React.Component {

  state = {
    // name: "Conan Edogawa",
    // email: "conan@gmail.com",
    // phrase: "There is always only one truth",
    isActive: true,
    user: [],
  }

  handleCallback = (childData) =>{
    this.setState({name: childData[0]})
    this.setState({email : childData[1]})
    this.setState({phrase: childData[2]})
}


// setShow = (userData) => {
//   this.setState({isActive: userData})
// }
setShow = () => {
  this.setState({isActive: false})
}

setSave = () => {
  this.setState({isActive: true})
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users').then(res => {
    if(res.status !== 200) {
      console.log("error happened");
    }
    res.json().then(data => {
      this.setState({user: data})
    })
  }).catch((err) => {
    console.log("error happened");
  })
}

deleteUser = id => {
  const currentListUsers = this.state.user;
  const newListUsers = currentListUsers.filter(userData => userData.id !== id);
    this.setState({
      user: newListUsers
    })
}


//parentCallback = {this.handleCallback}と書き、functionをpropsに渡すこともできる。
  render() {
    console.log(this.state.user);
    return (
      <>
      {this.state.isActive ?
         <User user={this.state.user} toggle={this.setShow} delete={this.deleteUser}/> :
         <Edit style={this.isActive} parentCallback={this.handleCallback} save={this.setSave}/>
      }
      </>
    );
  } 
}

export default App;
