import React from 'react'
import ReactDOM from 'react-dom'

import Body from './components/Body'
import MainScreen from './components/MainScreen'
import Title from './components/MainScreen/components/Title'
import Sidebar from './components/Sidebar'
import SidebarTitle from './components/Sidebar/components/Title'
import Container from './components/Container'
import ExistingGroupCard from './components/Sidebar/components/ExistingGroupCard'
import NewGroupCard from './components/Sidebar/components/NewGroupCard'
import GroupContainer from './components/Sidebar/components/GroupContainer'
import MessageSendArea from './components/Sidebar/components/MessageSendArea'
import Textarea from './components/Sidebar/components/MessageSendArea/components/Textarea'
import HintAndSend from './components/Sidebar/components/MessageSendArea/components/HintAndSend'
import Circles from './components/Sidebar/components/Circles'
import CirclesHint from './components/Sidebar/components/CirclesHint'
import CardsRow from './components/MainScreen/components/CardsRow'
import CardRowsContainer from './components/MainScreen/components/CardRowsContainer'
import Card from './components/MainScreen/components/Card'

const groupCombination = true

const selectedForCombinationGroups = [
  { title: 'Anime-watchers', numberOfPeople: 42355, selected: true, color: '#d24a43' }
]

const selectedForCombinationGroups2 = [ // eslint-disable-line
  { title: 'Anime-watchers', numberOfPeople: 42355, selected: true, color: '#d24a43' },
  { title: 'Gamers', numberOfPeople: 46344, selected: true, color: '#3eb5f1' }
]

const groupCombinationResult = { numberOfPeople: 31308, selected: true, color: '#92278f' }

const selectedCircleParts = []

const groups = [
  { numberOfPeople: 31308 },
  { title: 'Anime-watchers', numberOfPeople: 42355, selected: true },
  { title: 'BlackUFA subscribers', numberOfPeople: 18344 },
  { title: 'Gamers', numberOfPeople: 46344 },
  { title: 'Anime-haters', numberOfPeople: 2243 }
]

const mostAnsweredQuestions = [ // eslint-disable-line
  { title: 'Have you watched new season of attack on titan?', answer: 'Yes', statistics: { yes: 383343, no: 23450 } },
  { title: 'Will Luffy find one piece?', answer: null, statistics: { yes: 112342, no: 311323 } },
  { title: 'Do you like naruto?', answer: null, statistics: { yes: 240325, no: 101333 } },
  { title: 'Do you like battle between Sasuke and Naruto?', answer: 'No', statistics: { yes: 80341, no: 280341 } },
  { title: 'Do you wanna see HxH continuation?', answer: 'Yes', statistics: { yes: 231031, no: 30328 } }
]

const mostAnsweredInLast7DaysQuestions = [ // eslint-disable-line
  { title: 'Do you like how attack on titan ended?', answer: false, statistics: { yes: 2809, no: 1238 } },
  { title: 'Have you watched last episode of Jijitsu Kaison?', answer: null, statistics: { yes: 738, no: 503 } },
  { title: 'Will you go to animeexpo 2021?', answer: null, statistics: { yes: 501, no: 308 } },
  { title: 'Is Last episode of Yakusoku no Neverland good?', answer: null, statistics: { yes: 329, no: 440 } },
  { title: 'Will Luffy beat Kaido?', answer: null, statistics: { yes: 128, no: 232 } }
]

ReactDOM.render(
  <Body>
    <Container>
      <Sidebar>
        <SidebarTitle>Groups</SidebarTitle>
        <Circles selectedGroups={selectedForCombinationGroups} />
        <p style={{ marginTop: '10px' }}>
          <CirclesHint selectedGroups={selectedForCombinationGroups} selectedCircleParts={selectedCircleParts} />
        </p>
        <GroupContainer>
          {(groupCombination ? [...selectedForCombinationGroups, groupCombinationResult] : groups).map((i, key) => (
            i.title
              ? <ExistingGroupCard key={i.title} withoutBottomMargin={key === groups.length - 1} {...i} />
              : <NewGroupCard key={key} withoutBottomMargin={key === groups.length - 1} {...i} />
          ))}
        </GroupContainer>
        <MessageSendArea>
          <Textarea />
          <HintAndSend />
        </MessageSendArea>
      </Sidebar>
      <MainScreen>
        <Title>Questions</Title>
        <CardRowsContainer>
          <CardsRow title='Most answered'>
            {mostAnsweredQuestions.map(i => (
              <Card key={i.title} {...i} respond={() => {}} />
            ))}
          </CardsRow>
          <CardsRow title='Most answered in last 7 days'>
            {mostAnsweredInLast7DaysQuestions.map(i => (
              <Card key={i.title} {...i} respond={() => {}} />
            ))}
          </CardsRow>
        </CardRowsContainer>
      </MainScreen>
    </Container>
  </Body>, document.getElementById('app'))
