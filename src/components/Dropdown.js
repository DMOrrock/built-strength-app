import { useState, useRef, useEffect } from 'react';
import '../styles/dropdown.css';

export default function Dropdown(props) {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [searchTerm, setSearchTerm] = useState("")
	const ref = useRef(null);

	useEffect(() => {
		document.addEventListener("click", close)
		return () => document.removeEventListener("click", close)
	}, [])

	const close = function (e) {
		setOpen(e && e.target === ref.current)
	}

	const filter = function (options) {
		return props.data.filter(
			(item) => {
				return (item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
			}
		)
	}

	const displayValue = function () {
		if (searchTerm.length > 0) return searchTerm;
		if (value) return value.name
		return "";
	}

	return (
		<div className="dropdown rounded-md">
			<div className="control rounded-md" onClick={() => { setOpen(prev => !prev) }}>
				<div className="selected-value rounded-md" onClick={() => { setOpen(prev => !prev) }}>
					<input
						type="text"
						className="text-gray-500 text-sm"
						ref={ref}
						placeholder={value ? value.name : props.prompt}
						value={displayValue()}
						onChange={e => {
							setSearchTerm(e.target.value)
							// onChange(null)
						}}
						onClick={() => { setOpen(prev => !prev) }}>

					</input>
				</div>
				<div className={`arrow ${open ? "open" : null}`} />
			</div>
			<div className={`options ${open ? "open" : null}`}>
				{filter(props.data).map((item, index) => {
					return (
						<div
							key={item.id}
							className="option text-gray-500 text-sm"
							// className={`option ${value === item ? "selected" : null}`}
							onClick={() => {
								props.onChange(item)
								// setValue(item)
								setSearchTerm("")
								setOpen(false)
							}}
						>{item.name}</div>
					)
				})}
			</div>
		</div>
	)
}