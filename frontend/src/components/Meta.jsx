import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'TwoFro, The Gadget Shop | Home',
  description: 'Your one stop for all the gadget need',
  keywords: 'electronics, buy electronics',
}

export default Meta