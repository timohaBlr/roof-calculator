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
        const value = e.currentTarget.value
        onChangeOption && onChangeOption(value)
    }


    const mappedOptions: any[] = options
        ? options.map((o) => (
            <label key={o.id } >
                <input
                    id={o.id}
                    type={'radio'}
                    checked={o.id === value}
                    name={name}
                    value={o.id}
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

    return <div className={s.list}>{mappedOptions}</div>
}

export default SuperRadio
