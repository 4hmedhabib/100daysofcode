const Card = ({ children }) => {
  return (
    <div
      id="comment"
      className="shadow-md shadow-lightGray bg-white rounded-md px-7 py-4 mx-4 sm:w-full flex items-center  relative"
    >
      {children}
    </div>
  );
};

export default Card;
