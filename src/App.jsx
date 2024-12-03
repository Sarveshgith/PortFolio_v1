import Contact from './components/Contact';
import Hero from './components/hero';
import Skills from './components/Skills';
import Project from './components/Project';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path='/' element={<Hero />} />
					<Route path='/acq' element={<Skills />} />
					<Route path='/coffee' element={<Contact />} />
					<Route path='/proggies' element={<Project />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
