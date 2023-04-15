import React,{useState} from 'react'
import uuid from 'react-uuid'

function CrudApp() {


const [state,SetState]=useState({username:'',number:""})
const [list,SetList]=useState([])



const handleChange =(e)=>{
  const {name , value} = e.target;
  SetState({...state,[name]:value})
}


// Add

const add=()=>{
  SetList([...list, { id: uuid(), ...state }]);
  SetState({username:'',number:""})
 }


// delete

const deleteItem=(id)=>{

const filterdata= list.filter((data)=>data.id !== id);
console.log(filterdata,"filter")
SetList(filterdata)
}


// edit

const edited =(id)=>{
  deleteItem(id)
const editedData= list.filter((items)=> items.id == id);
SetState(editedData[0])

}


// reset

const reset =()=>{
  SetState({username:'',number:""});

};

const [selected ,setSelected]= useState([]);


const onselected =(e)=>{
const {value,checked}=e.target;


if(checked){
  setSelected([...selected ,value]);
} else {
  if(selected.includes(value)){
   const filtereddata= selected.filter((data)=> data !== value);
   setSelected(filtereddata)
  }
}

}

const deleteselected =()=>{
  const filteredmultipleDelete= list.filter((value)=> !selected.includes(value.id))
  SetList(filteredmultipleDelete)
}

console.log(selected,"checked")



  return (
    <>

<div>
    <div className='d-flex  justify-content-center  '  >
 <div className='shadow-lg rounded-bottom mt-5' style={{width:'350px',height:'250px'}}>

  <div className='d-flex justify-content-center mb-3 mt-2 bg-secondary rounded-top'><h1>Add user</h1></div>
  
 <div 
 className="d-flex justify-content-center mb-3" style={{width:"350px"}}>
  <input 
  name='username'
   onChange={handleChange}
    value={state.username} 
    className='rounded'
     type="text"
      placeholder="User Name">

  </input>
 </div>

<div
 className="d-flex justify-content-center  mb-4" style={{width:"350px"}}>
  <input
   name='number'
   onChange={handleChange}
    value={state.number}
     className='rounded' type="number" placeholder="Mobile Number">
      </input>
      </div>

 
<div className='d-flex justify-content-end '>
  <div  className='m-2'>  <button  onClick={reset} type="button" class="btn btn-primary btn-sm ">Reset</button></div>
  <div  className='m-2'>  <button onClick={add} type="button" class="btn btn-danger btn-sm ">Add</button></div>
</div>


 </div>
    </div>
  <br></br>
  <br></br>
  <br></br>

 <div style={{height:'100px' }} className='container d-flex justify-content-end '>
  <div style={{width:'200px' }} className='rounded shadow-lg '>
    <div className='m-1 mb-3'> <p class="font-weight-light text-center">delete selected items</p></div>
    <div className='d-flex justify-content-center '> <button onClick={deleteselected} type="button" class="btn btn-dark">Delete</button>
  </div>
  </div>

 </div>

 <br></br>
 <br></br>

    <div className='container'>
      <table className='table table-striped table-bordered shadow-lg'>
      <caption class='text-center'> List Item</caption>

        <thead>
<tr className=' bg-success text-center'>
  <th>User Name</th>
  <th>Mobile Number</th>
  <th>Action</th>
</tr>
        </thead>

        <tbody>
{list.map((data)=>{
 

  return(<tr>
    <td>{data.username}</td>
   
    <td>{data.number}</td>
    <td>    <div className='d-flex justify-content-around'>


    <input onChange={onselected} value={data.id} checked={selected.includes(data.id)} type="checkbox" id="vehicle2" name="vehicle2" ></input>

      <div><i onClick={()=>edited(data.id)} class="fa-solid fa-pen-to-square"></i></div>
      <div><i  onClick={()=> deleteItem(data.id)} class="fa-solid fa-trash  "></i> </div> 

      </div> 
      </td>
  </tr>)
})}

        </tbody>

      </table>

    </div>

    </div>
    </>
  )
}

export default CrudApp