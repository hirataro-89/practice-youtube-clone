import { atom } from "jotai";
import type { User } from "../users/user.entity";

export const currentUserAtom = atom<User>();

// 基本の使い方
// const [currentUser, setCurrentUser] = useAtom(currentUserAtom);

// 値のみを取り出す
// const currentUser = useAtomValue(currentUserAtom);

// set関数のみを取り出す
// const setCurrentUser = useSetAtom(currentUserAtom);