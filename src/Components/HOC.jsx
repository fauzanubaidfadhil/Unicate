import { Helmet } from "react-helmet-async";

const HOC = ({ children, headerTitle = "Unicate" }) => {
  return (
    <>
      <Helmet>
        <title>{headerTitle}</title>
      </Helmet>
      {children}
    </>
  );
};

export default HOC;
