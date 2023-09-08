import {useState} from 'react'

import RegisterContext from '../../context/RegisterContext'

import Header from '../Header'
import {
  LoginContainer,
  BannerImage,
  LoginForm,
  LoginHeading,
  InputLabel,
  Input,
  Select,
  Option,
  RegisterButton,
  ErrorMsg,
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

const Register = props => {
  const [userName, setUserName] = useState('')

  return (
    <RegisterContext.Consumer>
      {value => {
        const {
          // name,
          topic,
          changeRegisterStatus,
          showError,
          updateError,
          updateName,
          updateTopic,
        } = value

        const onChangeTopic = event => {
          updateTopic(event.target.value)
        }

        const onChangeName = event => {
          // console.log(event.target.value)
          // updateName(event.target.value)
          setUserName(event.target.value)
        }

        const onClickRegister = event => {
          event.preventDefault()

          if (userName === '') {
            updateError()
          } else {
            // console.log('register')
            const {history} = props
            changeRegisterStatus()
            updateName(userName)
            setUserName('')
            history.replace('/')
          }
        }

        return (
          <>
            <Header />
            <LoginContainer>
              <BannerImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <LoginForm onSubmit={onClickRegister}>
                <LoginHeading>Let us join</LoginHeading>
                <InputLabel htmlFor="nameInput">NAME</InputLabel>
                <Input
                  type="text"
                  value={userName}
                  placeholder="Your Name"
                  id="nameInput"
                  onChange={onChangeName}
                />
                <InputLabel htmlFor="selectInput">TOPICS</InputLabel>
                <Select
                  type="dropdown"
                  id="selectInput"
                  value={topic}
                  onChange={onChangeTopic}
                >
                  {topicsList.map(eachTopic => (
                    <Option key={eachTopic.id} value={eachTopic.id}>
                      {eachTopic.displayText}
                    </Option>
                  ))}
                </Select>
                <RegisterButton type="submit">Register Now</RegisterButton>
                {showError && <ErrorMsg>Please enter your name</ErrorMsg>}
              </LoginForm>
            </LoginContainer>
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Register
