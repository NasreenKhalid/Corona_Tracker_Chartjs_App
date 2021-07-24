import React from 'react'
import NumberFormat from 'react-number-format'

export default function Card({title,card}) {

    return (
        <div className="card">
            <span>Total {title} : <NumberFormat 
                                    value={card}
                                    displayType={'text'}
                                    thousandSeparator={true}
                            /></span>
                
        
        </div>
    )
}
