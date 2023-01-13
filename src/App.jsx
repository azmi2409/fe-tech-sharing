import { useState } from 'react'
import useMessage from './hooks/useMessage'
import moment from 'moment'

const baseInput = {
  name: '',
  message: '',
}

function App() {
  const [input, setInput] = useState(baseInput)
  const { messages, postMessage } = useMessage()

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postMessage(input)
    setInput(baseInput)
  }

  return (
    <main className="container p-10">
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <div className='flex justify-center items-center gap-2'>
          <label>Name:</label>
          <input name='name' value={input.name} onChange={handleChange} className='border-2 border-black' type='text' />
        </div>
        <div className='flex justify-center items-center gap-2'>
          <label>Message:</label>
          <input name='message' value={input.message} onChange={handleChange} className='border-2 border-black' type='text' />
        </div>
        <div className='flex justify-center items-center gap-2'>
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40'>Submit</button>
        </div>
      </form>
      <MessageList messages={messages} />
    </main>
  )
}

const MessageList = ({ messages }) => {
  const convertTime = (time) => {
    return moment(time).format('DD/MM/YYYY HH:mm')
  }

  return (
    <div className='flex flex-col gap-2'>
      {messages.map((message, index) => (
        <div key={index} className='flex justify-between items-center gap-2'>
          <div className='flex flex-col gap-2'>
            <div className='flex justify-between items-center gap-2'>
              <div className='font-bold'>{message.userName}</div>
              <div className='text-gray-500'>{convertTime(message.createdAt)}</div>
            </div>
            <div className='text-gray-500'>{message.text}</div>
          </div>
        </div>
      ))}
    </div>
  )
}



export default App
