import "./App.less";
import { Card, Button, Space } from "antd";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="body flex">
       <Card className="center" title="Welcome Everyone 👋" bordered={false} style={{ width: 300 }}>
      <p className="center">Here is the pages for the assignment 👇</p>
      <Space>
        <Button type="primary">
          <Link to='/calls'>
            Part 1️⃣
          </Link>
        </Button>
        <Button type="primary">
        <Link to='/labels'>
          Part 2️⃣
        </Link>
        </Button>
      </Space>
    </Card>
    </div>
  );
}

export default App;
