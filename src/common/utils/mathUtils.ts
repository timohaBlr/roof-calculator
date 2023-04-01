import {DesignDataType} from "../../features/input/types";

export const cellSizer = (designData: DesignDataType) => {
    const {width, length, frame, pipe} = designData
    const pipeSize = +pipe / 1000

    const cellWidth = (+width - pipeSize) / Math.ceil((+width - pipeSize) / +frame) - pipeSize
    const cellLength = (+length - pipeSize) / Math.ceil((+length - pipeSize) / +frame) - pipeSize
    return cellWidth.toFixed(2) + 'X' + cellLength.toFixed(2)
}

export const listsCounter = (square: number, designData: DesignDataType) => {
    return Math.ceil(square / parseFloat(designData.material.split(' ')[3]))
}
