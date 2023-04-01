import React from 'react';
import SelectMaterial from "../SelectMaterial/SelectMaterial";
import SelectPipe from "../SelectPipe/SelectPipe";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import SelectFrame from "../SelectFrame/SelectFrame";
import {length, width} from "../../../common/utils/jsonToJs";

interface ErrorrsI {
    material?: string
    pipe?: string
    width?: string
    length?: string
    frame?: string
}


const InputForm = () => {

    return (
        <Formik
            initialValues={{
                material: 'Лист-1 0.5 ширина 1.8м, 12',
                pipe: 'Труба 20х20',
                width: '',
                length: '',
                frame: 'light',
            }}
            onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
            }}
            validate={(values) => {
                const errors: ErrorrsI = {}
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
                    <SelectPipe value={values.pipe}/>
                    <SelectMaterial value={values.material}/>
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