import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
    return ( 
    <>
        <Navbar title="TextUtils" aboutText="AboutUtils"/>
        <div className="container my-3">
            <TextForm heading="Enter text to analyze below"/>
            </div> 
        </>
            );
}

            export default App;