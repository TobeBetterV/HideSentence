import React, { useState, createContext } from "react";

export const RightContext = createContext();

function RightContextProvider(props) {
  const [isInput, setIsInput] = useState(true);
  const [rightIsHidden, setRightIsHidden] = useState(true);
  const [bottomIsHidden, setBottomIsHidden] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <RightContext.Provider
      value={{
        isInput,
        setIsInput,
        rightIsHidden,
        setRightIsHidden,
        bottomIsHidden,
        setBottomIsHidden,
        isChecked,
        setIsChecked
      }}
    >
      {props.children}
    </RightContext.Provider>
  );
}
export default RightContextProvider;
