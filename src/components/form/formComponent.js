import React from 'react';

class Form extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.fields = {};
  }
  fieldChange = (value, name) => {
    let { onFieldChange } = this.props;
    this.fields[name] = value;
    if (onFieldChange && typeof onFieldChange === 'function') {
      onFieldChange(value, name, this.fields);
    }
  }
  _onSubmit = (e) => {
    this.props.onSubmit(this.fields);
    e.preventDefault();
  }
  recursiveCloneChildren(children) {
    return React.Children.map(children, (child) => {
      var childProps = {};
      if (child.type && child.type.name && child.type.name === 'Field') {
        childProps = {onChange: this.fieldChange};
      }
      if (child.props && child.props.children) {
        childProps.children = this.recursiveCloneChildren(child.props.children);
      }
      if (Object.getOwnPropertyNames(childProps).length === 0) {
        return child;
      }
      return React.cloneElement(child, childProps);
    })
  }
  render() {
    return (
      <form onSubmit={ this._onSubmit }>
        { this.recursiveCloneChildren(this.props.children) }
      </form>
    )
  };
}

export default Form;
