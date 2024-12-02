import { useEffect, useRef } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import Footer from './Footer';

const Contact = () => {
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
		<>
			<div className='bg-gradient-to-b from-black via-gray-900 to-black text-white py-12 px-6 relative min-h-screen flex justify-center items-center gap-x-10'>
				<canvas
					ref={canvasRef}
					className='absolute top-0 left-0 w-full h-full'
				></canvas>
				<div className='relative z-10 max-w-4xl w-full flex flex-col md:flex-row bg-gray-900 p-8 rounded-lg shadow-xl'>
					{/* Left Section */}
					<div className='md:w-1/2'>
						<h3 className='text-3xl md:text-4xl font-bold text-violet-500 mb-4 text-center md:text-left'>
							Let’s Work Together
						</h3>
						<p className='text-gray-300 mb-8 text-center md:text-left'>
							Feel free to get in touch for collaborations or networking
							opportunities.
						</p>
						<div className='space-y-4'>
							<div className='flex space-x-4'>
								<input
									type='text'
									placeholder='First Name'
									className='w-1/2 bg-gray-800 text-gray-200 placeholder-gray-400 p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-500'
								/>
								<input
									type='text'
									placeholder='Last Name'
									className='w-1/2 bg-gray-800 text-gray-200 placeholder-gray-400 p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-500'
								/>
							</div>
							<input
								type='text'
								placeholder='Subject'
								className='w-full bg-gray-800 text-gray-200 placeholder-gray-400 p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-500'
							/>
							<textarea
								placeholder='Message'
								className='w-full bg-gray-800 text-gray-200 placeholder-gray-400 p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-500 h-32 resize-none'
							></textarea>
							<button className='w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold p-3 rounded shadow-lg transition'>
								Send
							</button>
						</div>
					</div>

					{/* Right Section */}
					<div className='md:w-1/2 mt-8 md:mt-0 flex flex-col space-y-6 justify-center items-center md:items-start md:pl-24 relative border-4 border-transparent rounded-lg p-6'>
						<div className='flex justify-between items-center w-full group'>
							<span className='text-violet-500 text-2xl flex-shrink-0 transition-transform transform group-hover:scale-110 group-hover:drop-shadow-glow'>
								<FaPhoneAlt />
							</span>
							<div className='flex-1 ml-4'>
								<p className='text-gray-200 font-medium'>Phone</p>
								<p className='text-gray-400'>+123 456 7890</p>
							</div>
						</div>
						<div className='flex justify-between items-center w-full group'>
							<span className='text-violet-500 text-2xl flex-shrink-0 transition-transform transform group-hover:scale-110 group-hover:drop-shadow-glow'>
								<IoMail />
							</span>
							<div className='flex-1 ml-4'>
								<p className='text-gray-200 font-medium'>Email</p>
								<p className='text-gray-400'>bmsssarvesh2005@gmail.com</p>
							</div>
						</div>
						<div className='flex items-center justify-between space-x-4 group'>
							<span className='text-violet-500 text-2xl flex-shrink-0 transition-transform transform group-hover:scale-110 group-hover:drop-shadow-glow'>
								<FaLocationDot />
							</span>
							<div className='flex-1'>
								<p className='text-gray-200 font-medium'>Address</p>
								<p className='text-gray-400'>1234 Main St, City, Country</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
