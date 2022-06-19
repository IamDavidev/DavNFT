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
		<div className='w-full my-2'>
			<label className='block text-sm font-bold mb-1'>{label}</label>
			<input
				type={type}
				placeholder={placeholder}
				id={id}
				autoComplete='on'
				className={`font-bold text-sm bg-nav text-purple rounded-2xl  focus:shadow-sm shadow-purple py-4 border-solid border border-black  ${
					!isValid && message !== null && 'border-red'
				}  w-full p-1 placeholder:opacity-60 placeholder:text-xs placeholder:font-bold file:border-none file:bg-gray-900 file:mx-2 file:rounded-sm file:text-black `}
				{...attributes}
			/>
			<p className='text-red text-xs h-3 font-bold'>{!isValid && message}</p>
		</div>
	);
};

export default InputForm;
