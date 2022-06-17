const InputForm = ({
	type,
	placeholder,
	id,
	isValid,
	message,
	label,
	attributes,
}) => {
	return (
		<div className='w-full '>
			<label className='block text-gray-700 text-sm font-bold mb-2 ml-1'>
				{label}
			</label>
			<input
				type={type}
				placeholder={placeholder}
				id={id}
				autoComplete='on'
				className={`font-bold text-sm text-purple rounded bg-black  focus:outline-none   py-1 border-2 border-solid border-purple ${
					!isValid && 'border-red'
				}  w-full p-1 placeholder:opacity-60 placeholder:text-xs placeholder:font-bold file:border-none file:bg-gray-900 file:mx-2 file:rounded-sm file:text-black `}
				{...attributes}
			/>
			<p className='text-red text-xs h-3 font-bold'>{!isValid && message}</p>
		</div>
	);
};

export default InputForm;
