import Circles from './src/components/leafs/Circles'
import GroupCard from './src/components/leafs/GroupCard'
import QuestionCard from './src/components/leafs/QuestionCard'
import NewQuestion from './src/components/leafs/NewQuestion'

import Body, { MainScreenSwipeContext } from './src/components/shallow/Body'
import GroupsContainer from './src/components/shallow/GroupsContainer'
import MainScreen from './src/components/shallow/MainScreen'
import Sidebar from './src/components/shallow/Sidebar'
import QuestionCardsRow from './src/components/shallow/QuestionCardsRow'
import Authentication from './src/components/leafs/Authentication'
import ActionsPanel from './src/components/leafs/ActionsPanel'

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
    Authentication,
    ActionsPanel
  },
  context: {
    MainScreenSwipeContext
  }
}
