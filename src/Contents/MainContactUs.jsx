import React from 'react'
import Logo from "../Assets/logo.png";

function MainContactUs() {
  return (
        <>
        <div>
        <img 
        style={{
        width: "20%", display:"block",
        margin:"1% auto", paddingTop:"30px"}}
        src={Logo} alt="logo"
        />
            <div className="mainprivacy" 
            style={{  
                fontStyle: "normal", width: "90%", 
                margin:"3% auto", textAlign:"justify"}}>
                <h3 
                style={{ 
                fontFamily: 'Poppins', fontWeight: "700", 
                fontSize: "40px", lineHeight: "60px", }}>
                Contact Us</h3>
                    <hr></hr>
                    <br></br>
                        <ul style={{ fontFamily: 'calibri', fontSize: "20px"}}>
                            <li>Instagram - @unicate</li>
                            <li>Email - unicateweb@gmail.com</li>
                            <li>Whatsapp - 085812344321</li>
                        </ul>
            </div>

            <div 
            style={{ 
                fontFamily: 'calibri', fontStyle: "normal", width: "90%",
                 margin:"3% auto", textAlign:"justify", fontSize: "20px"}}>
                <ul style={{marginLeft: "50%", marginTop: "-11%"}}>
                    <li>Email - unicatehelper@gmail.com (Helper)</li>
                    <li>Whatsapp - 085843211234 (Helper)</li>
                </ul>
                <br/>
                <br/>
            </div>
        </div>
        </>
    )
}

export default MainContactUs;
