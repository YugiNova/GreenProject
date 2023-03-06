import { Input } from 'antd';


const FormUser = ({formData, setFormData, onClick}) => {

    const onChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name] : value
        })
    }
    
    return(
        <div>
            <Input name='name' value={formData.name} onChange={onChange} placeholder='Name'/>
            <Input name='email' value={formData.email} onChange={onChange} placeholder='Your Email'/>
            <Input name='phone' value={formData.phone} onChange={onChange} placeholder='Your Phone Numbers'/>
            {/* <input name='name' value={formData.name} onChange={onChange} placeholder='Name'/>
            <input name='email' value={formData.email} onChange={onChange} placeholder='Your Email'/>
            <input name='phone' value={formData.phone} onChange={onChange} placeholder='Your Phone Numbers'/> */}
            <button onClick={onClick}>{formData.id?'Edit':'Create'}</button>
        </div>
    )
}

export default FormUser