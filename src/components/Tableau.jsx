import React from "react";
import { produits } from "../data/produits";
import Categories from './Categories';

function Tableau() {
    let tableauCategories = []

    produits.forEach((produit) => {
        tableauCategories.push(produit.category)
    })

    const listeCategories = tableauCategories
        .map((categorie) =>
            <Categories
                key={categorie}
                categorie={categorie}
            />
        )

    return <div>{listeCategories} </div>

}

export default Tableau