import React from 'react';
import SliderContainer, { SliderItem } from './slider';
import Image from 'next/image';

const ClientLogs: React.FC = () => (
	<>
		<SliderContainer className='' contentWidth={1290} initialOffSet={0}>
			<SliderItem width={100}>
				<Image
					src='/assets/customer/const.png'
					width={100}
					height={50}
					alt='const'
					objectFit='contain'
				/>
			</SliderItem>
			<SliderItem width={100}>
				<Image
					src='/assets/customer/sun.png'
					width={100}
					height={50}
					alt='sun'
					objectFit='contain'
				/>
			</SliderItem>

			<SliderItem width={100}>
				<Image
					src='/assets/customer/surge.png'
					width={100}
					height={50}
					alt='surge'
					objectFit='contain'
				/>
			</SliderItem>
			<SliderItem width={100}>
				<Image
					src='/assets/customer/awe.png'
					width={150}
					height={50}
					alt='awe'
					objectFit='contain'
				/>
			</SliderItem>
			<SliderItem width={100}>
				<Image
					src='/assets/customer/eo.png'
					width={100}
					height={50}
					alt='eo'
					objectFit='contain'
				/>
			</SliderItem>

			<SliderItem width={100}>
				<Image
					src='/assets/customer/hono.png'
					width={100}
					height={50}
					alt='hono'
					objectFit='contain'
				/>
			</SliderItem>

			<SliderItem width={100}>
				<Image
					src='/assets/customer/acidus.png'
					width={100}
					height={50}
					alt='acidus'
					objectFit='contain'
				/>
			</SliderItem>

			<SliderItem width={100}>
				<Image
					src='/assets/customer/dev.png'
					width={100}
					height={50}
					alt='dev'
					objectFit='contain'
				/>
			</SliderItem>

			<SliderItem width={100}>
				<Image
					src='/assets/customer/rab.png'
					width={100}
					height={50}
					alt='rab'
					objectFit='contain'
				/>
			</SliderItem>
			<SliderItem width={100}>
				<Image
					src='/assets/customer/point.png'
					width={100}
					height={50}
					alt='point'
					objectFit='contain'
				/>
			</SliderItem>
		</SliderContainer>
	</>
);

export default ClientLogs;
