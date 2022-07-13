import React from 'react'

function ListeProduits(props) {
    return (
        <tr>
            <td>{props.produit}</td>
            <td>{props.price}</td>
        </tr>
    )
}

export default ListeProduits