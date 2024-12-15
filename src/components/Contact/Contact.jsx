import React from "react";
import Style from "./Contact.module.css";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className={Style.contactContainer}>
      <div>
        <p>
          <strong>👤 {contact.name}</strong>
        </p>
        <p>📞 {contact.number}</p>
      </div>
      <button
        className={Style.button}
        onClick={() => deleteContact(contact.id)}
      >
        ❌ Delete
      </button>
    </div>
  );
};

export default Contact;
