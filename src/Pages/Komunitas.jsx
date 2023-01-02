import HOC from "../Components/HOC";
import Navigation from "../Components/Navigation";
import MainKomunitas from "../Contents/MainKomunitas";

function Komunitas() {
  return (
    <HOC headerTitle="Komunitas">
      <Navigation />
      <MainKomunitas />
    </HOC>
  );
}

export default Komunitas;
