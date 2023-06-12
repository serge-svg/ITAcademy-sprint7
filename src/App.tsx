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

  // Checkbox fields state
  const [checkBoxFieldsState, setCheckBoxFieldsState] = useState(
    new Array(fields.filter(item => item.type === "checkbox").length).fill(false)
  );

  /*
  const [pagesCheckBoxStatus, setPagesCheckBoxStatus] = useState(false)
  const [consultantCheckBoxStatus, setConsultantCheckBoxStatus] = useState(false)
  const [campaingCheckBoxStatus, setCampaingPagesCheckBoxStatus] = useState(false)
  */

  // EFFECTS
  useEffect(() => {
    calculateTotal();
  }, [fieldsValue])

  // LOGIC
  /*
  const updateCheckboxFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newFieldsValue: fieldsType = { ...fields };    

    newFieldsValue[e.target.id] = e.target.id
    e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFieldsValue(newFieldsValue);
  }
  */
  const calculateTotal = () => {
    let newTotal: number = 0;    
    //if (pagesCheckBoxStatus) newTotal = numberOfPages * numberOfLanguages * 30 + 500;
    //if (consultantCheckBoxStatus) newTotal += 300;
    //if (campaingCheckBoxStatus) newTotal += 200; 
    setTotal(newTotal);
  }

  const handleUpdateFieldsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e.target.type: ' + e.target.type);
    switch(e.target.type){
      case 'checkbox':     
        console.log('checkBox');
        //setPagesCheckBoxStatus(currentState => {return !currentState});   
        break;
      case 'number':
        console.log('number');
        //setConsultantCheckBoxStatus(currentState => {return !currentState});   
        break;
      case 'text':
        console.log('text');
        //setCampaingPagesCheckBoxStatus(currentState => {return !currentState});   
        //console.log('pagesCheckBox: '+ pagesCheckBoxStatus)
        //console.log('consultantCheckBox: '+ consultantCheckBoxStatus)
        //console.log('campaingCheckBox: '+ campaingCheckBoxStatus)
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
        <input id="seo" type="checkbox" onChange={handleUpdateFieldsValue} /> Una consultoria SEO (300 €) <br />
        <input id="ads" type="checkbox" onChange={handleUpdateFieldsValue} /> Una campanya de Google Ads (200 €) <br />
      <p>Preu:</p>{total}
    </>
  );
}

export default App;