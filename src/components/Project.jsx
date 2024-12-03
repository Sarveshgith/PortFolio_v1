import ContactButs from '@/mini-comps/ContactButs';
import Navbar from '@/mini-comps/Navbar';
import NavButton from '@/mini-comps/NavButton';
import { useEffect, useRef } from 'react';
import proggies from '../lib/projects';
import ProjButs from '../mini-comps/ProjButs';

const Project = () => {
	const canvasRef = useRef();

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		const width = window.innerWidth;
		const height = window.innerHeight;

		canvas.width = width;
		canvas.height = height;

		const drawStars = () => {
			const starCount = 100;
			ctx.clearRect(0, 0, width, height);
			for (let i = 0; i < starCount; i++) {
				const x = Math.random() * width;
				const y = Math.random() * height;
				const radius = Math.random() * 2;
				ctx.beginPath();
				ctx.arc(x, y, radius, 0, 2 * Math.PI);
				ctx.fillStyle = 'white';
				ctx.fill();
			}
		};

		drawStars();
	}, []);

	return (
		<div className='bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen relative'>
			<canvas
				ref={canvasRef}
				className='absolute top-0 left-0 w-full h-full z-0'
			></canvas>

			{/* Main Content */}
			<div className='relative z-10'>
				<Navbar
					title='Projects'
					about='A showcase of my diverse web development projects.'
				/>
				<NavButton />
				<ContactButs />

				<div className='flex flex-wrap justify-center mt-8 p-4 md:ml-24'>
					{' '}
					{proggies.map((proggie, index) => (
						<div key={index} className='w-full sm:w-1/2 md:w-1/3 p-4'>
							<ProjButs
								name={proggie.name}
								language={proggie.Languages}
								git={proggie.Github}
								web={proggie.Website}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Project;
