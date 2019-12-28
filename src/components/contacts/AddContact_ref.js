import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  state = {
    name: "",
    email: "",
    phone: ""
  };
  //onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    // const { name, email, phone } = this.state;
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };

    // console.log(this.state);
    // onSubmit();
    console.log(contact);
  };
  static defaultProps = {
    name: "monika sharma",
    email: "monika.shar88@gmail",
    phone: "444-555-777"
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name </label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter name...."
                defaultValue={name}
                ref={this.nameInput}
                //onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email...."
                defaultValue={email}
                ref={this.emailInput}
                //onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone </label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter phone...."
                defaultValue={phone}
                ref={this.phoneInput}
                //onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              value="AddContact"
              className="btn btn-black bt-dark"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default AddContact;
