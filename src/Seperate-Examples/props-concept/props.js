import { BookList } from "./BookList";

const main = () =>{

    return <>
    {
        BookList.map((book) => {
            // return <Card Book = {book}></Card>  #1
            return <Card key={book.id} {...book}>This is child component</Card> // 🔍 why id needed?
        })

    }
    </>
}

const Card = ({id,img,title,author,child}) =>{ // (prop) #1 getting the `book` obj as it is from 36 line

    // const {id,img,title,author} = prop.Book; #1

    return <> 
    <img src={img} />
    <h3>{title}</h3>
    <h5>{author}</h5>
    <h1>{id}</h1>
    <p>{child}</p>
    </>
}



export default main;

/**
 * Cards --> serveObj : returns the objects 
 * 
 */