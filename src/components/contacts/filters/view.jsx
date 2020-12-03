import React from 'react'
import "antd/dist/antd.css"
import { CloseOutlined } from '@ant-design/icons'
import {
  Input,
  Select,
  Checkbox,
  Card,
  Row,
  Col,
  Button
} from 'antd'
import { NATIONALITIES } from 'constants/nationalities'
import { GENDER } from 'constants/gender'

const View = ({
  filters,
  filterContacts
}) => {
  console.log('filters', filters)
  return (
    <Card bodyStyle={{ padding: "16px" }}>
      <Row align="middle">
        <Col className='_flex-grow'>
          <Row gutter={[12, 0, 12, 12]} align="middle">
            <Col xs={24} lg={11}>
              <Row>
                <Input.Search
                  onChange={e => filterContacts({ ...filters, fullName: e.target.value }, console.log('fullName', filters))}
                  value={filters?.fullName}
                  placeholder="Search by full name"
                  size="large"
                />
              </Row>
            </Col>
            <Col xs={24} sm={10} lg={4}>
              <Row>
                <Select
                  onChange={value => filterContacts({ ...filters, gender: value }, console.log('gender', filters))}
                  value={filters?.gender}
                  id="genderSelect"
                  style={{ width: '100%' }}
                  allowClear
                  placeholder="Gender"
                  size="large"
                >
                  {Object.values(GENDER).map((item, index) => (
                    <Select.Option
                      key={index}
                      value={item.toLowerCase()}
                    >{item}</Select.Option>
                  ))}
                </Select>
              </Row>
            </Col>
            <Col xs={24} sm={14} lg={5}>
              <Row>
                <Select
                  onChange={value => filterContacts({ ...filters, nationality: value }, console.log('nationality', filters))}
                  value={filters?.nationality}
                  id="natSelect"
                  style={{ width: '100%' }}
                  mode="multiple"
                  maxTagCount={2}
                  allowClear
                  size="large"
                  placeholder="Nationality"
                >
                  {Object.entries(NATIONALITIES).map(([key, value]) => (
                    <Select.Option key={key} value={key}>{value.name}</Select.Option>
                  ))}
                </Select>
              </Row>
            </Col>
            <Col xs={24} sm={6} lg={4}>
              <Row align="middle">
                <Checkbox
                  onChange={(e) => filterContacts({ ...filters, creator: e.target.checked })}>
                  I am creator
							  	</Checkbox>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className={'_flex-noshrink'}>
          <Row align="middle" className={'clear-button-row'}>
            <Button type="link"
              onClick={() => filterContacts(null)}>
              <CloseOutlined /> Clear
						</Button>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export { View }

// TODO width < 960 gutter = { [12, 12, 12, 12]}