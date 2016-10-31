import React from 'react';
import './less/form.less';

class Form extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.fields = {};
  }

  componentDidMount() {
    // this.fields =
  }

  fieldChange = (value, name, fieldInfo) => {
    let { onFieldChange } = this.props;
    this.fields[name] = { ...fieldInfo,  value };
    if (onFieldChange && typeof onFieldChange === 'function') {
      onFieldChange(value, name, this.fields);
    }
  }

  _onSubmit = (e) => {
    console.log('1111');
    e.preventDefault();
    if (this.props.onSubmit(this.fields)) {

    }
  }

  recursiveCloneChildren(children) {
    return React.Children.map(children, (child) => {
      var childProps = {};
      if (child.type && child.type.name && child.type.name === 'Field') {
        if (child.props && child.props.info && child.props.info.name) {
          this.fields[child.props.info.name] = {
            value: '',
            isShowError: false,
            isValid: true,
            isDirty: false,
            error: ''
          }
        }
        childProps = {
          onChange: this.fieldChange,
          fields: this.fields
        };
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
