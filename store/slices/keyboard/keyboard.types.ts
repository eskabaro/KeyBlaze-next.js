export type KeyboardTettersType = {
  id: string;
  letter: string;
  handFinger: {
    hand: "left" | "right" | string;
    finger: "p" | "i" | "m" | "a" | "c" | string;
  };
};

type CurrentWordsType = {
  index: number;
  current: string;
  entered: string;
};

type ErrorType = {
  keyId: string;
  status: "error" | "";
};

export interface IinitialState {
  words: string[];
  letters: KeyboardTettersType[];
  currentWords: CurrentWordsType;
  error: ErrorType;
  mistake: boolean;
}
