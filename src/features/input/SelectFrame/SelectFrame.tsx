import {Field} from 'formik';
import React from 'react';
import {frames} from "../../../common/utils/jsonToJs";

type SelectFramePropsType = {
    value: string
}
const SelectFrame = (props: SelectFramePropsType) => {

    const mappedFrames = frames.map((m, index) => <option key={index} value={m.key}>{m.name}</option>)
    return (
        <Field name="frame" as="select" value={props.value}>
            {mappedFrames}
        </Field>
    );
};

export default SelectFrame;