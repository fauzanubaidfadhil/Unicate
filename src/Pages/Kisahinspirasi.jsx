import MainKisahinspirasi from "../Contents/MainKisahispirasi";
import Navigation from "../Components/Navigation";
import HOC from "../Components/HOC";

const Kisahinspirasi = () => {
  return (
    <HOC headerTitle="Aksi-Kisah Inspirasi">
      <div>
        <Navigation />
        <MainKisahinspirasi />
      </div>
    </HOC>
  );
};

export default Kisahinspirasi;
