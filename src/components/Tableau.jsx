import React from "react";
import { produits } from "../data/produits";
import Categories from './Categories';
import '../styles/tableau.css'

function Tableau() {
    let tableauCategories = []

    produits.forEach((produit) => {
        tableauCategories.push(produit.category)
    })

    const categoriesUnique = [...new Set(tableauCategories)]
    const listeCategories = categoriesUnique
        .map((categorie) =>
            <Categories
                key={categorie}
                categorie={categorie}
            />
        )

    return <div>
    <table>
        {listeCategories} 
    </table>
    
    </div>

}

export default Tableau