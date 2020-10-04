import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="toodooContainer">
        <ToDoTitle />
        <form onSubmit={this.handleSubmit}>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            gvgv
          </button>
        </form>
        <TodoList items={this.state.items} />
        <BottomTitle/>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }


}

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map(item => (
            <div className="todoItem">
              <input type="checkbox" name={item.text} id={item.id} />
              <li key={item.id}>{item.text}</li>
            </div>
          ))}
        </ul>
      </div>

    );
  }
}

class ToDoTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'untitled' };
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  render() {
    return (
      <div className="titleContainer">
        <div>
          <h3 id="todoTitle">{this.state.title}</h3>
          <form onSubmit={this.handleEditSubmit} id="editTitleForm">
            <input placeholder={this.state.title} />
          </form>
        </div>
        <button onClick={this.handleClickEdit}>
          <div className="editContainer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 12.875V16H3.625L12.8417 6.78334L9.71667 3.65834L0.5 12.875ZM15.2583 4.36667C15.5833 4.04167 15.5833 3.51667 15.2583 3.19167L13.3083 1.24167C12.9833 0.916675 12.4583 0.916675 12.1333 1.24167L10.6083 2.76667L13.7333 5.89167L15.2583 4.36667Z" fill="#777777" />
            </svg>
            <p>
              Edit
          </p>
          </div>
        </button>
        <div>
          <button className="newListBtn">
            New List
      </button>
        </div>
      </div>
    );
  }

  handleClickEdit(e) {
    document.getElementById("todoTitle").style.display = "none";
    document.getElementById("editTitleForm").style.display = "block";
  }

  handleEditSubmit(e) {
    this.setState({ title: e.target.value });
    document.getElementById("todoTitle").style.display = "block";
    document.getElementById("editTitleForm").style.display = "none";
  }

}

function BottomTitle() {
  return (
    <div className="bottomTitle">
      <hr className="lineBreak"></hr>
      <h3>Too Doo</h3>
      <p>Your to-dos have never been simpler</p>
    </div>
  );
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);