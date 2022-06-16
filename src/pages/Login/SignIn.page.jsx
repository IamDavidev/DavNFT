// import React from 'react';
import koala from '../../assets/Koala.png';
import InputForm from '../../components/InputForm.component';

const SignInPage = () => {
	const error = {
		password: {
			message: 'Password is incorrect',
			valid: true,
		},
		confirmPassword: {
			message: 'Password is not a match',
			valid: true,
		},
		username: {
			message: 'Username is incorrect',
			valid: true,
		},
		email: {
			message: 'email is incorrect',
			valid: true,
		},
		banner: {
			message: 'is not a valid type',
			valid: true,
		},
		profilePicture: {
			message: 'is not a valid type',
			valid: true,
		},
	};

	return (
		<div className='flex justify-around items-start my-10'>
			<div className='border-4 border-solid border-log_card px-8 py-8 rounded-3xl w-1/3'>
				<form className='flex flex-col justify-start items-start gap-4'>
					<InputForm
						id={'Username'}
						label='Username'
						message={error.username.message}
						placeholder={'enter your usernamme '}
						type={'text'}
						valid={error.username.valid}
						key={'username'}
					/>
					<InputForm
						id='Email'
						label='Email'
						message={error.email.message}
						placeholder={'enter your email '}
						type={'email'}
						valid={error.email.valid}
						key={'email'}
					/>
					<InputForm
						id='Password'
						label='Password'
						message={error.password.message}
						placeholder={'enter your password '}
						type={'password'}
						valid={error.password.valid}
						key={'password'}
					/>
					<InputForm
						id='Confirm_Password'
						label='Confirm Password'
						message={error.confirmPassword.message}
						placeholder={'confirm your password '}
						type={'password'}
						valid={error.confirmPassword.valid}
						key={'confirmPassword'}
					/>
					<InputForm
						id='Banner'
						label='Banner'
						message={error.banner.message}
						type='file'
						valid={error.banner.valid}
						attributes={{
							accept: 'image/*',
						}}
						key={'banner'}
					/>
					<InputForm
						id='Profile_Picture'
						label='Profile Picture'
						message={error.profilePicture.message}
						type='file'
						valid={error.profilePicture.valid}
						attributes={{
							accept: 'image/*',
						}}
						key={'profilePicture'}
					/>
				</form>
			</div>
			<img src={koala} alt='' className='w-1/3' />
		</div>
	);
};

export default SignInPage;
