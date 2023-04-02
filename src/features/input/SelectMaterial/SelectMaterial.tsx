import React, {ChangeEvent, useState} from 'react';
import SuperRadio from "../../../common/components/SuperRadio/SuperRadio";
import {Field} from 'formik';
import useAppSelector from "../../../common/hooks/useAppSelector";
import {selectMaterials} from "../selectors";
import {DataType} from "../types";

type SelectMaterialPropsType = {
    value: string
}

const SelectMaterial = (props: SelectMaterialPropsType) => {

    const materials = useAppSelector(selectMaterials)
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
    const sorterFn = (a: DataType, b: DataType) => {
        if (order === 'Price') {
            return a.price - b.price
        } else if (order === 'Width') {
            return a.width! - b.width!
        } else if (order === 'Thickness') {
            return findThickness(a.name) - findThickness(b.name)
        } else return 0
    }
    const sortedMaterials = filteredMaterials.sort(sorterFn)

    const mappedMaterials = sortedMaterials.map((m, index) => <option key={index} value={m.name}>{m.name},
        Price: {m.price}</option>)
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
            <Field name={'name'} as={'select'} value={props.value}>
                {mappedMaterials}
            </Field>
        </div>
    );
};

export default SelectMaterial;