import React from "react";
import "../stylesheets/main.scss";
import UserList from './UserList'
// app component
export default class App extends React.Component {

  // render
  render() {
    return (
      <div className="container">
        <UserList />
      </div>

    )
  }
}
