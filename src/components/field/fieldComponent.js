import React from 'react';

class Field extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      value: '',
      isShowError: false,
      isValid: true,
      isDirty: false,
      error: ''
    }
  }

  _onChange = (e) => {
    let value = e.target.value;
    let check = this.checkField(value);

    let fieldInfo = {
      value: value,
      isDirty: true,
      isShowError: false,
      isValid: check.isValid,
      error: check.error
    }

    this.setState(fieldInfo);
    this.props.onChange(value, this.props.info.name, fieldInfo);

    if (this.props.onCustomChange && typeof this.props.onCustomChange === 'function') {
      this.props.onCustomChange(value, this.props.info.name, fieldInfo);
    }
  }

  checkField = (value) => {
    let { info } = this.props;
    let isValid = true;
    let error = '';

    if (!info) return {};

    if (info.required && value.trim() === '') {
      error = 'Поле обязательно для заполнения';
      return this.error(error);
    }

    if (info.maxLength && value.length > info.maxLength) {
      error = 'Максимальное количество символов = ' + info.maxLength;
      return this.error(error);
    }

    if (info.minLength && value.length < info.minLength) {
      error = 'Минимальное количество символов = ' + info.minLength;
      return this.error(error);
    }

    if (info.validation && typeof info.validation === 'function') {
      error = info.validation(value, info.name, this.props.fields);
      if (error) return this.error(error);
    }

    return {
      isValid: isValid,
      error: error
    }
  }

  error(errorText) {
    return {
      isValid: false,
      error: errorText
    }
  }

  _onBlur = (e) => {
    this.setState({ isShowError: true });
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
    return <input
      className='field__input'
      type='text'
      onChange={ this._onChange }
      onBlur={ this._onBlur }
      value={ this.state.value }
      />
  }

  getDateInput() {
    return <input
      className='field__input'
      type='date'
      onChange={ this._onChange }
      onBlur={ this._onBlur }
      value={ this.state.value }
      />
  }

  getTextarea() {
    return (
      <textarea
        className='field__input field__input--textarea'
        onChange={ this._onChange }
        onBlur={ this._onBlur }
        >
        { this.props.value }
      </textarea>
    )
  }

  getError() {
    if (this.state.error && this.state.isShowError) {
      return (
        <div className='fieldError'>{ this.state.error }</div>
      )
    }
  }

  render() {
    return (
      <div className='field'>
        { this.getField() }
        { this.getError() }
      </div>
    )
  };
}

export default Field;
