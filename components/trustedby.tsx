import React from 'react';
import ClientLogs from './clientlogs';
import Testimonial from './testimonial';
import s from '../styles/trustedby.module.css';

const TrustedBy: React.FC = () => (
	<section
		className={`flex min-h-screen flex-col justify-center gap-16 bg-white md:gap-32 ${s.bg}`}>
		<div className='flex-1'></div>
		<div className='flex flex-col items-center justify-center'>
			<h3 className='font-anton mb-10 text-center text-2xl font-bold'>
				<span className='whitespace-nowrap'> Proved By</span>{' '}
				<span className='whitespace-nowrap'> Our history</span>
			</h3>
			<ClientLogs />
		</div>
		<div className='flex flex-col items-center justify-center'>
			<div className='container mx-auto lg:max-w-[70%] lg:px-10'>
				<h3 className='font-anton font-bold px-10 text-center text-3xl italic !leading-[3.5erm] tracking-tight lg:text-4xl'>
					Better cooporation leaps your potential and powers
				</h3>
			</div>
		</div>
		<Testimonial />
		<div className='flex-1 bg-black'></div>
	</section>
);
export default TrustedBy;
