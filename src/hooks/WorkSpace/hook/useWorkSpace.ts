import { Dispatch, useContext } from "react";
import workSpaceContext from "../context";
import { IActionTypes } from "../reducer/action/actionTypes";
import { IState } from "../state";

interface IWorkSpace extends IState {
    dispatch: Dispatch<IActionTypes>
}

const useWorkSpace = (): IWorkSpace => {
    const context = useContext(workSpaceContext);
    if (!context) {
        throw new Error('Only can use `usePOSLogin` inside a valid LoginProvider');
    }

    return {
        themeColor: context.state.themeColor,
        workSpaceName: context.state.workSpaceName,
        workSpaceUrl: context.state.workSpaceUrl,
        workSpacePersonQty: context.state.workSpacePersonQty,
        workSpacePrivacy: context.state.workSpacePrivacy,
        dispatch: context.dispatch
    }
}

export default useWorkSpace;