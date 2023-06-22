import React,{useEffect,useState} from 'react';

const NewCart = () => {
    const [item,setItem]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4040/getallData",{
        method:"GET",
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        setItem(data.data)
    })
 
  })
  return (
    <div >
        <h1>hello</h1>
        {
            item.map((ele)=>(
               <>
                <h1>
                    {ele.name}
                </h1>
                <img src={ele.src} alt="" /></>
            ))
        }
      
    </div>
  );
}

export default NewCart;
