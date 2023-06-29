const Button = ({ onClick}) => {
  return (
    <button
        className={"p-3 my-2 dark:bg-custom-yellow dark:text-black border-1 bg-custom-blue rounded-full text-white w-full font-semibold"}
        onClick={onClick}
    >
      Neste
    </button>
  );
};

export default Button;
