import Circles from './src/components/leafs/Circles'
import GroupCard from './src/components/leafs/GroupCard'
import QuestionCard from './src/components/leafs/QuestionCard'
import NewQuestion from './src/components/leafs/NewQuestion'

import Body from './src/components/shallow/Body'
import GroupsContainer from './src/components/shallow/GroupsContainer'
import MainScreen from './src/components/shallow/MainScreen'
import Sidebar from './src/components/shallow/Sidebar'
import QuestionCardsRow from './src/components/shallow/QuestionCardsRow'
import Authorization from './src/components/leafs/Authorization'

export default {
  shallow: {
    Body,
    GroupsContainer,
    MainScreen,
    Sidebar,
    QuestionCardsRow
  },
  leafs: {
    Circles,
    GroupCard,
    QuestionCard,
    NewQuestion,
    Authorization
  }
}
