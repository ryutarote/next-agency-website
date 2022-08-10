import React from 'react';
import SliderContainer, { SliderItem } from './slider';
import Image from 'next/image';

const ClientLogs: React.FC = () => (
	<>
		<SliderContainer className='' contentWidth={1290} initialOffSet={0}>
			<SliderItem width={150}>
				<Image
					src='/assets/customer/safeway.ca.png'
					width={150}
					height={50}
					alt='safeway'
					objectFit='contain'
				/>
			</SliderItem>
			<SliderItem width={200}>
				<Image
					src='/assets/customer/safeway.ca.png'
					width={200}
					height={50}
					alt='safeway'
					objectFit='contain'
				/>
			</SliderItem>
			<SliderItem width={150}>
				<Image
					src='/assets/customer/safeway.ca.png'
					width={150}
					height={50}
					alt='safeway'
					objectFit='contain'
				/>
			</SliderItem>
			<SliderItem width={150}>
				<Image
					src='/assets/customer/safeway.ca.png'
					width={150}
					height={50}
					alt='safeway'
					objectFit='contain'
				/>
			</SliderItem>
			<SliderItem width={150}>
				<Image
					src='/assets/customer/safeway.ca.png'
					width={150}
					height={50}
					alt='safeway'
					objectFit='contain'
				/>
			</SliderItem>
		</SliderContainer>
	</>
);

export default ClientLogs;
