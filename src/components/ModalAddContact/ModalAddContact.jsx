import ContactForm from "../ContactForm/ContactForm";
import Modal from "react-modal";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

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
const ModalAddContact = ({ closeModal, modalIsOpen }) => {
  const dispatch = useDispatch();
  const addNewContact = (values) => {
    dispatch(addContact(values));
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
        buttonName={"Add contact"}
        addNewContact={addNewContact}
      />
    </Modal>
  );
};

export default ModalAddContact;
