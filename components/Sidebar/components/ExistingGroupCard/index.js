import React from 'react'

import Text from '../Text'
import GroupCard from '../GroupCard'
import CheckboxIcon from '../CheckboxIcon'
import NumberOfPeople from '../NumberOfPeople'
import Buttons from './components/Buttons'

export default ({ title, numberOfPeople, selected, color, select, deselect, combine }) => {
  return (
    <GroupCard>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Text primary style={{ marginBottom: '5px' }}>{title}</Text>
        <p style={{ marginTop: '5px' }}>
          <NumberOfPeople x={numberOfPeople} additionalInfo='people' />
        </p>
      </div>
      {selected ? <CheckboxIcon color={color} deselect={deselect} /> : <Buttons select={select} combine={combine} />}
    </GroupCard>
  )
}
