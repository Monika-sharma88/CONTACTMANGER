import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../Context";

class Contacts extends Component {
  /* deleteContact = id => {
    //console.log(id);
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  };*/
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <div>
              <React.Fragment>
                <h1 className="display-4 mb-2">
                  <span className="text-danger"> list</span>
                </h1>
                {contacts.map(contact => (
                  //<h1>{contact.name}</h1>
                  <Contact
                    key={contact.id}
                    // name={contact.name}
                    //email={contact.email}
                    //phone={contact.phone}
                    contact={contact}
                    /* deleteClickHandler={this.deleteContact.bind(
                      this,
                      contact.id
                    )}*/
                  />
                ))}
              </React.Fragment>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
