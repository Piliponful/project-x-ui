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
import { LeftMenuBar } from '../components/leafs/LeftMenuBar'

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

const usert = {
  _id: '6',
  userId: '6623cfe7e1d83d0600c06a99',
  username: 'piliponful',
  fullName: 'Maxim Pilipenko',
  pictureUrl: 'https://pbs.twimg.com/profile_images/1673460497402789888/dVWWnErn_400x400.jpg',
  twitterVerified: false,
  followerCount: '67',
  address: '0xf8EB7B8C3ffd1d414Bee2205FeE1C99D64435e20',
  difference: 0
}

const mostAnsweredQuestions = [
  {
    _id: '664e4d1daf0b967629f5caae',
    userId: '66422f0e814d3019c045efb3',
    username: 'piliponful',
    name: 'Do you support Trump?',
    parentMessageId: null,
    createdAt: 1716407581944,
    totalAnswers: 15,
    img: 'https://www.meisterdrucke.us/kunstwerke/1260px/F_Abderrahim_-_Donald_Trump_Portrait_painting_for_Sale_Wall_Art_Prints_Framed_Art_-_%28MeisterDrucke-1478499%29.jpg',
    answersCount: {
      yes: 10,
      no: 5
    },
    me: {
      answer: 'yes',
      pictureUrl: usert.pictureUrl
    },
    noPercentage: 33,
    shortId: 0,
    hide: true,
    addImageAvailable: true,
    loading: true,
    selected: false,
    groupMode: false,
    user: usert
  },
  {
    _id: '6650964de52e25cf29ecc054',
    userId: '668c3ea7af22bce6f34641ad',
    username: 'KirillMark46849',
    name: 'Do you think Ukraine will win in the war ?',
    parentMessageId: null,
    createdAt: 1716557389613,
    totalAnswers: 13,
    img: 'https://as2.ftcdn.net/v2/jpg/05/47/25/61/1000_F_547256145_znzOGAI54Zr4Lh82NemhVHf8Mr6aeDmV.jpg',
    answersCount: {
      yes: 4,
      no: 9
    },
    shortId: 2,
    noPercentage: 69,
    loading: true
  },
  {
    _id: '6651c5dac4df33de39d4875d',
    userId: '66422f0e814d3019c045efb3',
    username: 'piliponful',
    name: 'Are you willing to pay more taxes so other people can have food and heathcare?',
    img: 'https://cdn2.oceansbridge.com/2017/10/15100428/The-Payment-of-Taxes-Georges-de-La-Tour-oil-painting.jpg',
    parentMessageId: null,
    createdAt: 1716635097983,
    totalAnswers: 4,
    answersCount: {
      yes: 2,
      no: 2
    },
    shortId: 6,
    noPercentage: 50
  },
  {
    _id: '665338c333ac78651bcafe6d',
    userId: '668c3ea7af22bce6f34641ad',
    username: 'KirillMark46849',
    name: 'Do you think Biden will win the election?',
    img: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/joe-biden-portrait-watercolor-with-american-flag-stockphotosart-com.jpg',
    parentMessageId: null,
    createdAt: 1716730051552,
    totalAnswers: 4,
    answersCount: {
      yes: 0,
      no: 4
    },
    shortId: 9,
    noPercentage: 100
  },
  {
    _id: '6658f55b71d200e0657cdacc',
    userId: '66422f0e814d3019c045efb3',
    username: 'piliponful',
    name: 'Will this app be successful?',
    img: 'https://media.carnegie.org/filer_public_thumbnails/filer_public/0d/1a/0d1a5205-4724-4dae-a0bc-3bffa0ebc5dc/scene_at_the_signing_of_the_constitution_of_the_united_states.jpg__928x618_q85_crop_subsampling-2_upscale.jpg',
    parentMessageId: null,
    createdAt: 1717106011368,
    totalAnswers: 2,
    answersCount: {
      yes: 2,
      no: 0
    },
    shortId: 12,
    noPercentage: 0
  },
  {
    _id: '6658f55b71d200e0657cdacc',
    userId: '66422f0e814d3019c045efb3',
    username: 'piliponful',
    name: 'Do you think attack on titan ending was good?',
    parentMessageId: null,
    createdAt: 1717106011368,
    totalAnswers: 2,
    answersCount: {
      yes: 2,
      no: 0
    },
    shortId: 12,
    noPercentage: 0
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

const Messages = () => {
  const [comments, setComments] = useState([])

  const mostAnsweredQuestionsComponents = mostAnsweredQuestions.map(i => {
    return (
      <QuestionCard
        key={i.name}
        {...i}
        loading={false}
        respond={response => console.log('respond ' + response)}
        createNewGroup={name => console.log('create new group ' + name)}
        comments={comments}
        saveComment={text => console.log('text: ', text)}
        fetchComments={() => {
          setComments([{ text: 'Why do you support Trump?', user: usert, createdAt: 1716407581944, answer: 'yes' }, { text: 'What do you know about project 2025?', user: usert, createdAt: 1716407581944, answer: 'yes' }, { text: 'Why do you believe Trump is guilty?', user: usert, createdAt: 1716407581944, answer: 'no' }])
        }}
      />
    )
  })

  return mostAnsweredQuestionsComponents
}

const SidebarWithGroups = () => {
  return (
    <Sidebar title='Groups' style={{ marginTop: 10 }}>
      {groupCombination ? <Circles selectedGroups={selectedForCombinationGroups} selectedCircleParts={selectedCircleParts} handleCompositionTypeChange={console.log} /> : null}
      <GroupsContainer>
        {(groupCombination ? [...selectedForCombinationGroups, groupCombinationResult] : groups).map(i => (
          <GroupCard key={i.name || 'new'} {...i} toggleSelection={() => console.log('toogle selection')} />
        ))}
      </GroupsContainer>
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
        <Messages />
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
    followerCount: 67,
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

window.featureFlags = {
  rewards: false,
  groups: true
}

const MainScreenWithQuestions = () => {
  return (
    <MainScreen style={{ height: 'calc(100% - 20px)', marginTop: 10 }}>
      {/* <QuestionsSearch questions={mostAnsweredQuestions} total={342} search='titan' /> */}
      <QuestionCardsRow>
        <Messages />
      </QuestionCardsRow>
      <div style={{ width: '100%' }}>
        <NewQuestion saveQuestion />
        {/* <ActionsPanel handleTwitterLogin={() => console.log('test')} username='piliponful' showXLogin={false} showKYCLogin /> */}
      </div>
    </MainScreen>
  )
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

window.gtag_report_conversion = () => {}
window.mixpanel = {
  track: (...rest) => {
    console.log(rest)
  }
}

const mock = {
  keyword: 'online poll free',
  description: 'Discover how to create online poll free easily with Poll.cc. Engage your audience with interactive and customizable polling tools.'
}

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
    <div
      style={{
        display: 'flex',
        gap: 32,
        height: '100dvh',
        // width: '100%',
        // padding: '0 15px'
      }}
    >
      {/* <Landing description={mock.description} title={mock.keyword} isBot /> */}
      {/* {screenName === 'groups' && <SidebarWithGroups />} */}
      {/* {screenName === 'groupContent' && <GroupContentScreen show users={users} />} */}
      {/* <SidebarWithQuestions /> */}
      {/* <UserHistoryTabs
        answers={{ different: mostAnsweredQuestions.slice(0, 1), same: mostAnsweredQuestions.slice(1, 2) }}
        back={() => console.log('back')}
        similarity={null}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        user={users[0]}
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
      </UserHistoryTabs> */}

      {/* {!screenName && ( */}
      <>
        <LeftMenuBar user={usert} />
        {/* <SidebarWithGroups /> */}
        {/* <GroupContentScreen
          className='custom-groups-name'
          hasMore={hasMore}
          fetchUsers={() => { setUsers([...usersSlice, users.slice(offset, offset + 10)]); setOffset(offset + 10); console.log('loaded new users') }}
          users={usersSlice}
          toggleVerifiedByX={(toggleVerifiedByX) => console.log('toggleVerifiedByX, ', toggleVerifiedByX)}
          toggleVerifiedByKYC={(toggleVerifiedByKYC) => console.log('toggleVerifiedByKYC, ', toggleVerifiedByKYC)}
        /> */}
        {/* <div style={{ width: 241 }}>
          <Search buttonsOutside search={() => console.log('search')} />
          <SortQuestions getMessages={() => console.log('get questions with sort and duration')} />
        </div> */}
        <MainScreenWithQuestions />
        {/* <ChatBlock messages={messages} /> */}
        {/* <div style={{ marginRight: 241 }}> */}
        {/* <MainScreenWithUserQuestions selectedTab={selectedTab} setSelectedTab={setSelectedTab} /> */}
        {/* <Question {...(mostAnsweredQuestions[1])} /> */}
        {/* </div> */}
        {/* <UsersSearch users={users.filter(i => i.username.includes('pili'))} search='pili' total={1} /> */}
        {/* <QuestionsSearch questions={mostAnsweredQuestions} total={342} search='titan' /> */}
      </>
      {/* )} */}
    </div>
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
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
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
