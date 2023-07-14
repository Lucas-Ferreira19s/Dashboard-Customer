import React, { useState } from 'react'

interface ChatMessage {
  id: number
  sender: string
  message: string
}

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage: ChatMessage = {
        id: Date.now(),
        sender: 'User',
        message: inputValue,
      }
      setMessages([...messages, newMessage])
      setInputValue('')
    }
  }

  const fictitiousMessages: ChatMessage[] = [
    {
      id: 1,
      sender: 'ChatBot',
      message: 'Bem-vindo ao chat fictício! Como posso ajudar?',
    },
    {
      id: 2,
      sender: 'John',
      message: 'Gostaria de saber mais sobre o produto X.',
    },
    {
      id: 3,
      sender: 'ChatBot',
      message:
        'Claro! O produto X é uma solução avançada para gerenciamento de dados. Possui recursos como...',
    },
    {
      id: 4,
      sender: 'Jane',
      message: 'Parece interessante! Qual é o preço?',
    },
    {
      id: 5,
      sender: 'ChatBot',
      message: 'O preço do produto X é de $99 por mês.',
    },
  ]

  return (
    <div
      style={{
        display: 'flex',
        height: '400px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        overflow: 'hidden',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ flex: 1, backgroundColor: '#f5f5f5', padding: '16px' }}>
        <h2 style={{ margin: '0 0 16px' }}>Conversas</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {messages.map((message) => (
            <li
              key={message.id}
              style={{
                marginBottom: '8px',
                backgroundColor: '#fff',
                padding: '8px',
                borderRadius: '4px',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.15)',
              }}
            >
              <strong>{message.sender}: </strong>
              {message.message}
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex' }}>
          <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Digite uma mensagem...'
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginRight: '8px',
            }}
          />
          <button
            onClick={handleSendMessage}
            style={{
              padding: '8px 16px',
              backgroundColor: '#4caf50',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Enviar
          </button>
        </div>
      </div>
      <div style={{ flex: 1, backgroundColor: '#fff', padding: '16px' }}>
        <h2 style={{ margin: '0 0 16px' }}>Mensagens</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {fictitiousMessages.map((message) => (
            <li
              key={message.id}
              style={{
                marginBottom: '8px',
                backgroundColor: '#f5f5f5',
                padding: '8px',
                borderRadius: '4px',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.15)',
              }}
            >
              <strong>{message.sender}: </strong>
              {message.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ChatComponent
