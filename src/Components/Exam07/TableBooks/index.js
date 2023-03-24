import {Table, Button, Modal} from 'antd'
import { UserOutlined,ExclamationCircleFilled } from '@ant-design/icons';
import { Actions,Country, Image,Population } from './styles';
const {confirm} = Modal;

const getColor = (population) => {
  if(population < 5){
    return "green"
  }
  else if (population < 10){
    return "yellow"
  }
  return "red";
}

const TableBooks = (props) => {
      const showConfirm = (item) => {
        confirm({
          title: 'Bạn có muốn xóa cuốn sách này ?',
          icon: <ExclamationCircleFilled />,
          content: 'Dữ liệu sẽ mất vĩnh viễn',
          onOk() {
            props.onDelete(item.id)
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      };
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Population',
          dataIndex: 'population',
          key: 'population',
          render: (text,item) => {
            const color = getColor(item.population)
            return(
              <Population color={color}>
                {item.population} <UserOutlined />
              </Population>
            );
          }
        },
        {
          title: 'Country',
          dataIndex: 'country',
          key: 'country',
          render: (text,item) => {
            return(
              <Country>
                <Image src={item.countryflag}/>
                <div>
                  <h6>{item.country}</h6>
                  <div>{item.countryCode}</div>
                </div>
              </Country>
            );
          }
        },
        {
          title: 'Action',
          dataIndex: 'action',
          render: (text,item) =>{
            return(
              <Actions>
                <Button onClick={()=> {props.onGetWeather(item.name)}}>Weather</Button>
                <Button disabled={props.itemLoading} onClick={()=>{props.onEdit(item.id)}}>Edit</Button>
                <Button disabled={props.itemLoading} onClick={()=>{showConfirm(item)}}>Delete</Button>
              </Actions>
            );
          }
        }
      ];
      
      
    return(
        <Table loading={props.loading} dataSource={props.cities} columns={columns} />
    )
}

export default TableBooks;