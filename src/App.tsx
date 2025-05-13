import './App.css'
import CourseListSimple from './CourseListSimple';
import OnChangeDemo from './OnChangeDemo';
import Toggle from './Toggle';
import UserProfile from './UserProfile';


function App() {
  return (
    <div>
      <h1 className='mainHeading'>My React App</h1>
      <Toggle />
      <OnChangeDemo />
      <CourseListSimple title='IT Courses for Beginners' courses={["Excel", "HTML", "CSS", "Web Design"]}/>
      <UserProfile name="Nuh" age={19} qualifications={["BCA with Data Analytics", "MCA with AI and ML", "Specialist in React"]}/>
    </div>
  );
}

export default App;
