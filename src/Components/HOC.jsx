import { Helmet } from "react-helmet-async";

const HOC = ({ children, headreTitle = "Unicate" }) => {
  return (
    <>
      <Helmet>
        <title>{headreTitle}</title>
      </Helmet>
      {children}
    </>
  );
};

export default HOC;
