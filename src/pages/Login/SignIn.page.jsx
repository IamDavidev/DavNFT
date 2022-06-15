// import React from 'react';
import koala from '../../assets/Koala.png';
import logo from '../../assets/itsDavidev.svg';

const SignInPage = () => {
	return (
		<div className='flex justify-around items-center my-10'>
			<div className='bg-log_card px-8 py-16 rounded-3xl'>
				<div>
					<img src={logo} alt='' className='w-8' />
				</div>
				<form className='flex flex-col'>
					<label className='flex flex-col items-start justify-start'>
						Name :
						<input
							type='text'
							className='focus:outline-none text-purple  text-bold '
						/>
					</label>
					<label className='flex flex-col items-start justify-start'>
						Email:
						<input type='email' className='text-purple text-bold ' />
					</label>
					le
					<label className='flex flex-col items-start justify-start'>
						Password:
						<input type='password' className='text-purple text-bold ' />
					</label>
					<label className='flex flex-col items-start justify-start'>
						UserName:
						<input type='text' className='text-purple text-bold ' />
					</label>
					<label className='flex flex-col items-start justify-start'>
						banner :
						<input type='file' className='text-purple text-bold ' />
					</label>
					<label className='flex flex-col items-start justify-start'>
						Profile Picture:
						<input type='file' className='text-purple text-bold ' />
					</label>
				</form>
			</div>
			<img src={koala} alt='' className='w-96' />
		</div>
	);
};

export default SignInPage;
