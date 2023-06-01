type CheckboxOption = {
    label: string,
    value: boolean
}

type CheckboxProps = {
    options: CheckboxOption[],
    value: CheckboxOption
    onChange: (value: CheckboxOption | undefined) => void
}

//export function Checkbox({ options, value, onChange }: CheckboxProps) {}