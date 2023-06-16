import { useEffect, useState } from "react";
import fields from "../data/fields.json";
import { StyledDiv, StyledCard } from "../components/StyledComponents";
import Checkbox from "../components/Checkbox";
import Counter from "../components/Counter";
import useLocalStorage from "../hooks/useLocalStorage";

function Budget() {

  // STATES
  const [fieldsValue, setFieldsValue] = useState(fields);
  const [total, setTotal] = useState(0);
  //const [fieldsValue, setFieldsValue] = useLocalStorage('fields', 0);
  const [randomNumber, setRandomNumber] = useLocalStorage('randomNumber', 10);
  setRandomNumber
  
  // EFFECTS
  useEffect(() => {
    calculateTotal();
  }, [fieldsValue])

  // LOGIC  
  const handleUpdateCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldsValueClone = [ ...fieldsValue ];
    const tempField = fieldsValueClone.find(item => item.id === parseInt(e.target.id));    
    if (tempField) tempField.checked = e.target.checked;
    
    setFieldsValue(fieldsValueClone);
  }
  
  const handleUpdateNumbers = (id: number, value: number) => {
    const fieldsValueClone = [ ...fieldsValue ];
    const tempField = fieldsValueClone.find(item => item.id === id); 
    
    if (tempField && value === 1) tempField.value = tempField.value + value;
    if (tempField && value === -1) {
      if (tempField.value > 1) tempField.value = tempField.value + value;
    }
    
    setFieldsValue(fieldsValueClone);
  }

  const calculateTotal = () => {
    let newTotal = 0; 
    let websiteTotal = 0; 
    fieldsValue.forEach(item => {
      if (item.type === "checkbox" && item.checked && !item.parentId) newTotal += item.value;
      if (item.type === "number" && item.value && item.parentId === 0 && fieldsValue[0].checked) {
        if (websiteTotal === 0) websiteTotal = 30;
        websiteTotal = websiteTotal * item.value;
      }
    })   
    setTotal(newTotal + websiteTotal);
  }
  
  return (
    <StyledCard>
      { fields.map((item) => {
        if (item.type === "checkbox") {          
          return (        
          <Checkbox 
              id={item.id}
              checked={item.checked}
              label={item.label}
              onChange={handleUpdateCheckbox}
          />
          );
        } else if (item.type === "number") {
          return (
            <StyledDiv visible={fieldsValue[0].checked ? true : false}>
              <Counter 
                id={item.id}
                label={item.label} 
                value={item.value}
                onChange={handleUpdateNumbers}
              />
            </StyledDiv>           
          );
        }        
    }
    )}
    <p>Total price: {total}</p>
    <div>
      <button onClick={(e) => {setRandomNumber(Math.floor(Math.random()*100)), e.preventDefault()}}> new value</button>
      <p>Random number keep in LocalStorage:</p>{randomNumber}
    </div>
    </StyledCard>
  )
}

export default Budget;