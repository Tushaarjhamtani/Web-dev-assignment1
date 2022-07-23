import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews'; 
import Review1 from './components/Review1';
import Review2 from './components/Review2';
import Footer from './components/Footer';
import Form from './components/Form';
function App() {
  return (
   <>  
<Navbar/>
<br /><hr />

          <div className="container text-center my-3">
         <div className="container" >
    <h2>Reviews</h2>
    </div>
   <div className="row">
    
    <div className="col"><Reviews/></div>
    <div className="col"><Review1/></div>
    <div className="col"><Review2/></div>
  </div>
</div>
<div className="container my-3">
  <br />
  <hr />
  <h4>Subscribe to the newsletter</h4>
<Form/>
</div>
<Footer/>

</>
  );
}
export default App;
