import React, { useEffect } from 'react'
import { Table } from 'antd'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchContacts } from 'store/contacts/actions'
import { getContactsArray } from 'store/contacts/selectors'
import { Avatar } from 'antd'
import { NATIONALITIES } from 'constants/nationalities'
import { birthdayConvert } from 'utils/date-convert'

const columns = [
  {
    title: 'Avatar',
    dataIndex: 'picture',
    fixed: 'left',
    align: 'center',
    width: 80,
    render: (picture) => {
      return <Avatar size="large" src={picture.large} />
    },
  },
  {
    title: 'Full name',
    dataIndex: 'name',
    width: 250,
    sorter: (a, b) => a.age - b.age, // TODO
    render: (name) => {
      return <a>{name.title} {name.first} {name.last}</a>
    },
  },
  {
    title: 'Birthday',
    dataIndex: 'dob',
    width: 250,
    render: (dob) => birthdayConvert(dob)
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: 250,
    render: (email) => {
      return <a>{email}</a>
    }
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    width: 250,
    render: (phone) => {
      return (
        <a>{phone}</a>
      )
    }
  },
  {
    title: 'Location',
    dataIndex: 'location',
    width: 250,
    render: (location) => {
      return <>
        <div style={{ fontWeight: 'bold' }}>/{location.country}/</div>
        {`${location.street.number} 
          ${location.street.name}, 
          ${location.city}, 
          ${location.state} 
          ${location.postcode}`}
      </>
    }
  },
  {
    title: 'Nationality',
    dataIndex: 'nat',
    width: 200,
    align: 'right',
    render: (nat) => { }
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
    <div className={'_container-padding table-container-padding margin-top'}>
      <Table
        columns={columns}
        dataSource={contactsArray}
        scroll={{ x: '80vw' }}
        size="small" />
    </div>
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