const InputForm = ({
	type,
	placeholder,
	id,
	valid,
	message,
	label,
	attributes,
}) => {
	return (
		<div>
			<label className='block text-gray-700 text-sm font-bold mb-2 ml-1'>
				{label}
			</label>
			<input
				type={type}
				placeholder={placeholder}
				id={id}
				className={`font-bold text-purple rounded bg-dark focus:outline-none   py-1 border border-solid border-black ${
					!valid && 'border-red'
				}  w-full p-1 placeholder:opacity-30 placeholder:text-xs placeholder:font-normal `}
				{...attributes}
			/>
			<p className='text-red text-xs h-3 font-bold'>{!valid && message}</p>
		</div>
	);
};

export default InputForm;
/**
 * 
 * 
 * 
 * 	<div>
						<label >
							UserName
						</label>
						<input
							
							id='username'
							type='text'
							placeholder='username'
						/>
						<p >
							{!error.username.valid && error.username.message}
						</p>
					</div>
 */
