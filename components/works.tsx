import React from 'react';
import { Tile, TileWrapper, TileBackground, TileContent } from './tile';
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from './work';
import Image from 'next/image';

const Works = () => (
	<TileWrapper numOfPages={3}>
		<TileBackground>
			<WorkBackground />
		</TileBackground>
		<TileContent>
			<Tile
				page={0}
				renderContent={({ progress }) => (
					<WorkContainer>
						<WorkLeft progress={progress}>
							<div>We guide</div>
							<div className='text-4xl md:text-5xl font-semibold tracking-tight'>
								many life&apos;s
							</div>
						</WorkLeft>
						<WorkRight progress={progress}>
							<Image
								src='/assets/works/lifes.jpg'
								layout='responsive'
								width={800}
								height={800}
								alt='Lifes'
							/>
						</WorkRight>
					</WorkContainer>
				)}></Tile>
			<Tile
				page={1}
				renderContent={({ progress }) => (
					<WorkContainer>
						<WorkLeft progress={progress}>
							<div>We built</div>
							<div className='text-4xl md:text-5xl font-semibold tracking-tight'>
								many credential&apos;s
							</div>
						</WorkLeft>
						<WorkRight progress={progress}>
							<Image
								src='/assets/works/credentials.jpg'
								layout='responsive'
								width={800}
								height={800}
								alt='Credentials'
							/>
						</WorkRight>
					</WorkContainer>
				)}></Tile>
		</TileContent>
		<TileContent>
			<Tile
				page={2}
				renderContent={({ progress }) => (
					<WorkContainer>
						<WorkLeft progress={progress}>
							<div>We led</div>
							<div className='text-4xl md:text-5xl font-semibold tracking-tight'>
								many team&apos;s
							</div>
						</WorkLeft>
						<WorkRight progress={progress}>
							<Image
								src='/assets/works/teams.jpg'
								layout='responsive'
								width={800}
								height={800}
								alt='Teams'
							/>
						</WorkRight>
					</WorkContainer>
				)}></Tile>
		</TileContent>
	</TileWrapper>
);

export default Works;
