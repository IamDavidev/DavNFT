import InputForm from '../../components/InputForm.component';

const LogInPage = () => {
	return (
		<div className='bg-black min-w-full'>
			<div className='my-12 mx-auto w-1/4'>
				<form>
					<InputForm
						id={'email_signup'}
						label={'Email'}
						placeholder={'Email Address'}
						isValid={true}
						type={'Text'}
						key={'email_signup'}
						name='email'
					/>
					<InputForm
						id={'password_signup'}
						label={'Password'}
						placeholder={'Password'}
						isValid={true}
						type={'password'}
						key={'password_signup'}
						name={'password'}
					/>
					<button>
						<span className='text-white'>Log In</span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default LogInPage;
