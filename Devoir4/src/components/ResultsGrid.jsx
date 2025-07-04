import "./ResultsGrid.css"
import Card from "./Card"
import shoeImg from "../assets/shoe.jpg"

function ResultsGrid({resultsArr}){
    

    return(
        <>
            <div className="results-grid">
                {resultsArr.map((item, index) => (
                    <Card key={index} image={resultsArr[index].image} name={resultsArr[index].name} price={resultsArr[index].price} idx={index} resArr={resultsArr} sale={resultsArr[index].onSale}/>
                ))}
            </div>
        </>
    )
}

export default ResultsGrid