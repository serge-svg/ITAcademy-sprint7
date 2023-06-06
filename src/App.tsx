import { useState } from "react";
import StyledDiv from "./StyledDiv";

function App() {
  const [total, setTotal] = useState(0)

  const [numberOfPages, setNumberOfPages] = useState(1)
  const [numberOfLanguages, setNumberOfLanguages] = useState(1)

  const [pagesCheckBoxStatus, setPagesCheckBoxStatus] = useState(false)
  const [consultantCheckBoxStatus, setConsultantCheckBoxStatus] = useState(false)
  const [campaingCheckBoxStatus, setCampaingPagesCheckBoxStatus] = useState(false)


  const calculateTotal = () => {
    let newTotal: number = 0;    
    if (pagesCheckBoxStatus) newTotal = numberOfPages * numberOfLanguages * 30 + 500;
    if (consultantCheckBoxStatus) newTotal += 300;
    if (campaingCheckBoxStatus) newTotal += 200; 
    setTotal(newTotal);
  }

  const handleChangeOfCheckBox = (price: number, isChecked: boolean, id: string) => {
    isChecked ? setTotal(total + price) : setTotal(total - price);
    switch(id){
      case 'pagesCheckBox':
        setPagesCheckBoxStatus(isChecked);       
        break;
      case 'consultantCheckBox':
        setConsultantCheckBoxStatus(isChecked);
        break;
      case 'campaingCheckBox':
        setCampaingPagesCheckBoxStatus(isChecked);
        break;
    }
    calculateTotal();
  }

  const handleIncreaseNumberOfPages = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setNumberOfPages(numberOfPages + 1);
    calculateTotal();
  }

  const handleDecreaseNumberOfPages = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (numberOfPages > 1) setNumberOfPages(numberOfPages - 1);
    calculateTotal();
  }

  const handleIncreaseNumberOfLanguages = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setNumberOfLanguages(numberOfLanguages + 1);
    calculateTotal();
  }

  const handleDecreaseNumberOfLanguages = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (numberOfLanguages > 1) {
      setNumberOfLanguages(numberOfLanguages - 1);
    }
    calculateTotal();
  }

  return (
    <>
      <form >
        <input id="pagesCheckBox" type="checkbox" onChange={(e) => { handleChangeOfCheckBox(500, e.target.checked, e.target.id) }} /> Una pàgina web (500 €) <br />
        <StyledDiv visible={pagesCheckBoxStatus}>
          <div>
            <label>Número de pàginas</label>
            <button onClick={(e) => handleIncreaseNumberOfPages(e)}>+</button>
            <input id="pages" type="text" value={numberOfPages}  />
            <button onClick={(e) => handleDecreaseNumberOfPages(e)}>-</button>
          </div>
          <div>
            <label>Número d'idiomas</label>
            <button onClick={(e) => handleIncreaseNumberOfLanguages(e)}>+</button>
            <input id="languages" type="text" value={numberOfLanguages} />
            <button onClick={(e) => handleDecreaseNumberOfLanguages(e)}>-</button>
          </div>
        </StyledDiv>
        <input id="consultantCheckBox" type="checkbox" onChange={(e) => handleChangeOfCheckBox(300, e.target.checked, e.target.id)} /> Una consultoria SEO (300 €) <br />
        <input id="campaingCheckBox" type="checkbox" onChange={(e) => handleChangeOfCheckBox(200, e.target.checked, e.target.id)} /> Una campanya de Google Ads (200 €) <br />
      </form>
      <p>Preu:</p>{total}
    </>
  );
}

export default App;