import Hero from './components/hero';
import Skills from './components/Skills';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import MarqueeDemo from './components/Marquee';
const App = () => {
	return (
		<BrowserRouter>
			<div>
				{/* <Hero /> */}
				{/* <MarqueeDemo /> */}
				{/* <Skills /> */}
				<Routes>
					<Route path='/' element={<Hero />} />
					<Route path='/acq' element={<Skills />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;

// const slugs = [
// 	'javascript',
// 	'java',
// 	'react',
// 	'html5',
// 	'css3',
// 	'nodedotjs',
// 	'express',
// 	'postgresql',
// 	'firebase',
// 	'git',
// 	'github',
// 	'visualstudiocode',
// 	'c',
// 	'c++',
// 	'python',
// 	'django',
// 	'perl',
// 	'mongodb',
// 	'springboot',
// 	'mysql',
// ];
