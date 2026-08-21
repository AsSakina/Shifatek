import { useEffect, useRef, useState } from 'react'
import { ArrowRight, MessageCircle, X } from 'lucide-react'
import type { Content } from '../content'
import { useContent } from '../lib/ContentContext'

type Topic = Content['chatTopics'][number]
type Message = { from: 'bot' | 'user'; text: string; link?: Topic['link'] }

/** Bulle de chat FAQ : questions prédéfinies, réponses fixes, aucun appel réseau. */
export function Chatbot() {
  const { chatbot, chatTopics } = useContent()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(() => [{ from: 'bot', text: chatbot.greeting }])
  const [asked, setAsked] = useState<string[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)

  // Repart de zéro si la langue change en cours de conversation.
  useEffect(() => {
    setMessages([{ from: 'bot', text: chatbot.greeting }])
    setAsked([])
  }, [chatbot])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  const ask = (topic: Topic) => {
    setMessages((current) => [...current, { from: 'user', text: topic.question }, { from: 'bot', text: topic.answer, link: topic.link }])
    setAsked((current) => (current.includes(topic.id) ? current : [...current, topic.id]))
  }

  const reset = () => {
    setMessages([{ from: 'bot', text: chatbot.greeting }])
    setAsked([])
  }

  return (
    <>
      {open && (
        <div id="chatbot-panel" className="chatbot-panel" role="dialog" aria-label={chatbot.label}>
          <div className="chatbot-head">
            <span>{chatbot.label}</span>
            <button type="button" aria-label={chatbot.closeLabel} onClick={() => setOpen(false)}>
              <X aria-hidden="true" />
            </button>
          </div>
          <div className="chatbot-messages" ref={scrollRef}>
            {messages.map((message, index) => (
              <div className={`chatbot-bubble ${message.from}`} key={index}>
                <p>{message.text}</p>
                {message.link && (
                  <a className="chatbot-link" href={message.link.href}>
                    {message.link.label}
                    <ArrowRight aria-hidden="true" />
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="chatbot-options">
            {chatTopics.map((topic) => (
              <button type="button" className="chatbot-chip" key={topic.id} onClick={() => ask(topic)}>
                {topic.question}
              </button>
            ))}
            {asked.length > 0 && (
              <button type="button" className="chatbot-chip chatbot-reset" onClick={reset}>
                {chatbot.resetLabel}
              </button>
            )}
          </div>
        </div>
      )}
      <button
        type="button"
        className="chatbot-toggle"
        aria-expanded={open}
        aria-controls="chatbot-panel"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X aria-hidden="true" /> : <MessageCircle aria-hidden="true" />}
        <span className="sr-only">{open ? chatbot.closeLabel : chatbot.openLabel}</span>
      </button>
    </>
  )
}
