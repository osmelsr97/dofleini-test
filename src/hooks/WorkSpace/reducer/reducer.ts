import { IState } from "../state";
import { IActionTypes } from "./action/actionTypes";

const reducer = (state: IState, action: IActionTypes): IState => {
    switch (action.type) {
        case "CHANGE_THEME_COLOR":
            return {
                ...state,
                themeColor: action.themeColor
            }
        case "CHANGE_WORKSPACE_NAME":
            return {
                ...state,
                workSpaceName: action.workSpaceName
            }
        case "CHANGE_WORKSPACE_URL":
            return {
                ...state,
                workSpaceUrl: action.workSpaceUrl
            }
        case "CHANGE_WORKSPACE_PERSONS_QTY":
            return {
                ...state,
                workSpacePersonQty: action.workSpacePersonQty
            }
        case "CHANGE_WORKSPACE_PRIVACY":
            return {
                ...state,
                workSpacePrivacy: action.workSpacePrivacy
            }
        default:
            return state;
    }
}

export default reducer;