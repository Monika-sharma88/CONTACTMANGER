import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";
import axios from "axios";
import { Link } from "react-router-dom";
//import Contacts from "./components/Contacts";
//import "./contact.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
  state = {
    showContactInfo: true
  };
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

      dispatch({
        type: "DELETE_CONTACT",
        payload: id
      });
    } catch (e) {
      dispatch({
        type: "DELETE_CONTACT",
        payload: id
      });
    }
  };
  //console.log("clicked");
  // this.props.deleteClickHandler();

  //onShowClick = e => {
  //this.setstate = {
  //showContactInfo: !this.state.showContactInfo
  //};
  //};
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            //<div>
            //<h4>{name}</h4>
            //<ul>
            //<li> Email:{email}</li>
            //<li> phone:{phone}</li>
            //</ul>
            //</div>
            //);
            //}
            //}
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  //onClick={this.onShowClick.bind(this, contact)}
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  //style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              <Link to={`Contact/edit/${id}`}>
                <i
                  className="fas fa-pencil-alt"
                  style={{
                    cursor: "Pointer",
                    float: "unsetright",
                    color: "black",
                    marginRight: "1rem"
                  }}
                />
              </Link>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email:{email}</li>
                  <li className="list-group-item">phone:{phone}</li>
                </ul>
              ) : null}
            </div>
            //}}
          );
        }}
      </Consumer>
    );
  }
}
//Contact.propTypes = {
// name: PropTypes.string.isRequired,
//email: PropTypes.string.isRequired,
//phone: PropTypes.string.isRequired
//};
Contact.propTypes = {
  contact: PropTypes.object.isRequired
  // deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
