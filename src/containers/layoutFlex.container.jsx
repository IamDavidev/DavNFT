const LayoutFlex = ({ children }) => {
	return (
		<div className='w-full flex flex-row justify-between items-center m-0 gap-2'>
			{children}
		</div>
	);
};

export default LayoutFlex;
