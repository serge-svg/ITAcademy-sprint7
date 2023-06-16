import { StyledCounter } from "../components/StyledComponents";

type CounterProps = {
    id: number;
    label: string;
    value: number;
    onChange: (id: number, value: number) => void;
}

const Counter = ({id, label, value, onChange }: CounterProps) => {
    return (
      <StyledCounter>
        <label>{label}</label>
        <div className="counter">
            <button onClick={() => onChange(id, -1)}>-</button>
            <input id={id.toString()} type="number" value={value} onChange={()=>{}} />
            <button onClick={() => onChange(id, +1)}>+</button>
        </div>
      </StyledCounter>
    )
}

export default Counter;