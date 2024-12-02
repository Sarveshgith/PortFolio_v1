import { useState } from 'react';
import { FaArrowLeft, FaLaptopCode, FaHome } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { TfiWrite } from 'react-icons/tfi';

const NavButton = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded((prev) => !prev);
	};

	return (
		<div className='fixed bottom-6 right-10 z-50'>
			{isExpanded && (
				<div className='absolute bottom-20 left-1/2 transform -translate-x-1/2 space-y-6'>
					<button
						className='w-16 h-16 bg-gradient-to-tl from-indigo-600 via-purple-500 to-pink-500 hover:from-indigo-700 hover:via-purple-600 hover:to-pink-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group relative hover:w-28'
						title='Home'
					>
						<span className='absolute inset-0 flex items-center justify-center text-white text-2xl group-hover:opacity-0'>
							<FaHome />
						</span>
						<span className='absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300'>
							Home
						</span>
					</button>
					<button
						className='w-16 h-16 bg-gradient-to-tl from-indigo-600 via-purple-500 to-pink-500 hover:from-indigo-700 hover:via-purple-600 hover:to-pink-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group relative hover:w-28'
						title='Projects'
					>
						<span className='absolute inset-0 flex items-center justify-center text-white text-2xl group-hover:opacity-0'>
							<FaLaptopCode />
						</span>
						<span className='absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300'>
							Projects
						</span>
					</button>
					<button
						className='w-16 h-16 bg-gradient-to-tl from-indigo-600 via-purple-500 to-pink-500 hover:from-indigo-700 hover:via-purple-600 hover:to-pink-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group relative hover:w-28'
						title='Skills'
					>
						<span className='absolute inset-0 flex items-center justify-center text-white text-2xl group-hover:opacity-0'>
							<TfiWrite />
						</span>
						<span className='absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300'>
							Skills
						</span>
					</button>
					<button
						className='trans w-16 h-16 bg-gradient-to-tl from-indigo-600 via-purple-500 to-pink-500 hover:from-indigo-700 hover:via-purple-600 hover:to-pink-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group relative hover:-translate-x-28w-28'
						title='Contact'
					>
						<span className='absolute inset-0 flex items-center justify-center text-white text-2xl group-hover:opacity-0'>
							<IoMail />
						</span>
						<span className='absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300'>
							Contact
						</span>
					</button>
				</div>
			)}

			<button
				onClick={toggleExpand}
				className={`relative flex items-center justify-center w-12 h-12 bg-gradient-to-tl from-indigo-600 via-purple-500 to-pink-500 hover:from-indigo-700 hover:via-purple-600 hover:to-pink-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group ${
					isExpanded ? 'scale-125' : ''
				}`}
				title='Toggle Navigation'
			>
				<FaArrowLeft
					className={`w-6 h-6 text-white transform transition-transform duration-300 group-hover:-rotate-45 ${
						isExpanded ? 'rotate-90' : ''
					}`}
				/>
			</button>
		</div>
	);
};

export default NavButton;
