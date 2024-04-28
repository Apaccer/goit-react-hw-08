import { useEffect, useState } from "react";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import css from "./ContactsPage.module.css";
import ModalAddContact from "../../components/ModalAddContact/ModalAddContact";
import SearchBox from "../../components/SearchBox/SearchBox";

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
      <div className={css.contactsMenu}>
        <ModalAddContact closeModal={closeModal} modalIsOpen={modalIsOpen} />
        <SearchBox />
        <button className={css.modalBtn} onClick={openModal}>
          Add new contact
        </button>
      </div>
      <ContactList />
    </div>
  );
};

export default ContactsPage;
