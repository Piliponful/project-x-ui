import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Snap from 'snapsvg-cjs'
import FlipMove from 'react-flip-move'
import { BrowserRouter } from 'react-router-dom'

import Body, { MainScreenSwipeContext } from '../components/shallow/Body'
import MainScreen from '../components/shallow/MainScreen'
import Sidebar from '../components/shallow/Sidebar'
import GroupCard from '../components/leafs/GroupCard'
import GroupsContainer from '../components/shallow/GroupsContainer'
import NewQuestion from '../components/leafs/NewQuestion'
import Circles from '../components/leafs/Circles'
import QuestionCardsRow from '../components/shallow/QuestionCardsRow'
import QuestionCard from '../components/leafs/QuestionCard'
import ActionsPanel from '../components/leafs/ActionsPanel'
import GroupContentScreen from '../components/leafs/GroupContentScreen'
import { UserHistoryTabs, UserQuestionsHistory, UserAnswerDifferences } from '../components/leafs/UserContentBlock'
import Search from '../components/leafs/Search'
import QuestionsSearch from '../components/leafs/QuestionsSearch'
import UsersSearch from '../components/leafs/UsersSearch'
import { SortQuestions } from '../components/leafs/SortQuestions'
import { Question } from '../components/leafs/Question'
import { ChatBlock } from '../components/leafs/ChatBlock'

import '../../styles.css'
import './mock-styles.css'

import 'react-phone-number-input/style.css'
import { Landing } from '../components/shallow/Landing'

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
    name: 'Tester?',
    currentUserAnswer: 'No',
    answersCount: { yes: 0, no: 0 },
    username: 'piliponful',
    _id: 0,
    byMe: true,
    // respond: () => {},
    createdAt: 1080156900,
    // yourOwnQuestion: true,
    // userPictureUrl: 'https://pbs.twimg.com/profile_images/1673460497402789888/dVWWnErn_400x400.jpg',
    // me: {
    //   pictureUrl: 'https://pbs.twimg.com/profile_images/1673460497402789888/dVWWnErn_400x400.jpg',
    //   answer: 'No'
    // },
    // he: {
    //   pictureUrl: 'https://pbs.twimg.com/profile_images/1745929905575993345/CkfQqk_t_400x400.jpg',
    //   answer: 'Yes'
    // }
  },
  {
    name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mas',
    currentUserAnswer: 'No',
    // he: {
    //   pictureUrl: 'https://pbs.twimg.com/profile_images/1745929905575993345/CkfQqk_t_400x400.jpg',
    //   answer: 'Yes'
    // },
    answersCount: { no: 383343, yes: 0 },
    username: 'piliponful',
    _id: 0,
    byMe: true,
    respond: () => {}
  },
  {
    name: 'Will Luffy find one piece?',
    currentUserAnswer: null,
    answersCount: { no: 0, yes: 0 },
    he: {
      pictureUrl: 'https://pbs.twimg.com/profile_images/1745929905575993345/CkfQqk_t_400x400.jpg',
      answer: 'Yes'
    },
    username: 'piliponful',
    _id: 1,
    createdAt: 1080156900,
    byMe: true
  },
  {
    name: 'Do you like naruto?',
    currentUserAnswer: null,
    answersCount: { yes: 240325, no: 101333 },
    username: 'piliponful',
    createdAt: 1080156900,
    _id: 2
  },
  {
    name: 'Do you like battle between Sasuke and Naruto?',
    // currentUserAnswer: 'No',
    answersCount: { yes: 80341, no: 280341 },
    username: 'piliponful',
    createdAt: 1080156900,
    _id: 3
  },
  {
    name: 'Do you believe Israel is genociding Gaza?',
    // currentUserAnswer: 'Yes',
    answersCount: { yes: 231031, no: 30328 },
    username: 'piliponful',
    createdAt: 1080156900,
    _id: 4
  },
  {
    name: 'Do you believe in free speech?',
    // currentUserAnswer: 'Yes',
    answersCount: { yes: 231031, no: 30328 },
    username: 'piliponful',
    createdAt: 1080156900,
    _id: 5
  },
  {
    name: 'Do you you support Trump?',
    // currentUserAnswer: 'Yes',
    answersCount: { yes: 231031, no: 30328 },
    username: 'piliponful',
    createdAt: 1080156900,
    _id: 6,
    img: 'https://www.meisterdrucke.ie/kunstwerke/1260px/F_Abderrahim_-_Donald_Trump_Portrait_painting_for_Sale_Wall_Art_Prints_Framed_Art_-_%28MeisterDrucke-1478499%29.jpg'
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
      <ActionsPanel logout={() => console.log('logout')} username='piliponful' handleTwitterLogin={() => console.log('test')} />
    </Sidebar>
  )
}

