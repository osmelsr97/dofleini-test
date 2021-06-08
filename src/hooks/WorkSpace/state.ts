import { COLOR_PALETTE } from "../../lib/Constants";

export interface IState {
    themeColor: string,
    workSpaceName: string,
    workSpaceUrl: string,
    workSpacePersonQty: number,
    workSpacePrivacy: string
}

export const initialState: IState = {
    themeColor: COLOR_PALETTE.dodgerBlue,
    workSpaceName: '',
    workSpaceUrl: '',
    workSpacePersonQty: 1,
    workSpacePrivacy: 'private'
}