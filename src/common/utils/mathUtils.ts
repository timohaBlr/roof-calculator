
export const cellSizer = (width: number, length: number, frameStep: number, pipeWidth: number) => {
    const pipeSize = pipeWidth / 1000

    const cellWidth = (width - pipeSize) / Math.ceil((width - pipeSize) / frameStep) - pipeSize
    const cellLength = (length - pipeSize) / Math.ceil((length - pipeSize) / frameStep) - pipeSize
    return {
        cellWidth: Number(cellWidth.toFixed(2)),
        cellLength: Number(cellLength.toFixed(2))
    }
}

export const listsCounter = (square: number, material: string) => {
    return Math.ceil(square / parseFloat(material.split(' ')[3]))
}

export const countPipesLength = (cellSize: { cellWidth: number, cellLength: number }, width: number, length: number, pipeWidth: number) => {
    const pipeSize = pipeWidth / 1000
    const lagsByLength = Math.floor(+length / cellSize.cellLength) + 1
    const innerLength = +length - 2 * pipeSize
    const lagsByWidth = Math.floor(+width / cellSize.cellWidth) + 1
    const externalLagsByWidth = 2
    const innerLagsByWidth = lagsByWidth - externalLagsByWidth
    const innerWidth = +width - 2 * pipeSize - pipeSize * (lagsByLength - 2)
    return +width * externalLagsByWidth + innerLength * lagsByLength + innerLagsByWidth * innerWidth
}
export const roundByStep = (count: number, step: number) => {
    return (Math.round(count / step) * step).toFixed(1)
}