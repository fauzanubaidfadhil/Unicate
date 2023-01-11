import MainKisahinspirasi from "../Contents/MainKisahispirasi";
import Navigation from "../Components/Navigation";
import HOC from "../Components/HOC";
import Footer from "../Components/Footer";

const Kisahinspirasi = () => {
  return (
    <HOC headerTitle="Aksi-Kisah Inspirasi">
      <div>
        <Navigation />
        <MainKisahinspirasi />
        <Footer />
      </div>
    </HOC>
  );
};

export default Kisahinspirasi;
