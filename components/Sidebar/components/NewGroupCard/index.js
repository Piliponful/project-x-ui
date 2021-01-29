import React from 'react'

import GroupCard from '../GroupCard'
import Save from './components/SaveButton'
import Input from './components/Input'
import CheckboxIcon from '../CheckboxIcon'
import NumberOfPeople from '../NumberOfPeople'

export default ({ numberOfPeople, selected, color, save, onTitleInput }) => {
  return (
    <GroupCard>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex' }}>
          <p style={{ marginRight: '5px' }}>
            <Input onTitleInput={onTitleInput} />
          </p>
          <Save save={save} />
        </div>
        <p style={{ marginTop: '5px' }}>
          <NumberOfPeople x={numberOfPeople} additionalInfo='people' />
        </p>
      </div>

      {selected ? <CheckboxIcon color={color} /> : null}
    </GroupCard>
  )
}
