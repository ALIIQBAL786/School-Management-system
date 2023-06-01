import Application from "./form";
import ABOUTUS from './aboutUs';
import Navbar from "./navba";
import Footer from "./footer";
import LacturerDetails from "./lecturer"
import Courses from "./Courses"
import UpdateCourse from "./UpdateCourses";
import UpdateStudent from "./UpdateStudents";
import UpdateLecturer from "./UpdateLecturer";
function App() {
  return (
    <div className="App">
    <Navbar/>
  <header className="App-header">
        <ABOUTUS/>
      <Application/>
      <LacturerDetails/>
      <Courses/>
      <UpdateCourse/>
      <UpdateStudent/>
      <UpdateLecturer/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
