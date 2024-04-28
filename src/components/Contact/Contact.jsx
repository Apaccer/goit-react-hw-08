import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  const onUpdateContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };
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
      <div>
        <button onClick={() => onDeleteContact(contact.id)} type="button">
          Delete
        </button>
        <button onClick={() => onUpdateContact(contact.id)} type="button">
          Update
        </button>
      </div>
    </li>
  );
};

export default Contact;
