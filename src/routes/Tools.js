import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Tools = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const data = [
        { title: 'Copilot', value: 'increasing productivity in writing tasks', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Microsoft_365_Copilot_Icon.svg/2048px-Microsoft_365_Copilot_Icon.svg.png', color: '#edf1fc' },
        { title: 'NotebookLM', value: 'deeply analyzing and summarizing existing documents, notes, and research materials', icon: 'https://www.insightplatforms.com/wp-content/uploads/2024/06/NotebookLM-Logo-Square-Insight-Platforms-300x300.png', color: '#ebf8ff' },
        { title: 'Claude AI', value: 'conversational interactions, document summarization, question answering, creative writing, code generation, research assistance', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg', color: '#fff0f0' },
        { title: 'Fireflies', value: 'meeting assistant that automatically records, transcribes, summarizes, and analyzes meetings', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Firefly_logo.png/1280px-Firefly_logo.png', color: '#e7fcf7' },
        { title: 'Starryai', value: 'art generator that can transform a simple text prompt into an image.', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DBt53aeGp46ZZaZDJz4sjxwnSdBlI3MRIg&s', color: '#edf1fc' }
    ];

    const filteredData = data.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div className="container mt-5">
          <div className="row justify-content-center mb-4">
              <div className="col-md-6">
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                  />
              </div>
          </div>
          <div className="row justify-content-center">
              {filteredData.map((item, index) => (
                  <div key={index} className="col-md-2 col-sm-4 mb-4">
                      <div className="card text-center p-4 shadow-sm" style={{ backgroundColor: item.color }}>
                          <div className="icon mb-3" style={{ fontSize: '2rem' }}>
                              <img src={item.icon} alt={`${item.title} icon`} style={{ width: '50px', height: '50px' }} />
                          </div>
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-value">{item.value}</p>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
};