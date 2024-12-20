import FilterBar from "../filterbar/filterbar";
import Navbar from "../navbar/navbar";

const PageContainer = ({ children }) => {
  return (
    <>
      <div className="h-full w-full bg-gray-800 space-y-5">
        <Navbar />
        <FilterBar />
        <div className="px-4 lg:px-10 ">{children}</div>
      </div>
    </>
  );
};

export default PageContainer;
