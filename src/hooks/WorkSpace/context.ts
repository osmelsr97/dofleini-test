import { createContext, Dispatch } from "react";
import { IState } from "./state";

interface IContextType {
    state: IState,
    dispatch: Dispatch<any>
}

export const workSpaceContext = createContext<IContextType | null>(null);
export default workSpaceContext;