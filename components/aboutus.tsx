import React from 'react';
import Member from './member';

const AboutUs: React.FC = () => {
	return (
		<section className={'flex flex-col bg-white py-20 text-3xl md:text-4xl'}>
			<div className='container mx-auto px-11'>
				<div className='mx-auto max-w-5xl text-center text-4xl leading-tight tracking-tight'>
					<strong>We will help you ship your decent journey.</strong>
					{''}
					<h5>Our team of experts will promise your success.</h5>
				</div>
			</div>
			<div className='container mx-auto mt-28 px-11 text-center'>
				<h2>Our team</h2>
				<div className='mt-2 italic'>the &ldquo;user-oriented&rdquo;</div>
				<div className='mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-20 xl:grid-cols-4'>
					<Member
						id='Ben'
						name='Ben'
						socialId='2ben'
						link='https://instagram.com/@benben'
					/>
					<Member
						id='Craig'
						name='Craig'
						socialId='opicraig77'
						link='https://instagram.com/@craaaaiz'
					/>
					<Member
						id='Marsha'
						name='Marsha'
						socialId='333Mar3'
						link='https://instagram.com/@333Mar3'
					/>
					<Member
						id='Nick'
						name='Nick'
						socialId='nickinzzop#'
						link='https://instagram.com/@lickinnickin'
					/>
					<Member
						id='Rhyle'
						name='Rhyle'
						socialId='$*$)Rhyle'
						link='https://instagram.com/@rhylle'
					/>
					<Member
						id='PJ'
						name='PJ'
						socialId='jpojj'
						link='https://instagram.com/@jpojj'
					/>
					<Member
						id='Whu'
						name='Whu'
						socialId='whuwhuwhu'
						link='https://instagram.com/@whuzzzzzz'
					/>
					<Member
						id='Jade'
						name='Jade'
						socialId='jkmllmkj'
						link='https://instagram.com/@jjj@ade'
					/>
					<Member
						id='Kurea'
						name='Kurea'
						socialId='k9r8a0'
						link='https://instagram.com/@haisami'
					/>
					<Member
						id='Tony'
						name='Tony'
						socialId='tttTbT16'
						link='https://instagram.com/@tonoh'
					/>
					<Member
						id='Samantha'
						name='Samantha'
						socialId='s00er88'
						link='https://instagram.com/@s00er88'
					/>
					<Member
						id='otto'
						name='otto'
						socialId='0ottoto0'
						link='https://instagram.com/@o9oo8too'
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
