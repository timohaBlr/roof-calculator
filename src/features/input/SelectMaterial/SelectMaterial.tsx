import React, {ChangeEvent, useState} from 'react';
import {materials} from "../../../common/utils/jsonToJs";
import SuperRadio from "../../../common/components/SuperRadio/SuperRadio";
import { Field } from 'formik';

type SelectMaterialPropsType = {
    value: string
}

const SelectMaterial = (props:SelectMaterialPropsType) => {

    const [material, setMaterial] = useState('All')
    const [order, setOrder] = useState('reset')
    const options = [
        {id: 1, value: 'All'},
        {id: 2, value: 'Plastic'},
        {id: 3, value: 'Metal'},
    ]

    const filteredMaterials = materials.filter(f => {
        if (material === 'Metal') {
            return f.material === 'metal'
        } else if (material === 'Plastic') {
            return f.material === 'plastic'
        } else return f
    })



    const findThickness = (name: string) => {
        return Number(name.split(' ')[1])
    }
    const sorterFn = (a: any, b: any) => {
        if (order === 'Price') {
            return a.price - b.price
        } else if (order === 'Width') {
            return a.width - b.width
        } else if (order === 'Thickness') {
            return findThickness(a.name) - findThickness(b.name)
        } else return 0
    }
    const materialsToRender = filteredMaterials.sort(sorterFn)

    const mappedMaterials = materialsToRender.map(m => <option key={m.name}>{m.name}, {m.price}</option>)
    const orderBy = [
        {id: 1, value: 'Price',},
        {id: 2, value: 'Width',},
        {id: 3, value: 'Thickness',},
        {id: 4, value: 'reset',},
    ]
    const mappedOrderBy = orderBy.map(m => <option key={m.id}>{m.value}</option>)

    const handleOrderBy = (e: ChangeEvent<HTMLSelectElement>) => {
        setOrder(e.currentTarget.value)
    }

    return (
        <div>
            <SuperRadio
                name={'material'}
                onChangeOption={setMaterial}
                value={material}
                options={options}
            />
            <select value={order} onChange={handleOrderBy}>
                {mappedOrderBy}
            </select>
            <Field name={'material'} as={'select'} value={props.value}>
                {mappedMaterials}
            </Field>
        </div>
    );
};

export default SelectMaterial;