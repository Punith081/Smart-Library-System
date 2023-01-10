import { useState,useEffect } from "react";
import '../style/booklist.css';
import {useNavigate} from "react-router-dom"

const Booklist = () => {
    let [books,setBooks]=useState([])

    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch('http://localhost:4001/books')
            let data=await response.json()
            setBooks(data)
        }
        fetchData()
    },[books])

    //Delete from server
    let handleDelete=(id,title)=>{
        fetch(`http://localhost:4001/books/${id}`,{
         method:'DELETE'
        })
        alert(`${title} will be deleted permanently`)
    }
    let navigate=useNavigate()
    let read=(id)=>{
    navigate(`/admin/book-list/${id}`)
}
    return ( 
        <div className="booklist">
            <h1>Book List: {books.length}</h1>
            <div className="book_section">
                {books.map((data)=>(
                   <div className="bookCard">
                   <div className="bookCard_img"> 
                   <img height={250} width={250} src={data.thumbnailUrl} alt="" />
                   </div>
                    <div className="bookCard_detail">
                    <h4 style={{color:"darkblue"}}>Title: {data.title}</h4> 
                    <h6>Authors: {data.authors}</h6>
                    <h6>Pagecount: {data.pageCount}</h6>
                    <div className="btn">
                    <button onClick={()=>read(data.id)}>Readmore</button>
                    <button onClick={()=>handleDelete(data.id,data.title)}>Delete</button>
                    </div>
                    </div>
                   </div> 
                ))}
            </div>
        </div>
     );
}
 
export default Booklist;