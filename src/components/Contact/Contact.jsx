import css from '../Contact/Contact.module.css';
import { GrUserManager } from "react-icons/gr";
import { FaPhone } from "react-icons/fa6";
import { iconSize } from '../utils/iconSize';

export default function Contact({name, number, onDeleteContact, id}){
	return (
		<>
                  <div>
				<h3 className={css.contact__name}>
					<GrUserManager className={css.contact__icon}
						size={iconSize.sm} />{name}
				</h3>
				<p className={css.contact__number}>
					<FaPhone className={css.contact__icon}
						size={iconSize.sm} />{number}
				</p>
			</div>
			<button className='btn'
				tupe="button"
				onClick={()=>onDeleteContact(id)}>Delete
			</button>
		</>
	)
}