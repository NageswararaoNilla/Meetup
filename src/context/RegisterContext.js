import React from 'react'

const RegisterContext = React.createContext({
  registerStatus: false,
  name: '',
  topic: 'Arts and Culture',
  showError: false,
  changeRegisterStatus: () => {},
  updateError: () => {},
  updateName: () => {},
  updateTopic: () => {},
})

export default RegisterContext
