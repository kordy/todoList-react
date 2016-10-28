import React from 'react';

class Form extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: ''
    }
  }
  recursiveCloneChildren(children) {
    return React.Children.map(children, child => {
      var childProps = {};
      if (React.isValidElement(child)) {
        childProps = {someNew: "propToAdd"};
      }
      console.log(child.type.name);
      if (child.props) {
        // String has no Prop
        childProps.children = this.recursiveCloneChildren(child.props.children);
          return React.cloneElement(child, childProps);
        }
        return child;
    })
  }
  render() {
    return (
      <form>
        { this.recursiveCloneChildren(this.props.children) }
      </form>
    )
  };
}

export default Form;
