import { Card, Col, Row, Statistic } from "antd";
import CountUp from "react-countup";
import { useState,useEffect, useMemo } from "react";
import './index.css'

const GeneralDetail = ({ usersLength }) => {
  const formatter = (value) => <CountUp end={value} separator="," />;
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);
  const clock = useMemo(()=> {
    return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2)
  },[date])
  const day = useMemo(()=> {
    return ("0" + date.getDate()) + "/" + ("0" + date.getMonth()) + "/" + ("0" + date.getFullYear()).slice(-4)
  },[date])
  
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card className="statistics-card">
          <Statistic
            title="Users Count"
            value={usersLength}
            formatter={formatter}
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card className="statistics-card">
          <Statistic title="Day" value={day} />
        </Card>
      </Col>
      <Col span={8}>
        <Card className="statistics-card">
          <Statistic title="Time" value={clock} />
        </Card>
      </Col>
    </Row>
  );
};
export default GeneralDetail;
