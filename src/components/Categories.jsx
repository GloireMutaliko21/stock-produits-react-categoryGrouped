import React from "react";
import { produits } from '../data/produits';
import ListeProduits from "./ListeProduits";

function Categories(props) {
    return (
        <div>
            {props.categorie}
            {
                produits.map((produit) =>
                    <ListeProduits key={produit.name} produit={produit.name} />
                )}
        </div>
    )
}

export default Categories