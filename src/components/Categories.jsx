import React from "react";
import { produits } from '../data/produits';
import ListeProduits from "./ListeProduits";

function Categories(props) {
    return (
        <div>
            <tr>
                <th colSpan="2">
                    {props.categorie}
                </th>
            </tr>
            
            {
                produits.map((produit) =>
                    produit.category === props.categorie &&
                    <ListeProduits
                        key={produit.name}
                        produit={produit.name}
                        price={produit.price}
                    />
                )
            }
        </div>
    )
}

export default Categories