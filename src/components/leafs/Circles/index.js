/* eslint-disable */
import React, { useEffect } from 'react'
import { isEqual } from 'lodash'

import Hint from './components/Hint'

import styles from './style.module.scss'

import Circles from './Circles'
import CirclesMirror from './CirclesMirror'
import Circle from './Circle'
import CircleBlue from './CircleBlue'

const circlePartsToCompositionType = circleParts => {
  if (circleParts.includes('intersection') && circleParts.length === 1) {
    return 'intersection'
  }
  if (circleParts.includes('leftWing') && circleParts.length === 1) {
    return 'difference'
  }
  if (circleParts.includes('rightWing') && circleParts.length === 1) {
    return 'difference'
  }
  if (circleParts.includes('rightWing') && circleParts.includes('leftWing') && circleParts.length === 2) {
    return 'symmetric-difference'
  }
  if (['leftWing', 'intersection', 'rightWing'].every(i => circleParts.includes(i))) {
    return 'union'
  }

  return null
}

const isAllowedToClick = (element, partName) => {
  const isElementSelected = element.attr('fillOpacity') === '1'

  if (isElementSelected) {
    return true
  }

  return circlePartsToCompositionType([...selectedParts, partName])
}

const setCursorStyle = (element, partName) => {
  const allowedToClick = isAllowedToClick(element, partName)
  const newStyle = allowedToClick ? 'pointer' : 'not-allowed'
  element.attr({
    cursor: newStyle
  })
}

let selectedParts = []

export default ({ selectedGroups, handleCompositionTypeChange }) => {
  const changeOpacity = (element, partName, parts) => {
    if (!isAllowedToClick(element, partName)) {
      return
    }

    const isElementSelected = element.attr('fillOpacity') === '1'

    element.attr({
      'fillOpacity': isElementSelected ? '0' : '1'
    })

    const newSelectedParts = isElementSelected ? selectedParts.filter(i => i !== partName) : [...selectedParts, partName]
    const newCompositionType = circlePartsToCompositionType(newSelectedParts)

    selectedParts = newSelectedParts
    Object.entries(parts).forEach(([partName, element]) => setCursorStyle(element, partName))

    handleCompositionTypeChange(selectedParts)
  }

  useEffect(() => {
    if (selectedGroups.length !== 2) {
      return
    }

    const intersection = Snap('#intersection')
    const rightWing = Snap('#right-wing')
    const leftWing = Snap('#left-wing')

    const parts = { intersection, rightWing, leftWing }

    Object.entries(parts).forEach(([partName, element]) => element.click(() => changeOpacity(element, partName, parts)))
  }, [selectedGroups.length])

  return (
    <div className={styles.circles}>
      <div className={styles.circlesContainer}>
        {
          selectedGroups.length === 1
            ? (selectedGroups[0].color === '#3eb5f1' ? <CircleBlue /> : <Circle />)
            : (
                selectedGroups[0].color === '#3eb5f1'
                  ? <CirclesMirror style={{ cursor: 'pointer' }} />
                  : <Circles style={{ cursor: 'pointer' }} />
              )
        }
      </div>
      <Hint selectedGroups={selectedGroups} selectedCircleParts={selectedParts} />
    </div>
  )
}
