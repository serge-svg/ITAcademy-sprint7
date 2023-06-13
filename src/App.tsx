import { useEffect, useState } from "react";
import StyledDiv from "./StyledDiv";
import fields from "./data/fields.json";

function App() {

  type fieldsType = {
    id: number;
    label: string;
    type: string;
    value: boolean | string | number;
    extraValue?: boolean | string | number;
    childs?: [];
  }

    // STATES
  const [fieldsValue, setFieldsValue] = useState(fields);
  const [total, setTotal] = useState(0)

  const [numberOfPages, setNumberOfPages] = useState(1)
  const [numberOfLanguages, setNumberOfLanguages] = useState(1)

    // EFFECTS
  useEffect(() => {
    calculateTotal();
    console.log(fieldsValue);    
  }, [fieldsValue])

  // LOGIC  
  const updateCheckboxFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldsValueClone = [ ...fieldsValue ];
    const tempField = fieldsValueClone.find(item => item.id === parseInt(e.target.id));    
    if (tempField && e.target.type === 'checkbox') tempField.value = e.target.checked;
    if (tempField && e.target.type === 'checkbox') tempField.value = e.target.checked;
    setFieldsValue(fieldsValueClone);
    calculateTotal();
  }
  
  const calculateTotal = () => {
    let newTotal = 0; 
    fieldsValue.forEach(item => {
      if (item.type === "checkbox" && item.value && !item.childs) newTotal += item.extraValue;
      if (item.type === "checkbox" && item.value && item.childs) {
        let pagesAndLanguages = 1;
        item.childs.forEach(child => pagesAndLanguages = pagesAndLanguages * child.value);
        newTotal = newTotal + pagesAndLanguages * 30;
      }
    })   
    setTotal(newTotal);
    console.log(newTotal);
  }

  const handleUpdateFieldsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e.target.type: ' + e.target.type);
    switch(e.target.type){
      case 'checkbox':     
        console.log('checkBox');
        updateCheckboxFields(e.target.id, e.target.checked)
        break;
      case 'number':
        console.log('number');
        //setConsultantCheckBoxStatus(currentState => {return !currentState});   
        break;
      case 'text':
        console.log('text');
        break;
    }
    
  }

  const handleIncreaseNumberOfPages = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setNumberOfPages(numberOfPages + 1);
  }

  const handleDecreaseNumberOfPages = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (numberOfPages > 1) {
      setNumberOfPages(numberOfPages - 1);
    }
  }

  const handleIncreaseNumberOfLanguages = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setNumberOfLanguages(numberOfLanguages + 1);
  }

  const handleDecreaseNumberOfLanguages = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (numberOfLanguages > 1) {
      setNumberOfLanguages(numberOfLanguages - 1);
    }
  }

  return (
    <>
        <input id="0" type="checkbox" onChange={handleUpdateFieldsValue} /> Una pàgina web (500 €) <br />
        <StyledDiv visible={true}>
          <div>
            <label>Número de pàginas</label>
            <button onClick={(e) => handleDecreaseNumberOfPages(e)}>-</button>
            <input id="pages" type="number" value={numberOfPages} onChange={()=>{}} />
            <button onClick={(e) => handleIncreaseNumberOfPages(e)}>+</button>
          </div>
          <div>
            <label>Número d'idiomas</label>
            <button onClick={(e) => handleDecreaseNumberOfLanguages(e)}>-</button>
            <input id="languages" type="number" value={numberOfLanguages} onChange={()=>{}}/>
            <button onClick={(e) => handleIncreaseNumberOfLanguages(e)}>+</button>
          </div>
        </StyledDiv>
        <input id="1" type="checkbox" onChange={handleUpdateFieldsValue} /> Una consultoria SEO (300 €) <br />
        <input id="2" type="checkbox" onChange={handleUpdateFieldsValue} /> Una campanya de Google Ads (200 €) <br />
      <p>Preu:</p>{total}
    </>
  );
}

export default App;