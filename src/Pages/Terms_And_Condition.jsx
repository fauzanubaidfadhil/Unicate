import Logo from "../Assets/logo.png";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import HOC from "../Components/HOC";
import "../CSS/Terms.css"
const TermsAndCondition =() =>{
    return(
        <HOC headreTitle="Terms & Condition">
            <Navigation />
            <div >
                <img style={{width: "60%", display:"block", margin:"auto", paddingTop:"30px"}} src={Logo} alt="logo" />
                <div className="mainterms" style={{ fontFamily: 'Poppins', fontStyle: "normal", width: "90%", display:"block", margin:"auto", textAlign:"justify"}}>
                    <h3 style={{ fontWeight: "700", fontSize: "40px", 
                                    }}>
                                Terms & Condition</h3>
                    <hr></hr>
                    <br></br>
                    <p className="detailtermscondition" style={{ fontFamily: 'Poppins',
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "24px"}} >
                       It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                    
                </div>
            </div>
           
            <Footer />
            
        </HOC>
    );
};

export default TermsAndCondition;