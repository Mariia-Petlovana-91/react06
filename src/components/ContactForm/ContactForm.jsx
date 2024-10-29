import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import schemaValidate from '../utils/validataSchema';

export default function ContactForm({onAddId}) {
	const INITIAL__VALUE = {
	 	name: "",
	      number: "",
	}
      
	function onSubmit(values, actions) {
		console.log(values);
		onAddId(values);
		actions.resetForm();
		return;
	}

	return (
		<Formik initialValues={INITIAL__VALUE}
			onSubmit={onSubmit}
			validationSchema={schemaValidate}>
			<Form className={css.form}>
				<label className="label">
					<span className="descript">Name</span>
					<Field className="input"
						type='text'
						name='name' />
					<ErrorMessage className={css.form__error}
						name='name'
						component="span" />
				</label>
				<label className="label">
					<span className="descript">Number</span>
					<Field className="input"
						type='text'
						name='number' />
					<ErrorMessage className={css.form__error}
						name='number'
						component="span" />
				</label>
                        <button className='btn' type="submit">Add contact</button>
			</Form>

		</Formik>
	)
}