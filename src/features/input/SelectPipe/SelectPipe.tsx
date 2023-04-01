import {Field} from 'formik';
import React from 'react';
import {pipes} from "../../../common/utils/jsonToJs";

type SelectPipePropsType = {
    value: string
}
const SelectPipe = (props: SelectPipePropsType) => {

    const mappedPipes = pipes.map((m, index) => <option key={index} value={m.width}>{m.name}</option>)
    return (
        <Field name="pipe" as="select" value={props.value}>
            {mappedPipes}
        </Field>
    );
};

export default SelectPipe;