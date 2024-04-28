import { useEffect, useState } from "react";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import css from "./ContactsPage.module.css";
import ModalAddContact from "../../components/ModalAddContact/ModalAddContact";

const ContactsPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.contactsContainer}>
      <button onClick={openModal}>Add contact</button>
      <ModalAddContact closeModal={closeModal} modalIsOpen={modalIsOpen} />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
