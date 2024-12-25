import React, { useState } from 'react';

// Sample AI Tools Data
const aiTools = [
  {
    category: 'Meeting Assistants',
    tools: [
      { name: 'Circleback', description: 'Accurate meeting transcripts and summaries.' },
      { name: 'Krisp', description: 'Meeting transcription and summaries.' },
      { name: 'Granola', description: 'Enhanced note-taking for manual users.' },
    ],
  },
  {
    category: 'Task Management',
    tools: [
      { name: 'Zapier Chatbots', description: 'Custom AI bots for task management.' },
      { name: 'Sunsama', description: 'Integrated task and schedule organizer.' },
      { name: 'Todoist', description: 'AI-powered task prioritization.' },
    ],
  },
  {
    category: 'Creative Tools',
    tools: [
      { name: 'Craiyon', description: 'Image generation from text prompts.' },
      { name: 'PicsArt AI Writer', description: 'AI-enhanced writing assistance.' },
    ],
  },
  {
    category: 'Virtual Assistants',
    tools: [
      { name: 'Siri', description: 'Voice-controlled assistant from Apple.' },
      { name: 'Alexa', description: 'Amazon’s smart assistant for tasks.' },
      { name: 'Google Assistant', description: 'Google-powered voice assistant.' },
    ],
  },
  {
    category: 'Transcription Services',
    tools: [
      { name: 'Otter', description: 'Real-time transcription and summaries.' },
      { name: 'Temi', description: 'Quick, affordable transcription.' },
      { name: 'Rev', description: 'AI and human transcription services.' },
    ],
  },
];

export const Tools = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = aiTools.map(category => ({
    ...category,
    tools: category.tools.filter(tool =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="Tools">
      <nav className="navbar">
        <h1>AI Tools Directory</h1>
        <input
          type="text"
          placeholder="Search AI Tools..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </nav>
      <div className="columns-container">
        {filteredTools.map((category) => (
          <div key={category.category} className="column">
            <h2>{category.category}</h2>
            <ul>
              {category.tools.map((tool) => (
                <li key={tool.name}>
                  <strong>{tool.name}</strong>: {tool.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

