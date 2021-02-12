import React, {
  useEffect,
  useState
} from 'react'
import Snap from 'snapsvg-cjs'

import Hint from './components/Hint'

import styles from './style.styl'

import Circles from './Circles.svg'
import CirclesMirror from './CirclesMirror.svg'
import Circle from './Circle.svg'
import CircleBlue from './CircleBlue.svg'

let selectedPartsReference = []

export default ({ selectedGroups, onSelect }) => {
  const [fill, setFill] = useState(false)
  const [selectedParts, setParts] = useState([])

  const changeOpacity = (element, partName) => {
    const isElementSelected = element.attr('fill-opacity') === '1'

    element.attr({
      'fill-opacity': isElementSelected ? '0' : '1'
    })

    const newSelectedParts = isElementSelected ? selectedPartsReference.filter(i => i !== partName) : [...selectedPartsReference, partName]

    setFill(!fill)
    setParts(newSelectedParts)
    onSelect(newSelectedParts)
    selectedPartsReference = newSelectedParts
  }

  useEffect(() => {
    if (selectedGroups.length !== 2) {
      return
    }

    const baseSvgName = selectedGroups[0].color === '#3eb5f1' ? 'CirclesMirror_svg__' : 'Circles_svg__'

    const intersection = Snap(`#${baseSvgName}intersection`)
    const rightWing = Snap(`#${baseSvgName}right-wing`)
    const leftWing = Snap(`#${baseSvgName}left-wing`)

    intersection.click(() => changeOpacity(intersection, 'intersection'))
    rightWing.click(() => changeOpacity(rightWing, 'right-wing'))
    leftWing.click(() => changeOpacity(leftWing, 'left-wing'))
  }, [selectedGroups.length])

  return (
    <div className={styles.circles} >
      <div className={styles.circlesContainer} >
        {selectedGroups.length === 1
          ? (selectedGroups[0].color === '#3eb5f1' ? <CircleBlue /> : <Circle />)
          : (selectedGroups[0].color === '#3eb5f1'
            ? <CirclesMirror className={styles.cirlcesSvg} />
            : <Circles className={styles.cirlcesSvg} />
          )
        }
      </div>
      <Hint selectedGroups={selectedGroups} selectedCircleParts={selectedParts} />
    </div>
  )
}
