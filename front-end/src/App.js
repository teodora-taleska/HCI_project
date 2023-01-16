import {Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './views/Home';
import Education from './views/Education';
import Crossword from './views/Crossword';
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import NavigationButtons from './components/NavigationButtons'
import Map from './views/Map';
import LearnTopics from './components/Education/LearnTopics'
import SexualHCButtons from './components/Education/SexualHCButtons';
import ReproductiveHCButtons from './components/Education/ReproductiveHCButtons';
import ContentLectures from './components/Education/ContentLectures'
import Lecture1 from './components/Education/Lecture1';
import Lecture2 from './components/Education/Lecture2';


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
        <Route path='/education/learnTopics' element={ <LearnTopics/> } />
        <Route path='/education/learnTopics/sexhc' element={ <SexualHCButtons/> } />
        <Route path='/education/learnTopics/rephc' element={ <ReproductiveHCButtons/> } />
        <Route path='/education/learnTopics/content' element={ <ContentLectures/> } />
        <Route path='/education/learnTopics/content/Lecture1' element={ <Lecture1/> } />
        <Route path='/education/learnTopics/content/Lecture2' element={ <Lecture2/> } />

        
      </Routes>
      
    </div>
  );
}

export default App;
