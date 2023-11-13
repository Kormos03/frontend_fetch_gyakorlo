export interface Product{
    id:number;
    title:string;
    description:string;
    price:number;
    discountPercentage:number;
    rating:number;
    stock:number;
    brand:string;
    category:string;
    thumbnail:URL;
    images:URL[];
}

export interface Products{
    products:Product[];
}
