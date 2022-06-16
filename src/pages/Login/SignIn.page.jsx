import koala from '../../assets/Koala.png';
import InputForm from '../../components/InputForm.component';
import { useForm } from '../../lib/hooks';

const SignInPage = () => {
	const { form, isValidationsFiels } = useForm();
	console.log('🚀 ~ file: SigIn.page.jsx ~ line 42 ~ SignInPage ~ form', form);

	return (
		<div className='flex justify-around items-center my-10'>
			<div className='border-4 border-solid border-purple  px-8 py-8 rounded-3xl w-1/3'>
				<form
					className='flex flex-col justify-start items-start'
					onSubmit={e => isValidationsFiels(e)}>
					<InputForm
						id={'username'}
						label='Username'
						message={form.username.message}
						placeholder={'enter your usernamme '}
						type={'text'}
						isValid={form.username.isValid}
						key={'username'}
					/>
					{/* <InputForm
						id='Email'
						label='Email'
						message={form.email.message}password
						placeholder={'enter your email '}
						type={'email'}
						isValid={form.email.isValid}
						key={'email'}
					/> */}
					<InputForm
						id='password'
						label='Password'
						message={form.password.message}
						placeholder={'enter your password '}
						type={'password'}
						isValid={form.password.isValid}
						key={'password'}
					/>
					<InputForm
						id='confirmPassword'
						label='Confirm Password'
						message={form.confirmPassword.message}
						placeholder={'confirm your password '}
						type={'password'}
						isValid={form.confirmPassword.isValid}
						key={'confirmPassword'}
					/>
					<InputForm
						id='banner'
						label='Banner'
						message={form.banner.message}
						type='file'
						isValid={form.banner.isValid}
						attributes={{
							accept: 'image/*',
						}}
						key={'banner'}
					/>
					<InputForm
						id='profilePicture'
						label='Profile Picture'
						message={form.profilePicture.message}
						type='file'
						isValid={form.profilePicture.isValid}
						attributes={{
							accept: 'image/*',
						}}
						key={'profilePicture'}
					/>
					<div>
						<button type='submit'>Sign Up</button>
					</div>
				</form>
			</div>
			<img src={koala} alt='' className='w-1/3' />
		</div>
	);
};

export default SignInPage;
