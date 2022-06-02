const CardCollection = ({ banner, name, creator, desciption, image }) => {
	return (
		<>
			<article className='w-96 bg-card p-0 rounded-2xl overflow-hidden'>
				<figure>
					<img src={banner} alt='banner' className='w-full' />
				</figure>
				<div className='flex flex-row items-center justify-start gap-4 p-4'>
					<img src={image} alt='creator' className='w-20 rounded-full' />
					<div>
						<h2 className='text-purple text-lg'>{name}</h2>
						<p className='text-purpleLite'>
							created by <span className='text-purple'>{creator}</span>
						</p>
					</div>
				</div>
				<div className='p-4 my-4 mx-12 flex flex-wrap gap-4 justify-center items-center '>
					<p className='text-purpleLite'>{desciption.substring(0, 150)}</p>
				</div>
			</article>
		</>
	);
};

export default CardCollection;
