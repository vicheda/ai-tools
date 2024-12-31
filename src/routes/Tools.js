import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Tools = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const data = [
        { title: 'Copilot', value: 'increasing productivity in writing tasks', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Microsoft_365_Copilot_Icon.svg/2048px-Microsoft_365_Copilot_Icon.svg.png', color: '#edf1fc' },
        { title: 'NotebookLM', value: 'deeply analyzing and summarizing existing documents, notes, and research materials', icon: 'https://www.insightplatforms.com/wp-content/uploads/2024/06/NotebookLM-Logo-Square-Insight-Platforms-300x300.png', color: '#ebf8ff' },
        { title: 'Claude AI', value: 'conversational interactions, document summarization, question answering, creative writing, code generation, research assistance', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg', color: '#fff0f0' },
        { title: 'Fireflies', value: 'meeting assistant that automatically records, transcribes, summarizes, and analyzes meetings', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Firefly_logo.png/1280px-Firefly_logo.png', color: '#e7fcf7' },
        { title: 'Starryai', value: 'art generator that can transform a simple text prompt into an image', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DBt53aeGp46ZZaZDJz4sjxwnSdBlI3MRIg&s', color: '#edf1fc' },
        { title: 'ROSS Intelligence', value: 'legal research tool that uses AI to analyze case law, statutes, and regulations', icon: 'https://images.softwaresuggest.com/software_logo/1589798095_ROSS%20Intelligence.png', color: '#edf1fc' },
        { title: 'DataRobot', value: 'automates data analysis to predict trends and outcomes, helping with project planning and impact assessments', icon: 'https://evlsbe.blob.core.windows.net/partners-td-library/6d4ecf50-2ee8-40ce-a149-a82bd3f06505.png', color: '#ebf8ff' },
        { title: 'Power BI', value: 'visualizes and analyzes data to track sustainability goals and donor contributions', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg', color: '#fff0f0' },
        { title: 'H2O.ai', value: 'open-source AI for predictive modeling, useful in environmental sustainability projects', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBL84JWczE4Xaifyuvpi6qEqqUDHkyIdI_6A&s', color: '#e7fcf7' },
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
                  <div key={index} className="col-lg-2 col-md-3 col-sm-4 mb-4">
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
