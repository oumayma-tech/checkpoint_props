
import './App.css';
import React from 'react';
import Profil from './profil/profil-component';
import Com from './profil/Com';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alb from './images/alb.jpg';
import Photo1 from './images/photo1.jpg';
import Photo3 from './images/photo3.jpg';
import Photo4 from './images/photo4.jpg';

    function App() {
      const HandleAlert=(name)=>{
        alert('Hi Im ${name}')
      }
      return(
        <>
        <Com/>
        <Profil name={'Albert Einstein'}   Bio='(born March 14, 1879, Ulm, Württemberg, Germany—died April 18, 1955, Princeton, New Jersey, U.S.), German-born physicist who developed the special and general theories of relativity and won the Nobel Prize for Physics in 1921 for his explanation of the photoelectric effect'  Profession='Physicist' HandleAlert={HandleAlert} >
            <img  style={{ width: "300px", borderRadius: "15px",marginTop:"-33%",marginLeft:"-77%",height:"331px" }}src={Alb} alt="image"/>
           <div className="img">
             <img  style={{width:"350px",cursor:"pointer",width:"300px",margin:"10px 60px",border: "1px solid rgba(0, 0, 0, 0.171)"}} src={Photo1} alt="image"/>
            <img  style={{width:"300px",cursor:"pointer",width:"300px",margin:"10px 71px",border: "1px solid rgba(0, 0, 0, 0.171)"}} src={Photo3} alt="image"/>
            <img  style={{width:"300px",cursor:"pointer",width:"300px",margin:"10px 70px",border: "1px solid rgba(0, 0, 0, 0.171)"}} src={Photo4} alt="image"/>
            </div>
            </Profil>
            
</>
                
      );
  
      }
  export default App;