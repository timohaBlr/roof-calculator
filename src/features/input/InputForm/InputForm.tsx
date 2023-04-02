import React from 'react';
import SelectMaterial from "../SelectMaterial/SelectMaterial";
import SelectPipe from "../SelectPipe/SelectPipe";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import SelectFrame from "../SelectFrame/SelectFrame";
import useAppDispatch from "../../../common/hooks/useAppDispatch";
import {setDesignDataAC} from "../actions";
import useAppSelector from "../../../common/hooks/useAppSelector";
import {selectDesignData, selectLengthConfig, selectWidthConfig} from "../selectors";
import {roundByStep} from "../../../common/utils/mathUtils";

interface ErrorsI {
    material?: string
    pipe?: string
    width?: string
    length?: string
    frame?: string
}


const InputForm = () => {
    const dispatch = useAppDispatch()
    const widthConfig = useAppSelector(selectWidthConfig)
    const lengthConfig = useAppSelector(selectLengthConfig)
    const designData = useAppSelector(selectDesignData)

    return (
        <Formik
            initialValues={{
                name: designData.name,
                pipe: designData.pipe,
                width: '',
                length: '',
                frame: designData.frame,
            }}
            onSubmit={(values) => {
                values.width = roundByStep(+values.width, widthConfig!.step!)
                values.length = roundByStep(+values.length, lengthConfig!.step!)
                dispatch(setDesignDataAC({...values}))
                // alert(JSON.stringify(values, null, 2));
            }}
            validate={(values) => {
                const errors: ErrorsI = {}
                if (!values.width) {
                    errors.width = 'Required';
                } else if (!/^[0-9]*\.?[0-9]*$/.test(values.width)) {
                    errors.width = 'Only numbers';
                } else if (+(values.width) > widthConfig!.max!) {
                    errors.width = 'Слишком большая ширина'
                } else if (widthConfig!.min! > +(values.width)) {
                    errors.width = 'Слишком маленькая ширина'
                }
                if (!values.length) {
                    errors.length = 'Required';
                } else if (!/^[0-9]*\.?[0-9]*$/.test(values.length)) {
                    errors.length = 'Only numbers';
                } else if (+(values.length) > lengthConfig!.max!) {
                    errors.length = 'Слишком большая длина'
                } else if (lengthConfig!.min! > +(values.length)) {
                    errors.length = 'Слишком маленькая длина'
                }
                return errors
            }}
        >
            {({values}) => (
                <Form>
                    <SelectMaterial value={values.name}/>
                    <SelectPipe value={values.pipe}/>
                    <Field value={values.width} name={'width'}/>
                    <ErrorMessage name={'width'}/>
                    <Field value={values.length} name={'length'}/>
                    <ErrorMessage name={'length'}/>
                    <SelectFrame value={values.frame}/>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default InputForm;