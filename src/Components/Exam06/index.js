import { useState, useEffect, useMemo } from "react";
import {Button, Modal,Form, Input} from 'antd';
import axios from "axios";
import TableBooks from "./TableBooks";
import ModalFormBook from "./ModalFormBook";
import { ButtonCreate, Header, } from "./styles";
import SearchBox from "../SearchBox";

const DEFAULT_BOOK = {title:"",author:"",description:"", type:"", pageNumber: ""}

const Exam06 = () => {
    const [books,setBooks] = useState([]);
    const [formData, setFormdata] = useState(DEFAULT_BOOK);
    const [open,setOpen] = useState(false)
    const [keyword,setKeyword] = useState();
    const [tableLoading,setTableLoading] = useState(false);
    const [formLoading,setFormLoading] = useState(false);
    const [itemLoading,setItemLoading] = useState(false);
    
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
        setTableLoading(true);
        axios.get('https://6401dc9d0a2a1afebef3c167.mockapi.io/books').then((res)=>{
            setBooks(res.data);
            setTableLoading(false);
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
        setFormLoading(true);
        if(id){
            axios
                .put(`https://6401dc9d0a2a1afebef3c167.mockapi.io/books/${id}`,data)
                .then((res)=>{
                    setFormLoading(false)
                    setFormdata(DEFAULT_BOOK);
                    fetchData();
                })
            //setBooks(newBooks);   
        }
        else{
           axios.post('https://6401dc9d0a2a1afebef3c167.mockapi.io/books',data).then((res) => {
                setFormLoading(false)
                setFormdata(DEFAULT_BOOK); 
                fetchData();
           })
        }
        
    }

    const onEdit = (id) => {
        setItemLoading(true);
        axios
        .get(`https://6401dc9d0a2a1afebef3c167.mockapi.io/books/${id}`)
        .then((res)=>{
            setFormdata(res.data);
            setOpen(true);
            setItemLoading(false);
        })
        
    }
    
    const onDelete = (id) => {
        setItemLoading(true);
        axios
        .delete(`https://6401dc9d0a2a1afebef3c167.mockapi.io/books/${id}`)
        .then((res)=>{
            setItemLoading(false);
            fetchData();
            console.log(res);
        })
    }

    const onSearch = (e) => {
        setKeyword(e.target.value);
    }

    return(
        <div>
            <Header>
                {/* <SearchBox onChange={onSearch}/> */}
                <SearchBox/>
                <ButtonCreate onClick={onCreate}>Add Book</ButtonCreate>
            </Header>
            <ModalFormBook loading={formLoading} open={open} onSubmit={onSubmit} onCancel={onCancel} formData={formData} setFormData={setFormdata} DEFAULT_BOOK={DEFAULT_BOOK}/>
            <TableBooks itemLoading={itemLoading} loading={tableLoading} books={booksSearchResult} onDelete={onDelete} onEdit={onEdit} formData={formData}/>
        </div>
    );
}

export default Exam06
