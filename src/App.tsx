import { useState } from "react";
import StyledDiv from "./StyledDiv";

function App() {
  const [total, setTotal] = useState(0)
  const [pagesCheckBoxStatus, setPagesCheckBoxStatus] = useState(false)
  const [numberOfPages, setNumberOfPages] = useState(0)
  const [numberOfLanguages, setNumberOfLanguages] = useState(0)

  const handleChangeOfCheckBox = (price: number, isChecked: boolean, id: string) => {
    isChecked ? setTotal(total + price) : setTotal(total - price);
    if (id === "pagesCheckBox") {
      setPagesCheckBoxStatus(isChecked);   
    
    }
    console.log(`id: ${id}`);
  }

  const handleIncreaseNumberOfPages = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setNumberOfPages(numberOfPages + 1);
    if (numberOfPages > 0 && numberOfLanguages > 0) {
      console.log(`in`);
      setTotal(numberOfPages * numberOfLanguages * 30 + total);
    }
    console.log(`numberOfPages: ${numberOfPages}`)
    console.log(`numberOfLanguages: ${numberOfLanguages}`)
  }

  const handleDecreaseNumberOfPages = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (numberOfPages > 0) setNumberOfPages(numberOfPages - 1);
    if (numberOfPages > 0 && numberOfLanguages > 0) setTotal(numberOfPages * numberOfLanguages * 30 + total);
  }

  const handleIncreaseNumberOfLanguages = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setNumberOfLanguages(numberOfLanguages + 1);
    if (numberOfPages > 0 && numberOfLanguages > 0) {
      console.log(`in`);
      setTotal(numberOfPages * numberOfLanguages * 30 + total);
    }
    console.log(`numberOfPages: ${numberOfPages}`)
    console.log(`numberOfLanguages: ${numberOfLanguages}`)

  }

  const handleDecreaseNumberOfLanguages = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setNumberOfLanguages(numberOfLanguages - 1);
    if (numberOfPages > 0 && numberOfLanguages > 0) {
      console.log(`in`);
      setTotal(numberOfPages * numberOfLanguages * 30 + total);
    }
    console.log(`numberOfPages: ${numberOfPages}`)
    console.log(`numberOfLanguages: ${numberOfLanguages}`)
  }

  return (
    <>
      <form >
        <input id="pagesCheckBox" type="checkbox" onChange={(e) => { handleChangeOfCheckBox(500, e.target.checked, e.target.id) }} /> Una pàgina web (500 €) <br />
        <StyledDiv visible={pagesCheckBoxStatus}>
          <div>
            <label>Número de pàginas</label>
            <button onClick={(e) => handleIncreaseNumberOfPages(e)}>+</button>
            <input id="pages" type="text" value={numberOfPages} onChange={() => { }} />
            <button onClick={(e) => handleDecreaseNumberOfPages(e)}>-</button>
          </div>
          <div>
            <label>Número d'idiomas</label>
            <button onClick={(e) => handleIncreaseNumberOfLanguages(e)}>+</button>
            <input id="languages" type="text" value={numberOfLanguages} onChange={() => { }} />
            <button onClick={(e) => handleDecreaseNumberOfLanguages(e)}>-</button>
          </div>
        </StyledDiv>
        <input id="cb2" type="checkbox" onChange={(e) => handleChangeOfCheckBox(300, e.target.checked, e.target.id)} /> Una consultoria SEO (300 €) <br />
        <input id="cb3" type="checkbox" onChange={(e) => handleChangeOfCheckBox(200, e.target.checked, e.target.id)} /> Una campanya de Google Ads (200 €) <br />
      </form>
      <p>Preu:</p>{total}
    </>
  );
}

export default App;