import React from 'react';
import useAppSelector from "../../common/hooks/useAppSelector";
import {selectDesignData, selectMaterials, selectSquare, selectUsedMaterial} from "../input/selectors";
import {listsCounter, cellSizer} from "../../common/utils/mathUtils";

const ResultView = () => {
    const square = useAppSelector(selectSquare)
    const designData = useAppSelector(selectDesignData)
    const materials = useAppSelector(selectMaterials)
    const material = useAppSelector(selectUsedMaterial)

    const size = cellSizer(designData)
    const listsCount = listsCounter(square, designData)
    // const material = materials.find(f => f.name === designData.material)
    let materialPrice = 0
    if (material) {
        materialPrice = listsCount * material.price
    }

    return (
        <div>
            <p>Площадь изделия: {square} м2</p>
            <p>Расчетный размер ячейки: {size}м</p>
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
                    <td>{designData.material}</td>
                    <td>м2</td>
                    <td>{listsCount}</td>
                    <td>{materialPrice}</td>
                </tr>
                <tr>
                    <td>Труба {designData.pipe}</td>
                    <td>мп</td>
                    <td>Mexico</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Саморез</td>
                    <td>шт</td>
                    <td>Саморез</td>
                    <td>Саморез</td>
                </tr>
                </tbody>
            </table>
            <p>Итого: </p>
        </div>
    );
};

export default ResultView;