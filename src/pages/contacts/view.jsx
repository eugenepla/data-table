import React from 'react'
import {
  Button,
  Row,
  Col,
  Tooltip,
  Typography
} from 'antd'
import { Spin } from 'antd'
import {
  ReloadOutlined,
  AppstoreOutlined,
  BarsOutlined,
} from '@ant-design/icons'

import { TabularContacts } from 'components'

const PageContacts = () => {

  return (
    <div className={'page page--contacts'}>
      <div className="page__head">
        <Row justify="space-between">
          <Typography.Title level={2}>Contacts</Typography.Title>
          <Col>
            <Tooltip title="Update data">
              <Button
                style={{ marginRight: '8px' }}
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
      </div>
      <div className="page__body">
        <TabularContacts />
      </div>
      <div className='spin'>
        <Spin />
      </div>
    </div>
  )
}

export { PageContacts }
