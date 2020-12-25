import React, { useEffect } from 'react'
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

import { TabularContacts } from 'components/contacts/tabular'
import { TiledContacts } from 'components/contacts/tiled'

const View = ({
  view,
  fetchContacts,
  changeViewContacts
}) => {

  useEffect(() => {
    fetchContacts(40)
  }, [fetchContacts])

  const reloadContacts = () => {
    alert('TODO')
  }

  return (
    <div className={'page page--contacts'}>
      <div className="page__head">
        <Row justify="space-between">
          <Typography.Title level={2}>Contacts</Typography.Title>
          <Col>
            <Tooltip title="Update data">
              <Button
                onClick={() => reloadContacts()}
                style={{ marginRight: '12px' }}
                type="dashed"
                shape="circle"
                icon={<ReloadOutlined />}
              />
            </Tooltip>
            <div className="ant-btn-group">
              <Tooltip title="Tiled view">
                <Button
                  onClick={() => changeViewContacts('tiledView')}
                  type={view === "tiledView" ? "primary" : "default"}
                  icon={<AppstoreOutlined />}
                />
              </Tooltip>
              <Tooltip title="Tabular view">
                <Button
                  onClick={() => changeViewContacts('tabularView')}
                  type={view === "tabularView" ? "primary" : "default"}
                  icon={<BarsOutlined />}
                />
              </Tooltip>
            </div>
          </Col>
        </Row>
      </div>
      <div className="page__body">
        {view === 'tabularView' ? <TabularContacts /> : <TiledContacts />}
      </div>
      <div className='spin'>
        <Spin />
        TODO
      </div>
    </div>
  )
}

export { View }
