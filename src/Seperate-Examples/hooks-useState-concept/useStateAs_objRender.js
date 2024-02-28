import { useState } from "react";
import {BookList} from "../props-concept/BookList";

export const UseStateAs_ObjRender =  () => {

    const[books, setBooks] = useState(BookList);

    return (
    <>
        {
            books.map(({id,author,title,img}) => {
                
                // const{id,author,title,img} = book 
                return (
                    <section>
                        <h1>{id}</h1>
                        <img src={img}/>
                        <h3>{title}</h3>
                        <h5>{author}</h5>
                        
                    </section>
                )
            })
        }
        <button onClick={() => setBooks([])}>Remove All</button>  
    </>
    )
}   