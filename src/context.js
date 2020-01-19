import React, { Component } from 'react'

const RoomContext = React.createContext();
//<RoomContext.Provider value={'hello}

class RoomProvider extends Component {
  render() {
    return (
      <RoomContext.Provider value={"hello world"}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;


export { RoomProvider, RoomConsumer, RoomContext }
