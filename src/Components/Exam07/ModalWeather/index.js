import {Modal} from 'antd'
import { useEffect, useState } from 'react';
import axios from 'axios';
const {confirm} = Modal;

const ModalWeather = (props) => {
    const [data,setData] = useState({})
    const [open,setOpen] = useState(false)
    useEffect(()=> {
        if(props.name !== ''){
            axios.get(`http://api.weatherapi.com/v1/current.json?key=6fd6b82aed1c4485b0d133039232403&q=${props.name}&aqi=no`).then(res => {
            setData(res.data);
            console.log(res.data);
            setOpen(true)
        })
        }
    },[props.name])
    const onCancel = () => {
        setOpen(false)
    }
    return(
        <Modal open={open} footer={null} onCancel={onCancel}>
            {data.location && data.current && (
                <div>
                <div>Thành phố: {data.location.name}</div>
                <div>
                    lon: {data.location.lon}, lat: {data.location.lat}
                </div>
                <div>Nhiệt độ: {data.current.temp_c}</div>
                <div>Thời tiết: {data.current.condition.text}</div>
            </div>
            )}
        </Modal>
    );
}

export default ModalWeather;