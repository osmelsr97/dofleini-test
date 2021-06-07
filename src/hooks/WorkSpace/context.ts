import { createContext, Dispatch } from "react";
import { IActionTypes } from "./reducer/action/actionTypes";
import { IState } from "./state";

interface IContextType {
    state: IState,
    dispatch: Dispatch<IActionTypes>
}

export const workSpaceContext = createContext<IContextType | null>(null);
export default workSpaceContext;