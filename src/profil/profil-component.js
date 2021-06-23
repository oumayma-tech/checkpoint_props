import React, { Children } from 'react';



function Profilcomponent(props) {
    const styleP={textAlign:'center',color:'black',marginTop: '-13%', display: "block",marginRight:'10%',
    fontSize: "21px",letterSpacing: "3px", lineHeight: "20px",width:"100%",backgroundColor: "#5fa07891",paddingTop:"5%"}
    return(
        <>
        <div style={styleP}>
            <div>
        <div style={{fontWeight:'bold',fontSize:"29px",marginTop:"153px",marginLeft:"-29%"}}>{props.name}</div>
           <p className="phy">(Physicis)</p>
        <div style={{fontSize:"16px", marginLeft:"320px",width:"284px",marginTop:"45px"}}>{props.Bio}</div>
        
        <button className="btn1" onClick={()=>props.HandleName(props.name)}>Click</button>
        {props.children}
        </div>
        </div>
        </>
    );
    
}
Profilcomponent.defaultProps={
    FullName:"Albert Einstein",
    Bio:"(born March 14, 1879, Ulm, Württemberg, Germany—died April 18, 1955, Princeton, New Jersey, U.S.), German-born physicist who developed the special and general theories of relativity and won the Nobel Prize for Physics in 1921 for his explanation of the photoelectric effect",
     Profession:"Physicist"
}
export default Profilcomponent