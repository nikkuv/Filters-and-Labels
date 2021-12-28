import React from "react";
import {PageHeader, Button} from 'antd';

function CreateLabels() {
  return (
    <div>
      <PageHeader
        ghost={false}
        title="Call List"
        extra={[
          <Button key="1" type="primary">
            Create Label
          </Button>
        ]}
      ></PageHeader>
    </div>
  );
}

export default CreateLabels;
