import { IoGlobeOutline } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa6';

const ProjButs = ({ name, language, git, web }) => {
	return (
		<div className='relative max-w-xs mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
			<div className='flex flex-col items-center'>
				<h2 className='text-2xl font-bold text-violet-400 hover:text-violet-300 transition-colors'>
					{name}
				</h2>
				<p className='text-gray-400 mt-2'>{language}</p>
				<div className='flex space-x-6 mt-6'>
					{git && (
						<a
							href={git}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors'
						>
							<FaGithub className='text-2xl' />
						</a>
					)}
					{web && (
						<a
							href={web}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors'
						>
							<IoGlobeOutline className='text-2xl' />
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjButs;
