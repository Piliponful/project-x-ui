import React from 'react'

import NewGroupTitle from './components/NewGroupTitle'
import Buttons from './components/Buttons'
import NewGroupButtons from './components/NewGroupButtons'
import UserCount from './components/UserCount'
import CheckboxIcon from './components/CheckboxIcon'
import Title from './components/Title'

import styles from './style.styl'

export default ({ name, userCount, selected, color, save, toggleSelection, combine, readyToSave, cancel }) => {
  return (
    <article className={styles.card}>
      <div className={styles.leftSideContainer}>
        {
          name
            ? <Title>{name}</Title>
            : <NewGroupTitle save={save} readyToSave={readyToSave} />
        }
        <UserCount userCount={userCount} />
      </div>

      {(color || selected)
        ? <CheckboxIcon color={color} deselect={toggleSelection} />
        : (name ? <Buttons select={toggleSelection} combine={combine} /> : <NewGroupButtons save={save} cancel={cancel} />)}
    </article>
  )
}
