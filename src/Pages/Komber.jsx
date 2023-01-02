import MainKomber from "../Contents/MainKomber";
import Navslogin from "../Components/Navslogin";
import HOC from "../Components/HOC";

const Komber = () => {
    return (
       <>
       <HOC headerTitle="Komunitas Bersama">
        <Navslogin />
        <MainKomber />
       </HOC>
       </>
    );
}

export default Komber;