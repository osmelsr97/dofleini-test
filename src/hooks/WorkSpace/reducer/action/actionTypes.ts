export type TAction = "CHANGE_THEME_COLOR" | "CHANGE_WORKSPACE_NAME" |
    "CHANGE_WORKSPACE_URL" | "CHANGE_WORKSPACE_PERSONS_QTY" | "CHANGE_WORKSPACE_PRIVACY";

export interface IActionTypes {
    type: TAction,
    themeColor?: string,
    workSpaceName?: string,
    workSpaceUrl?: string,
    workSpacePersonQty?: number,
    workSpacePrivacy?: string
};