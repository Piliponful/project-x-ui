import React from 'react'

import NewGroupTitle from './components/NewGroupTitle'
import Buttons from './components/Buttons'
import UserCount from './components/UserCount'
import CheckboxIcon from './components/CheckboxIcon'
import Title from './components/Title'

import styles from './style.styl'

export default ({ title, userCount, selected, color, save, onTitleInput, deselect, select, combine }) => {
  return (
    <article className={styles.card}>
      <div className={styles.leftSideContainer}>
        {title
          ? <Title>{title}</Title>
          : <NewGroupTitle onTitleInput={onTitleInput} save={save} />
        }
        <UserCount userCount={userCount} />
      </div>

      {selected
        ? <CheckboxIcon color={color} deselect={deselect} />
        : (title ? <Buttons select={select} combine={combine} /> : null)}
    </article>
  )
}
