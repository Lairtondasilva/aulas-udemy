import { Children, cloneElement, useEffect, useState } from "react"


const Container = ({children})=>{

    const [selectedYear, setSelectedYear] = useState("2023");
    
    const toggleShow = (e)=> {

        setSelectedYear(e.target.innerHTML)
    }

    return Children.map(children, child=>{
        const newChild = cloneElement(child, {
            selectedYear,
            toggleShow
        })

        return newChild;
    } );
}

const YearsButton = ({children, selectedYear, toggleShow}) => {
    return Children.map(children, child=>{
        const newChild = cloneElement(child, {
            selectedYear, 
            toggleShow
    })
    return newChild;
})};

const IsSelected = ({selectedYear, toggleShow, year}) => (<button onClick={(e)=>toggleShow(e)} style={selectedYear === year? {background: "#00f"}: {} }>{year}</button>)

const Composed = ()=>{
    const [listYear] = useState(["2022","2023"])

    return (
        <Container>
            <YearsButton>
                {listYear.map((year, index)=> <IsSelected year={year} key={index} />)}
            </YearsButton>
        </Container>
    )
}

export default Composed;