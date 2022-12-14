// import logo from './logo.svg';
// import './App.css';
import {useState, useEffect} from 'react'
import moment from 'moment'
import {
  Input,
  Row,
  Col,
  Button,
  Alert,
  Form
} from 'antd'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Icon, {CopyOutlined, HomeOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";


function TSConverter() {
  const [dt, setDT] = useState(moment(parseInt(Date.now())).format('YYYY-MM-DD HH:mm:ss'))
  const [ts, setTS] = useState(parseInt(Date.now() / 1000))
  const [tsDefault, setTSDefault] = useState(parseInt(Date.now() / 1000))
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTSDefault(parseInt(Date.now() / 1000))
      console.log('This will run every second!');
    }, 1000);
    return() => clearInterval(interval);
  }, []);


  const handleTimestampChange = (e) => { // console.log(111, e.target.value);
    const inputTS = e.target.value;
    const ts = inputTS.length === 10 ? parseInt(inputTS) * 1000 : parseInt(inputTS)
    //
    const dt = moment(ts).format('YYYY-MM-DD HH:mm:ss');
    // console.log(232323, res);
    setTS(inputTS)
    setDT(dt)
  }

  const handleDatetimeChange = (e) => {
    console.log(111, e.target.value, moment(e.target.value).valueOf() / 1000);
    setTS(moment(e.target.value).valueOf() / 1000)

    // const inputTS = e.target.value;
    // const ts = inputTS.length === 10 ? parseInt(inputTS) * 1000: parseInt(inputTS)

    const dt = e.target.value;
    // // console.log(232323, res);
    setDT(dt)
  }

  const copyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);
  }

  const handleCopy = (text) => {
    copyToClipboard(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  

  return (
    <div className="ts">
      <br />
      <Link to="/"><HomeOutlined  style={{ fontSize: 35, paddingLeft: 30}}/></Link>
      <Row>
        <Col
        span={6}
        offset={9}>

          {/* <p style={}>Timestamp Converter</p> */}
          
          {/* {
            copied
            ?
          <Alert type="success" hidden="true" closable="true" message="Copied" />
            : null
          } */}

          {/* <br /> */}
          {
            copied
            ?
            <Alert type="success" hidden="true" message="Copied" />
            :
            <Alert
            type="info"
            message={
              "CurrentTime: " + tsDefault + '|' + (
                moment(tsDefault * 1000).format('YYYY-MM-DD HH:mm:ss')
              )
            }/>
          }

          <br />

          <Form.Item
          // label="TS"
          >
            <Input placeholder="Input timestamp here."
              onChange={handleTimestampChange}
              value={ts}
              size="large"
              addonAfter={
                <CopyOutlined
              onClick=
              {() => handleCopy(ts)}/>
              }/>
          </Form.Item>


          {/* <Button type="primary"
            icon={<CopyOutlined/>}
            onClick={
              () => navigator.clipboard.writeText(ts)
          }>Copy
          </Button> */}

          {/* <br/>
          <input type="radio" value="ms"/>ms
          <input type="radio" value="s" default/>s
          <br/> */}

          <Form.Item>
            <Input placeholder="Input datetime here."
              value={dt}
              size="large"
              onChange={handleDatetimeChange}
              addonAfter={
                <CopyOutlined
                onClick={() => handleCopy(dt)}/>
              }
              // onClick={() => navigator.clipboard.writeText(dt)}
            />

          </Form.Item>


          {/* <Button type="primary" shaple=""
            icon={<CopyOutlined/>}
            onClick={
              () => navigator.clipboard.writeText(dt)
          }>Copy
          </Button> */}

        </Col>

      </Row>

      {/* <p>Timestamp converter</p> */} </div>
  );
}

export default TSConverter;
