import React, { useEffect } from 'react'
import { Table } from 'antd'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchContacts } from 'store/contacts/actions'
import { getContactsArray } from 'store/contacts/selectors'

const columns = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    fixed: 'left',
    align: 'center',
    width: 80
  },
  {
    title: 'Full name',
    dataIndex: 'full name',
    width: 155,
    sorter: (a, b) => a.age - b.age
  },
  {
    title: 'Birthday',
    dataIndex: 'birthday',
    width: 250,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: 155
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    width: 155
  },
  {
    title: 'Location',
    dataIndex: 'location',
    width: 250
  },
  {
    title: 'Nationality',
    dataIndex: 'nationality',
    width: 155,
    align: 'right'
  },
]

const renderAvatar = () => {

}

const renderFullName = () => {

}

const renderBirthday = () => {

}

const renderEmail = () => {

}

const renderPhone = () => {

}

const renderLocation = () => {

}

const renderNationality = () => {

}

const renderDataSource = (contacts) => {
  return contacts.map((item, index) => ({
    avatar: renderAvatar(item.picture.mediums),
    fullName: renderFullName(item.dob),
    birthday: renderBirthday(item.dob),
    email: renderEmail(item.email),
    phone: renderPhone(item.cell),
    location: renderLocation(item.location),
    nationality: renderNationality(item.location.country),
    key: index
  }))
}

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
        // dataSource={renderDataSource}
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