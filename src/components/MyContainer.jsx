
const MyContainer = ({ className , children }) => {
  return (
    <div>
      <div className={`${className} container mx-auto my-5 `}   >
        {children}
      </div>
    </div>
  );
};

export default MyContainer;