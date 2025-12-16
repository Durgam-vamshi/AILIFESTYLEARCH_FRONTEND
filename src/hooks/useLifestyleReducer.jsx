import { useReducer } from "react";

export const initialState = {
  bio: { name: "", age: "", height: "", weight: "" },
  sugarProfile: { consumesSugar: false, frequency: "" },
  staple: { primary: "", heavyRiceEater: false },
  meals: {
    breakfast: { food: "", time: "" },
    lunch: { food: "", time: "" },
    snacks: { food: "", time: "" },
    dinner: { food: "", time: "" }
  },
  sleep: { sleepTime: "", wakeTime: "" }
};

function reducer(state, action) {
  return {
    ...state,
    [action.section]: {
      ...state[action.section],
      ...action.payload
    }
  };
}

export function useLifestyleReducer() {
  return useReducer(reducer, initialState);
}
