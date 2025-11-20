import React from 'react'

const ContentPara = ({children ,textColor}) => {
  return (
   <p className={`${textColor} mb-4`}>
    {children}
   </p>
  )
}

export default ContentPara