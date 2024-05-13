import React, { Component, useEffect, useState } from 'react'
import './DisplayInfo.scss';
import logo from '../logo.svg'
// export class DisplayInfo extends Component {
//   state = {
//     isShow: true
//   }
//   onHandleShowHide = () => {
//     this.setState({
//       isShow: !this.state.isShow
//     })
//   }
//   onHandleDeleteUser = (user)=>{
//     this.props.onHandleDeleteUserFromParent(user)
//   }
//   render() {
//     const listUser = this.props.listUser;

//     return (
//       <div className='display-info-container'>
//         <button onClick={() => this.onHandleShowHide()}>{this.state.isShow ? 'Hide' : 'Show'}</button>
//         {this.state.isShow ? (<div>
//           {listUser.map((user) => {
//             return (<div key={user.id} className={user.age >= 30 ? 'green' : 'red'} style={{ display: 'flex' }}>
//               <div>
//                 <div>My name is {user.name}</div>
//                 <div>My age is {user.age}</div>
//               </div>
//               <div>
//                 <button onClick={()=>this.onHandleDeleteUser(user)}>X</button>
//               </div>
//               <hr />
//             </div>)
//           })}
//         </div>) : ''}
//       </div>
//     )
//   }
// }


function DisplayInfo(props) {
  const [isShow, setIsShow] = useState(true);
  const onHandleDeleteUser = (user) => {
    props.onHandleDeleteUserFromParent(user);
  }
  const onHandleShowHide = () => {
    setIsShow(!isShow);
  }
  useEffect(()=>{
    document.title = 'Vien Xuan Quynh'
  })
  return (
    <div className='display-info-container'>
      <button onClick={() => onHandleShowHide()}>{isShow ? 'Hide' : 'Show'}</button>
      {isShow ? (<div>
        {props.listUser.map((user) => {
          return (<div key={user.id} className={user.age >= 30 ? 'green' : 'red'} style={{ display: 'flex' }}>
            <div>
              <div>My name is {user.name}</div>
              <div>My age is {user.age}</div>
            </div>
            <div>
              <button onClick={() => onHandleDeleteUser(user)}>X</button>
            </div>
            <hr />
          </div>)
        })}
      </div>) : ''}
    </div>
  )

}

export default DisplayInfo