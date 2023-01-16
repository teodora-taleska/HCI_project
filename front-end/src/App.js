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
import C_Buttons from './components/Crossword/C_Buttons';
import C_Levels_easy from './components/Crossword/C_Levels_easy'
import C_Levels_hard from './components/Crossword/C_Levels_hard'
import C_Levels_normal from './components/Crossword/C_Levels_normal'
import C_Levels_themed from './components/Crossword/C_Levels_themed'
import C_Game from './components/Crossword/C_Game';
import C_Feedback from './components/Crossword/C_Feedback';

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

        <Route path='/crossword/c_buttons' element={ <C_Buttons/> } />
        <Route path='/crossword/easy' element={ <C_Levels_easy/> } />
        <Route path='/crossword/normal' element={ <C_Levels_normal/> } />
        <Route path='/crossword/hard' element={ <C_Levels_hard/> } />
        <Route path='/crossword/themed' element={ <C_Levels_themed/> } />

        <Route path='/crossword/game' element={ <C_Game/> } />
        <Route path='/crossword/game/feedback' element={ <C_Feedback/> } />



        
      </Routes>
      
    </div>
  );
}

export default App;
