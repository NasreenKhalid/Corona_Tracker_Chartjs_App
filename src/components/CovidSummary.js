import React from 'react'
import Card from './Card'


function CovidSummary(props) {

const country='';


    return (
        <div>
            <h1> {props.country === '' ? 'WorldWide' : props.country.charAt(0).toUpperCase()+props.country.slice(1)} Covid-19 Report</h1>
            
            <Card title="Confirmed" card={props.totalConfirmed}/>
            <Card title="Recovered" card={props.totalRecovered}/>
            <Card title="Deaths" card={props.totalDeaths}/>
            
        </div>
    )
}

export default CovidSummary
