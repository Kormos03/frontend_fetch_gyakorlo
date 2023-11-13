import { Product, Products } from './products';
//import './style.css'


async function loadMind(termeklista : Product[])
{
  const lista = document.getElementById('lista');
  for (const element of termeklista) {
    const li = document.createElement('li');
    li.textContent = `
      Title: ${element.title}
      Description: ${element.description}
      Price: ${element.price}
      Discount Percentage: ${element.discountPercentage}
      Rating: ${element.rating}
      Stock: ${element.stock}
      Brand: ${element.brand}
      Category: ${element.category}
      Thumbnail: ${element.thumbnail}
      Images: ${element.images}
    `;

    if (lista) {
      lista.appendChild(li);
    }
  
  } 
}

async function Abc(termeklista : Product[])
{
  loadMind(termeklista.sort( function(a,b){
    if(a.title < b.title) {return -1};
    if (a.title > b.title) {return 1};
    return 0;
  }))
}

async function legDragabb(termeklista : Product[])
{
  loadMind(termeklista.sort( function(a,b){
    if(a.price < b.price) {return 1};
    if (a.price > b.price) {return -1};
    return 0;
  }))
}

async function leirasFun(termeklista : Product[])
{
  const kereses = (document.getElementById('keres')as HTMLInputElement).value;
  loadMind(termeklista.filter(obj => obj.description.includes(kereses)));
}

async function ajanlatFun(termeklista : Product[])
{
  loadMind(termeklista.filter(element => element.price < 100).sort(function(a,b){
    if(a.rating < b.rating) {return 1};
    if (a.rating > b.rating) {return -1};
    return 0;
  }));

} 

function removeMind()
{
  const rem = document.getElementById('lista');
  rem!.innerHTML = ``;
}

/* id:number;
    title:string;
    description:string;
    price:number;
    discountPercentage:number;
    rating:number;
    stock:number;
    brand:string;
    category:string;
    thumbnail:URL;
    images:URL[]; */

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('Mind')!.addEventListener('click', async()=>{
    removeMind();
    let eredmeny = await fetch('products.json');
    if(!eredmeny.ok)
    {
      throw new Error('Hiba a fájl betöltésekor');
    }
    let termeklista = await eredmeny.json() as Products;
    loadMind(termeklista.products);
  });
  document.getElementById('abc')!.addEventListener('click', async() =>{
    removeMind();
    let eredmeny = await fetch('products.json');
    if(!eredmeny.ok)
    {
      throw new Error('Hiba a fájl betöltésekor');
    }
    let termeklista = await eredmeny.json() as Products;
    Abc(termeklista.products);
  });

  document.getElementById('draga')!.addEventListener('click', async() =>{
    removeMind();
    let eredmeny = await fetch('products.json');
    if(!eredmeny.ok)
    {
      throw new Error('Hiba a fájl betöltésekor');
    }
    let termeklista = await eredmeny.json() as Products;
    legDragabb(termeklista.products);
  });
  document.getElementById('draga')!.addEventListener('click', async() =>{
    removeMind();
    let eredmeny = await fetch('products.json');
    if(!eredmeny.ok)
    {
      throw new Error('Hiba a fájl betöltésekor');
    }
    let termeklista = await eredmeny.json() as Products;
    legDragabb(termeklista.products);
  });
  document.getElementById('leiras')!.addEventListener('click', async() =>{
    removeMind();
    let eredmeny = await fetch('products.json');
    if(!eredmeny.ok)
    {
      throw new Error('Hiba a fájl betöltésekor');
    }
    let termeklista = await eredmeny.json() as Products;
    leirasFun(termeklista.products);
  });
  document.getElementById('ajanlat')!.addEventListener('click', async() => {
    removeMind();
    let eredmeny = await fetch('products.json');
    if(!eredmeny.ok)
    {
      throw new Error('Hiba a fájl betöltésekor');
    }
    let termeklista = await eredmeny.json() as Products;
    ajanlatFun(termeklista.products);
  })
})