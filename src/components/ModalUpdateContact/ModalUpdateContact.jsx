import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import ContactForm from "../ContactForm/ContactForm";
import Modal from "react-modal";
import { useEffect, useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
  },
};

Modal.setAppElement("#root");
const ModalUpdateContact = ({
  closeModal,
  modalIsOpen,
  contactId,
  contact,
}) => {
  const dispatch = useDispatch();
  const updateMyContact = (values) => {
    let updatesContact = { contactId, ...values };
    dispatch(updateContact(updatesContact));
    closeModal();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ContactForm
        closeModal={closeModal}
        buttonName={"Update contact"}
        updateMyContact={updateMyContact}
        contact={contact}
      />
    </Modal>
  );
};
export default ModalUpdateContact;
