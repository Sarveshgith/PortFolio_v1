import { frameworks, databases, tools, languages } from '@/lib/skills';
import { useEffect, useRef } from 'react';
import Navbar from '../mini-comps/Navbar';
import NavButton from '../mini-comps/NavButton';
import ContactButs from '@/mini-comps/ContactButs';
const Skills = () => {
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
		<div className='bg-gradient-to-b from-black via-gray-900 to-black text-white py-3 px-6 relative'>
			<canvas
				ref={canvasRef}
				className='absolute top-0 left-0 w-full h-full'
			></canvas>
			<NavButton />
			{/* Navbar */}
			<div className='mb-9'>
				<Navbar
					title='Skills'
					about='A collection of frameworks and tools that I work with'
				/>
			</div>
			<div className='relative'>
				<ContactButs />
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
		<div className='flex md:gap-12 gap-5 justify-center flex-wrap'>
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
