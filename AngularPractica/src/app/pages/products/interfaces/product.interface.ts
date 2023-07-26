//interfaces sirven para modelar los datos
export interface Product {
    id:number;
    name:string;
    price:number;
    description:string;
    categoryId:number;
    stock:number;
}