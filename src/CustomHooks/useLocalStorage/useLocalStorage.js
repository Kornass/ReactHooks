import { useState } from "react";
function useLocalStorage(key, initialValue) {
  // We use a callback funtion in the use state where we call getLocalStorageValue() function
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );
  // setValue() function is trigger when we execute a setter of our 'local storage state'
  const setValue = (value) => {
    // Checking if the argument passed is a function. If it is we call this function with current 'local storage state'. If not, we keep our function untouched
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;
    // Setting a new value to state (here we use useState hook)
    setLocalStorageValue(value);
    //Set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };
  return [localStorageValue, setValue];
}

function getLocalStorageValue(key, initialValue) {
  // if key exist in local storage we are going to overwrite existing values, otherwise we set value to initial value (second argument while calling useLocalStorage hook)
  const itemFromStorage = localStorage.getItem(key);
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}

export default useLocalStorage;
