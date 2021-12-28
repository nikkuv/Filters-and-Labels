import React from "react";
import { Typography, InputNumber, Button } from "antd";

const { Title } = Typography;

function FilterComponent() {
  return (
    <div className="bg padding margin">
      <Title level={4}>Filters</Title>
      <p>Enter a call Duration range</p>
      <InputNumber
        className="width"
        size="large"
        min={1}
        max={100000}
        defaultValue={3}
      />
      <Button className="width margin" type="primary">
        Filter
      </Button>
    </div>
  );
}

export default FilterComponent;
