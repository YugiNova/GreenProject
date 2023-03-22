import {Table, Button, Modal} from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Actions } from './styles';
const {confirm} = Modal;

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
          title: 'Country',
          dataIndex: 'country',
          key: 'country',
        },
        {
          title: 'Country Code',
          dataIndex: 'countryCode',
          key: 'countryCode',
        },
        {
          title: 'Population',
          dataIndex: 'population',
          key: 'population',
        },
        {
          title: 'Country Flag',
          dataIndex: 'countryflag',
          key: 'countryflag',
        },
        {
          title: 'Action',
          dataIndex: 'action',
          render: (text,item) =>{
            return(
              <Actions>
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