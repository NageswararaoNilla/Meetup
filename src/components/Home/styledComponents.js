import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Greetings = styled.h1`
  font-family: 'Roboto';
  font-size: 40px;
  margin-bottom: 5px;
  margin-top: 5px;
`

export const Message = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-weight: 600;
  margin-top: 5px;
  font-size: 20px;
`

export const LinkEl = styled(Link)``

export const RegisterButton = styled.button`
  background-color: #3b82f6;
  width: 100px;
  padding: 8px;
  border-style: none;
  color: #ffffff;
  border-radius: 8px;
  font-family: 'Roboto';
  cursor: pointer;
`

export const GreetingsTopic = styled.h1`
  font-family: 'Roboto';
  margin-top: 5px;
`

export const Name = styled.h1`
  color: #2563eb;
  font-family: 'Roboto';
  font-size: 32px;
  //   margin-bottom: 5px;
`

export const MeetupImage = styled.img`
  width: 550px;
  height: 300px;
  margin: 20px;
`
