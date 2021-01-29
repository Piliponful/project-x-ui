import React from 'react'

import Button from './components/Button'

export default ({ respond, createNewGroup }) => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <Button answer='Yes' respond={respond('yes')} />
      <Button answer='No' respond={respond('no')} />
    </div>
  )
}
