import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact, deleteContact }) => {
  const { name, number } = contact;

  return (
    <li className={css.contactCardItem}>
      <div className={css.contactCardContainer}>
        <div className={css.contactCardInfo}>
          <FaUser size={30} />
          <p>{name}</p>
        </div>
        <div className={css.contactCardInfo}>
          <FaPhoneAlt size={30} />
          <p>{number}</p>
        </div>
      </div>
      <button
        onClick={() => deleteContact(contact.id)}
        type="button"
        className={css.contactCardBtn}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
