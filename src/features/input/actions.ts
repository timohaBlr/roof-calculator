import { DesignDataType} from "./types";
import {ConfigType, DataType} from "../../app/types";

export const setDesignDataAC = (designData: DesignDataType) => ({
    type: 'CALCULATOR/SET_DESIGN_DATA',
    payload: {designData}
} as const)
export const setDataAC = (data: DataType[]) => ({
    type: 'CALCULATOR/SET_DATA',
    payload: {data}
} as const)
export const setConfigAC = (config: ConfigType[]) => ({
    type: 'CALCULATOR/SET_CONFIG',
    payload: {config}
} as const)