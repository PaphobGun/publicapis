import { Table } from 'antd';

const columns = [
  {
    title: 'Category',
    dataIndex: 'cat',
  },
];

const CategoriesTable = ({ rowKey, dataSource = [], isLoading }) => {
  return (
    <Table
      rowKey={rowKey}
      columns={columns}
      dataSource={dataSource}
      loading={isLoading}
    />
  );
};

export default CategoriesTable;
