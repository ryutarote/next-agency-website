import Autoplay from 'embla-carousel-autoplay';
import ClassNames from 'embla-carousel-autoplay';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import React, { useCallback, useEffect, useState } from 'react';
import styles from '../styles/carousel.module.css';

interface ContextValue {
	embla: EmblaCarouselType | undefined;
	selectedIndex: number;
}

interface Props {
	className?: string;
	children: React.ReactNode;
}

export const CarsoulContext = React.createContext<ContextValue>({
	embla: undefined,
	selectedIndex: -1,
});

const Carousel: React.FC<Props> = ({ children, className }) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [viewportRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			align: 'center',
			skipSnaps: false,
		},
		[ClassNames(), Autoplay()]
	);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on('select', onSelect);
	}, [emblaApi, onSelect, selectedIndex]);

	return (
		<CarsoulContext.Provider value={{ embla: emblaApi, selectedIndex }}>
			<div
				ref={viewportRef}
				className={`${styles.viewport} w-full overflow-hidden ${className}`}>
				<div className={`${styles.container} flex`}>{children}</div>
			</div>
		</CarsoulContext.Provider>
	);
};

export default Carousel;
