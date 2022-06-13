const WebsiteIcon = ({ width = '21', height, style, color = '#57e39f' }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={style}
			width={width}
			height={height}
			viewBox='0 0 24 24'>
			<path
				fill={color}
				d='M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm-1 14H6c-.55 0-1-.45-1-1V8h14v9c0 .55-.45 1-1 1z'></path>
		</svg>
	);
};

export default WebsiteIcon;
