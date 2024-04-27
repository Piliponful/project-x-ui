import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Snap from 'snapsvg-cjs'

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
import GroupContentScreen from '../components/leafs/GroupContentScreen'
import UserContentBlock from '../components/leafs/UserContentBlock'
import Search from '../components/leafs/Search'
import QuestionsSearch from '../components/leafs/QuestionsSearch'
import UsersSearch from '../components/leafs/UsersSearch'

import '../../styles.css'

import 'react-phone-number-input/style.css'

window.Snap = Snap

const groupCombination = false

// const selectedForCombinationGroups = [
//   { name: 'Anime-watchers', userCount: 42355, selected: true, color: '#d24a43' }
// ]

const selectedForCombinationGroups = [ // eslint-disable-line
  { name: 'Anime-watchers', userCount: 42355, selected: true, color: '#3eb5f1' },
  { name: 'Gamers', userCount: 46344, selected: true, color: '#d24a43' }
]

const groupCombinationResult = { userCount: 31308, color: '#92278f', readyToSave: true }

const selectedCircleParts = []

const groups = [
  { userCount: 31308 },
  { name: 'Anime-watchers', userCount: 42355, selected: true },
  { name: 'BlackUFA subscribers', userCount: 18344 },
  { name: 'Gamers', userCount: 46344 },
  { name: 'Anime-haters', userCount: 2243 }
]

const mostAnsweredQuestions = [ // eslint-disable-line
  {
    name: 'Have you watched new season of attack on titan?',
    currentUserAnswer: 'Yes',
    answersCount: { yes: 383343, no: 23450 },
    username: 'piliponful',
    // yourOwnQuestion: true,
    // hisAnswer: 'yes'
  },
  {
    name: 'Will Luffy find one piece?',
    currentUserAnswer: null,
    answersCount: { yes: 112342, no: 311323 },
    username: 'piliponful'
  },
  {
    name: 'Do you like naruto?',
    currentUserAnswer: null,
    answersCount: { yes: 240325, no: 101333 },
    username: 'piliponful'
  },
  {
    name: 'Do you like battle between Sasuke and Naruto?',
    // currentUserAnswer: 'No',
    answersCount: { yes: 80341, no: 280341 },
    username: 'piliponful'
  },
  {
    name: 'Do you believe Israel is genociding Gaza?',
    // currentUserAnswer: 'Yes',
    answersCount: { yes: 231031, no: 30328 },
    username: 'piliponful'
  },
  {
    name: 'Do you believe in free speech?',
    // currentUserAnswer: 'Yes',
    answersCount: { yes: 231031, no: 30328 },
    username: 'piliponful'
  },
  {
    name: 'Do you you support Trump?',
    // currentUserAnswer: 'Yes',
    answersCount: { yes: 231031, no: 30328 },
    username: 'piliponful'
  }
]

const mostAnsweredQuestionsAnswered = [ // eslint-disable-line
  {
    name: 'Have you watched new season of attack on titan?',
    currentUserAnswer: 'Yes',
    answersCount: { yes: 383343, no: 23450 },
    username: 'piliponful'
  },
  {
    name: 'Do you like battle between Sasuke and Naruto?',
    currentUserAnswer: 'No',
    answersCount: { yes: 80341, no: 280341 },
    username: 'piliponful'
  },
  {
    name: 'Do you believe Israel is genociding Gaza?',
    currentUserAnswer: 'Yes',
    answersCount: { yes: 231031, no: 30328 },
    username: 'piliponful'
  },
  {
    name: 'Do you believe in free speech?',
    currentUserAnswer: 'Yes',
    answersCount: { yes: 231031, no: 30328 },
    username: 'piliponful'
  },
  {
    name: 'Do you you support Trump?',
    currentUserAnswer: 'Yes',
    answersCount: { yes: 231031, no: 30328 },
    username: 'piliponful'
  }
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
  <QuestionCard
    key={i.name}
    {...i}
    // respond={response => console.log('respond ' + response)}
    createNewGroup={content => console.log('create new group ' + content)}
  />
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
      <NewQuestion />
      <ActionsPanel logout={() => console.log('logout')} username='piliponful' />
    </Sidebar>
  )
}

const SidebarWithQuestions = () => {
  return (
    <Sidebar>
      <GroupsContainer>
        {mostAnsweredQuestionsComponents}
      </GroupsContainer>
      <div style={{ width: '100%' }}>
        <NewQuestion />
        <ActionsPanel logout={() => console.log('logout')} username='piliponful' />
      </div>
    </Sidebar>
  )
}

