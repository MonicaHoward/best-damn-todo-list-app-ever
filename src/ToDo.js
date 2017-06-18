import React from 'react';

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: ''
    }
  }
  handleKeyUp() {

  }
  render() {
    return (
      <div>
        <input className="input"
               placeholder="what do you need to do?"
               onKeyUp={this.props.handleKeyUp} />
      </div>
    )
  }
}
class ListItem extends React.Component {


  handleDelete() {

  }

  render() {
    return (
      <li className="list-item"
          onClick={this.props.clickHandler}>
        {this.props.taskName}
      </li>
      // <div className="do-this-container">
      //   <ul className="do-this-list">
      //     <li className="do-this"> LIST ITEM GOES HERE </li>
      //     <div className="button-box">
      //       <button className="delete"
      //               onClick={() => this.handleDelete()}>
      //         done
      //       </button>
      //       <button className="done">delete</button>
      //     </div>
      //   </ul>
      // </div>
    )
  }
}

class WholeList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.children}
      </ul>
    );
  }
}

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {taskName: "Task 1"},
        {taskName: "Task 2"},
        {taskName: "Task 3"}
      ]
    }
  }
  render() {
    return(
      <div>
        <Input />
        <WholeList>
          {this.state.tasks.map((task) => {taskName: "Task 1"})}
          <ListItem taskName={"Task 1"} />
          <ListItem taskName={"Task 2"} />
          <ListItem taskName={"Task 3"} />
        </WholeList>
      </div>
    )
  }
}

export default ToDo;
