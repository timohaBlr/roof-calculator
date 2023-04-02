import {DesignDataType} from "../../features/input/types";

export const cellSizer = (designData: DesignDataType) => {
    const {width, length, frame, pipe} = designData
    const pipeSize = +pipe / 1000

    const cellWidth = (+width - pipeSize) / Math.ceil((+width - pipeSize) / +frame) - pipeSize
    const cellLength = (+length - pipeSize) / Math.ceil((+length - pipeSize) / +frame) - pipeSize
    return {
        cellWidth: Number(cellWidth.toFixed(2)),
        cellLength: Number(cellLength.toFixed(2))
    }
}

export const listsCounter = (square: number, designData: DesignDataType) => {
    return Math.ceil(square / parseFloat(designData.name.split(' ')[3]))
}

export const countPipesLength = (cellSize: { cellWidth: number, cellLength: number }, designData: DesignDataType) => {
    const {width, length, pipe} = designData
    const pipeSize = +pipe / 1000
    const lagsByLength = Math.floor(+length / cellSize.cellLength) + 1
    const innerLength = +length - 2 * pipeSize
    // console.log('lagsByLength: ', lagsByLength, 'innerLength: ', innerLength)
    const lagsByWidth = Math.floor(+width / cellSize.cellWidth) + 1
    const externalLagsByWidth = 2
    const innerLagsByWidth = lagsByWidth - externalLagsByWidth
    const innerWidth = +width - 2 * pipeSize - pipeSize * (lagsByLength - 2)
    return +width * externalLagsByWidth + innerLength * lagsByLength + innerLagsByWidth * innerWidth
    // console.log('totalLength: ', totalLength)
}
export const roundByStep = (count: number,step:number) => {
    return (Math.round(count / step) * step).toFixed(1)
}