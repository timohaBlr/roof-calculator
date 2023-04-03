import { DesignDataType} from "./types";
import {ConfigType, DataType} from "../../app/types";

export const setDesignDataAC = (designData: DesignDataType) => ({
    type: 'MATERIALS/SET_DESIGN_DATA',
    payload: {designData}
} as const)
export const setDataAC = (data: DataType[]) => ({
    type: 'MATERIALS/SET_DATA',
    payload: {data}
} as const)
export const setConfigAC = (config: ConfigType[]) => ({
    type: 'MATERIALS/SET_CONFIG',
    payload: {config}
} as const)