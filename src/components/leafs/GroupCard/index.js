import React from 'react'

import NewGroupTitle from './components/NewGroupTitle'
import Buttons from './components/Buttons'
import UserCount from './components/UserCount'
import CheckboxIcon from './components/CheckboxIcon'
import Title from './components/Title'

import styles from './style.styl'

export default ({ name, userCount, selected, color, save, onTitleInput, deselect, select, combine }) => {
  return (
    <article className={styles.card}>
      <div className={styles.leftSideContainer}>
        {name
          ? <Title>{name}</Title>
          : <NewGroupTitle onTitleInput={onTitleInput} save={save} />
        }
        <UserCount userCount={userCount} />
      </div>

      {selected
        ? <CheckboxIcon color={color} deselect={deselect} />
        : (name ? <Buttons select={select} combine={combine} /> : null)}
    </article>
  )
}
