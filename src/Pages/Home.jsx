import Navigation from "../Components/Navigation";
import Main from "../Contents/Main";
import HOC from "../Components/HOC";

function Home() {
  return (
    <HOC>
      <Navigation />
      <Main />
    </HOC>
  );
}

export default Home;
