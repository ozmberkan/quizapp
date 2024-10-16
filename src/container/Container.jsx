const Container = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen container mx-auto p-3 gap-y-5">
      {children}
    </div>
  );
};

export default Container;
