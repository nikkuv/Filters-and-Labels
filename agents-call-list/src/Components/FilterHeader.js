import React from "react";
import { PageHeader, Avatar } from 'antd';

function FilterHeader() {

  const user = 'U'

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Call Lists"
        extra = {[
          <Avatar 
          key={1}
          style={{
            backgroundColor: '#F58229',
            verticalAlign: 'middle',
          }}
          size="large"
        >
        {user}
        </Avatar>
        ]}   
        />
    </div>
  );
}

export default FilterHeader;

