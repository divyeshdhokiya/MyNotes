import * as React from "react";

export default class Form extends React.Component {
  onSubmit = props => {
    this.props.onSubmit(props);
    this.props.setInitialFormData();
  };
  render() {
    const { title, detail } = this.props;
    return (
      <form>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.props.handleChange}
          id="title"
        />
        <label>Detail</label>
        <input
          type="text"
          name="detail"
          value={detail}
          onChange={this.props.handleChange}
          id="detail"
        />
        <input
          type="button"
          value={this.props.buttonLabel}
          onClick={() => this.onSubmit(this.props)}
        />
      </form>
    );
  }
}
