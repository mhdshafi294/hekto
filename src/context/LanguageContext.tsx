"use client";
import { createContext, useReducer } from "react";

type StateType = {
  lang: string;
};

//Discriminated Unions
type ArabicType = {
  type: "ARABIC";
};
type EnglishType = {
  type: "ENGLISH";
};

type ActionType = ArabicType | EnglishType;

const INITIAL_STATE = {
  lang: "English",
};

export const LanguageContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "ARABIC":
      return {
        lang: "Arabic",
      };
    case "ENGLISH":
      return {
        lang: "English",
      };

    default:
      return state;
  }
};

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <LanguageContext.Provider value={{ state, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};
