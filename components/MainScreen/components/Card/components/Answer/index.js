import React from 'react'

import Text from '../Text'

export default ({ answer }) => {
  return (
    <p><Text>Your answer: </Text><Text yes={answer === 'Yes'} no={answer === 'No'}>{answer}</Text></p>
  )
}
