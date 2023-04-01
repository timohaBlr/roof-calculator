import React from 'react';
import SelectMaterial from "../SelectMaterial/SelectMaterial";
import SelectPipe from "../SelectPipe/SelectPipe";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import SelectFrame from "../SelectFrame/SelectFrame";
import useAppDispatch from "../../../common/hooks/useAppDispatch";
import {setUsedMaterialAC, setDesignDataAC} from "../actions";
import useAppSelector from "../../../common/hooks/useAppSelector";
import {selectLength, selectWidth} from "../selectors";

interface ErrorsI {
    material?: string
    pipe?: string
    width?: string
    length?: string
    frame?: string
}


const InputForm = () => {
    const dispatch = useAppDispatch()
    const width = useAppSelector(selectWidth)
    const length = useAppSelector(selectLength)


    return (
        <Formik
            initialValues={{
                material: 'Лист-1 0.5 ширина 1.8м',
                pipe: '20',
                width: '',
                length: '',
                frame: '1.2',
            }}
            onSubmit={(values) => {
                dispatch(setUsedMaterialAC(values.material))
                dispatch(setDesignDataAC({...values}))
                // alert(JSON.stringify(values, null, 2));
            }}
            validate={(values) => {
                const errors: ErrorsI = {}
                if (!values.width) {
                    errors.width = 'Required';
                } else if (!/^\d+$/.test(values.width)) {
                    errors.width = 'Only numbers';
                } else if (+(values.width) > width!.max!) {
                    errors.width = 'Слишком большая ширина'
                } else if (width!.min! > +(values.width)) {
                    errors.width = 'Слишком маленькая ширина'
                }
                if (!values.length) {
                    errors.length = 'Required';
                } else if (!/^\d+$/.test(values.length)) {
                    errors.length = 'Only numbers';
                } else if (+(values.length) > length!.max!) {
                    errors.length = 'Слишком большая длина'
                } else if (length!.min! > +(values.length)) {
                    errors.length = 'Слишком маленькая длина'
                }
                return errors
            }}
        >
            {({values}) => (
                <Form>
                    <SelectMaterial value={values.material}/>
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