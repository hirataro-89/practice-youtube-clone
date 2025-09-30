import { atom, useAtom } from "jotai";

export type FlashMessageType = 'success' | 'error';

export interface FlashMessage {
  type: FlashMessageType;
  content: string;
}

const flashMessageAtom = atom<FlashMessage | null>(null);

export const useFlashMessage = () => {
  const [message, setMessage] = useAtom(flashMessageAtom);

  const showMessage = (content: string, type: FlashMessageType) => {
    setMessage({ content, type });

    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  return { message, showMessage };
};
