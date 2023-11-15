import { Categorie } from "./categorie.model";
export class Produit{
    idProduit!: number;
    nomProduit!:String;
    prixProduit!:number;
    dateCreation!:Date;
    categorie! : Categorie;
}