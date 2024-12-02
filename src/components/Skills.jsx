import { frameworks, databases, tools, languages } from '@/lib/skills';
import { useState, useEffect, useRef } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from './Navbar';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
const Skills = () => {
	const [showBackButton, setShowBackButton] = useState(false);
	const canvasRef = useRef();

	useEffect(() => {
		const handleScroll = () => {
			setShowBackButton(window.scrollY > 200);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

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
		<div className='bg-gradient-to-b from-black via-gray-900 to-black text-white py-3 px-6 relative'>
			<canvas
				ref={canvasRef}
				className='absolute top-0 left-0 w-full h-full'
			></canvas>
			{/* Back Button */}
			{showBackButton && (
				<button
					onClick={() => (window.location.href = '/')}
					className='fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-violet-500 hover:bg-violet-600 rounded-full shadow-lg hover:shadow-xl transition duration-300 group'
					title='Back to Home'
				>
					<FaArrowLeft className='w-6 h-6 text-white transform transition-transform duration-300 group-hover:-rotate-45' />
				</button>
			)}
			{/* Navbar */}
			<div className='mb-9'>
				<Navbar
					title='Skills'
					about='A collection of frameworks and tools that I work with'
				/>
			</div>
			{/* Skills Section */}
			<div className='relative'>
				<div className='fixed bottom-0 left-24 flex flex-col items-center'>
					<div className='flex flex-col gap-7 text-violet-300 text-3xl'>
						<FaGithub className='hover:drop-shadow-[0_0_4px_#8b5cf6] transition duration-300' />
						<FaLinkedin className='hover:drop-shadow-[0_0_4px_#8b5cf6] transition duration-300' />
						<FaInstagram className='hover:drop-shadow-[0_0_4px_#8b5cf6] transition duration-300' />
						<RiTwitterXFill className='hover:drop-shadow-[0_0_4px_#8b5cf6] transition duration-300' />
					</div>
					<div className='mt-4 h-28 w-[2px] bg-violet-600'></div>{' '}
				</div>

				{/* Centered Skills Section */}
				<div className='max-w-4xl mx-auto flex flex-col items-center justify-center space-y-12 pb-10'>
					<SkillSection title='Frameworks' skills={frameworks} />
					<SkillSection title='Languages' skills={languages} />
					<SkillSection title='Databases' skills={databases} />
					<SkillSection title='Tools' skills={tools} />
				</div>
			</div>
		</div>
	);
};

const SkillSection = ({ title, skills }) => (
	<div className='relative'>
		<h2 className='text-3xl font-semibold text-violet-400 mb-6'>
			<center>{title}</center>
		</h2>
		{/* Horizontally Aligned Skills with Increased Box Width */}
		<div className='flex gap-12 justify-start flex-wrap'>
			{skills.map((skill) => (
				<div
					key={skill.name}
					className='relative flex flex-col items-center gap-2 p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300'
				>
					<skill.icon className='w-12 h-12 text-violet-500' />
					<p className='text-sm font-medium'>{skill.name}</p>
				</div>
			))}
		</div>
	</div>
);

export default Skills;
