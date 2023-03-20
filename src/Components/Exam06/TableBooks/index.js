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
            props.onDelete(item)
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      };
      const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Author',
          dataIndex: 'author',
          key: 'author',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: 'Page Number',
          dataIndex: 'pageNumber',
          key: 'pageNumber',
        },
        {
          title: 'Action',
          dataIndex: 'action',
          render: (text,item) =>{
            return(
              <Actions>
                <Button className='red' onClick={()=>{props.onEdit(item.id)}}>Edit</Button>
                <Button onClick={()=>{showConfirm(item)}}>Delete</Button>
              </Actions>
            );
          }
        }
      ];
      
      
    return(
        <Table dataSource={props.books} columns={columns} />
    )
}

export default TableBooks;