import { useState, useEffect, useMemo } from "react";
import {Button, Modal,Form, Input} from 'antd';
import axios from "axios";
import TableBooks from "./TableBooks";
import ModalFormBook from "./ModalFormBook";
import { ButtonCreate, Header, SearchBox } from "./styles";
import ModalWeather from "./ModalWeather";
import ButtonImport from "./ButtonImport";

const DEFAULT_CITY = {name:"",country:"",countryCode:"", population:"", countryflag: ""}

const Exam07 = () => {
    const [cities,setCities] = useState([]);
    const [formData, setFormdata] = useState(DEFAULT_CITY);
    const [open,setOpen] = useState(false)
    const [keyword,setKeyword] = useState();
    const [tableLoading,setTableLoading] = useState(false);
    const [formLoading,setFormLoading] = useState(false);
    const [itemLoading,setItemLoading] = useState(false);
    const [cityName,setCityName] = useState();
    
    const citiesSearchResult = useMemo(()=>{
        if(keyword){
            const newcities = cities.filter(item=>{
                return item.name.includes(keyword) || item.country.includes(keyword)
            })
            return newcities
        }
        return cities
        console.log(cities);
    },[keyword,cities])

    const fetchData = () => {
        setTableLoading(true);
        axios.get('https://6401dc9d0a2a1afebef3c167.mockapi.io/cities').then((res)=>{
            setCities(res.data);
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
                .put(`https://6401dc9d0a2a1afebef3c167.mockapi.io/cities/${id}`,data)
                .then((res)=>{
                    setFormLoading(false)
                    setFormdata(DEFAULT_CITY);
                    fetchData();
                })
            //setBooks(newBooks);   
        }
        else{
           axios.post('https://6401dc9d0a2a1afebef3c167.mockapi.io/cities',data).then((res) => {
                setFormLoading(false)
                setFormdata(DEFAULT_CITY); 
                fetchData();
           })
        }
        
    }

    const onEdit = (id) => {
        setItemLoading(true);
        axios
        .get(`https://6401dc9d0a2a1afebef3c167.mockapi.io/cities/${id}`)
        .then((res)=>{
            setFormdata(res.data);
            setOpen(true);
            setItemLoading(false);
        })
        
    }
    
    const onDelete = (id) => {
        setItemLoading(true);
        axios
        .delete(`https://6401dc9d0a2a1afebef3c167.mockapi.io/cities/${id}`)
        .then((res)=>{
            setItemLoading(false);
            fetchData();
            console.log(res);
        })
    }

    const onSearch = (e) => {
        setKeyword(e.target.value);
    }

    const onGetWeather = (name) => {
        console.log(name);
        setCityName(name);
    }

    const  onImport = async (items) => {
        setTableLoading(true);

        for(let i = 0; i< items.length; i++){
            await axios.post('https://6401dc9d0a2a1afebef3c167.mockapi.io/cities',items[i])
        }

        fetchData();
    }

    return(
        <div>
            <Header>
                <SearchBox onChange={onSearch}/>
                <ButtonImport onImport={onImport}/>
                <ButtonCreate onClick={onCreate}>Add Book</ButtonCreate>
            </Header>
            <ModalFormBook loading={formLoading} open={open} onSubmit={onSubmit} onCancel={onCancel} formData={formData} setFormData={setFormdata} DEFAULT_CITY={DEFAULT_CITY}/>
            <ModalWeather name={cityName}/>
            <TableBooks onGetWeather={onGetWeather} itemLoading={itemLoading} loading={tableLoading} cities={citiesSearchResult} onDelete={onDelete} onEdit={onEdit} formData={formData}/>
        </div>
    );
}

export default Exam07
