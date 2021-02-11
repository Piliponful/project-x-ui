import React, { useEffect, useState } from 'react'
import Snap from 'snapsvg-cjs'

import Hint from './components/Hint'

import styles from './style.styl'

import Circles from './Circles.svg'
import Circle from './Circle.svg'

export default ({ selectedGroups, selectedCircleParts, onSelect }) => {
  const [fill, setFill] = useState(false)
  const [selectedParts, setParts] = useState([])

  const changeOpacity = (element, partName) => () => {
    const isElementSelected = element.attr('fill-opacity') === '0'

    element.attr({
      'fill-opacity': isElementSelected ? '1' : '0'
    })

    const newSelectedParts = isElementSelected ? selectedParts.filter(i => i === partName) : [...selectedParts, partName]
    console.log(newSelectedParts, isElementSelected, selectedParts.filter(i => i === partName), [...selectedParts, partName])

    setFill(!fill)
    setParts(newSelectedParts)
    onSelect(newSelectedParts)
  }

  useEffect(() => {
    if (selectedGroups.length !== 2) {
      return
    }

    const baseSvgName = 'Circles_svg__'

    const intersection = Snap(`#${baseSvgName}intersection`)
    const rightWing = Snap(`#${baseSvgName}right-wing`)
    const leftWing = Snap(`#${baseSvgName}left-wing`)

    intersection.click(changeOpacity(intersection, 'intersection'))
    rightWing.click(changeOpacity(rightWing, 'right-wing'))
    leftWing.click(changeOpacity(leftWing, 'left-wing'))
  }, [selectedGroups.length])

  return (
    <div className={styles.circles} >
      <div className={styles.circlesContainer} >
        {selectedGroups.length === 1 ? <Circle /> : <Circles className={styles.cirlcesSvg} />}
      </div>
      <Hint selectedGroups={selectedGroups} selectedCircleParts={selectedCircleParts} />
    </div>
  )
}
