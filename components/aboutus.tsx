import React from 'react';
import Member from './member';

const AboutUs: React.FC = () => {
	return (
		<section
			className={`flex flex-col bg-white py-20 text-3xl md:text-4xl aboutus_section__xSPZD`}>
			<div className='container mx-auto px-11'>
				<p className='leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight'>
					<strong>We will help you grow your company, faster.</strong> Our team
					of expert consultants has created the best customer succcsses. <br />
					<br />
					Our services:
					<br />- <b>From Idea to Profit</b>: Full Work Operations <br />-{' '}
					<b>Effective Workflow</b>: Startup-time, Animation and overall
					smoothness optimization for existing apps
					<br />- <b>Custom Module Development</b>: Development of specific UIs,
					animations, gestures or native modules for existing apps
					<br />- <b>Consulting</b>: One-on-one consulting with a React Native,
					iOS or Android expert and bug fixing
				</p>
			</div>
			<div className='container mx-auto px-11 text-center mt-28'>
				<h2 className='font-bold'>Our Team</h2>
				<div className='mt-2'>the &ldquo;spec-ops&rdquo;</div>
				<div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20'>
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
					{/* <Member
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
					/> */}
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
