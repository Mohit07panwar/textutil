import './App.css';
import Navbar from "./components/navbar.components.jsx";
import TextForm from "./components/textform.jsx"
// import DarkMode from './components/darkmode.jsx';


function App() {
  return (
    <div>
      <Navbar title="TextUtils" />
      <div className="container my-4">
        <TextForm text="Enter the Text" />
        {/* <DarkMode /> */}
      </div>
    </div>
  )
}

export default App;
