import './styles.scss'
import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Tooltip } from 'antd'
import { CopyOutlined, CheckOutlined } from '@ant-design/icons'

const Copyable = ({ children, text }) => {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 3000)
    }
  })

  return (
    <div className='container'>
      <CopyToClipboard onCopy={() => setIsCopied(true)} text={text}>
        <Tooltip title={isCopied ? 'Copied' : 'Copy'}>
          {isCopied
            ? <CheckOutlined className='icon green-color-icon' />
            : <CopyOutlined className='icon blue-color-icon' />
          }
        </Tooltip>
      </CopyToClipboard>
      {children}
    </div>
  )
}

export { Copyable }