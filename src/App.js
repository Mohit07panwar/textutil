import './App.css';
import Navbar from "./components/navbar.components.jsx";
import TextForm from "./components/textform.jsx"

function App() {
  return (
   <div>
     <Navbar title="TextUtils"/>
   <div className="container my-4">
    <TextForm text="Enter the Text"/>
     </div> 
</div>

   
 
  )
}

export default App;
