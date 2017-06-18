import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <div>
        <input></input>
        <button>SUBMIT</button>

      </div>
    )
  }
}
class ListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: ''
    }
  }

  handleDelete() {
    
  }

  render() {
    return (
      <div className="do-this-container">
        <ul className="do-this-list">
          <li className="do-this"> LIST ITEM GOES HERE </li>
          <button className="delete"
                  onClick={() => this.handleDelete()}>
            -
          </button>
          <button className="done">+</button>
        </ul>
      </div>
    )
  }
}

class ToDo extends React.Component {
  render() {
    return(
      <div>
        <Input />
        <ListItem />
      </div>
    )
  }
}

export default ToDo;
