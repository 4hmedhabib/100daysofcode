const Card = ({ children }) => {
  return (
    <div className="flex px-7 items-center py-4 shadow-md shadow-lightGray bg-white rounded-md">
      {children}
    </div>
  );
};

export default Card;
