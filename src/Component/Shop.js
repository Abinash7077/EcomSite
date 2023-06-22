import React,{useState,useEffect} from "react";
import Card from "./Card";
import "./Shop.css";



function Shop() {
    const [filterData,setFilterData]=useState([])
    const[search,setSearch]=useState("")
    const dataSearch=(e)=>{
     setSearch(e.target.value)

    }
    const searchHere=()=>{
        const results=data.filter(ele=>{if(search==="") return data
    return ele.name.toLowerCase().includes(search.toLowerCase())
    
    }) 
    setFilterData(results) 
    setSearch(" ")
    
    }
    useEffect(()=>{
      if(search.length===0){
        setFilterData(data)
      }
    },[search])
   
    
  const data = [
    {
      name: "Rose",
      id: "1",
      src: "img/amaranthus1bunch-vegetables.jpg",
    },
    {
      name: "Dragon Fruit",
      id: "2",
      src: "img/dragonfruit-fruits.jpg",
    },
    {
      name: "Baby Kiwi - Fruits",
      id: "3",
      src: "img/babykiwi-fruits.jpg",
    },
    {
      name: "Basmati-Rice",
      id: "4",
      src: "img/biryani-category.png",
    },
    {
      name: "Beetroot",
      id: "5",
      src: "img/beetroot-vegetables.jpg",
    },
    {
      name: "Brinjal Nagpure",
      id: "6",
      src: "img/brinjalnagpure-vegetables.jpg",
    },
    {
        name: "Rose",
        id: "7",
        src: "img/rose-165819_640.jpg",
      },
      {
        name: "Carrot",
        id: "8",
        src: "img/carot.jpg",
      },
      {
        name: "Cauliflower",
        id: "9",
        src: "img/Cauliflower.jpg",
      },
      {
        name: "Onion",
        id: "10",
        src: "img/Onion.jpg",
      },
      {
        name: "Cowpea Beans",
        id: "11",
        src: "img/Cowpea.jpg",
      },
      {
        name: "Banana",
        id: "12",
        src: "img/fresh-yellow-banana-fruit-free.png",
      },
      {
        name: "Rose",
        id: "13",
        src: "img/hd-wallpaper-729509_640.jpg",
      },
      {
        name: "Banana",
        id: "14",
        src: "img/fresh-yellow-banana-fruit-free.png",
      },
      {
        name: "rose",
        id: "15",
        src: "img/rose-165819_640.jpg",
      },
      {
        name: "Red Rose",
        id: "16",
        src: "img/rose-320868_640.jpg",
      },
      
  ];
  return (
    <>
     
      <div class="container pb-10">
       
        <div className="input mx-auto pt-4 ">
          {" "}
          <input type="search" onChange={dataSearch} className="shop_search_input " name="" id="" />
          <input type="button" value="Search Here" className="Input_btn" onClick={searchHere} />
        </div>

        <div class="row">
            {filterData.map((item)=>
             <Card name={item.name} id={item.id} src={item.src} />
            )}
         
          <Card id="2" name="Pink Rose" src="img/hd-wallpaper-729509_640.jpg" />
        
        </div>
      </div>
    </>
  );
}

export default Shop;
