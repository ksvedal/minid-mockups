const SmallInputField = ({ placeholder, pattern }) => {
    const handleInputChange = (event) => {
      const inputValue = event.target.value;
      const lastChar = inputValue.slice(-1);
      const regexPattern = new RegExp(pattern);
  
      if (!regexPattern.test(lastChar)) {
        event.target.value = inputValue.slice(0, -1); // Remove the last character from the input value
      }
    };
  
    return (
        <div className="py-3">
            <input
                className="py-1 px-1 w-11 h-11 rounded-full border border-gray-400 text-center bg-gray-200"
                type="text"
                placeholder={placeholder}
                maxLength={1}
                onChange={handleInputChange}
            />
        </div>
    );
  };

  export default SmallInputField