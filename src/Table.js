import React from 'react'
import './Table.css'

function Table({countries}) {
    return (
        <div className="tablee">
            {
                countries.map(({country,cases})=>(
                    <tr>
                        <td>{country}</td>
                        <td><strong>{cases}</strong></td>
                    </tr>
                ))
            }
        </div>
    )
}

export default Table
