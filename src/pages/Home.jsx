// import logo from './logo.svg';
// import './App.css';
import {Link} from "react-router-dom";
import {Card, Row, Col} from 'antd';


function Home() {
  return (
    <div>

      <Row style={
          {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start"
          }
        }
        className="ts">

        <Col span={6}>
        <Link to="/ts">
          <Card hoverable={true}
            style={
              {width: 250, height: 100}
          }
          >
            <span>Timestamp Converter</span>
          </Card>

        </Link>
        </Col>

      </Row>
    </div>
  );
}

export default Home;
