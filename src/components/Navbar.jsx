const Navbar = ({ title, about }) => {
	return (
		<div className='pt-9'>
			<h1 className='text-3xl md:text-5xl font-bold text-center tracking-wide transition-all duration-300 text-violet-600'>
				{title}
			</h1>
			<p className='text-center text-gray-400 mt-2 text-lg'>{about}</p>
		</div>
	);
};

export default Navbar;
