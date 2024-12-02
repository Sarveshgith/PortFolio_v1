import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
const ContactButs = () => {
	return (
		<div className='hidden md:fixed bottom-0 left-24 md:flex flex-col items-center'>
			<div className='flex flex-col gap-7 text-violet-300 text-3xl'>
				<FaGithub className='hover:drop-shadow-[0_0_4px_#8b5cf6] transition duration-300' />
				<FaLinkedin className='hover:drop-shadow-[0_0_4px_#8b5cf6] transition duration-300' />
				<FaInstagram className='hover:drop-shadow-[0_0_4px_#8b5cf6] transition duration-300' />
				<RiTwitterXFill className='hover:drop-shadow-[0_0_4px_#8b5cf6] transition duration-300' />
			</div>
			<div className='mt-4 h-28 w-[2px] bg-violet-600'></div>{' '}
		</div>
	);
};

export default ContactButs;
