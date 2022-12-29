import HOC from "../Components/HOC";
import Navigation from "../Components/Navigation";
import MainKomunitas from "../Contents/MainKomunitas";

function Komunitas() {
  return (
    <HOC headreTitle="Komunitas">
      <Navigation />
      <MainKomunitas />
    </HOC>
  );
}

export default Komunitas;
