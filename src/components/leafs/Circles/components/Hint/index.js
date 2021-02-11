import React from 'react'

import Text from '../../../../shared/Text'

import styles from './style.styl'

export default ({ selectedGroups, selectedCircleParts }) => {
  const lengthToHint = {
    1: '(select another group to continue)',
    2: '(click on area to select what goes to new group)'
  }

  return (
    <Text className={styles.hint}>
      {
        selectedCircleParts.length === 1
          ? '(click on selected area again to deselect)'
          : lengthToHint[selectedGroups.length]
      }
    </Text>
  )
}
