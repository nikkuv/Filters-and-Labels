import React from "react";
import {PageHeader, Button} from 'antd';

function TableHeader() {
  return (
    <div>
      <PageHeader
        ghost={false}
        extra={[
          <Button key="1" type="primary">
            Add Label
          </Button>,
           <Button key="2" type="primary">
            Remove Label
          </Button>
        ]}
      ></PageHeader>
    </div>
  );
}

export default TableHeader;
