type CheckboxProps = {
    id: number;
    label: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ id, label, checked, onChange }: CheckboxProps) => {
    return (
        <div>
          <input 
            id={id.toString()}
            type="checkbox"
            checked={checked}
            onChange={onChange}
          />
          {label}
        </div>
    );
}

export default Checkbox;