import React from 'react';
import './TodoItem.css';
import { Link } from 'react-router-dom';
import TodoItemDetails from '../todo-item-details';

export default class TodoItem extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { expanded: false };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      expanded: !this.state.expanded,
    })
  }
  render() {
    const { description, id, onRemove, startsAt  } = this.props;
    const { expanded } = this.state;
    const isChecked = new Date(startsAt).getTime() < new Date().getTime();

    return (
      <div className="container">
        <div className="row">
          <input checked={isChecked} type="checkbox" disabled className={isChecked ? 'toggle isChecked' : 'toggle'} />
          <Link className="description" to={`details/${id}`}>{ description }</Link>
          <span className="expand" onClick={this.toggle} />
        </div>
        <span className="close" onClick={onRemove} />
        <div className="fullLine">
        { expanded && <TodoItemDetails {...this.props} /> }
        </div>
      </div>
    )
  }

}