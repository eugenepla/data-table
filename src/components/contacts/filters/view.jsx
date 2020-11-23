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

const FiltersContacts = () => {
  return (
    <Card bodyStyle={{ padding: "16px" }}>
      <Row align="middle">
        <Col className='_flex-grow'>
          <Row gutter={[12, 0, 12, 12]} align="middle">
            <Col xs={24} lg={11}>
              <Row>
                <Input.Search
                  placeholder="Search by full name"
                  size="large"
                />
              </Row>
            </Col>
            <Col xs={24} sm={10} lg={4}>
              <Row>
                <Select
                  id="genderSelect"
                  style={{ width: '100%' }}
                  allowClear
                  placeholder="Gender"
                  size="large"
                >
                </Select>
              </Row>
            </Col>
            <Col xs={24} sm={14} lg={5}>
              <Row>
                <Select
                  id="natSelect"
                  style={{ width: '100%' }}
                  mode="multiple"
                  maxTagCount={2}
                  allowClear
                  size="large"
                  placeholder="Nationality"
                >
                </Select>
              </Row>
            </Col>
            <Col xs={24} sm={6} lg={4}>
              <Row align="middle">
                <Checkbox>
                  I am creator
							  	</Checkbox>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className={'_flex-noshrink'}>
          <Row align="middle" className={'clear-button-row'}>
            <Button type="link">
              <CloseOutlined /> Clear
						</Button>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export { FiltersContacts }

// TODO width < 960 gutter = { [12, 12, 12, 12]}