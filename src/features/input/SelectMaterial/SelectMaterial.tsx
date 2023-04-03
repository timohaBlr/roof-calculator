import React, {ChangeEvent, useState} from 'react';
import SuperRadio from "../../../common/components/SuperRadio/SuperRadio";
import {Field} from 'formik';
import useAppSelector from "../../../common/hooks/useAppSelector";
import {selectMaterials} from "../selectors";
import {formMaterialsOptions} from "../../../common/utils/stringUtils";
import s from './SelectMaterial.module.css'
import {ListType} from "../types";

type SelectMaterialPropsType = {
    value: string
    disabled:boolean
}

const SelectMaterial = (props: SelectMaterialPropsType) => {

    const materials = useAppSelector(selectMaterials)
    const [material, setMaterial] = useState('1')
    const [order, setOrder] = useState('reset')
    const options = [
        {id: '1', value: 'Все'},
        {id: '2', value: 'Пластик'},
        {id: '3', value: 'Металл'},
    ]

    const filteredMaterials = materials.filter(f => {
        if (material === '3') {
            return f.material === 'metal'
        } else if (material === '2') {
            return f.material === 'plastic'
        } else return f
    })


    const findThickness = (name: string) => {
        return Number(name.split(' ')[1])
    }
    const sorterFn = (a: ListType, b: ListType) => {
        if (order === '1') {
            return a.price - b.price
        } else if (order === '2') {
            return a.width! - b.width!
        } else
            return findThickness(a.name) - findThickness(b.name)
    }
    const sortedMaterials = filteredMaterials.sort(sorterFn)


    const orderBy = [
        {id: 1, value: 'Цене',},
        {id: 2, value: 'Ширине',},
        {id: 3, value: 'Толщине',},
    ]
    const mappedOrderBy = orderBy.map(m => <option key={m.id} value={m.id}>{m.value}</option>)

    const handleOrderBy = (e: ChangeEvent<HTMLSelectElement>) => {
        setOrder(e.currentTarget.value)
    }
    const mappedMaterials = sortedMaterials.map((m, index) => {
        const title = formMaterialsOptions(m.name)
        return <label className={s.label} key={index}>
            <Field type="radio" name="list" value={m.name}/>
            Лист {title[1]},
            материал: {m.material === 'metal' ? 'металл' : 'пластик'}. {title[2]} {title[3]}.
            Цена: {m.price}
        </label>
    })

    return (
        <div className={s.selectMaterial} style={{height: `${(materials.length + 1) * 21}px`}}>
            <div className={s.settings}>

                <div className={s.radioFilter}>
                    <span>Материал: </span>
                    <SuperRadio
                        name={'material'}
                        onChangeOption={setMaterial}
                        value={material}
                        options={options}
                    />
                </div>
                <div className={s.orderBy}>
                    <span>Сортировать по: </span>
                    <select value={order}
                            onChange={handleOrderBy}>
                        {mappedOrderBy}
                    </select>
                </div>
                <button type="submit" disabled={props.disabled}>Рассчитать</button>
            </div>
            <div className={s.mainSelect}>
                {mappedMaterials}
            </div>

        </div>
    );
};

export default SelectMaterial;