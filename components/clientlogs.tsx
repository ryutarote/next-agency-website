import React from 'react';
import SliderContainer, { SliderItem } from './slider';
import Image from 'next/image';

const ClientLogs: React.FC = () => (
	<>
		<SliderContainer className='' contentWidth={1290} initialOffSet={0}>
			<Image
				src='/assets/customer/const.png'
				width={150}
				height={50}
				alt='const'
				objectFit='contain'
			/>

			<Image
				src='/assets/customer/sun.png'
				width={150}
				height={50}
				alt='sun'
				objectFit='contain'
			/>
			<Image
				src='/assets/customer/point.png'
				width={150}
				height={50}
				alt='point'
				objectFit='contain'
			/>
			<Image
				src='/assets/customer/surge.png'
				width={150}
				height={50}
				alt='surge'
				objectFit='contain'
			/>

			<Image
				src='/assets/customer/eo.png'
				width={150}
				height={50}
				alt='eo'
				objectFit='contain'
			/>

			<Image
				src='/assets/customer/hono.png'
				width={150}
				height={50}
				alt='hono'
				objectFit='contain'
			/>

			<Image
				src='/assets/customer/acidus.png'
				width={150}
				height={50}
				alt='acidus'
				objectFit='contain'
			/>

			<Image
				src='/assets/customer/rab.png'
				width={150}
				height={50}
				alt='rab'
				objectFit='contain'
			/>
		</SliderContainer>
	</>
);

export default ClientLogs;
