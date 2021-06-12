import * as React from "react";

import Form from "./FormComponent";

export default class EditNoteComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.initialState = {
      title: this.props.title,
      detail: this.props.detail
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
    this.setState({ title: "", detail: "" });
  };

  render() {
    const { title, detail } = this.state;
    return (
      <Form
        buttonLabel="Update"
        title={title}
        detail={detail}
        handleChange={this.handleChange}
        onSubmit={this.props.handleUpdate}
        setInitialFormData={this.setInitialFormData}
      />
    );
  }
}
