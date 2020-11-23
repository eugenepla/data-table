import React, { useEffect } from 'react'
import { Table, Tag } from 'antd'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { fetchContacts } from 'store/contacts/actions'
import { getContactsArray } from 'store/contacts/selectors'
import { Avatar } from 'antd'
import { NATIONALITIES } from 'constants/nationalities'
import { birthdayConvert } from 'utils/date-convert'

import { FiltersContacts, StatsContacts } from 'components'
import { Copyable } from 'components/contacts/copyable'

const columns = [
  {
    title: 'Avatar',
    dataIndex: 'picture',
    fixed: 'left',
    align: 'center',
    width: 80,
    key: 'avatar',
    render: (picture) => {
      return <Avatar size="large" src={picture.large} />
    },
  },
  {
    title: 'Full name',
    dataIndex: 'name',
    width: 155,
    key: 'fullName',
    sorter: (a, b) => {
      const fullName = (item) => {
        return `${item.name.title} ${item.name.first} ${item.name.last}`
      }
      return fullName(a).localeCompare(fullName(b))
    },
    render: (name) => {
      return <a>{name.title} {name.first} {name.last}</a>
    },
  },
  {
    title: 'Birthday',
    dataIndex: 'dob',
    width: 250,
    key: 'birthday',
    render: (dob) => birthdayConvert(dob)
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: 250,
    key: 'email',
    render: (email) => {
      return (
        <Copyable>
          <a>{email}</a>
        </Copyable>
      )
    }
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    width: 250,
    key: 'phone',
    render: (phone) => {
      return (
        <Copyable>
          <a>{phone}</a>
        </Copyable>
      )
    }
  },
  {
    title: 'Location',
    dataIndex: 'location',
    width: 250,
    key: 'location',
    render: (location) => {
      return (
        <Copyable>
          <div style={{ fontWeight: 600 }}>/{location.country}/</div>
          {`${location.street.number} 
          ${location.street.name}, 
          ${location.city}, 
          ${location.state} 
          ${location.postcode}`}
        </Copyable>
      )
    }
  },
  {
    title: 'Nationality',
    dataIndex: 'nat',
    width: 200,
    align: 'right',
    key: 'nationality',
    render: (nat) => {
      return <Tag color={NATIONALITIES[nat].color}>{NATIONALITIES[nat].name}</Tag>
    }
  },
]

const TabularContacts = ({
  fetchContacts,
  contactsArray
}) => {
  console.log('fetchcONTA', contactsArray)
  useEffect(() => {
    fetchContacts()
  }, [fetchContacts])

  return (
    <Table
      title={() => <FiltersContacts />}
      footer={() => <StatsContacts />}
      columns={columns}
      dataSource={contactsArray}
      scroll={{ x: '80vw' }}
      size="small" />
  )
}

const mapStateToProps = (state) => {
  return {
    contactsArray: getContactsArray(state)
  };
};

const mapDispatchToProps = {
  fetchContacts
}

const TabularContactsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(TabularContacts);

export { TabularContactsContainer };