import React, { createContext } from "react";
import StoryStore from "./StoryStore";

const storyStoreInstance = new StoryStore();

export const TistoryContext = createContext();

const TistoryContextProvider = ({ children }) => {
  return (
    <TistoryContext.Provider value={storyStoreInstance}>
      {children}
    </TistoryContext.Provider>
  );
};

export default TistoryContextProvider;