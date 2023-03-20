import { useState, useEffect, useMemo } from "react";
import {Button, Modal,Form, Input} from 'antd';
import axios from "axios";
import TableBooks from "./TableBooks";
import ModalFormBook from "./ModalFormBook";
import { ButtonCreate, Header, SearchBox } from "./styles";

const DEFAULT_BOOK = {title:"",author:"",description:"", type:"", pageNumber: ""}

const Exam06 = () => {
    const [books,setBooks] = useState([]);
    const [formData, setFormdata] = useState(DEFAULT_BOOK);
    const [open,setOpen] = useState(false)
    const [keyword,setKeyword] = useState();
    
    const booksSearchResult = useMemo(()=>{
        if(keyword){
            const newBooks = books.filter(book=>{
                return book.title.includes(keyword) || book.author.includes(keyword)
            })
            return newBooks
        }
        return books
        console.log(booksSearchResult);
    },[keyword,books])

    const fetchData = () => {
        axios.get('https://6401dc9d0a2a1afebef3c167.mockapi.io/books').then((res)=>{
            setBooks(res.data)
        })
    }

    //GET: Lấy dữ liệu -> axios.get(url)
    //POST: Tạo mới dữ liệu -> axios.post(url,formData) >> dữ liệu vừa được tạo trên server
    //PUT/PATCH: Update dữ liệu -> axios.put(url,formData) / axios.patch(url,formData) >> dữ liệu vừa được cập nhật trên server
    //DELETE: axios.delete(url)

    useEffect(()=>{
        fetchData()
    },[])

    // useEffect( () => {
    //     const fetchData = async () => {
    //         const res = await axios.get('https://6401dc9d0a2a1afebef3c167.mockapi.io/books');
    //         setBooks(res.data);
    //     }
    //     fetchData()
    // },[])

    // useEffect(async () => {
    //     const res = await axios.get('https://6401dc9d0a2a1afebef3c167.mockapi.io/books');
    //     setBooks(res.data);
    // },[])

    const onCreate = () => {
        setOpen(true)
    }

    const onCancel = () => {
        setOpen(false)
    }

    const onSubmit = (id,data) => {
        if(id){
            const newBooks = books.map(book => {
                axios
                    .put(`https://6401dc9d0a2a1afebef3c167.mockapi.io/books/${id}`,data)
                    .then((res)=>{
                        fetchData();
                    })
            })
            setBooks(newBooks);   
        }
        else{
           axios.post('https://6401dc9d0a2a1afebef3c167.mockapi.io/books',data).then((res) => {
            fetchData();
           })
        }
        setFormdata(DEFAULT_BOOK);
    }

    const onEdit = (id) => {
        axios
        .get(`https://6401dc9d0a2a1afebef3c167.mockapi.io/books/${id}`)
        .then((res)=>{
            setFormdata(res.data);
            setOpen(true);
        })
        
    }
    
    const onDelete = (selectedBook) => {
        const newBooks = books.filter(book => {
            return selectedBook.id !== book.id;
        })
        setBooks(newBooks);
    }

    const onSearch = (e) => {
        setKeyword(e.target.value);
    }

    return(
        <div>
            <Header>
                <SearchBox onChange={onSearch}/>
                <ButtonCreate onClick={onCreate}>Add Book</ButtonCreate>
            </Header>
            <ModalFormBook open={open} onSubmit={onSubmit} onCancel={onCancel} formData={formData} setFormData={setFormdata} DEFAULT_BOOK={DEFAULT_BOOK}/>
            <TableBooks books={booksSearchResult} onDelete={onDelete} onEdit={onEdit} formData={formData}/>
        </div>
    );
}

export default Exam06
