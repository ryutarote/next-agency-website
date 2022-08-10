import React from 'react';
import ClientLogs from './clientlogs';
import Testimonial from './testimonial';
import s from '../styles/trustedby.module.css';

const TrustedBy: React.FC = () => (
	<section
		className={`bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32 ${s.bg}`}>
		<div className='flex-1'></div>
		<div className='flex flex-col justify-center items-center'>
			<h3 className='text-xl mb-10 font-bold text-center'>
				<span className='whitespace-nowrap'> Proved By</span>{' '}
				<span className='whitespace-nowrap'> Our history</span>
			</h3>
			<ClientLogs />
		</div>
		<div className='flex flex-col justify-center items-center'>
			<div className='container mx-auto lg:max-w-[70%] lg:px-10'>
				<h3 className='text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5erm]'>
					Better cooporation leaps your potential and powers
				</h3>
			</div>
		</div>
		<Testimonial />
		<div className='flex-1 bg-black'></div>
	</section>
);
export default TrustedBy;
