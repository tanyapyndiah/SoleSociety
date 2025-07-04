import "./Filter.css"
import { use, useState } from 'react';
import { useEffect, useRef } from 'react';
import {products} from "../constants"


function Filter({setCurrentArr, defaultFilter, setFiltersApplied}){
    const [priceValue, setPriceValue] = useState(200);
    const menRef = useRef(null)
    const womenRef = useRef(null)
    const kidsRef = useRef(null)
    const saleRef = useRef(null)

    useEffect(() => {
        filterProducts()
    }, [priceValue])


    useEffect(() => {
        if (defaultFilter === "Men" && menRef.current) {
            menRef.current.checked = true;
            menRef.current.dispatchEvent(new Event("change", { bubbles: true }));
            womenRef.current.checked = false;
            womenRef.current.dispatchEvent(new Event("change", { bubbles: true }));
            kidsRef.current.checked = false;
            kidsRef.current.dispatchEvent(new Event("change", { bubbles: true }));
            saleRef.current.checked = false;
            saleRef.current.dispatchEvent(new Event("change", { bubbles: true }));
        }
        if (defaultFilter === "Women" && womenRef.current) {
            womenRef.current.checked = true;
            womenRef.current.dispatchEvent(new Event("change", { bubbles: true }));
            menRef.current.checked = false;
            menRef.current.dispatchEvent(new Event("change", { bubbles: true }));
            kidsRef.current.checked = false;
            kidsRef.current.dispatchEvent(new Event("change", { bubbles: true }));
            saleRef.current.checked = false;
            saleRef.current.dispatchEvent(new Event("change", { bubbles: true }))
        }
        if (defaultFilter === "Boys/Girls" && kidsRef.current) {
            kidsRef.current.checked = true;
            kidsRef.current.dispatchEvent(new Event("change", { bubbles: true }));
            womenRef.current.checked = false;
            womenRef.current.dispatchEvent(new Event("change", { bubbles: true }));
            menRef.current.checked = false;
            menRef.current.dispatchEvent(new Event("change", { bubbles: true }));
            saleRef.current.checked = false;
            saleRef.current.dispatchEvent(new Event("change", { bubbles: true }))
        }
        if (defaultFilter === "Sale" && saleRef.current) {
            saleRef.current.checked = true;
            saleRef.current.dispatchEvent(new Event("change", { bubbles: true }));
            womenRef.current.checked = false;
            womenRef.current.dispatchEvent(new Event("change", { bubbles: true }));
            kidsRef.current.checked = false;
            kidsRef.current.dispatchEvent(new Event("change", { bubbles: true }));
            menRef.current.checked = false;
            menRef.current.dispatchEvent(new Event("change", { bubbles: true }))
        }
        filterProducts()
    }, [defaultFilter]);

    function filterProducts(){
        const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked')
        let filtersArr = Array.from(checkedBoxes).map(box => box.value)

        let filtersApplied = ""
        filtersArr.forEach(filter =>{
            const [attribute, value] = filter.split("-")
            if (attribute=="onSale"){
                filtersApplied+="On Sale, "
            } else {
                filtersApplied+=value+", "
            }
            
        })
        if (filtersApplied){
            filtersApplied= "Filters Applied:  " + filtersApplied
            setFiltersApplied(filtersApplied.slice(0,-2))
        } else {
            setFiltersApplied("")
        }
        

        const genderArr = filtersArr.filter(str => str.startsWith("gender"));
        const categoryArr = filtersArr.filter(str => str.startsWith("category"));
        const brandArr = filtersArr.filter(str => str.startsWith("brand"));
        const colorArr = filtersArr.filter(str => str.startsWith("color"));
        const saleArr = filtersArr.filter(str => str.startsWith("onSale"));

        let currentResults = []
        let pastResults = [...products]

        
        genderArr.forEach(element => {
            const [attribute, value] = element.split("-")
            currentResults=or(currentResults,attribute,value,pastResults)
        });

        if(categoryArr.length != 0){
            if(genderArr.length != 0){
                pastResults = currentResults
                currentResults = []
            }
            else {
                pastResults = [...products]
            }

            categoryArr.forEach(element => {
                const [attribute, value] = element.split("-");
                currentResults=or(currentResults,attribute,value,pastResults)
            });
        }       

        if(brandArr.length != 0){
            if(genderArr.length != 0 || categoryArr.length != 0){
                pastResults = currentResults
                currentResults = []
            }
            else {
                pastResults = [...products]
            }

            brandArr.forEach(element => {
                const [attribute, value] = element.split("-");
                currentResults=or(currentResults,attribute,value,pastResults)
            });
        }

        if(colorArr.length != 0){
            if(genderArr.length != 0 || categoryArr.length != 0 || brandArr.length != 0){
                pastResults = currentResults
                currentResults = []
            }
            else {
                pastResults = [...products]
            }

            colorArr.forEach(element => {
                const [attribute, value] = element.split("-");
                currentResults=or(currentResults,attribute,value,pastResults)
            });
        }

        if(saleArr.length != 0){
            if(genderArr.length != 0 || categoryArr.length != 0 || brandArr.length != 0 || colorArr.length != 0){
                pastResults = currentResults
                currentResults = []
            }
            else {
                pastResults = [...products]
            }

            saleArr.forEach(element => {
                const [attribute, value] = element.split("-");
                currentResults=or(currentResults,attribute,value.toLowerCase() === "true",pastResults)
            });
        }

        if(genderArr.length == 0 && categoryArr.length == 0 && brandArr.length == 0 && colorArr.length == 0 && saleArr.length == 0){
            currentResults = [...products]
        }
        currentResults = currentResults.filter(shoe => shoe.price <= priceValue)
        setCurrentArr(currentResults)
    }

    function or(resArr, attribute, value,ogArr){
        resArr = resArr.concat(ogArr.filter(shoe => shoe[attribute] === value))
        return resArr;
    }



    return(
        <>
            <div className="filter-cont">
                <p className="filter-title">
                    Filters
                </p>
                <div className="outer-cont">
                    <details className="filter">
                        <summary className="filter-name">Gender</summary>
                        <div className="field-values">
                            <label>
                                <input type="checkbox" className="checkbox" value="gender-Men" onChange={filterProducts} ref={menRef}/>
                                <span style={{ marginLeft: '0.5rem' }}>Men</span>
                            </label>
                            <label>
                                <input type="checkbox" className="checkbox" value="gender-Women" onChange={filterProducts} ref={womenRef}/>
                                <span style={{ marginLeft: '0.5rem' }}>Women</span>
                            </label>
                            <label>
                                <input type="checkbox" className="checkbox" value="gender-Boys/Girls" onChange={filterProducts} ref={kidsRef}/>
                                <span style={{ marginLeft: '0.5rem' }}>Boys/Girls</span>
                            </label>
                        </div>
                    </details>
                    <details className="filter">
                        <summary className="filter-name">Category</summary>
                        <div className="field-values">
                            <label>
                                <input type="checkbox" className="checkbox" value="category-Running" onChange={filterProducts}/>
                                <span style={{ marginLeft: '0.5rem' }}>Running</span>
                            </label>
                            <label>
                                <input type="checkbox" className="checkbox" value="category-Skate" onChange={filterProducts}/>
                                <span style={{ marginLeft: '0.5rem' }}>Skate</span>
                            </label>
                            <label>
                                <input type="checkbox" className="checkbox" value="category-Everyday" onChange={filterProducts}/>
                                <span style={{ marginLeft: '0.5rem' }}>Everyday</span>
                            </label>
                            <label>
                                <input type="checkbox" className="checkbox" value="category-Cleats" onChange={filterProducts}/>
                                <span style={{ marginLeft: '0.5rem' }}>Cleats</span>
                            </label>
                            <label>
                                <input type="checkbox" className="checkbox" value="category-Formal" onChange={filterProducts}/>
                                <span style={{ marginLeft: '0.5rem' }}>Formal</span>
                            </label>
                        </div>
                    </details>
                    <details className="filter">
                        <summary className="filter-name">Color</summary>
                        <div className="field-values">
                            <label>
                                <input type="checkbox" className="checkbox" value="color-black" onChange={filterProducts}/>
                                <span style={{ marginLeft: '0.5rem' }}>Black</span>
                            </label>
                            <label>
                                <input type="checkbox" className="checkbox" value="color-white" onChange={filterProducts}/>
                                <span style={{ marginLeft: '0.5rem' }}>White</span>
                            </label>
                            <label>
                                <input type="checkbox" className="checkbox" value="color-green" onChange={filterProducts}/>
                                <span style={{ marginLeft: '0.5rem' }}>Green</span>
                            </label>
                            <label>
                                <input type="checkbox" className="checkbox" value="color-blue" onChange={filterProducts}/>
                                <span style={{ marginLeft: '0.5rem' }}>Blue</span>
                            </label>
                            <label>
                                <input type="checkbox" className="checkbox" value="color-red" onChange={filterProducts}/>
                                <span style={{ marginLeft: '0.5rem' }}>Red</span>
                            </label>
                        </div>
                    </details>
                    <details className="filter">
                        <summary className="filter-name">Brands</summary>
                        <div className="field-values">
                            <label>
                                <input type="checkbox" className="checkbox" value="brand-Adidas" onChange={filterProducts}/>
                                <span style={{ marginLeft: '0.5rem' }}>Adidas</span>
                            </label>
                            <label>
                                <input type="checkbox" className="checkbox" value="brand-Puma" onChange={filterProducts}/>
                                <span style={{ marginLeft: '0.5rem' }}>Puma</span>
                            </label>
                            <label>
                                <input type="checkbox" className="checkbox" value="brand-Nike" onChange={filterProducts}/>
                                <span style={{ marginLeft: '0.5rem' }}>Nike</span>
                            </label>
                            <label>
                                <input type="checkbox" className="checkbox" value="brand-Converse" onChange={filterProducts}/>
                                <span style={{ marginLeft: '0.5rem' }}>Converse</span>
                            </label>
                            <label>
                                <input type="checkbox" className="checkbox" value="brand-Vans" onChange={filterProducts}/>
                                <span style={{ marginLeft: '0.5rem' }}>Vans</span>
                            </label>
                        </div>
                    </details>
                    <details className="filter">
                        <summary className="filter-name">Price</summary>
                        <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
                        <label style={{fontSize : "0.8em", fontFamily: "Inter"}} htmlFor="price-slider">Price &lt; ${priceValue}</label>
                        <input
                            id="price-slider"
                            type="range"
                            min="0"
                            max="200"
                            value={priceValue}
                            onChange={(e) => setPriceValue(e.target.value)}
                            style={{ accentColor: '#ff5500', width: '100%' }}
                        />
                        </div>
                    </details>
                    <details className="filter last-filter">
                        <summary className="filter-name">Sale</summary>
                        <div className="field-values">
                            <label>
                                <input type="checkbox" className="checkbox" value="onSale-true" onChange={filterProducts} ref={saleRef}/>
                                <span style={{ marginLeft: '0.5rem' }}>On Sale</span>
                            </label>
                        </div>
                    </details>
                </div>
            </div>
        </>
    )
}

export default Filter