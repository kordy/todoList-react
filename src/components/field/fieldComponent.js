import React from 'react';
import Form from '../form/formComponent';

class Field extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: ''
    }
  }

  _onChange = (e) => {
    this.setState({
      value: e.target.value
    })
    this.props.onChange(this.state.value, this.props.info.name);
  }

  getField() {
    switch (this.props.info.type) {
      case 'text':
        return this.getTextInput();
      case 'date':
        return this.getDateInput();
      case 'textarea':
        return this.getTextarea();
    }
  }

  getTextInput() {
    return <input className='field__input' type='text' onChange={ this._onChange } value={ this.state.value } />
  }

  getDateInput() {
    return <input className='field__input' type='date' onChange={ this._onChange } value={ this.state.value } />
  }

  getTextarea() {
    return (
      <textarea className='field__input field__input--textarea' onChange={ this._onChange }>
        { this.props.value }
      </textarea>
    )
  }

  render() {
    return (
      <div className='field'>
        { this.getField() }
      </div>
    )
  };
}

export default Field;
