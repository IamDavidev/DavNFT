import { Link } from 'react-router-dom';

import { useForm, useLogin } from '../../lib/hooks';

import InputForm from '../../components/InputForm.component';

import koala from '../../assets/Koala.png';
import metamask from '../../assets/metamask-icon.svg';
import LayoutFlex from '../../containers/layoutFlex.container';
// import useUser from '../../lib/hooks/useUser.hook';

const SignInPage = () => {
	const { form, ValidationsFiels } = useForm();
	const { connectWalletMetamask } = useLogin();

	return (
		<div className='flex  justify-around items-center my-10'>
			<div className='flex flex-col justify-start w-1/3'>
				<div>
					<span className='text-navy font-bold text-xl'>Start for free</span>
					<h2 className='text-4xl font-bold my-3'>
						Create new Accout <span className='text-purple'>.</span>
					</h2>
					<p className='text-navy text-xs font-bold'>
						Already have an account?{'   '}
						<Link to='/log-in' className='font-bold text-base text-purple'>
							Login
						</Link>
					</p>
				</div>

				<div className='my-3'>
					<form
						className='flex flex-col justify-start items-start my-6'
						onSubmit={e => ValidationsFiels(e)}>
						<LayoutFlex>
							<InputForm
								id='name'
								label='Name'
								message={form.name.message}
								placeholder={'Enter your name'}
								type={'text'}
								isValid={form.name.isValid}
								key={'name'}
							/>
							<InputForm
								id={'username'}
								label='Username'
								message={form.username.message}
								placeholder={'Enter your usernamme '}
								type={'text'}
								isValid={form.username.isValid}
								key={'username'}
							/>
						</LayoutFlex>
						<LayoutFlex>
							<InputForm
								id='password'
								label='Password'
								message={form.password.message}
								placeholder={'Enter your password '}
								type={'password'}
								isValid={form.password.isValid}
								key={'password'}
							/>
							<InputForm
								id='confirmPassword'
								label='Confirm Password'
								message={form.confirmPassword.message}
								placeholder={'Confirm your password '}
								type={'password'}
								isValid={form.confirmPassword.isValid}
								key={'confirmPassword'}
							/>{' '}
						</LayoutFlex>

						<InputForm
							id='email'
							label='Email Address'
							message={form.email.message}
							password
							placeholder={'Enter your email '}
							type={'email'}
							isValid={form.email.isValid}
							key={'email'}
						/>
						<LayoutFlex>
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
						</LayoutFlex>

						<div className='w-auto mx-auto'>
							<button
								type='submit'
								className='bg-purple rounded-2xl py-3 px-9 text-black font-bold'>
								Sign Up
							</button>
						</div>
					</form>
					<div className='h-1 bg-gray-900 rounded-2xl w-full'></div>
					<div className='my-6'>
						<h3 className='text-4xl font-bold my-8'>
							Sign With <span className='text-purple'>.</span>
						</h3>
						<div>
							<button
								onClick={() => {
									// connectorWallet();
									connectWalletMetamask();
								}}
								className='w-full py-2 rounded-xl bg-nav flex  justify-center items-center gap-8'>
								<span className='text-purple font-bold'>Metamask</span>
								<img src={metamask} alt='metamask' className='w-10' />
							</button>
						</div>
					</div>
				</div>
			</div>
			<picture className='w-[30rem]'>
				<img src={koala} alt='koala nft' className='w-full' />
			</picture>
		</div>
	);
};

export default SignInPage;
