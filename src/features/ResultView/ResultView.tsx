import React from 'react';
import useAppSelector from "../../common/hooks/useAppSelector";
import s from './ResultView.module.css'
import {selectActiveItem} from "../basket/selectors";

const ResultView = () => {
    const activeItem = useAppSelector(selectActiveItem)

    let cellWidth = activeItem.cellSize.cellWidth
    let cellLength = activeItem.cellSize.cellLength


    return (
        <div>
            <p>Площадь изделия: {activeItem.square} м2</p>
            <p>Расчетный размер ячейки: {cellWidth + ' X ' + cellLength}м</p>
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
            <p>Итого: {activeItem.totalPrice}</p>
        </div>
    );
};

export default ResultView;