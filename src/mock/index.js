import React from 'react'
import ReactDOM from 'react-dom'

import Body from '../components/shallow/Body'
import MainScreen from '../components/shallow/MainScreen'
import Sidebar from '../components/shallow/Sidebar'
import GroupCard from '../components/leafs/GroupCard'
import GroupContainer from '../components/shallow/GroupContainer'
import NewQuestion from '../components/leafs/NewQuestion'
import Circles from '../components/leafs/Circles'
import QuestionCardsRow from '../components/shallow/QuestionCardsRow'
import QuestionCard from '../components/leafs/QuestionCard'

const groupCombination = true

const selectedForCombinationGroups = [
  { name: 'Anime-watchers', userCount: 42355, selected: true, color: '#d24a43' }
]

const selectedForCombinationGroups2 = [ // eslint-disable-line
  { name: 'Anime-watchers', userCount: 42355, selected: true, color: '#d24a43' },
  { name: 'Gamers', userCount: 46344, selected: true, color: '#3eb5f1' }
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
  { name: 'Have you watched new season of attack on titan?', answer: 'Yes', statistics: { yes: 383343, no: 23450 } },
  { name: 'Will Luffy find one piece?', answer: null, statistics: { yes: 112342, no: 311323 } },
  { name: 'Do you like naruto?', answer: null, statistics: { yes: 240325, no: 101333 } },
  { name: 'Do you like battle between Sasuke and Naruto?', answer: 'No', statistics: { yes: 80341, no: 280341 } },
  { name: 'Do you wanna see HxH continuation?', answer: 'Yes', statistics: { yes: 231031, no: 30328 } }
]

const mostAnsweredInLast7DaysQuestions = [ // eslint-disable-line
  { name: 'Do you like how attack on titan ended?', answer: false, statistics: { yes: 2809, no: 1238 } },
  { name: 'Have you watched last episode of Jijitsu Kaison?', answer: null, statistics: { yes: 738, no: 503 } },
  { name: 'Will you go to animeexpo 2021?', answer: null, statistics: { yes: 501, no: 308 } },
  { name: 'Is Last episode of Yakusoku no Neverland good?', answer: null, statistics: { yes: 329, no: 440 } },
  { name: 'Will Luffy beat Kaido?', answer: null, statistics: { yes: 128, no: 232 } }
]

ReactDOM.render(
  <Body>
    <Sidebar>
      <Circles selectedGroups={selectedForCombinationGroups} selectedCircleParts={selectedCircleParts} />
      <GroupContainer>
        {(groupCombination ? [...selectedForCombinationGroups, groupCombinationResult] : groups).map((i, key) => (
          <GroupCard key={i.name} withoutBottomMargin={key === groups.length - 1} {...i} />
        ))}
      </GroupContainer>
      <NewQuestion />
    </Sidebar>
    <MainScreen>
      <QuestionCardsRow title='Most answered'>
        {mostAnsweredQuestions.map(i => (
          <QuestionCard key={i.name} {...i} respond={() => {}} />
        ))}
      </QuestionCardsRow>
      <QuestionCardsRow title='Most answered in last 7 days'>
        {mostAnsweredInLast7DaysQuestions.map(i => (
          <QuestionCard key={i.name} {...i} respond={() => {}} />
        ))}
      </QuestionCardsRow>
    </MainScreen>
  </Body>, document.getElementById('app'))
