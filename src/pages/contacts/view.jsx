import React from 'react'
import {
  Button,
  Row,
  Col,
  Radio,
  Tooltip,
  Typography
} from 'antd'
import {
  ReloadOutlined,
  AppstoreOutlined,
  BarsOutlined,
} from '@ant-design/icons'

import {
  FiltersContacts,
  TabularContacts,
  ContactsStats
} from 'components'

const PageContacts = (props) => {

  return (
    <div className={'page page--contacts'}>
      <Row justify="space-between">
        <Typography.Title level={2} >Contacts</Typography.Title>
        <Col>
          <Tooltip title="Update data">
            <Button
              //margin-right
              type="dashed"
              shape="circle"
              icon={<ReloadOutlined />}
              loading={false}
            />
          </Tooltip>
          <div className="ant-btn-group">
            <Tooltip title="Tiled view">
              <Button
                type="primary"
                icon={<AppstoreOutlined />}
              />
            </Tooltip>
            <Tooltip title="Tabular view">
              <Button
                //type="primary"
                icon={<BarsOutlined />}
              />
            </Tooltip>
          </div>
        </Col>
      </Row >
      <FiltersContacts />
      <TabularContacts />
      <ContactsStats />
    </div>
  )
}

export { PageContacts }
