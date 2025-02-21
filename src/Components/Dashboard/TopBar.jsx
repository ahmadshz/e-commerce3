const TopBar = ({ setIsOpen, isOpen }) => {
  return (
    <div className="mt-10 mb-16 lg:mb-24 px-4">
      {/* عنوان الترحيب مع النص */}
      <h1 className="text-xl lg:text-2xl font-bold text-gray-800 ">
        مرحبًا وأهلًا وسهلًا، دلال!
      </h1>
    </div>
  );
};

export default TopBar;
