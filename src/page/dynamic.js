import React from 'react';
import {Card, Table, Button} from 'antd';
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址2',
    dataIndex: 'address',
    key: 'address',
  },
];

export default function index(){
  return (
    React.createElement(Card, {
      title: '页面标题',
    }, React.createElement(Button, {
      type: 'primary'
    }, 'Primary Button'), React.createElement(Table, {
      columns: columns,
      dataSource: dataSource
    }))
  )
  // return (
  //   <Card>
  //     <Table dataSource={dataSource} columns={columns} />
  //   </Card>
  // )
}

function test(){
  
  const cp = {
    "component": "Card",
    "title": "页面标题",
    "children": [{
      "component": "Button",
      "type": 'primary',
      "children": 'Primary Button'
    }, {
      "component": "Table",
      "columns": [
        {
          "title": "姓名",
          "dataIndex": "name",
          "key": "name"
        },
        {
          "title": "年龄",
          "dataIndex": "age",
          "key": "age"
        },
        {
          "title": "住址",
          "dataIndex": "address",
          "key": "address"
        }
      ]
    }]
  }

  React.createElement(Card, {
    title: '页面标题',
  }, React.createElement(Button, {
    type: 'primary'
  }, 'Primary Button'), React.createElement(Table, {
    columns: columns,
    dataSource: dataSource
  }))

}