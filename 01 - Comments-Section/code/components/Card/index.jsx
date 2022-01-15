const Card = ({ children }) => {
  return (
    <div
      id="comment"
      className="shadow-md shadow-lightGray bg-white rounded-md px-7 py-4 lg:w-2/3 flex items-center"
    >
      {children}
    </div>
  );
};

export default Card;
