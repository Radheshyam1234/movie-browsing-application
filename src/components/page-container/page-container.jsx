import FilterBar from "../filterbar/filterbar";
import Navbar from "../navbar/navbar";

const PageContainer = ({ children }) => {
  return (
    <>
      <div className="space-y-5">
        <Navbar />
        {window?.location?.pathname === "/" && <FilterBar />}
        <div className="px-4 lg:px-10 ">{children}</div>
      </div>
    </>
  );
};

export default PageContainer;
