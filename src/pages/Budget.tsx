import { useEffect, useState } from "react";
import fields from "../data/fields.json";
import { StyledDiv, StyledCard } from "../components/StyledComponents";
import Checkbox from "../components/Checkbox";
import Counter from "../components/Counter";

function Budget() {

  // STATES
  const fieldsLS = localStorage.getItem('fieldsLS');
  const [fieldsValue, setFieldsValue] = useState(fieldsLS ? JSON.parse(fieldsLS) : fields);
  const [total, setTotal] = useState(0);
  
  // INITIAL EFFECTS
  useEffect(() => {
    console.log('useEffect 1')
    getLocalStorage();
  }, [])
  
  // EFFECTS
  useEffect(() => {
    console.log('useEffect 0')
    calculateTotal();
    setLocalStorage();
  }, [fieldsValue])

  const setLocalStorage = () => {
    localStorage.setItem('fieldsLS', JSON.stringify(fieldsValue));
  };

  const getLocalStorage = () => {
    const LS = localStorage.getItem('fieldsLS');
    if (LS) setFieldsValue(JSON.parse(LS));
  };


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
    fieldsValue.forEach((item: { type: string; checked: any; parentId: number; value: number; }) => {
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
      { fieldsValue.map((item: { type: string; id: number; checked: boolean | undefined; label: string; value: number; }) => {
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
    </StyledCard>
  )
}

export default Budget;