import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/contactsSlice';

export default function ContactList() {
    const selectContacts = useSelector((state) => state.contactsData.contacts);
    const selectNameFilter = useSelector((state) => state.filtersData.filters);
    const dispatch = useDispatch();

    const filteredContacts = selectContacts.filter((contact) =>
        contact.name.toLowerCase().includes(selectNameFilter.toLowerCase().trim())
    );

    function onDeleteContact(contactId) {
        dispatch(deleteContacts(contactId));
    }

    return (
        <ul className={css.contact__list}>
            {filteredContacts.map((ar) => (
                <li className={css.contact__item} key={ar.id}>
                    <Contact
                        name={ar.name}
                        number={ar.number}
                        id={ar.id}
                        onDeleteContact={onDeleteContact}
                    />
                </li>
            ))}
        </ul>
    );
}
