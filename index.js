import Circles from './src/components/leafs/Circles'
import GroupCard from './src/components/leafs/GroupCard'
import QuestionCard from './src/components/leafs/QuestionCard'
import NewQuestion from './src/components/leafs/NewQuestion'

import Body, { MainScreenSwipeContext } from './src/components/shallow/Body'
import GroupsContainer from './src/components/shallow/GroupsContainer'
import MainScreen from './src/components/shallow/MainScreen'
import Sidebar from './src/components/shallow/Sidebar'
import QuestionCardsRow from './src/components/shallow/QuestionCardsRow'
import ActionsPanel from './src/components/leafs/ActionsPanel'
import GroupContentScreen from './src/components/leafs/GroupContentScreen'
import { UserHistoryTabs, UserQuestionsHistory, UserAnswerDifferences } from './src/components/leafs/UserContentBlock'
import Search from './src/components/leafs/Search'
import QuestionsSearch from './src/components/leafs/QuestionsSearch'
import UsersSearch from './src/components/leafs/UsersSearch'
import { SortQuestions } from './src/components/leafs/SortQuestions'
import { Question } from './src/components/leafs/Question'
import { ChatBlock } from './src/components/leafs/ChatBlock'
import { Landing } from './src/components/shallow/Landing'
import { LeftMenuBar } from './src/components/leafs/LeftMenuBar'

import './styles.css'

export default {
  shallow: {
    Body,
    GroupsContainer,
    MainScreen,
    Sidebar,
    QuestionCardsRow,
    Landing
  },
  leafs: {
    Circles,
    GroupCard,
    QuestionCard,
    NewQuestion,
    ActionsPanel,
    GroupContentScreen,
    UserHistoryTabs,
    UserQuestionsHistory,
    Search,
    QuestionsSearch,
    UsersSearch,
    SortQuestions,
    UserAnswerDifferences,
    Question,
    ChatBlock,
    LeftMenuBar
  },
  context: {
    MainScreenSwipeContext
  }
}
