import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import axios from 'axios';

const ContactUs: React.FC = () => {
	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		info: { error: false, msg: null },
	});

	const [inputs, setInputs] = useState({
		companyName: '',
		email: '',
		message: '',
	});

	const handleOnChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			e.persist();
			setInputs((prev) => ({
				...prev,
				[e.target.id]: e.target.value,
			}));
			setStatus({
				submitted: false,
				submitting: false,
				info: { error: false, msg: null },
			});
		},
		[]
	);

	const handleServerResponse = useCallback((ok: boolean, msg: any) => {
		if (ok) {
			setStatus({
				submitted: true,
				submitting: false,
				info: { error: false, msg: msg },
			});
			setInputs({
				companyName: '',
				email: '',
				message: '',
			});
		} else {
			setStatus({
				submitted: false,
				submitting: false,
				info: { error: true, msg },
			});
		}
	}, []);

	const handleSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
			axios({
				method: 'POST',
				url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
				data: inputs,
			}).then((_response) => {
				handleServerResponse(
					true,
					'Thank you, your message has been submitted!'
				);
			});
		},
		[inputs, handleServerResponse]
	);
	return (
		<div className='flex min-h-screen flex-col items-center justify-center bg-black pt-10 text-white'>
			<div className='flex flex-1 flex-col items-center justify-center pt-10 lg:pt-6'>
				<div className='pb-10'>
					<Image
						src='/assets/logo.png'
						width={60}
						height={60}
						alt='logo'></Image>
				</div>
				<h2 className='fonnt-bold text-4xl'>Contact Us</h2>
				<form
					onSubmit={handleSubmit}
					className='mt-16 flex min-w-full flex-col gap-4 px-10 lg:mt-20 lg:min-w-[500px]'>
					{status.info.error && (
						<div className='role="alert" relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700'>
							<strong className='font-bold'>Error</strong>:{' '}
							<span className='block sm:inline'>{status.info.msg}</span>
						</div>
					)}
					{status.submitted ? (
						<div className='role="alert" text- relative rounded px-4 py-3 text-left text-xl font-bold'>
							Your message has been successfully sent.
							<p className='break-normal'>We will contact you very soon!</p>
						</div>
					) : (
						<>
							<input
								id='companyName'
								name='companyName'
								required
								maxLength={128}
								type='text'
								placeholder='Company name'
								className='rounded-3xl border-2 border-white bg-black px-8 py-2 text-white outline-none'
								onChange={handleOnChange}
								value={inputs.companyName}
							/>
							<input
								id='email'
								name='email'
								type='email'
								required
								maxLength={128}
								placeholder='Your email'
								className='rounded-3xl border-2 border-white bg-black px-8 py-2 text-white outline-none'
								onChange={handleOnChange}
								value={inputs.email}
							/>
							<textarea
								id='message'
								name='message'
								required
								maxLength={1048576}
								placeholder='Additional information'
								className='min-h-[16em] rounded-3xl border-2 border-white bg-black px-8 py-6 text-white outline-none'
								onChange={handleOnChange}
								value={inputs.message}></textarea>
							<div className='mt-10 text-center'>
								<button
									type='submit'
									className='rounded-3xl bg-white px-8 py-2 text-black'>
									{!status.submitting
										? !status.submitted
											? 'Submit'
											: 'Submitted'
										: 'Submitting...'}
								</button>
							</div>
						</>
					)}
				</form>
			</div>
		</div>
	);
};

export default ContactUs;
