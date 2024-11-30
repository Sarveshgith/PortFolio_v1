import Hero from './components/hero';
import Skills from './components/Skills';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path='/' element={<Hero />} />
					<Route path='/acq' element={<Skills />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;

