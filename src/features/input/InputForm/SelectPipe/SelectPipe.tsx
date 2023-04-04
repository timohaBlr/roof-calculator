import {Field} from 'formik';
import React from 'react';
import useAppSelector from "../../../../common/hooks/useAppSelector";
import {selectPipes} from "../../selectors";

type SelectPipePropsType = {
    value: string
}
const SelectPipe = (props: SelectPipePropsType) => {

    const pipes = useAppSelector(selectPipes)
    const mappedPipes = pipes.map((m, index) => <option key={index} value={m.width}>{m.name}</option>)
    return (
        <Field name="pipe" as="select" value={props.value}>
            {mappedPipes}
        </Field>
    );
};

export default SelectPipe;