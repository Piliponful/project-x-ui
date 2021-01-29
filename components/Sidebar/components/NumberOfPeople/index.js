import React from 'react'

import Text from '../Text'

export default ({ x, additionalInfo }) => <Text secondary>{x.toLocaleString()} {additionalInfo}</Text>
