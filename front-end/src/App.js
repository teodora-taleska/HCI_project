import {Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './views/Home';
import Education from './views/Education';
import Crossword from './views/Crossword';
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import NavigationButtons from './components/NavigationButtons'
import Map from './views/Map';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/nav-buttons" element={<NavigationButtons />} />


        <Route path='/education' element={ <Education/> } />
        <Route path='/map' element={ <Map/> } />
        <Route path='/crossword' element={ <Crossword/> } />
      </Routes>
      
    </div>
  );
}

export default App;
