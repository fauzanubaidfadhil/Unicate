import MainKomber from "../Contents/MainKomber";
import Navigation from "../Components/Navigation";
import HOC from "../Components/HOC";

const Komber = () => {
    return (
       <>
       <HOC headerTitle="Komunitas Bersama">
        <Navigation />
        <MainKomber />
       </HOC>
       </>
    );
}

export default Komber;