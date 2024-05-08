import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { useState } from "react";

import ModalDeleteContact from "../ModalDeleteContact/ModalDeleteContact";
import ModalUpdateContact from "../ModalUpdateContact/ModalUpdateContact";

const Contact = ({ contact, toast }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [contactId, setContactId] = useState(null);
  const [modaUpdatelIsOpen, setmodalUpdatelIsOpen] = useState(false);

  function openUpdateModal(id) {
    setContactId(id);
    setmodalUpdatelIsOpen(true);
  }

  function closeUpdateModal() {
    setmodalUpdatelIsOpen(false);
  }
  function openModal(id) {
    setContactId(id);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <li className={css.contactItem}>
      <div className={css.contactInfo}>
        <p>
          <IoMdContact />: {contact.name}
        </p>
        <p>
          <FaPhoneAlt />: {contact.number}
        </p>
      </div>
      <div className={css.buttons}>
        <button
          className={css.btn}
          onClick={() => openModal(contact.id)}
          type="button"
        >
          Delete
        </button>
        <button
          className={css.btn}
          onClick={() => openUpdateModal(contact.id)}
          type="button"
        >
          Update contact
        </button>
      </div>
      <ModalDeleteContact
        contactId={contactId}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        toast={toast}
      />
      <ModalUpdateContact
        contactId={contactId}
        closeModal={closeUpdateModal}
        modalIsOpen={modaUpdatelIsOpen}
        contact={contact}
      />
    </li>
  );
};

export default Contact;
