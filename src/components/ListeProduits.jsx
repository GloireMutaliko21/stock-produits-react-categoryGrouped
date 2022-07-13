import React from 'react'

function ListeProduits(props) {
    return (
        <tr>
            {props.stocked ? <td>{props.produit}</td> : <td style={{color: "red"}}>{props.produit}</td>}
            <td>{props.price}</td>
        </tr>
    )
}

export default ListeProduits