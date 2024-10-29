import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({ array, onDeleteContact }) {
	return (
		<ul className={css.contact__list}>
			{
				array.map(ar => (
					<li className={css.contact__item}
						key={ar.id}>
						<Contact name={ar.name}
							number={ar.number}
							id ={ar.id}
							onDeleteContact={onDeleteContact}
						/>
					</li>
				))
			}
		</ul>
	)
}