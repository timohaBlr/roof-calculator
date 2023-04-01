import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: any[]
    onChangeOption?: (option: string) => void

}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
                                                       id,
                                                       name,
                                                       options,
                                                       value,
                                                       onChange,
                                                       onChangeOption,
                                                       ...restProps
                                                   }) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // const value = Number(e.currentTarget.value)
        const value = e.currentTarget.value
        onChangeOption && onChangeOption(value)
    }


    const mappedOptions: any[] = options
        ? options.map((o) => (
            <label key={o.id } className={s.label}>
                <input
                    id={o.id}
                    type={'radio'}
                    checked={o.value === value}
                    name={name}
                    value={o.value}
                    onChange={onChangeCallback}
                    {...restProps}
                />
                <span
                >
                      {o.value}
                  </span>
            </label>
        ))
        : []

    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