const users = new Array(8).fill(1).map((_, index) => [
  {
    _id: '6' + index,
    userId: '6623cfe7e1d83d0600c06a99',
    username: 'piliponful',
    fullName: 'Maxim Pilipenko',
    pictureUrl: 'https://pbs.twimg.com/profile_images/1673460497402789888/dVWWnErn_normal.jpg',
    twitterVerified: false,
    followerCount: '67',
    address: '0xf8EB7B8C3ffd1d414Bee2205FeE1C99D64435e20'
  },
  {
    _id: '2' + index,
    fullName: 'Patrick Bet-David',
    pictureUrl: 'https://pbs.twimg.com/profile_images/1745929905575993345/CkfQqk_t_400x400.jpg',
    followerCount: 973000,
    username: 'patrickbetdavid'
  },
  {
    _id: '3' + index,
    fullName: 'SNEAKO',
    pictureUrl: 'https://pbs.twimg.com/profile_images/1746261579623198720/nXQM_q9U_400x400.jpg',
    followerCount: 808000,
    username: 'sneako'
  },
  {
    _id: '4' + index,
    fullName: 'David Goggins',
    pictureUrl: 'https://pbs.twimg.com/profile_images/1585779196948664320/7ZBXg_pv_400x400.jpg',
    followerCount: 923000,
    username: 'davidgoggins'
  },
  {
    _id: '5' + index,
    username: 'cobratate',
    fullName: 'Andrew Tate',
    pictureUrl: 'https://pbs.twimg.com/profile_images/1728837013023895552/nCHrdjlh_400x400.jpg',
    twitterVerified: true,
    followerCount: '9100000',
    userId: '6623c2324422e3010a3e37eb',
    address: 'test'
  }
]).flat()

const MainScreenWithQuestions = () => (
  <MainScreen style={{ height: 'calc(100% - 20px)', marginTop: 10 }}>
    <Search search={() => console.log('search')} />
    {/* <QuestionsSearch questions={mostAnsweredQuestions} total={342} search='titan' /> */}
    <QuestionCardsRow>
      {mostAnsweredQuestionsComponents}
    </QuestionCardsRow>
    <div style={{ width: '100%' }}>
      <NewQuestion />
      <ActionsPanel
        // logout={() => console.log('logout')}
        // testUsers={[
        //   { fullName: 'Patrick Bet-David' }
        // ]}
        // username='piliponful'
      />
    </div>
  </MainScreen>
)

const MainScreenWithUserQuestions = () => (
  <UserContentBlock fetchQuestions={() => {}} questions={mostAnsweredQuestions} questionsWithAnswers={mostAnsweredQuestionsAnswered} user={users[4]} />
)

const Authorized = () => {
  const {
    screenName,
    setSkipScreen
  } = useContext(MainScreenSwipeContext)
  useEffect(() => {
    setSkipScreen(['groupContent', 'groups'])
  }, [])
  const [offset, setOffset] = useState(10)
  const [usersSlice, setUsers] = useState(users.slice(0, 10))

  const hasMore = offset + 10 < users.length
  console.log('more: ', hasMore, users.length, offset + 10)

  return (
    <>
      {/* {screenName === 'groups' && <SidebarWithGroups />} */}
      {screenName === 'groupContent' && <GroupContentScreen show users={users} />}
      {screenName === 'questions' && <SidebarWithQuestions />}

      {!screenName && (
        <>
          {/* <SidebarWithGroups /> */}
          <GroupContentScreen
            className='custom-groups-content'
            hasMore={hasMore}
            fetchUsers={() => { setUsers([...usersSlice, users.slice(offset, offset + 10)]); setOffset(offset + 10); console.log('loaded new users') }}
            users={usersSlice}
          />
          {/* <MainScreenWithQuestions /> */}
          <MainScreenWithUserQuestions />
          {/* <UsersSearch users={users.filter(i => i.username.includes('pili'))} search='pili' total={1} />
          <QuestionsSearch questions={mostAnsweredQuestions} total={342} search='titan' /> */}
        </>
      )}
    </>
  )
}

const createUser = () => {
  return new Promise((resolve, reject) => setTimeout(() => { console.log('createuser'); resolve({ verificationCompleted: false }) }, 500))
}

const getUserToken = () => {
  return new Promise((resolve, reject) => setTimeout(() => { console.log('createuser'); resolve({ verificationCompleted: false }) }, 900))
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <Body address='0x105Cc09CA22e3cD746D8d6c4e2f8cfBcf97207Be' payout={155} includeSwipes>
    <Authorized />
    {/* <Authentication
      createUser={createUser}
      verifyUser={() => console.log('verifyUser')}
      getUserToken={getUserToken}
      resend={() => console.log('resend')}
      onError={console.log}
    /> */}
  </Body>
)
