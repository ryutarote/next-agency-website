import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => (
	<footer className='flex gap-8 items-center justify-center bg-black text-white p-20'>
		<Image src='/assets/logo.png' width={30} height={30} alt='logo'></Image>
		<Link href='/terms'>Terms</Link>
		<Link href='/privacy'>Privacy policy</Link>
	</footer>
);

export default Footer;
