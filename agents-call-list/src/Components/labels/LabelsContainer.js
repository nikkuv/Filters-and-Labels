import React from "react";
import { Typography, Tag } from 'antd';

const { Title } = Typography;

function LabelsContainer() {
  return (
    <div className="bg padding margin">
      <Title level={4}>Labels</Title>
      <div>
        <Tag color="orange">Label-1</Tag>
        <Tag color="orange">Label-2</Tag>
        <Tag color="orange">Label-3</Tag>
        <Tag color="orange">Label-4</Tag>
        <Tag color="orange">Label-5</Tag>
      </div>
    </div>
  );
}

export default LabelsContainer;
