import React, { useContext } from 'react'
import ReactDOM from 'react-dom'

import Body, { MainScreenSwipeContext } from '../components/shallow/Body'
import MainScreen from '../components/shallow/MainScreen'
import Sidebar from '../components/shallow/Sidebar'
import GroupCard from '../components/leafs/GroupCard'
import GroupsContainer from '../components/shallow/GroupsContainer'
import NewQuestion from '../components/leafs/NewQuestion'
import Circles from '../components/leafs/Circles'
import QuestionCardsRow from '../components/shallow/QuestionCardsRow'
import QuestionCard from '../components/leafs/QuestionCard'
import Authentication from '../components/leafs/Authentication' // eslint-disable-line
import ActionsPanel from '../components/leafs/ActionsPanel'

const groupCombination = true

// const selectedForCombinationGroups = [
//   { name: 'Anime-watchers', userCount: 42355, selected: true, color: '#d24a43' }
// ]

const selectedForCombinationGroups = [ // eslint-disable-line
  { name: 'Anime-watchers', userCount: 42355, selected: true, color: '#3eb5f1' },
  { name: 'Gamers', userCount: 46344, selected: true, color: '#d24a43' }
]

const groupCombinationResult = { userCount: 31308, selected: true, color: '#92278f' }

const selectedCircleParts = []

const groups = [
  { userCount: 31308 },
  { name: 'Anime-watchers', userCount: 42355, selected: true },
  { name: 'BlackUFA subscribers', userCount: 18344 },
  { name: 'Gamers', userCount: 46344 },
  { name: 'Anime-haters', userCount: 2243 }
]

const mostAnsweredQuestions = [ // eslint-disable-line
  { name: 'Have you watched new season of attack on titan?', currentUserAnswer: 'Yes', answersCount: { yes: 383343, no: 23450 } }
  // { name: 'Will Luffy find one piece?', currentUserAnswer: null, answersCount: { yes: 112342, no: 311323 } },
  // { name: 'Do you like naruto?', currentUserAnswer: null, answersCount: { yes: 240325, no: 101333 } },
  // { name: 'Do you like battle between Sasuke and Naruto?', currentUserAnswer: 'No', answersCount: { yes: 80341, no: 280341 } },
  // { name: 'Do you wanna see HxH continuation?', currentUserAnswer: 'Yes', answersCount: { yes: 231031, no: 30328 } }
]

const mostAnsweredInLast7DaysQuestions = [ // eslint-disable-line
  { name: 'Do you like how attack on titan ended?', currentUserAnswer: false, answersCount: { yes: 2809, no: 1238 } },
  { name: 'Have you watched last episode of Jijitsu Kaison?', currentUserAnswer: null, answersCount: { yes: 738, no: 503 } },
  { name: 'Will you go to animeexpo 2021?', currentUserAnswer: null, answersCount: { yes: 501, no: 308 } },
  { name: 'Is Last episode of Yakusoku no Neverland good?', currentUserAnswer: null, answersCount: { yes: 329, no: 440 } },
  { name: 'Will Luffy beat Kaido?', currentUserAnswer: null, answersCount: { yes: 128, no: 232 } }
]

const latest = [ // eslint-disable-line
  { name: 'Will Oda finish One Piece?', currentUserAnswer: false, answersCount: { yes: 197, no: 5 } },
  { name: 'Do you wanna see adaptation of Vagabond?', currentUserAnswer: null, answersCount: { yes: 98, no: 0 } },
  { name: 'Do you wanna new season of SAO?', currentUserAnswer: null, answersCount: { yes: 0, no: 81 } },
  { name: 'Should I watch Boruto?', currentUserAnswer: null, answersCount: { yes: 9, no: 4 }, yourOwnQuestion: true },
  { name: 'Is Boruto stronger than Naruto?', currentUserAnswer: null, answersCount: { yes: 0, no: 0 } }
]

const mostAnsweredQuestionsComponents = mostAnsweredQuestions.map(i => (
  <QuestionCard key={i.name} {...i} respond={response => console.log('respond ' + response)} createNewGroup={content => console.log('create new group ' + content)} />
))

const SidebarWithGroups = () => {
  return (
    <Sidebar title='Groups'>
      {groupCombination ? <Circles selectedGroups={selectedForCombinationGroups} selectedCircleParts={selectedCircleParts} handleCompositionTypeChange={console.log} /> : null}
      <GroupsContainer>
        {(groupCombination ? [...selectedForCombinationGroups, groupCombinationResult] : groups).map(i => (
          <GroupCard key={i.name || 'new'} {...i} toggleSelection={() => console.log('toogle selection')} />
        ))}
      </GroupsContainer>
      <NewQuestion saveQuestion={() => {}} />
      <ActionsPanel logout={() => console.log('logout')} username='piliponful' />
    </Sidebar>
  )
}

const SidebarWithQuestions = () => {
  return (
    <Sidebar title='Questions'>
      {mostAnsweredQuestionsComponents}
    </Sidebar>
  )
}

const MainScreenWithQuestions = () => (
  <MainScreen>
    <QuestionCardsRow title='Most answered'>
      {mostAnsweredQuestionsComponents}
    </QuestionCardsRow>
    <QuestionCardsRow title='Most answered in last 7 days'>
      {mostAnsweredInLast7DaysQuestions.map(i => (
        <QuestionCard key={i.name} {...i} respond={response => console.log('respond ' + response)} createNewGroup={content => console.log('create new group ' + content)} />
      ))}
    </QuestionCardsRow>
    <QuestionCardsRow title='Latest'>
      {latest.map(i => (
        <QuestionCard key={i.name} {...i} respond={response => console.log('respond ' + response)} createNewGroup={content => console.log('create new group ' + content)} />
      ))}
    </QuestionCardsRow>
  </MainScreen>
)

const Authorized = () => {
  const { mainScreen } = useContext(MainScreenSwipeContext)

  return (
    <>
      {mainScreen ? <SidebarWithGroups /> : <SidebarWithQuestions />}
      {mainScreen ? <MainScreenWithQuestions /> : null}
    </>
  )
}

const createUser = () => {
  return new Promise((resolve, reject) => setTimeout(() => { console.log('createuser'); resolve({ verificationCompleted: false }) }, 500))
}

const getUserToken = () => {
  return new Promise((resolve, reject) => setTimeout(() => { console.log('createuser'); resolve({ verificationCompleted: false }) }, 900))
}

ReactDOM.render(
  <Body includeSwipes>
    {/* <Authorized /> */}
    <Authentication
      createUser={createUser}
      verifyUser={() => console.log('verifyUser')}
      getUserToken={getUserToken}
      resend={() => console.log('resend')}
      onError={console.log}
    />
  </Body>
  , document.getElementById('app'))
