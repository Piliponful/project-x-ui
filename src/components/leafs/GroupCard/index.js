import React, { useState, forwardRef } from 'react'

import NewGroupTitle from './components/NewGroupTitle'
import Buttons from './components/Buttons'
import NewGroupButtons from './components/NewGroupButtons'
import UserCount from './components/UserCount'
import CheckboxIcon from './components/CheckboxIcon'
import Title from './components/Title'

import styles from './style.module.styl'

export default forwardRef(({ name, userCount, selected, color, save, toggleSelection, combine, readyToSave, cancel }, ref) => {
  const [newGroupTitle, setNewGroupTitle] = useState('')

  return (
    <article className={styles.card} ref={ref}>
      <div className={styles.leftSideContainer}>
        {
          name
            ? <Title>{name}</Title>
            : <NewGroupTitle onTitleInput={setNewGroupTitle} />
        }
        <UserCount userCount={userCount} />
      </div>

      {((color && !newGroupTitle) || (color && selected && name))
        ? <CheckboxIcon color={color} deselect={toggleSelection} />
        : (
            name
              ? <Buttons select={toggleSelection} combine={combine} />
              : <NewGroupButtons save={() => save(newGroupTitle)} cancel={cancel} readyToSave={color ? readyToSave : newGroupTitle} />
          )}
    </article>
  )
})
