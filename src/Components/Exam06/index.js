import { useState, useEffect, useMemo } from "react";
import {Button, Modal,Form, Input} from 'antd'
import TableBooks from "./TableBooks";
import ModalFormBook from "./ModalFormBook";
import { ButtonCreate } from "./styles";

const DEFAULT_BOOK = {title:"",author:"",description:"", type:"", pageNumber: ""}

const Exam06 = () => {
    const [books,setBooks] = useState([]);
    const [formData, setFormdata] = useState(DEFAULT_BOOK);
    const [open,setOpen] = useState(false)

    const onCreate = () => {
        setOpen(true)
    }

    const onCancel = () => {
        setOpen(false)
    }

    const onSubmit = (id,data) => {
        if(id){
            const newBooks = books.map(book => {
                if(book.id === id){
                    return {id:id, ...data}
                }
                return book
            })
            setBooks(newBooks);
            
        }
        else{
            setBooks([
                ...books,
                {
                    id: Math.random(),
                    ...data,
                }
            ])
            
        }
        setFormdata(DEFAULT_BOOK);
    }

    const onEdit = (selectedBook) => {
        setFormdata(selectedBook);
        console.log(selectedBook);
        setOpen(true)
    }
    
    const onDelete = (selectedBook) => {
        const newBooks = books.filter(book => {
            return selectedBook.id !== book.id;
        })
        setBooks(newBooks);
    }

    return(
        <div>
            <ModalFormBook open={open} onSubmit={onSubmit} onCancel={onCancel} formData={formData}/>
            <ButtonCreate onClick={onCreate}>Add Book</ButtonCreate>
            <TableBooks books={books} onDelete={onDelete} onEdit={onEdit} formData={formData}/>
        </div>
    );
}

export default Exam06
