import React from 'react';
import Carousel from './carousel';
import CarouselItem from './carousel-item';
import Review from './review';

const Testimonial: React.FC = () => (
	<Carousel className='bg-black text-white py-10 lg:py-20'>
		<CarouselItem index={0}>
			<Review by='Alex (folks)'>
				Burnavy were aware of our potential problems and solved our burning
				issue.
			</Review>
		</CarouselItem>
		<CarouselItem index={1}>
			<Review by='Ruke (studyio)'>
				Our company is no ordinary education services. In one summer, we taught
				our customer to grow and got jobs.
			</Review>
		</CarouselItem>
		<CarouselItem index={2}>
			<Review by='Jacob (Kingstone)'>
				Burnavy got rid of our pain and conceren. We are no longer fail to
				proceed to our business.
			</Review>
		</CarouselItem>
		<CarouselItem index={3}>
			<Review by='Slave (Shinees)'>
				How to solve our issue with growing on the market was explained promptly
				and politely. Excellent service.
			</Review>
		</CarouselItem>
		<CarouselItem index={4}>
			<Review by='Folister (Quest animals)'>
				Burnavy&apos;s relentless pursuit of knowledge and touring in the
				busines has led to countless journey all across the globe.
			</Review>
		</CarouselItem>
	</Carousel>
);

export default Testimonial;
