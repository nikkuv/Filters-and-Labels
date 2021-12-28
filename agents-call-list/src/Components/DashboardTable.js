import React, { useState } from "react";
import { Table, Tag, Space } from "antd";

const columns = [
  {
    title: "Call Id",
    dataIndex: "callid",
    key: "callid",
  },
  {
    title: "Agent Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Call Duration",
    dataIndex: "callduration",
    key: "callduration",
  },
  {
    title: "Labels",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Add Label</a>
        <a>Remove Label</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    callid : 1,
    name : "John Brown",
    callduration: '32 minutes',
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    callid : 2,
    name : "John Brown",
    callduration: '32 minutes',
    tags: ["nice", "developer"],
  },
  {
    key: "3",
    callid : 3,
    name : "John Brown",
    callduration: '32 minutes',
    tags: ["nice", "developer"],
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

function DashboardTable() {
  const [selectionType, setSelectionType] = useState("checkbox");

  return (
    <div>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}

export default DashboardTable;
