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

        {/* <Col span={4}> */}
        <Link to="/ts">
          <Card hoverable={true}
            style={
              {width: 250, height: 100}
          }
          >
            <span>Timestamp Converter</span>
          </Card>
        </Link>
        {/* </Col> */}

        {/* <Col span={4}> */}
        <Link to="//47.106.82.158:8888">
          <Card hoverable={true}
            style={
              {width: 250, height: 100}
          }
          >
            <span>Cloud Clipboard</span>
          </Card>
        </Link>
        {/* </Col> */}

        <Link to="//47.106.82.158">
          <Card hoverable={true}
            style={
              {width: 250, height: 100}
          }
          >
            <span>Online Forum</span>
          </Card>
        </Link>

      </Row>
    </div>
  );
}

export default Home;
