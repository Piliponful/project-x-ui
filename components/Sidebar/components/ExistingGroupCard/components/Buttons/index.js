import React from 'react'

import Select from '../SelectButton'
import Combine from '../CombineButton'

export default ({ select, combine }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Select onClick={select} style={{ marginBottom: '10px' }} />
    <Combine onCombine={combine} />
  </div>
)
