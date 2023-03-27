import {Modal} from 'antd'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {WeatherPanel,Temperature, WeatherInfo,Condition} from './styles'
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
                <WeatherPanel>
                    <h1>{data.location.name}</h1>
                    <Temperature>
                        <h1>{data.current.temp_c}&deg;C</h1>
                        <h1>{data.current.temp_f}&deg;F</h1>
                    </Temperature>
                    <Condition>
                        <img src={data.current.condition.icon}/>
                        <h2>{data.current.condition.text}</h2>
                    </Condition>
                    <WeatherInfo>
                        <div>
                            <h1>Kinh độ</h1>
                            <h2>{data.location.lon}</h2>
                        </div>
                        <div>
                            <h1>Vĩ độ</h1>
                            <h2>{data.location.lat}</h2>
                        </div>
                        <div>
                            <h1>Áp suất</h1>
                            <h2>{data.current.pressure_in}</h2>
                        </div>
                        <div>
                            <h1>Độ ẩm</h1>
                            <h2>{data.current.humidity}</h2>
                        </div>
                        <div>
                            <h1>Sức gió</h1>
                            <h2>{data.current.wind_mph} mph</h2>
                        </div>
                        <div>
                            <h1>Tia UV</h1>
                            <h2>{data.current.uv}</h2>
                        </div>
                        <div>
                            <h1>Áp suất</h1>
                            <h2>{data.current.pressure_in}</h2>
                        </div>
                        <div>
                            <h1>Áp suất</h1>
                            <h2>{data.current.pressure_in}</h2>
                        </div>
                    </WeatherInfo>
                    
                </WeatherPanel>
            )}
        </Modal>
    );
}

export default ModalWeather;