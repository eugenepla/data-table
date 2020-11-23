import React from 'react'
import {
  Card,
  Typography,
  Row,
  Col,
  Statistic
} from 'antd'

const StatsContacts = () => {
  return (
    <Card bodyStyle={{ padding: "16px" }}>
      <Typography.Title level={3}>Statistic</Typography.Title>
      <Row gutter={24}>
        <Col className="_flex-noshrink">
          <Statistic title="Collection size" />
        </Col>
        <Col className="_flex-noshrink">
          <Row gutter={12}>
            <Col span={6}>
              <Statistic title="Males" />
            </Col>
            <Col span={6}>
              <Statistic title="Females" />
            </Col>
            <Col span={6}>
              <Statistic title="Indeterminate" />
            </Col>
            <Col span={24}>
              <Typography.Text mark>

              </Typography.Text>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <Row>
        Nationalities
        </Row>
    </Card>
  )
}

export { StatsContacts }