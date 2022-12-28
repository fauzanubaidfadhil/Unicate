import HOC from "../Components/HOC";
import Navigation from "../Components/Navigation";
import MainKomunitas from "../Contents/MainKomunitas";
import CarouselKomunitas from "../Components/CarouselKomunitas";

function Komunitas() {
  return (
    <HOC headreTitle="Komunitas">
      <Navigation />
      <MainKomunitas />
      <CarouselKomunitas />
    </HOC>
  );
}

export default Komunitas;
