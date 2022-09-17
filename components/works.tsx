import React from 'react';
import { Tile, TileWrapper, TileBackground, TileContent } from './tile';
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from './work';
import Image from 'next/image';
import pImg from '../public/assets/works/lifes.jpg';
import tImg from '../public/assets/works/teams.jpg';
import cImg from '../public/assets/works/credentials.jpg';

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
							<div>We unlock</div>
							<div className='text-4xl font-semibold tracking-tight md:text-5xl'>
								your potential
							</div>
						</WorkLeft>
						<WorkRight progress={progress}>
							<Image
								src={pImg}
								layout='responsive'
								width={800}
								height={800}
								alt='Tech'
							/>
						</WorkRight>
					</WorkContainer>
				)}></Tile>
			<Tile
				page={1}
				renderContent={({ progress }) => (
					<WorkContainer>
						<WorkLeft progress={progress}>
							<div>We led</div>
							<div className='text-4xl font-semibold tracking-tight md:text-5xl'>
								many team&apos;s
							</div>
						</WorkLeft>
						<WorkRight progress={progress}>
							<Image
								src={tImg}
								layout='responsive'
								width={800}
								height={800}
								alt='Teams'
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
							<div>We built</div>
							<div className='text-4xl font-semibold tracking-tight md:text-5xl'>
								many credential&apos;s
							</div>
						</WorkLeft>
						<WorkRight progress={progress}>
							<Image
								src={cImg}
								layout='responsive'
								width={800}
								height={800}
								alt='Credentials'
							/>
						</WorkRight>
					</WorkContainer>
				)}></Tile>
		</TileContent>
	</TileWrapper>
);

export default Works;
