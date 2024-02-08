import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IinitialState } from "./keyboard.types";
import words from "@/data/words.json";
import keysBoard from "@/data/keys.json";

const initialState: IinitialState = {
  words: words,
  letters: keysBoard,
  currentWords: {
    index: 0,
    current: "",
    entered: "",
  },
  error: {
    keyId: "",
    status: "",
  },
  mistake: false,
};

const keyboard = createSlice({
  name: "keyboard",
  initialState,
  reducers: {
    enterSymbol: (state, { payload }: PayloadAction<string>) => {
      const { currentWords, error } = state;

      if (currentWords.current[currentWords.index] === payload) {
        currentWords.index = currentWords.index + 1;
        currentWords.entered = currentWords.entered + payload;
        error.status = "";
      } else {
        error.status = "error";
      }
    },
    generateWords: ({ currentWords, words }) => {
      const randomIndex = Math.floor(Math.random() * words.length);

      if (currentWords.entered) {
        currentWords.entered = "";
        currentWords.index = 0;
      }

      currentWords.current = Array(2).fill(words[randomIndex]).join(" ");
    },
    setMis: (state, { payload }: PayloadAction<boolean>) => {
      state.mistake = payload;
    },
  },
});

export const { generateWords, enterSymbol, setMis } = keyboard.actions;

export default keyboard.reducer;