const SidebarWithQuestions = () => {
  const {
    showSearch
  } = useContext(MainScreenSwipeContext)

  return (
    <Sidebar style={{ padding: 10 }}>
      {
        showSearch && (
          <div
            style={{
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              top: 0,
              zIndex: 111,
              height: 'auto',
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
              background: 'rgb(244 243 253 / 23%)',
              backdropFilter: 'blur(6px)',
              boxShadow: '0 3px 5.84px 0.16px #0c0c0c2b'
            }}
          >
            <div style={{ width: 241 }}>
              <Search buttonsOutside search={() => console.log('search')} />
              <SortQuestions getMessages={() => console.log('get questions with sort and duration')} />
            </div>
          </div>
        )
      }
      <h3 style={{ fontFamily: 'IBM Plex Sans', color: '#2b2b2b', fontWeight: 300, marginTop: 0, marginBottom: 10 }}>Last Week Most Answered</h3>
      <GroupsContainer>
        {mostAnsweredQuestionsComponents}
      </GroupsContainer>
      <div style={{ width: '100%' }}>
        <NewQuestion />
        <ActionsPanel logout={() => console.log('logout')} username='piliponful' handleTwitterLogin={() => console.log('test')} />
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
    pictureUrl: 'https://pbs.twimg.com/profile_images/1673460497402789888/dVWWnErn_400x400.jpg',
    twitterVerified: true,
    verifiedKYC: true,
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
    {/* <QuestionsSearch questions={mostAnsweredQuestions} total={342} search='titan' /> */}
    <QuestionCardsRow>
      {mostAnsweredQuestionsComponents}
    </QuestionCardsRow>
    <div style={{ width: '100%' }}>
      <NewQuestion />
      <ActionsPanel handleTwitterLogin={() => console.log('test')} username='piliponful' showXLogin={false} showKYCLogin />
    </div>
  </MainScreen>
)

const usert = {
  _id: '6',
  userId: '6623cfe7e1d83d0600c06a99',
  username: 'piliponful',
  fullName: 'Maxim Pilipenko',
  pictureUrl: 'https://pbs.twimg.com/profile_images/1673460497402789888/dVWWnErn_400x400.jpg',
  twitterVerified: false,
  followerCount: '67',
  address: '0xf8EB7B8C3ffd1d414Bee2205FeE1C99D64435e20'
}

UserQuestionsHistory.prototype = {}
UserAnswerDifferences.prototype = {}

const MainScreenWithUserQuestions = ({ selectedTab, setSelectedTab }) => {
  const [showDifferences, setShowDifferences] = useState(false)

  const [testUser, setTestUser] = useState()

  useEffect(() => {
    setTimeout(() => setTestUser(usert), 1000)
  }, [])

  return (
    <UserHistoryTabs
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      similarity={80}
      compareWithMe={() => console.log('compare with em')}
      showDifference={showDifferences}
      setShowDifference={setShowDifferences}
      user={testUser}
    >
      <FlipMove typeName={null} appearAnimation='fade' enterAnimation='fade' leaveAnimation='fade'>
        {
          selectedTab === 'questions'
            ? (<UserQuestionsHistory fetchQuestions={() => {}} questions={mostAnsweredQuestions} questionsWithAnswers={mostAnsweredQuestionsAnswered} user={users[4]} />)
            : showDifferences
              ? (
                <UserAnswerDifferences
                  respond={() => console.log('respond')}
                  createNewGroup={() => console.log('get users by answer')}
                  onUserClick={() => console.log('on user click')}
                  answers={{
                    different: [],
                    same: mostAnsweredQuestions.slice(1, 2),
                    notAnswered: mostAnsweredQuestions.slice(0, 4)
                  }}
                />
                )
              : (
                <UserQuestionsHistory
                  style={{ margin: '10px', maxWidth: 'none' }}
                  fetchQuestions={() => console.log('fetch user answers')}
                  hasMore={false}
                  respond={() => console.log('respond')}
                  createNewGroup={() => console.log('get users by answer')}
                  questions={mostAnsweredQuestions}
                  onUserClick={() => console.log('on user click')}
                />
                )
        }
      </FlipMove>
    </UserHistoryTabs>
  )
}

const messages = [{
  mine: true,
  text: 'This is my first test message',
  pictureUrl: 'https://pbs.twimg.com/profile_images/1673460497402789888/dVWWnErn_400x400.jpg',
  username: 'piliponful'
},
{
  mine: false,
  text: 'This is not my message',
  pictureUrl: 'https://pbs.twimg.com/profile_images/1745929905575993345/CkfQqk_t_400x400.jpg',
  username: 'patrickbetdavid'
},
{
  mine: false,
  text: 'This is some else\'s message',
  pictureUrl: 'https://pbs.twimg.com/profile_images/1746261579623198720/nXQM_q9U_400x400.jpg',
  username: 'sneako'
}]

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
  const [selectedTab, setSelectedTab] = useState('questions')

  const hasMore = offset + 10 < users.length

  return (
    <>
      {/* <Landing /> */}
      {/* {screenName === 'groups' && <SidebarWithGroups />} */}
      {/* {screenName === 'groupContent' && <GroupContentScreen show users={users} />} */}
      {/* <SidebarWithQuestions /> */}
      {/* {screenName && (
        <UserHistoryTabs
          answers={{ different: mostAnsweredQuestions.slice(0, 1), same: mostAnsweredQuestions.slice(1, 2) }}
          back={() => console.log('back')}
          similarity={null}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        >
          {
            selectedTab === 'questions'
              ? (
                <UserQuestionsHistory
                  questions={mostAnsweredQuestions.slice(0, 1)}
                  hasMore={false}
                  fetchQuestions={() => console.log('fetch questions')}
                />
                )
              : (
                <UserQuestionsHistory
                  questions={[]}
                  hasMore={false}
                  fetchQuestions={() => console.log('fetch questions')}
                />
                )
          }
        </UserHistoryTabs>
      )} */}

      {/* {!screenName && ( */}
      <>
        {/* <SidebarWithGroups /> */}
        <GroupContentScreen
          className='custom-groups-content'
          hasMore={hasMore}
          fetchUsers={() => { setUsers([...usersSlice, users.slice(offset, offset + 10)]); setOffset(offset + 10); console.log('loaded new users') }}
          users={usersSlice}
        />
        {/* <div style={{ width: 241 }}>
          <Search buttonsOutside search={() => console.log('search')} />
          <SortQuestions getMessages={() => console.log('get questions with sort and duration')} />
        </div>
        <MainScreenWithQuestions /> */}
        {/* <ChatBlock messages={messages} /> */}
        {/* <div style={{ marginRight: 241 }}> */}
        {/* <MainScreenWithUserQuestions selectedTab={selectedTab} setSelectedTab={setSelectedTab} /> */}
        {/* <Question {...(mostAnsweredQuestions[1])} /> */}
        {/* </div> */}
        {/* <UsersSearch users={users.filter(i => i.username.includes('pili'))} search='pili' total={1} /> */}
        {/* <QuestionsSearch questions={mostAnsweredQuestions} total={342} search='titan' /> */}
      </>
      {/* )} */}
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
  <Body address='0x105Cc09CA22e3cD746D8d6c4e2f8cfBcf97207Be' payout={155} includeSwipes connected={false} isWalletModalOpenInitial={false}>
    <BrowserRouter>
      <Authorized />
    </BrowserRouter>
    {/* <Authentication
      createUser={createUser}
      verifyUser={() => console.log('verifyUser')}
      getUserToken={getUserToken}
      resend={() => console.log('resend')}
      onError={console.log}
    /> */}
  </Body>
)
