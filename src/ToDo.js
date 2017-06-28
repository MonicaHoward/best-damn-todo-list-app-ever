import React from 'react';

class Input extends React.Component {

  render() {
    return (
      <div>
        <input className="input"
               placeholder="what do you need to do?"
               onKeyUp={this.props.onKeyUpHandler}
              />
      </div>
    )
  }
}

class ListItem extends React.Component {

  render() {
    return (
      <li className="list-item"
          >
        {this.props.taskName}
        <button onClick={this.props.onClickHandler}>DONE</button>
      </li>

    );
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

      ]
    }
  }

  handleKeyUp(evt) {
    if (evt.keyCode !== 13) {
      return;
    }
    console.log('what do we have');
    const tasks = this.state.tasks.slice(0);
    tasks.push({taskName: evt.target.value});
    this.setState({tasks: tasks});
  }

  removeItem(index) {
    const tasks = this.state.tasks.slice(0);
    tasks.splice(index, 1);
    this.setState({tasks: tasks});
  }

  render() {
    return(
      <div>
        <Input onKeyUpHandler={this.handleKeyUp.bind((this))}/>
        <WholeList>
          {this.state.tasks.map((task, i) =>  <ListItem onClickHandler={this.removeItem.bind(this, i)} taskName={task.taskName} key={i} />)}

        </WholeList>
      </div>
    )
  }
}

export default ToDo;


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
