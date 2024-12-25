import React from 'react';
import meme1 from '../img/meme1.jpeg';

// Navigation Sections Data
const sections = [
  {
    title: 'Introduction',
    content: [
      'Hi Paul! 👋 Welcome to the ChatGPT Prompt Guide. This guide will help you understand how to craft effective prompts for ChatGPT.',
      'Note: these content are most likely written by an AI as well :D I did not have time to put in my own words, but enjoy!🤖'
    ],
    image: meme1
  },
  {
    title: 'ChatGPT said Hi!',
    content: [
      'I asked ChatGPT to introduce itself, and here’s what it said:',
      'Hey! I’m an AI assistant designed to help with all kinds of tasks—whether it’s answering questions, writing, or brainstorming ideas.',
      'Think of me as a mix between a helpful coworker and a curious friend. I’m great at digging up information, explaining complex topics, or just having interesting conversations.',
    ],
  },
  {
    title: 'Tips for Crafting Great Prompts',
    content: [
      'According to ZDNET, here are some tips for crafting great prompts:',
      'Here we go 🚀',
      '1. Be clear and specific in your questions and how you want your answer to format',
      '2. Provide context to help ChatGPT understand your needs',
      '3. Break down complex questions into simpler parts',
      '4. Add as many constraints to your prompt as you can (use longer prompt when needed)',
      '5. Iterate multiple attempts',
      'More info here: <a href="https://www.zdnet.com/article/7-advanced-chatgpt-prompt-writing-tips-you-need-to-know/" target="_blank" rel="noopener noreferrer">ZDNET ChatGPT Prompt Tips</a>!',
    ],
  },
  {
    title: 'Common Mistakes to Avoid',
    content: [
      'Highlight common mistakes like vague questions and how to improve them.',
      'Avoid asking overly broad questions like "Tell me everything about AI."Instead, ask specific questions.',
      '1. Having unrealistic expectation',
      '2. Not providing enough context',
      '3. Not iterating enough',
      '4. Not Using One Topic Per Conversation',
      'Here is an article from Forbes on this: <a href="https://www.forbes.com/sites/jodiecook/2024/11/18/9-mistakes-to-avoid-when-using-chatgpt/" target="_blank" rel="noopener noreferrer">Forbes</a>.'
    ],
  },
];

export const Tutorial = () => {
  const [activeSection, setActiveSection] = React.useState(sections[0]);

  return (
    <div className="Tutorial">
      <nav className="t-navbar">
        <h1>ChatGPT Prompt Guide</h1>
        <ul className="t-nav-list">
          {sections.map((section) => (
            <li 
              key={section.title} 
              className={`t-nav-item ${activeSection.title === section.title ? 'active' : ''}`}
              onClick={() => setActiveSection(section)}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </nav>
      <main className="t-content">
        <h2>{activeSection.title}</h2>
        {activeSection.content.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
        ))}
        {activeSection.image && <img src={activeSection.image} alt={activeSection.title} className="t-image" />}
      </main>
    </div>
  );
}