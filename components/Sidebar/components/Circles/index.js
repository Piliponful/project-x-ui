import React, { useEffect, useState } from 'react'
import Snap from 'snapsvg-cjs'

import Circles from './Circles.svg'
import OneCircle from './OneCircle.svg'

export default ({ selectedGroups, onSelect }) => {
  const [fill, setFill] = useState(false)
  const [selectedParts, setParts] = useState([])

  const changeOpacity = (element, partName) => () => {
    const isElementSelected = element.attr('fill-opacity') === '0'

    element.attr({
      'fill-opacity': isElementSelected ? '1' : '0'
    })

    const newSelectedParts = isElementSelected ? selectedParts.filter(i => i === partName) : [...selectedParts, partName]

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
  }, [])

  return (
    <div style={{ height: '220px', width: '100%', marginTop: '25px', display: 'flex', justifyContent: 'center' }}>
      {selectedGroups.length === 1 ? <OneCircle /> : <Circles style={{ cursor: 'pointer' }} />}
    </div>
  )
}
