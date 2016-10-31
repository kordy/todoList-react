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
        required: true,
        maxLength: 15,
        minLength: 3,
        validation: function(value, name, fields) {
          // return 'ERROR';
          // console.log('validation');
          // console.log(value, name);
          // console.log(fields);
        }
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

  render() {
    return (
      <div className='todo-form'>
        <Form onSubmit={ this.props.onSubmit } onFieldChange={ this.props.onFieldChange }>
          <div className='fieldwrap'>
            <Field info={ this.fields.name } />
          </div>
          <Field info={ this.fields.date } />
          <Field info={ this.fields.description } />
          <button className='form__button'>add</button>
        </Form>
      </div>
    )
  };
}

export default todoForm;
