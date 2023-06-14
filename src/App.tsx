import { useEffect, useState } from "react";
import StyledDiv from "./StyledDiv";
import Checkbox from "./components/Checkbox";
import fields from "./data/fields.json";

function App() {

  // STATES
  const [fieldsValue, setFieldsValue] = useState(fields);
  const [total, setTotal] = useState(0);

  const [numberOfPages, setNumberOfPages] = useState(1);
  const [numberOfLanguages, setNumberOfLanguages] = useState(1);

  // EFFECTS
  useEffect(() => {
    calculateTotal();
  }, [fieldsValue])

  // LOGIC  
  const handleUpdateFieldsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleUpdateFieldsValue');
    
    const fieldsValueClone = [ ...fieldsValue ];
    const tempField = fieldsValueClone.find(item => item.id === parseInt(e.target.id));    

    if (tempField && e.target.type === 'checkbox') tempField.checked = e.target.checked;
    if (tempField && e.target.type === 'number') tempField.value = parseFloat(e.target.value);
    
    setFieldsValue(fieldsValueClone);
  }
  
  const calculateTotal = () => {
    console.log('calculateTotal');

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

  const handleIncreaseNumberOfPages = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setNumberOfPages(numberOfPages + 1);

    const fieldsValueClone = [ ...fieldsValue ];
    const tempField = fieldsValueClone.find(item => item.id === 1);
    if (tempField) tempField.value = tempField.value + 1;
    setFieldsValue(fieldsValueClone);
  }

  const handleDecreaseNumberOfPages = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (numberOfPages > 1) {
      setNumberOfPages(numberOfPages - 1);
    }

    const fieldsValueClone = [ ...fieldsValue ];
    const tempField = fieldsValueClone.find(item => item.id === 1);
    if (tempField) tempField.value = tempField.value - 1;
    setFieldsValue(fieldsValueClone);
  }

  const handleIncreaseNumberOfLanguages = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setNumberOfLanguages(numberOfLanguages + 1);

    const fieldsValueClone = [ ...fieldsValue ];
    const tempField = fieldsValueClone.find(item => item.id === 2);
    if (tempField) tempField.value = tempField.value + 1;
    setFieldsValue(fieldsValueClone);
  }

  const handleDecreaseNumberOfLanguages = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (numberOfLanguages > 1) {
      setNumberOfLanguages(numberOfLanguages - 1);
    }

    const fieldsValueClone = [ ...fieldsValue ];
    const tempField = fieldsValueClone.find(item => item.id === 2);
    if (tempField) tempField.value = tempField.value - 1;
    setFieldsValue(fieldsValueClone);
  }

  return (
    <>
      { fields.forEach((item) => {
        console.log('type: ' + item.type);
        if (item.type === "checkbox") {
          console.log('I am a checkbox');
          <>
          <Checkbox 
              key={1}
              id={1}
              label={"item.label"}
              checked={true}
              value={10}              
          />
          </>          
        }
      })           
      }  
    
        {/*
        <StyledDiv visible={fieldsValue[0].checked ? true : false}>
          <div>
            <label>Número de pàginas</label>
            <button onClick={(e) => handleDecreaseNumberOfPages(e)}>-</button>
            <input id="1" type="number" value={numberOfPages} onChange={handleUpdateFieldsValue} />
            <button onClick={(e) => handleIncreaseNumberOfPages(e)}>+</button>
          </div>
          <div>
            <label>Número d'idiomas</label>
            <button onClick={(e) => handleDecreaseNumberOfLanguages(e)}>-</button>
            <input id="2" type="number" value={numberOfLanguages} onChange={handleUpdateFieldsValue}/>
            <button onClick={(e) => handleIncreaseNumberOfLanguages(e)}>+</button>
          </div>
        </StyledDiv>
        <input id="3" type="checkbox" onChange={handleUpdateFieldsValue} /> Una consultoria SEO (300 €) <br />
        <input id="4" type="checkbox" onChange={handleUpdateFieldsValue} /> Una campanya de Google Ads (200 €) <br />
      <p>Preu:</p>{total}
    */}
    </>
  );
}

export default App;