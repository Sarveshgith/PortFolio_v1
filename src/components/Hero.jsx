import { databases, frameworks, languages, tools } from '@/lib/skills';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const Hero = () => {
	return (
		<div className='bg-gradient-to-b from-black via-gray-900 to-gray-800 min-h-screen text-white'>
			{/* Header */}
			<div className='pt-9'>
				<h1 className='text-3xl md:text-5xl font-bold text-center tracking-wide transition-all duration-300 hover:text-violet-600'>
					Sarveswaran
				</h1>
				<p className='text-center text-gray-400 text-sm mt-2'>
					Developer | IT Undergrad | Programmer
				</p>
			</div>

			{/* Main Section */}
			<div className='min-h-screen grid grid-cols-1 md:grid-cols-5 md:gap-6 p-6 md:p-10'>
				{/* Left Section */}
				<div id='left' className='col-span-3 grid grid-rows-5 gap-6'>
					{/* About Me */}
					<div
						id='lr1'
						className='row-span-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-xl p-6 shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-tr hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 hover:text-violet-600  '
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
							className='bg-gradient-to-br from-gray-800 via-violet-900 to-black rounded-xl py-6 px-6 shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-t hover:from-violet-800 hover:via-gray-700 hover:to-gray-900 hover:text-violet-600  '
						>
							<h3 className='text-2xl font-semibold mb-6 text-center'>
								Education
							</h3>
							{/* College */}
							<div className='mb-6 border-l-4 border-violet-600 pl-4'>
								<div className='flex justify-between items-center'>
									<span className='text-lg font-medium text-gray-300'>
										B.Tech IT
									</span>
									<span className='text-gray-400 text-sm'>
										SASTRA University
									</span>
								</div>
								<p className='text-gray-400 text-xs mt-1'>2022 - 2026</p>
							</div>
							{/* Higher Secondary */}
							<div className='border-l-4 border-violet-600 pl-4'>
								<div className='flex justify-between items-center'>
									<span className='text-lg font-medium text-gray-300'>
										Higher Secondary
									</span>
									<span className='text-gray-400 text-sm'>
										ONGC Public School
									</span>
								</div>
								<p className='text-gray-400 text-xs mt-1'>2020 - 2022</p>
							</div>
						</div>

						{/* Skills */}
						<div
							id='lr2r'
							className='bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-700 rounded-xl p-4 shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-br hover:from-gray-700 hover:via-black hover:to-gray-800 hover:text-violet-600'
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
												<skill.icon className='w-8 h-8 text-violet-500' />
											</div>
										)
									)}
									{/* Duplicate for seamless scrolling */}
									{[...frameworks, ...languages, ...tools, ...databases].map(
										(skill, index) => (
											<div
												key={`duplicate-${index}`}
												className='m-2 w-fit flex justify-center items-center p-2 bg-gray-800 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105'
											>
												<skill.icon className='w-8 h-8 text-violet-500' />
											</div>
										)
									)}
								</div>
							</div>
							<div className='md:mt-9 mt-3 text-center'>
								<button
									onClick={() => (window.location.href = '/acq')}
									className='px-4 py-2 bg-gray-600 text-xs text-white rounded-3xl shadow-md hover:bg-violet-700 transition-all'
								>
									View More
								</button>
							</div>
						</div>
					</div>

					{/* Additional Info */}
					<div
						id='lr3'
						className='row-span-1 bg-gradient-to-r from-gray-800 via-violet-800 to-gray-900 rounded-xl p-6 shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-bl hover:from-violet-900 hover:via-gray-700 hover:to-black hover:text-violet-600  '
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
						className='row-span-3 bg-gradient-to-b from-gray-800 via-violet-900 to-black rounded-xl p-6 shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-t hover:from-black hover:via-gray-800 hover:to-gray-700  '
					>
						<h2 className='text-2xl font-semibold'>Hi All!</h2>
						<p className='text-gray-300 mt-3 text-sm'>
							Welcome to my portfolio. Let’s create something amazing together.
						</p>
					</div>

					{/* Contact Me */}
					<div
						id='rr2'
						className='row-span-2 bg-gradient-to-t from-black via-gray-800 to-gray-700 rounded-xl p-6 shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-br hover:from-gray-700 hover:via-black hover:to-gray-800 hover:text-violet-600  '
					>
						<h2 className='text-xl font-medium'>Contact Me</h2>
						<p className='text-gray-300 mt-2 text-sm'>
							Feel free to reach out via{' '}
							<span className='underline'>email</span> or{' '}
							<span className='underline'>LinkedIn</span>.
						</p>
					</div>

					{/* Social Media Icons */}
					<div
						id='rr3'
						className='row-span-1 flex justify-evenly items-center gap-6'
					>
						<div className='md:w-16 md:h-16 w-12 h-12 bg-gradient-to-br from-gray-800 via-black to-gray-900 rounded-full flex items-center justify-center cursor-pointer text-gray-300 text-2xl md:text-3xl font-semibold hover:text-violet-600 shadow-md transition-all duration-500 ease-in-out hover:scale-110  '>
							<FaGithub />
						</div>

						<div className='md:w-16 md:h-16 w-12 h-12 bg-gradient-to-br from-gray-800 via-black to-gray-900 rounded-full flex items-center justify-center cursor-pointer text-gray-300 text-2xl  md:text-3xl font-semibold hover:text-violet-600 shadow-md transition-all duration-500 ease-in-out hover:scale-110  '>
							<FaLinkedin />
						</div>

						<div className='md:w-16 md:h-16 w-12 h-12 bg-gradient-to-br from-gray-800 via-black to-gray-900 rounded-full flex items-center justify-center cursor-pointer text-gray-300 text-2xl  md:text-3xl font-semibold hover:text-violet-600 shadow-md transition-all duration-500 ease-in-out hover:scale-110  '>
							<FaInstagram />
						</div>

						<div className='md:w-16 md:h-16 w-12 h-12 bg-gradient-to-br from-gray-800 via-black to-gray-900 rounded-full flex items-center justify-center cursor-pointer text-gray-300 text-2xl  md:text-3xl font-semibold hover:text-violet-600 shadow-md transition-all duration-500 ease-in-out hover:scale-110  '>
							<RiTwitterXFill />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
