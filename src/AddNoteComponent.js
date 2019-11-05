import * as React from "react";
import Form from "./FormComponent";

// TODO: Try creating a form component that takes care of rendering
// correct form components and sending back the form values

// TODO: Edit and Delete can also split into their own containers

// TODO: Look at the FormFields and Form component in web-pwa

export default class AddNoteComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.initialState = {
      title: "",
      detail: ""
    };

    this.state = this.initialState;
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  setInitialFormData = () => {
    this.setState(this.initialState);
  };

  render() {
    const { title, detail } = this.state;
    return (
      <Form
        buttonLabel="Add"
        title={title}
        detail={detail}
        handleChange={this.handleChange}
        onSubmit={this.props.onSubmit}
        setInitialFormData={this.setInitialFormData}
      />
    );
  }
}
