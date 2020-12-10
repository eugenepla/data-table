import React from 'react'
import { List, Typography, Row, Col, Card, Divider, Empty, Spin } from 'antd';
import { FiltersContacts } from 'components/contacts/filters'
import { StatsContacts } from 'components/contacts/statistics'

import { Copyable } from 'components/common/copyable'

const CardContact = ({ contact }) => {
  return (
    <Card
      hoverable
      bordered={false}
      cover={<img alt="avatar" src={contact?.picture?.large} />}>

      <Card.Meta title={
        <>
          <a href='/'>{contact?.name?.title}. {contact?.name?.first} {contact?.name?.last} </a>
          <Typography.Text
            ellipsis={true}
            type={'secondary'}>
            <small>({contact?.dob?.age} years)</small>
          </Typography.Text>
          <Divider dashed />
        </>}
        description={
          <div>
            <Row>
              <Copyable>
                <Typography.Text><a href='/'>{contact.email}</a></Typography.Text>
              </Copyable>
            </Row>

            <Row>
              <Copyable>
                <a href='/'>{contact?.phone}</a>
              </Copyable>
            </Row>

            <Row>
              <Copyable>
                <div style={{ fontWeight: 600 }}>/{contact?.location?.country}/</div>
                {`${contact?.location?.street?.number}
                    ${contact?.location?.street?.name}, 
                    ${contact?.location?.city}, 
                    ${contact?.location?.state} 
                    ${contact?.location?.postcode}`}
              </Copyable>
            </Row>
          </div>
        }
      />
      <Divider dashed />
    </Card>
  )
}

const View = ({
  contacts
}) => {
  console.log('contacts', contacts)
  return (
    <List
      //itemLayout="horizontal"
      grid={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 6, gutter: 16 }}
      dataSource={contacts}
      renderItem={(item) => <CardContact contact={item} />}
      header={<FiltersContacts />}
      footer={<StatsContacts data={contacts} />}
      pagination={{
        pageSize: 6,
        size: "medium",
        onChange: page => {
          console.log(page);
        },
      }}
    />
  )
}

export { View }
