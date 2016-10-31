import React from 'react';
import Field from '../field/fieldComponent';
import Form from '../form/formComponent';

class todoForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      fieldValues: {

      }
    }
    this.fields = {
      name: {
        name: 'name',
        value: '',
        type: 'text',
        required: true
      },
      date: {
        name: 'date',
        type: 'date',
        value: '',
        required: true
      },
      description: {
        name: 'description',
        type: 'textarea',
        value: '',
        required: true
      }
    }
  }

  changeName = (e) => {
    e.preventDefault();
    this.setState({taskName: e.target.value});
  }

  changeDate = (e) => {
    e.preventDefault();
    this.setState({taskDate: e.target.value});
  }

  changeDescription = (e) => {
    e.preventDefault();
    this.setState({taskDescription: e.target.value});
  }
  onSubmit(fields) {
    console.log(fields);
  }
  onFieldChange(value, name, fields) {
    console.log('fieldChange');
    console.log(name, value);
    console.log(fields);
  }
  onCustomChange(value, name) {
    console.log('customChange');
  }
  render() {
    return (
      <div className='todo-form'>
        <Form onSubmit={ this.onSubmit } onFieldChange={ this.onFieldChange }>
          <div className='fieldwrap'>
            <Field info={ this.fields.name } onCustomChange= { this.onCustomChange } />
          </div>
          <Field info={ this.fields.date } />
          <Field info={ this.fields.description } />
          <button className='todo-form__button'>add</button>
        </Form>
      </div>
    )
  };
}

export default todoForm;
