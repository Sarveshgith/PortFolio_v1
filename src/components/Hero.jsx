import { databases, frameworks, languages, tools } from '@/lib/skills';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import Navbar from './Navbar';
import Footer from './Footer';

const Hero = () => {
	return (
		<>
			<div className='bg-gradient-to-b from-black via-gray-900 to-gray-800 min-h-screen text-white'>
				{/* Header */}
				<Navbar
					title='Sarveswaran'
					about='Developer | IT Undergrad | Programmer'
				/>
				{/* Main Section */}
				<div className='min-h-screen grid grid-cols-1 md:grid-cols-5 md:gap-6 p-6 md:p-10'>
					{/* Left Section */}
					<div id='left' className='col-span-3 grid grid-rows-5 gap-6'>
						{/* About Me */}
						<div
							id='lr1'
							className='row-span-2 bg-gradient-to-r from-violet-700 via-gray-900 to-gray-800 rounded-xl p-6 shadow-lg transition-transform duration-500 hover:scale-105'
						>
							<h2 className='text-2xl font-semibold'>About Me</h2>
							<p className='text-gray-300 mt-3 text-sm'>
								I’m a passionate developer with expertise in modern web
								technologies. I love turning ideas into reality and creating
								meaningful user experiences.
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
							className='row-span-1 bg-gradient-to-r from-gray-800 via-gray-900 to-violet-700 rounded-xl p-6 shadow-lg transition-transform duration-500 hover:scale-105'
						>
							<h3 className='text-xl font-medium mb-3'>Interests</h3>
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
						{/* Welcome Message */}
						<div
							id='rr1'
							className='row-span-3 bg-gradient-to-b from-gray-800 via-gray-900 to-violet-700 rounded-xl p-6 shadow-lg transition-transform duration-500 hover:scale-105'
						>
							<h2 className='text-2xl font-semibold'>Hi All!</h2>
							<p className='text-gray-300 mt-3 text-sm'>
								Welcome to my portfolio. Let’s create something amazing
								together.
							</p>
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
							<div className='md:w-16 md:h-16 w-14 h-14 bg-gradient-to-br from-gray-800 via-black to-gray-900 rounded-full flex items-center justify-center cursor-pointer text-gray-300  text-3xl font-semibold shadow-md transition-transform duration-500 ease-in-out hover:scale-110'>
								<FaGithub />
							</div>
							<div className='md:w-16 md:h-16 w-14 h-14 bg-gradient-to-br from-gray-800 via-black to-gray-900 rounded-full flex items-center justify-center cursor-pointer text-gray-300  text-3xl font-semibold shadow-md transition-transform duration-500 ease-in-out hover:scale-110'>
								<FaLinkedin />
							</div>
							<div className='md:w-16 md:h-16 w-14 h-14 bg-gradient-to-br from-gray-800 via-black to-gray-900 rounded-full flex items-center justify-center cursor-pointer text-gray-300  text-3xl font-semibold shadow-md transition-transform duration-500 ease-in-out hover:scale-110'>
								<FaInstagram />
							</div>
							<div className='md:w-16 md:h-16 w-14 h-14 bg-gradient-to-br from-gray-800 via-black to-gray-900 rounded-full flex items-center justify-center cursor-pointer text-gray-300  text-3xl font-semibold shadow-md transition-transform duration-500 ease-in-out hover:scale-110'>
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
