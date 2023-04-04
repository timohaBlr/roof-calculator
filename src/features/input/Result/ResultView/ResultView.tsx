import React from 'react';
import s from './ResultView.module.css'
import {ActiveCartItemType} from "../../../cart/types";

type ResultViewPropsType = {
    activeItem: ActiveCartItemType
}

const ResultView: React.FC<ResultViewPropsType> = ({activeItem}) => {

    let cellWidth = activeItem.cellSize.cellWidth
    let cellLength = activeItem.cellSize.cellLength


    return (
        <div>
            <h5>Площадь изделия: {activeItem.square} м2</h5>
            <h6>Расчетный размер ячейки: {cellWidth + ' X ' + cellLength}м</h6>
            <table className={s.table}>
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
                    <td>{activeItem.list.name}</td>
                    <td>м2</td>
                    <td>{activeItem.listsCount}</td>
                    <td>{activeItem.listsPrice}</td>
                </tr>
                <tr>
                    <td>Труба {activeItem.pipe.width}</td>
                    <td>мп</td>
                    <td>{activeItem.pipesCount}</td>
                    <td>{activeItem.pipesPrice}</td>
                </tr>
                <tr>
                    <td>Саморез</td>
                    <td>шт</td>
                    <td>{activeItem.fixingsCount}</td>
                    <td>{activeItem.fixingsCount}</td>
                </tr>
                </tbody>
            </table>
            <h5>Итого: {activeItem.totalPrice}</h5>

        </div>
    );
};

export default ResultView;