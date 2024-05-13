import React, { Component, useState } from 'react'
import AddUserInfo from './AddUserInfo'
import DisplayInfo from './DisplayInfo'
// export class MyComponent extends Component {
//   state = {
//     listUser: [
//       { id: 1, name: "Andy", age: 30 },
//       { id: 2, name: "Vinh", age: 24 }
//     ]
//   }
//   onHandleAddNewUser = (user) => {
//     this.setState({
//       listUser: [user, ...this.state.listUser]
//     })
//   }
//   onHandleDeleteUserFromParent = (user) => {
//     const filteredList = this.state.listUser.filter((item) => item.id !== user.id);
//     this.setState({
//       listUser: filteredList
//     })
//   }
//   render() {
//     return (
//       <>
//         <AddUserInfo onHandleAddNewUser={this.onHandleAddNewUser} />
//         <DisplayInfo listUser={this.state.listUser} onHandleDeleteUserFromParent={this.onHandleDeleteUserFromParent} />
//       </>
//     )
//   }
// }


const MyComponent = () => {
  const [listUser, setListUser] = useState([
    { id: 1, name: "Andy", age: 30 },
    { id: 2, name: "Vinh", age: 24 }
  ])
  const onHandleAddNewUser = (user) => {
    setListUser(
      [user, ...listUser]
    )
  }
  const onHandleDeleteUserFromParent = (user) => {
    const filteredList = listUser.filter((item) => item.id !== user.id);
    setListUser(
      filteredList
    )
  }
  return (
    <>
      <AddUserInfo onHandleAddNewUser={onHandleAddNewUser} />
      <DisplayInfo listUser={listUser} onHandleDeleteUserFromParent={onHandleDeleteUserFromParent} />
    </>
  )
}

export default MyComponent