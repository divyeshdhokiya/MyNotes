import * as React from "react";

import Form from "./FormComponent";

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
