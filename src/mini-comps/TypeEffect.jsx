import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const positions = [
	'Full Stack Developer',
	'Programmer',
	'Information Technology Undergraduate',
	'Curious Learner',
];

const AnimationLine = () => {
	const toggle = useRef(null);

	useEffect(() => {
		const typed = new Typed(toggle.current, {
			strings: positions.map((position) => `a ${position}`),
			typeSpeed: 60,
			backSpeed: 30,
			backDelay: 2000,
			loop: true,
		});

		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<div>
			<h1 className='md:text-xl text-lg font-bold'>
				<span ref={toggle}></span>
			</h1>
		</div>
	);
};

export default AnimationLine;
