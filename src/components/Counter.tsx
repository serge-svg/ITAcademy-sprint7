type CounterProps = {
    id: number;
    label: string;
    value: number;
    onChange: (id: number, value: number) => void;
}

const Counter = ({id, label, value, onChange }: CounterProps) => {
    return (
        <div>
        <label>{label}</label>
        <button onClick={() => onChange(id, -1)}>-</button>
        <input id={id.toString()} type="number" value={value} onChange={()=>{}} />
        <button onClick={() => onChange(id, +1)}>+</button>
      </div>
    )
}

export default Counter;