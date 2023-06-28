const SmallInputField = ({ placeholder, pattern }) => {
    const { theme, changeTheme } = useContext(ThemeContext);

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
                className={themes[theme].smallInput}
                type="text"
                placeholder={placeholder}
                maxLength={1}
                onChange={handleInputChange}
            />
        </div>
    );
  };

  export default SmallInputField