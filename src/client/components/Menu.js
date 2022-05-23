import React from 'react';

import { Table, Tag, Space, Button } from 'antd';

const columns = [
  {
    title: 'Purchase Order',
    dataIndex:'po',
    key: 'po',
  },
  {
    title: 'Company Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'PO Date',
    dataIndex: 'po_date',
    key: 'po_date',
  },

  {
    title: 'Vendor Name',
    dataIndex: 'vendor',
    key: 'vendor',
  },

  {

  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    po:'122312',
    name: 'John Brown',
    po_date: '12-04-2022',
    vendor: "Zaggle",
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    po:'122982',
    name: 'Jim Green',
    po_date: '12-10-2022',
    vendor: "Zaggle",
    tags: ['loser'],
  },
  {
    key: '3',
    po:'122365',
    name: 'Joe Black',
    po_date: '21-03-2022',
    vendor: "Zaggle",
    tags: ['cool', 'teacher'],
  },
];

export default () => <Table columns={columns} dataSource={data} />;