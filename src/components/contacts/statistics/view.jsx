import React from 'react'
import {
  Card,
  Typography,
  Row,
  Col,
  Statistic,
  Descriptions
} from 'antd'
import { NATIONALITIES } from 'constants/nationalities'

function countGenders(contacts) {
  const result = {
    collection: 0,
    genders: {
      males: 0,
      females: 0,
      indeterminates: 0
    }
  }

  contacts.forEach(item => {
    result.collection++
    if (item.gender === 'male') {
      result.genders.males++
    } else if (item.gender === 'female') {
      result.genders.females++
    } else {
      result.genders.indeterminates++
    }
  })

  return result
}

function countPredominate({ males, females, indeterminates }) {
  return (females > indeterminates || males > indeterminates) ? (females > males ? "Women" : "Men") : "Indeterminates"
}

function countNationalities(contacts) {
  let results = []

  contacts.forEach(item => {
    if (Object.keys(results).includes(item.nat)) {
      results[item.nat]++
    } else {
      results[item.nat] = 1;
    }
  })

  return results
}

function renderNationalitiesStats(nationalities) {
  const nats = countNationalities(nationalities)

  return (
    <Descriptions title="Nationalities">
      {Object.entries(nats).map(([key, value]) => (
        <Descriptions.Item key={key} label={NATIONALITIES[key].name}>
          {value} contacts
        </Descriptions.Item>
      ))}
    </Descriptions>
  )
}

const View = ({ contacts, loading }) => {
  const gendersStats = countGenders(contacts)
  const predominate = countPredominate(gendersStats.genders)

  return (
    <Card bodyStyle={{ padding: "16px" }}>
      <Typography.Title level={3}>Statistic</Typography.Title>
      <Row gutter={24}>
        <Col className="_flex-noshrink">
          <Statistic
            title="Collection size"
            value={gendersStats.collection}
          />
        </Col>
        <Col className="_flex-noshrink">
          <Row gutter={12}>
            <Col span={6}>
              <Statistic
                title="Males"
                value={gendersStats.genders.males}
              />
            </Col>
            <Col span={6}>
              <Statistic
                title="Females"
                value={gendersStats.genders.females} />
            </Col>
            <Col span={6}>
              <Statistic
                title="Indeterminate"
                value={gendersStats.genders.indeterminates} />
            </Col>
            <Col span={24}>
              <Typography.Text mark>
                {predominate}
              </Typography.Text>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <Row>
        {renderNationalitiesStats(contacts)}
      </Row>
    </Card>
  )
}

export { View }