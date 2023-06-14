type CheckboxProps = {
    id: number,
    label: string,
    checked: boolean,
    value: number,
    //handleUpdateFieldsValue: (e: React.ChangeEvent<HTMLInputElement>) => void    
}

const Checkbox = ({ id, label, checked, value }: CheckboxProps) => {
    return (
        <>
          <input 
            id={id.toString()}
            type="checkbox"
            checked={checked}
            //onChange={(e) => handleUpdateFieldsValue(e)}
          />
          <label>
              {label} {value}
          </label>
        </>
    );
};

export default Checkbox;