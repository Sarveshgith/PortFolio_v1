import { databases, frameworks, languages, tools } from '@/lib/skills';
import {
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaNode,
	FaDatabase,
} from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { IoCodeSlash } from 'react-icons/io5';
import Navbar from '../mini-comps/Navbar';
import AnimationLine from '@/mini-comps/TypeEffect';

const Hero = () => {
	return (
		<>
			<div className='bg-gradient-to-b from-black via-gray-900 to-gray-800 min-h-screen text-white'>
				{/* Header */}
				<Navbar
					title='Sarveswaran'
					about={
						<i>
							`Somewhere caught in between building and maintaining the code.`
						</i>
					}
				/>
				{/* Main Section */}
				<div className='min-h-screen grid grid-cols-1 md:grid-cols-5 md:gap-6 p-6 md:p-10'>
					{/* Left Section */}
					<div id='left' className='col-span-3 grid grid-rows-5 gap-6'>
						{/* About Me */}
						<div
							id='lr1'
							className='row-span-2 bg-gradient-to-r from-violet-700 via-gray-900 to-gray-800 rounded-xl p-6 shadow-lg transition-transform duration-500 hover:scale-105 flex flex-col group'
						>
							<h2 className='md:text-3xl text-2xl font-semibold text-white mb-2 mt-4'>
								Hey There! I&apos;m{' '}
								<span className='transition-colors duration-300 group-hover:text-violet-500'>
									Sarveswaran
								</span>
							</h2>
							<AnimationLine />
							<p className='text-gray-300 mt-4 md:text-base text-sm max-w-lg'>
								I am an Information Technology undergraduate and a dedicated
								developer with a passion for building scalable solutions and
								creating impactful digital experiences. With a focus on
								full-stack development and a commitment to continuous learning,
								I thrive at the intersection of innovation and technology.
							</p>
						</div>

						{/* Education & Skills */}
						<div
							id='lr2'
							className='row-span-2 grid grid-cols-1 md:grid-cols-2 gap-6'
						>
							{/* Education */}
							<div
								id='lr2l'
								className='bg-gradient-to-br from-gray-800 via-violet-700 to-gray-900 rounded-xl py-6 px-6 shadow-lg transition-transform duration-500 hover:scale-105'
							>
								<h3 className='text-2xl font-semibold mb-6 text-center'>
									Education
								</h3>
								{/* College */}
								<div className='mb-6 border-l-4 border-violet-500 pl-4'>
									<div className='flex justify-between items-center'>
										<span className='text-lg font-medium text-gray-200'>
											B.Tech IT
										</span>
										<span className='text-gray-300 text-sm'>
											SASTRA University
										</span>
									</div>
									<p className='text-gray-400 text-xs mt-1'>2022 - 2026</p>
								</div>
								{/* Higher Secondary */}
								<div className='border-l-4 border-violet-500 pl-4'>
									<div className='flex justify-between items-center'>
										<span className='text-lg font-medium text-gray-200'>
											Higher Secondary
										</span>
										<span className='text-gray-300 text-sm'>
											ONGC Public School
										</span>
									</div>
									<p className='text-gray-400 text-xs mt-1'>2020 - 2022</p>
								</div>
							</div>

							{/* Skills */}
							<div
								id='lr2r'
								className='bg-gradient-to-tl from-gray-800 via-gray-900 to-violet-700 rounded-xl p-4 shadow-lg transition-transform duration-500 hover:scale-105'
							>
								<h3 className='text-2xl font-medium mb-4'>
									<center>Skills</center>
								</h3>
								<div className='md:pt-4 relative h-fit overflow-hidden flex items-center justify-center'>
									<div className='slider-container'>
										{/* Primary Skill Icons */}
										{[...frameworks, ...languages, ...tools, ...databases].map(
											(skill, index) => (
												<div
													key={index}
													className='m-2 w-fit flex justify-center items-center p-2 bg-gray-800 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105'
												>
													<skill.icon className='w-8 h-8 text-violet-600' />
												</div>
											)
										)}
									</div>
								</div>
								<div className='md:mt-9 mt-3 text-center'>
									<button
										onClick={() => (window.location.href = '/acq')}
										className='px-4 py-2 bg-gray-700 text-xs text-white rounded-3xl shadow-md hover:bg-gray-600 hover:scale-110 transition-all'
									>
										View More
									</button>
								</div>
							</div>
						</div>

						{/* Additional Info */}
						<div
							id='lr3'
							className='row-span-1 bg-gradient-to-r from-gray-800 via-gray-900 to-violet-700 rounded-xl p-6 shadow-lg transition-transform duration-500 hover:scale-105 text-center pt-9 md:pt-0'
						>
							<h3 className='text-xl font-medium mb-3 '>Interests</h3>
							<p className='text-gray-300 text-base'>
								Designing efficient backend systems, optimizing algorithms, and
								developing interactive web applications.
							</p>
						</div>
					</div>

					{/* Right Section */}
					<div
						id='right'
						className='col-span-2 grid grid-rows-6 grid-cols-1 gap-5 mt-5 md:mt-0'
					>
						{/* Projects */}
						<div
							id='rr1'
							className='row-span-3 bg-gradient-to-b from-gray-800 via-gray-900 to-violet-700 rounded-xl p-6 shadow-lg transition-transform duration-500 hover:scale-105'
						>
							<h2 className='text-2xl md:text-3xl font-bold text-center text-violet-300 mb-4'>
								Discover My Creations
							</h2>
							<p className='text-center text-gray-400 mb-8 text-base md:text-lg'>
								Dive into a world of innovation, from backend architectures to
								engaging frontend designs. Explore the synergy between
								technology and creativity.
							</p>

							{/* Animated Project Highlights */}
							<div className='relative flex flex-wrap justify-center items-center gap-6'>
								{/* Project Categories */}
								<div className='flex flex-col items-center'>
									<div className='w-16 h-16 bg-gray-900 rounded-full shadow-lg flex justify-center items-center text-violet-400 hover:scale-110 transition-transform'>
										<FaDatabase className='w-8 h-8' />
									</div>
									<p className='mt-2 text-sm text-gray-300'>Databases</p>
								</div>
								<div className='flex flex-col items-center'>
									<div className='w-16 h-16 bg-gray-900 rounded-full shadow-lg flex justify-center items-center text-violet-400 hover:scale-110 transition-transform'>
										<FaNode className='w-8 h-8' />
									</div>
									<p className='mt-2 text-sm text-gray-300'>Backend APIs</p>
								</div>
								<div className='flex flex-col items-center'>
									<div className='w-16 h-16 bg-gray-900 rounded-full shadow-lg flex justify-center items-center text-violet-400 hover:scale-110 transition-transform'>
										<IoCodeSlash className='w-8 h-8' />
									</div>
									<p className='mt-2 text-sm text-gray-300'>Frontend UI</p>
								</div>
							</div>

							{/* Call to Action */}
							<div className='mt-12 text-center'>
								<button
									onClick={() => (window.location.href = '/proggies')}
									className='relative px-6 py-3 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-medium rounded-full shadow-lg overflow-hidden group'
								>
									<span className='absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl'></span>
									<span className='relative z-10 transition-transform group-hover:scale-110 duration-300'>
										Explore All Projects
									</span>
								</button>
							</div>
						</div>

						{/* Contact Me */}
						<div
							id='rr2'
							className='row-span-2 bg-gradient-to-t from-gray-900 via-violet-800 to-black rounded-xl p-8 shadow-xl transition-transform duration-500 hover:scale-105'
						>
							<h2 className='text-2xl font-bold text-center text-white mb-6'>
								Contact Me
							</h2>
							<p className='text-gray-300 text-center text-sm leading-relaxed max-w-lg mx-auto mb-8'>
								Let’s work together to create something amazing! Feel free to
								get in touch for collaborations or networking opportunities.
							</p>
							<div className='flex flex-col sm:flex-row justify-center items-center gap-6'>
								<button
									onClick={() => (window.location.href = '/coffee')}
									className='relative group flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-500'
								>
									<span className='absolute inset-0 bg-gradient-to-r from-violet-700 via-pink-700 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md rounded-full'></span>
									<span className='relative z-10'>Connect With Me</span>
								</button>
							</div>
						</div>

						{/* Social Media Icons */}
						<div
							id='rr3'
							className='row-span-1 flex justify-evenly items-center gap-6'
						>
							<div
								onClick={() =>
									window.open('https://github.com/Sarveshgith', '_blank')
								}
								className='md:w-16 md:h-16 w-14 h-14 bg-gradient-to-br from-gray-800 via-black to-gray-900 rounded-full flex items-center justify-center cursor-pointer text-gray-300  text-3xl font-semibold shadow-md transition-transform duration-500 ease-in-out hover:scale-110'
							>
								<FaGithub />
							</div>
							<div
								onClick={() =>
									window.open(
										'https://www.linkedin.com/in/sarveswaranbabu/',
										'_blank'
									)
								}
								className='md:w-16 md:h-16 w-14 h-14 bg-gradient-to-br from-gray-800 via-black to-gray-900 rounded-full flex items-center justify-center cursor-pointer text-gray-300  text-3xl font-semibold shadow-md transition-transform duration-500 ease-in-out hover:scale-110'
							>
								<FaLinkedin />
							</div>
							<div
								onClick={() =>
									window.open('https://www.instagram.com/sarvvesh._/', '_blank')
								}
								className='md:w-16 md:h-16 w-14 h-14 bg-gradient-to-br from-gray-800 via-black to-gray-900 rounded-full flex items-center justify-center cursor-pointer text-gray-300  text-3xl font-semibold shadow-md transition-transform duration-500 ease-in-out hover:scale-110'
							>
								<FaInstagram />
							</div>
							<div
								onClick={() =>
									window.open('https://x.com/SarveswaranMahi', '_blank')
								}
								className='md:w-16 md:h-16 w-14 h-14 bg-gradient-to-br from-gray-800 via-black to-gray-900 rounded-full flex items-center justify-center cursor-pointer text-gray-300  text-3xl font-semibold shadow-md transition-transform duration-500 ease-in-out hover:scale-110'
							>
								<RiTwitterXFill />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
