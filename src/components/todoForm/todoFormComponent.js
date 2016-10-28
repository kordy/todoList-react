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
  fieldChange(fields) {
    console.log('herre');
  }
  render() {
    return (
      <div className='todo-form'>
        <Form>
          <Field info={ this.fields.name } onChange={ this.fieldChange } />
          <Field info={ this.fields.date } onChange={ this.fieldChange } />
          <Field info={ this.fields.description } onChange={ this.fieldChange } />
          <button className='todo-form__button'>add</button>
        </Form>
      </div>
    )
  };
}

export default todoForm;
