import RegisterContext from '../../context/RegisterContext'
import Header from '../Header'

import {
  HomeContainer,
  Greetings,
  Message,
  LinkEl,
  RegisterButton,
  GreetingsTopic,
  Name,
  MeetupImage,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Home = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {registerStatus, name, topic} = value

        const topicName =
          topicsList[topicsList.findIndex(eachTopic => eachTopic.id === topic)]
            .displayText
        // console.log(topicName)
        //  console.log(userName, name)

        return (
          <>
            <Header />
            <HomeContainer>
              {registerStatus ? (
                <>
                  <Name>{`Hello ${name}`}</Name>
                  <GreetingsTopic>Welcome to {topicName}</GreetingsTopic>
                  <MeetupImage
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </>
              ) : (
                <>
                  <Greetings>Welcome to Meetup</Greetings>
                  <Message>Please register for the topic</Message>
                  <LinkEl to="/register">
                    <RegisterButton type="button" onClick={onClickRegister}>
                      Register
                    </RegisterButton>
                  </LinkEl>
                  <MeetupImage
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </>
              )}
            </HomeContainer>
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
