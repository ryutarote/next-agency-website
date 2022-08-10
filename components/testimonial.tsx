import React from 'react';
import Carousel from './carsoul';
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
			<Review by='Alex (folks)'>
				Burnavy were aware of our potential problems and solved our burning
				issue.
			</Review>
		</CarouselItem>
		<CarouselItem index={2}>
			<Review by='Alex (folks)'>
				Burnavy were aware of our potential problems and solved our burning
				issue.
			</Review>
		</CarouselItem>
		<CarouselItem index={3}>
			<Review by='Alex (folks)'>
				Burnavy were aware of our potential problems and solved our burning
				issue.
			</Review>
		</CarouselItem>
		<CarouselItem index={4}>
			<Review by='Alex (folks)'>
				Burnavy were aware of our potential problems and solved our burning
				issue.
			</Review>
		</CarouselItem>
	</Carousel>
);

export default Testimonial;
