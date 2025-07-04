import "./ResultsPage.css"
import Filter from "./Filter"
import ResultsGrid from "./ResultsGrid"
import Navbar from "./Navbar"
import { useState } from "react"
import {products} from "../constants"
import { useLocation, useNavigate } from 'react-router-dom';


function ResultsPage(){
    const [currentArr, setCurrentArr] = useState([...products])
    const [filtersApplied, setFiltersApplied] = useState("")
    const location = useLocation()
    const val = location.state?.val
    return(
        <>
            <Navbar></Navbar>
            <div style={{display: 'flex', paddingTop: '10vh', color: "black"}}>
                <Filter setCurrentArr={setCurrentArr} defaultFilter={val} setFiltersApplied={setFiltersApplied}></Filter>
                <div className="applied-grid-cont">
                    <p className="filters-applied">{filtersApplied}</p>
                    <ResultsGrid resultsArr={currentArr}></ResultsGrid>
                </div> 
                    
            </div>
            
        </>
    )
}

export default ResultsPage