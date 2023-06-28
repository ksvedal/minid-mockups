const Button = ({ onClick, children }) => {
  return (
    <button
        className={"p-3 m-1 bg-emerald-600 rounded-full text-white w-full font-semibold"}
        onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
