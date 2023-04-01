import React from 'react';
import SelectMaterial from "../SelectMaterial/SelectMaterial";
import SelectPipe from "../SelectPipe/SelectPipe";
import {Formik, Field, Form} from 'formik';
import SelectFrame from "../SelectFrame/SelectFrame";

const InputForm = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    material: 'Лист-1 0.5 ширина 1.8м, 12',
                    pipe: 'Труба 20х20',
                    width: '',
                    length: '',
                    frame: 'light',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({values}) => (
                    <Form>
                        <SelectPipe value={values.pipe}/>
                        <SelectMaterial value={values.material}/>
                        <Field value={values.width} name={'width'}/>
                        <Field value={values.length} name={'length'}/>
                        <SelectFrame value={values.frame}/>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>

        </div>
    );
};

export default InputForm;