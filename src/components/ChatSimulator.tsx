import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, User, MessageSquare, Minimize2, Maximize2, RefreshCw } from 'lucide-react';
import { MOCK_CHATBOT_FAQ } from '../data';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

export default function ChatSimulator() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Bonjour ! Je suis **NeuraTech Copilot**, votre assistant IA. Comment puis-je vous éclairer aujourd'hui sur nos solutions d'intelligence artificielle ou d'automatisation ?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([
    "Estimer mon ROI",
    "Découvrir le RAG",
    "Voir les expertises",
    "Demander une démo"
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Add user message
    const newMessages: Message[] = [
      ...messages,
      { sender: 'user', text: textToSend, timestamp: new Date() }
    ];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    const cleanText = textToSend.toLowerCase();

    // Prepare conversation history for the API (last 10 messages for context)
    const apiMessages = newMessages.slice(-10).map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text
    }));

    // Post to our secure Express proxy
    fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ messages: apiMessages })
    })
    .then(res => {
      if (!res.ok) throw new Error("API call failed");
      return res.json();
    })
    .then(data => {
      let botResponse = data.reply;
      let newSuggestions = ["Demander une démo", "Comment ça marche ?", "Nos tarifs", "Recommencer"];

      if (data.mode === 'simulated_demo') {
        // Fallback to our custom simulated response for local quick testing
        for (const faq of MOCK_CHATBOT_FAQ) {
          if (faq.keywords.some(keyword => cleanText.includes(keyword))) {
            botResponse = `⚠️ **Mode Démo Actif** (Pas de clé d'API Groq)\n\n${faq.answer}`;
            newSuggestions = MOCK_CHATBOT_FAQ
              .filter(item => item.suggestion !== faq.suggestion)
              .map(item => item.suggestion)
              .slice(0, 3);
            break;
          }
        }
      }

      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: botResponse, timestamp: new Date() }
      ]);
      setSuggestions(newSuggestions);
      setIsTyping(false);
    })
    .catch(err => {
      console.warn("Using offline fallback:", err);
      // Offline fallback
      setTimeout(() => {
        let matchedResponse = "Je comprends tout à fait votre point. Nos ingénieurs conçoivent des solutions sur mesure adaptées à vos contraintes. Souhaitez-vous que nous en discutions lors d'un appel découverte de 15 minutes ? C'est entièrement gratuit et sans engagement.";
        let newSuggestions = ["Demander une démo", "Comment ça marche ?", "Nos tarifs", "Recommencer"];

        for (const faq of MOCK_CHATBOT_FAQ) {
          if (faq.keywords.some(keyword => cleanText.includes(keyword))) {
            matchedResponse = faq.answer;
            newSuggestions = MOCK_CHATBOT_FAQ
              .filter(item => item.suggestion !== faq.suggestion)
              .map(item => item.suggestion)
              .slice(0, 3);
            break;
          }
        }

        setMessages(prev => [
          ...prev,
          { sender: 'bot', text: matchedResponse, timestamp: new Date() }
        ]);
        setSuggestions(newSuggestions);
        setIsTyping(false);
      }, 1000);
    });
  };

  const resetChat = () => {
    setMessages([
      {
        sender: 'bot',
        text: "Conversation réinitialisée. Comment puis-je vous aider à accélérer votre croissance grâce à l'IA aujourd'hui ?",
        timestamp: new Date()
      }
    ]);
    setSuggestions(["Estimer mon ROI", "Découvrir le RAG", "Voir les expertises", "Demander une démo"]);
  };

  // Helper to parse markdown-like bold strings
  const parseMarkdown = (text: string) => {
    const regex = /\*\*(.*?)\*\*/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(<strong key={match.index} className="text-indigo-400 font-semibold">{match[1]}</strong>);
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div className="bg-brand-card/70 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-[520px] shadow-2xl relative backdrop-blur-sm" id="chat-simulator-container">
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full filter blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="bg-gradient-to-r from-brand-card to-brand-dark px-5 py-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-brand-dark rounded-full" />
          </div>
          <div>
            <h4 className="font-display font-semibold text-white text-sm flex items-center gap-1.5">
              NeuraTech Copilot
              <span className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/25 px-1.5 py-0.5 rounded-full font-mono uppercase tracking-wider font-semibold">Agent IA</span>
            </h4>
            <p className="text-[11px] text-slate-400 flex items-center">
              <span>● En ligne</span>
              <span className="mx-1.5">•</span>
              <span>Temps de réponse &lt; 2s</span>
            </p>
          </div>
        </div>

        <button 
          onClick={resetChat}
          className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800/40 transition-all"
          title="Réinitialiser le chat"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Message Feed */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4" id="chat-messages-container">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-start ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'bot' && (
              <div className="w-8 h-8 rounded-full bg-brand-dark border border-slate-800 flex items-center justify-center mr-2.5 mt-0.5 shrink-0 shadow-md">
                <Sparkles className="w-4 h-4 text-indigo-400" />
              </div>
            )}
            
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-md transition-all ${
                msg.sender === 'user'
                  ? 'bg-indigo-600 text-white rounded-tr-none'
                  : 'bg-brand-dark border border-slate-800 text-slate-200 rounded-tl-none leading-relaxed'
              }`}
            >
              <div className="whitespace-pre-wrap">{parseMarkdown(msg.text)}</div>
              <span className="block text-[9px] text-slate-500 mt-1 text-right font-mono">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>

            {msg.sender === 'user' && (
              <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center ml-2.5 mt-0.5 shrink-0">
                <User className="w-4 h-4 text-cyan-400" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-start justify-start">
            <div className="w-8 h-8 rounded-full bg-brand-dark border border-slate-800 flex items-center justify-center mr-2.5 mt-0.5 shrink-0 shadow-md">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" />
            </div>
            <div className="bg-brand-dark border border-slate-800 text-slate-300 rounded-2xl rounded-tl-none px-4 py-3.5 shadow-md flex items-center space-x-1.5">
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-100" />
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-200" />
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-300" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestion Chips */}
      <div className="px-4 py-2 bg-brand-dark/40 border-t border-slate-800/60 flex flex-wrap gap-1.5" id="suggestion-chips">
        {suggestions.map((suggestion, i) => (
          <button
            key={i}
            onClick={() => handleSend(suggestion)}
            className="text-xs bg-brand-dark hover:bg-brand-card text-indigo-400 border border-indigo-500/20 hover:border-indigo-500/50 px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer hover:-translate-y-0.5 font-medium"
          >
            {suggestion}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend(input);
        }}
        className="p-3 bg-brand-card border-t border-slate-800 flex items-center space-x-2"
        id="chat-input-form"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Posez une question (ex: 'Comment marche le RAG ?')"
          className="flex-1 bg-brand-dark/90 text-sm text-white placeholder-slate-500 border border-slate-800 focus:border-indigo-500/50 focus:outline-none rounded-xl px-4 py-2.5 transition-all"
          disabled={isTyping}
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-500 text-white p-2.5 rounded-xl font-medium transition-all shadow-md shadow-indigo-500/15 disabled:opacity-40 disabled:hover:bg-indigo-600 cursor-pointer"
          disabled={!input.trim() || isTyping}
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
