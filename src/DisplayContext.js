import React, { useContext, useState } from "react";

const DisplayContext = React.createContext();
const DisplayUpdate = React.createContext();

export function useDisplay() {
  return useContext(DisplayContext);
}

export function useDisplayToggle() {
  return useContext(DisplayUpdate);
}

export function DisplayProvider({ children }) {
  const [display, isDisplayed] = useState(false);

  function toggleDisplay() {
    isDisplayed((previousDisplay) => !previousDisplay);
  }

  return (
    <DisplayContext.Provider value={display}>
      <DisplayUpdate.Provider value={toggleDisplay}>
        {children}
      </DisplayUpdate.Provider>
    </DisplayContext.Provider>
  );
}
