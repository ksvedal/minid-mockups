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
        <div>
            <input
                className={"py-6 mb-4 w-11 h-11 bg-custom-light-grey text-black rounded-full border-custom-dark-grey-grey text-center dark:bg-custom-very-darker-grey dark:text-white"}
                type="text"
                placeholder={placeholder}
                maxLength={1}
                onChange={handleInputChange}
            />
        </div>
    );
  };

  export default SmallInputField