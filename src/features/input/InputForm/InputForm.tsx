import React from 'react';
import SelectMaterial from "../SelectMaterial/SelectMaterial";
import SelectPipe from "../SelectPipe/SelectPipe";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import SelectFrame from "../SelectFrame/SelectFrame";
import useAppDispatch from "../../../common/hooks/useAppDispatch";
import {setDesignDataAC} from "../actions";
import useAppSelector from "../../../common/hooks/useAppSelector";
import {selectDesignData, selectLengthConfig, selectWidthFromConfig} from "../selectors";
import {roundByStep} from "../../../common/utils/mathUtils";
import s from './InputForm.module.css'
import {setBasketActiveItemTC} from "../../basket/basketReducer";


interface ErrorsI {
    name?: string
    pipe?: string
    width?: string
    length?: string
    frame?: string
}


const InputForm = () => {
    const dispatch = useAppDispatch()
    const widthConfig = useAppSelector(selectWidthFromConfig)
    const lengthConfig = useAppSelector(selectLengthConfig)
    const designData = useAppSelector(selectDesignData)

    return (
        <Formik
            initialValues={{
                list: designData.list,
                pipe: designData.pipe,
                width: '',
                length: '',
                frame: designData.frame,
            }}
            onSubmit={(values) => {
                values.width = roundByStep(+values.width, widthConfig!.step!)
                values.length = roundByStep(+values.length, lengthConfig!.step!)
                dispatch(setDesignDataAC({...values}))
                dispatch(setBasketActiveItemTC({...values}))
                // alert(JSON.stringify(values, null, 2));
            }}
            validate={(values) => {
                const errors: ErrorsI = {}
                if (!values.width) {
                    errors.width = 'Укажите ширину.';
                } else if (!/^[0-9]*\.?[0-9]*$/.test(values.width)) {
                    errors.width = 'Укажите в цифрах';
                } else if (+(values.width) > widthConfig!.max!) {
                    errors.width = `Не более ${widthConfig!.max!}м.`
                } else if (widthConfig!.min! > +(values.width)) {
                    errors.width = `Не менее ${widthConfig!.min!}м.`
                }
                if (!values.length) {
                    errors.length = 'Укажите длину';
                } else if (!/^[0-9]*\.?[0-9]*$/.test(values.length)) {
                    errors.length = 'Укажите в цифрах';
                } else if (+(values.length) > lengthConfig!.max!) {
                    errors.length = `Не более ${lengthConfig!.max!}м.`
                } else if (lengthConfig!.min! > +(values.length)) {
                    errors.length = `Не менее ${lengthConfig!.min!}м.`
                }
                return errors
            }}
        >
            {({values, errors}) => (
                <Form className={s.form}>
                    <div className={s.size}>
                        <div>
                            <div>
                                <span>Длина: </span>
                                <Field value={values.length} name={'length'} placeholder={'Длина'}/>
                            </div>
                            <span className={s.error}> <ErrorMessage name={'length'}/></span>
                        </div>
                        <div>
                            <div>
                                <span>Ширина: </span>
                                <Field value={values.width} name={'width'} placeholder={'Ширина'}/>
                            </div>
                            <span className={s.error}><ErrorMessage name={'width'}/></span>
                        </div>
                    </div>
                    <div className={s.pipeFrame}>
                        <div className={s.pipe}>
                            <span>Диаметр трубы: </span>
                            <SelectPipe value={values.pipe}/>
                        </div>
                        <div className={s.frame}>
                            <span>Прочность: </span>
                            <SelectFrame value={values.frame}/>
                        </div>
                    </div>
                    <div className={s.material}>
                        <SelectMaterial value={values.list} disabled={Boolean(errors.length || errors.width)}/>
                    </div>

                </Form>
            )}
        </Formik>
    );
};

export default InputForm;