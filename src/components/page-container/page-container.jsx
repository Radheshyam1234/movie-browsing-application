import FilterBar from "../filterbar/filterbar";

const PageContainer = ({ children }) => {
  return (
    <div className="h-full w-full p-4 lg:p-10 bg-gray-800">
      {/* <Navbar /> */}
      <FilterBar />
      {children}
    </div>
  );
};

export default PageContainer;
