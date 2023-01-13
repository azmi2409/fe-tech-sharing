import React from 'react'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:3005'

const useMessage = () => {
    const [messages, setMessages] = React.useState([])

    const fetchMessage = async () => {
        const { data } = await axios.get(`${baseUrl}messages`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        })
        setMessages(data)
    }

    const postMessage = async (message) => {
        await axios.post(`${baseUrl}messages`, {
            userName: message.name,
            text: message.text
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        })
        fetchMessage()
    }

    React.useEffect(() => {
        fetchMessage()
    }, [])

    return { messages, postMessage }
}

export default useMessage