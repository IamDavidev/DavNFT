import InputForm from '../../components/InputForm.component';

const LogInPage = () => {
	return (
		<div className='bg-black min-w-full'>
			<div className='my-12 mx-auto w-1/4'>
				<InputForm
					id={'email_signup'}
					label={'Email'}
					placeholder={'Email Address'}
					isValid={true}
					type={'Text'}
					key={'email_signup'}
				/>
				<InputForm
					id={'password_signup'}
					label={'Password'}
					placeholder={'Password'}
					isValid={true}
					type={'password'}
					key={'password_signup'}
				/>
			</div>
		</div>
	);
};

export default LogInPage;
