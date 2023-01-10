import{ useState } from "react";
import { Navigate } from "react-router-dom";
const AddBooks = () => {
    // title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl
    let [title,setTitle] = useState("")
    let [categories,setCategories] = useState("")
    let [authors,setAuthors] = useState("")
    let [pageCount,setPage] = useState("")
    let [shortDescription,setShort] = useState("")
    let [longDescription,setLong] = useState("")
    let [thumbnailUrl,setUrl] = useState("")

    let handleSubmit = () =>{
        e.preventDefault();
        //data to be posted know below
        let bookData = (title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl)

        //posting to the server
        fetch('http://localhost:4001/books',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:Json.stringify(bookData)
        })
        alert('book added sucessfully')
        Navigate('/admin/book-list')

    }
    
    return ( 
        <div className="addBooks">
            <h1 id='text-center'>Add a book</h1>
            <div className="form container">
                <form action="">
                    <div className="title">
                        <input value={title} onChange={ (e)=>setTitle(e.target.value)} className="title1" type="text" required placeholder="title of the book" />
                    </div>
                    <div className="authors">
                    <input  value={authors} onChange={ (e)=>setAuthors(e.target.value)} className="author1" type="text" required placeholder="Author of the book" />
                    </div>
                    <div className="categories">
                    <input  value={categories} onChange={ (e)=>setCategories(e.target.value)} type="text" required placeholder="Categories of the book" />
                    </div>
                    <div className="pageCount">
                    <input  value={pageCount} onChange={ (e)=>setPage(e.target.value)} className="page-count" type="numbers" required placeholder="pageCount of the book" />
                    </div>
                    <div className="shortDescription">
                    <textarea  value={shortDescription} onChange={ (e)=>setShort(e.target.value)} className="form-control" placeholder="short description of the book"  cols="30" rows="10"></textarea>
                    </div>
                    <div className="longDescription">
                    <textarea  value={longDescription} onChange={ (e)=>setLong(e.target.value)} className="form-control" placeholder="long description of the book"  cols="30" rows="10"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                    <input  value={thumbnailUrl} onChange={ (e)=>setUrl(e.target.value)} className="url" type="text" required placeholder="enter the thumbnil" />
                    </div>
                    <button id="btn1">Add Book</button>
                </form>
            </div>
        </div>

     );
}
 
export default AddBooks;