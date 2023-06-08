import { useEffect, useState } from "react";
import StyledDiv from "./StyledDiv";

function App() {
  
  type newFieldsValue = {
    web: boolean;
    seo: boolean;
    ads: boolean;
    pages: string;
    languages: string;
  }

  const initialFieldsValue: newFieldsValue = {
    web: false,
    seo: false,
    ads: false,
    pages: '1',
    languages: '1',
  };

  
  const fields = [
    {
        "id": 0,
        "label": "Website",
        "type": "checkbox",
        "value": 500
    },
    {
        "id": 1,
        "label": "SEO",
        "type": "checkbox",
        "value": 300
    },
    {
        "id": 2,
        "label": "Ads campaing",
        "type": "checkbox",
        "value": 200
    },
    {
        "id": 3,
        "label": "Number og pages",
        "type": "number",
        "value": 30
    },
    {
        "id": 4,
        "label": "Number of languages",
        "type": "number",
        "value": 30
    }
]
  // STATES
  const [fieldsValue, setFieldsValue] = useState(initialFieldsValue);
  const [total, setTotal] = useState(0)

  const [numberOfPages, setNumberOfPages] = useState(1)
  const [numberOfLanguages, setNumberOfLanguages] = useState(1)

  const [pagesCheckBoxStatus, setPagesCheckBoxStatus] = useState(false)
  const [consultantCheckBoxStatus, setConsultantCheckBoxStatus] = useState(false)
  const [campaingCheckBoxStatus, setCampaingPagesCheckBoxStatus] = useState(false)

  // EFFECTS
  useEffect(() => {
    calculateTotal();
  }, [fieldsValue])

  // LOGIC
  const updateFieldsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let  newFieldsValue: newFieldsValue = { ...fieldsValue };    
    newFieldsValue[e.target.id] = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFieldsValue(newFieldsValue);
  }

  const calculateTotal = () => {
    let newTotal: number = 0;    
    if (pagesCheckBoxStatus) newTotal = numberOfPages * numberOfLanguages * 30 + 500;
    if (consultantCheckBoxStatus) newTotal += 300;
    if (campaingCheckBoxStatus) newTotal += 200; 
    setTotal(newTotal);
  }

  const handleChangeOfCheckBox = (price: number, isChecked: boolean, id: string) => {
    switch(id){
      case 'pagesCheckBox':
        setPagesCheckBoxStatus(currentState => {return !currentState});   
        break;
      case 'consultantCheckBox':
        setConsultantCheckBoxStatus(currentState => {return !currentState});   
        break;
      case 'campaingCheckBox':
        setCampaingPagesCheckBoxStatus(currentState => {return !currentState});   
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
        <input id="web" type="checkbox" onChange={updateFieldsValue} /> Una pàgina web (500 €) <br />
        <StyledDiv visible={pagesCheckBoxStatus}>
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
        <input id="seo" type="checkbox" onChange={updateFieldsValue} /> Una consultoria SEO (300 €) <br />
        <input id="ads" type="checkbox" onChange={updateFieldsValue} /> Una campanya de Google Ads (200 €) <br />
      <p>Preu:</p>{total}
    </>
  );
}

export default App;