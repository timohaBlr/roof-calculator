import React from 'react';
import useAppSelector from "../../common/hooks/useAppSelector";
import {
    selectDesignData, selectScrew,
    selectScrewValue,
    selectSquare,
    selectUsedMaterial,
    selectUsedPipePrice
} from "../input/selectors";
import {listsCounter, cellSizer, countPipesLength} from "../../common/utils/mathUtils";

const ResultView = () => {
    const square = useAppSelector(selectSquare)
    const designData = useAppSelector(selectDesignData)
    const material = useAppSelector(selectUsedMaterial)
    const usedPipePrice = useAppSelector(selectUsedPipePrice)
    const screwValue = useAppSelector(selectScrewValue)
    const screw = useAppSelector(selectScrew)

    const cellSize = cellSizer(designData)
    let cellWidth = isFinite(cellSize.cellWidth) ? cellSize.cellWidth : 0
    let cellLength = isFinite(cellSize.cellLength) ? cellSize.cellLength : 0

    const listsCount = listsCounter(square, designData)
    let materialPrice = 0
    if (material) {
        materialPrice = listsCount * material.price
    }
    const pipesCount = Math.ceil(countPipesLength(cellSize, designData))
    const pipePrice = pipesCount * usedPipePrice

    let screwsCount = 0
    if (screwValue && screwValue.value) {
        screwsCount = Math.ceil(square * +screwValue.value)
    }
    let screwsTotalPrice = 0
    if (screw && screw.price) {
        screwsTotalPrice = Math.ceil(screwsCount * screw.price)
    }
    const totalPrice = materialPrice + pipePrice + screwsTotalPrice

    return (
        <div>
            <p>Площадь изделия: {square.toFixed(2)} м2</p>
            <p>Расчетный размер ячейки: {cellWidth + ' X ' + cellLength}м</p>
            <table>
                <thead>
                <tr>
                    <th>Наименование</th>
                    <th>ед.</th>
                    <th>кол-во</th>
                    <th>сумма</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{designData.name}</td>
                    <td>м2</td>
                    <td>{listsCount}</td>
                    <td>{materialPrice}</td>
                </tr>
                <tr>
                    <td>Труба {designData.pipe}</td>
                    <td>мп</td>
                    <td>{pipesCount}</td>
                    <td>{pipePrice}</td>
                </tr>
                <tr>
                    <td>Саморез</td>
                    <td>шт</td>
                    <td>{screwsCount}</td>
                    <td>{screwsTotalPrice}</td>
                </tr>
                </tbody>
            </table>
            <p>Итого: {totalPrice}</p>
        </div>
    );
};

export default ResultView;