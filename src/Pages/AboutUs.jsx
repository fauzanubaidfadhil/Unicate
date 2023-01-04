import MainAboutUs from "../Contents/MainAboutUs";
import Navigation from "../Components/Navigation";
import HOC from "../Components/HOC";

const AboutUs = () => {
  return (
    <HOC headerTitle="About us">
      <div>
        <Navigation />
        <MainAboutUs />
      </div>
    </HOC>
  );
};

export default AboutUs;
