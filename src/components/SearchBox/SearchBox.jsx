import css from './SearchBox.module.css';

export default function SearchBox({ searchValue, onChangeValue }) {
	return (
		<div className={css.search__box}>
			<label className="label">
				<span className="descript">Find contacts by name</span>
				<input className="input"
					type='text'
					name='search'
					value={searchValue}
					onChange={onChangeValue}
				/>
			</label>
		</div>
	)
}