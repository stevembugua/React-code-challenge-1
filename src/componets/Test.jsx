import React from "react";
import { useEffect, useState } from "react";
import '../componets/Test.css'

function Test() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState();
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState();
  const [search,setSearch] = useState('')

  const URL = "https://stevembugua.github.io/data.json";


  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json() )

      .then((response) => {
        setData(response);
      });
  };


  useEffect(() => {
    fetchData();
  }, []);


  const addRecord = ()=>{
    setData(data =>[...data, {id: data.length+1, date: date,description:description,category:category,amount:amount}])
  }
  return (
    <>
     
    <div className="daddy">
    <h1 className="heading">SEALED SAFE BANK TRANSACTIONS</h1>
    <div className="line"></div>
    <div className="trial">
      <form className="inputs" onSubmit={(e)=>{
        e.preventDefault()
        addRecord()
        setDate('')
        setAmount('')
        setDescription('')
        setCategory('')
        alert('Transaction made successfully')
      }} >
        <h2 className="h2">TRANSACT WITH SEALEAD SAFE BANK</h2>
          <input type='date' placeholder="date" value={date} onChange={(e)=>{
          setDate(e.target.value)
          }} required/>
          <input type='text' placeholder="description" value={description} onChange={(e)=>{
          setDescription(e.target.value)
          }} required/>
          
          <input type='text' placeholder="category" value={category} onChange={(e)=>{
          setCategory(e.target.value)
          }} required/>
          <input type='number' placeholder="amount" value={amount} onChange={(e)=>{
          setAmount(e.target.value)
          }} required/>
          <input className="btn" type="submit"  />
         

      </form>
        <div className="search">
        <input type="search" placeholder="Search" onChange={(e)=>{
          setSearch(e.target.value)
        }}/>
       
        </div>

    <tbody className="big">
        <tr className="headers">
         
          <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
        {data.filter((item)=>{
          if(search == ""){
            return item
          }else if(item.description.toLowerCase().includes(search.toLowerCase())){
            return item
          }
        }).map((item, i) => (
          <tr key={i} className='container'>
            
            <td className="id">{item.id}</td>
            <td className="date">{item.date}</td>
            <td className="description">{item.description}</td>
            <td className="category">{item.category}</td>
            <td className="amount">{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </div>

    </div>
      
    </>
  );
}

export default Test;
