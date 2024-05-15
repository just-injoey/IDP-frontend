import React, { useState } from 'react';
import axios from 'axios';

const NgramSearch = () => {
    const [words, setWords] = useState('');
    const [plotData, setPlotData] = useState(null);
    const [error, setError] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            // Split the input words by comma and trim spaces
            const wordsArray = words.split(',').map(word => word.trim());
            if (wordsArray.length === 0 || wordsArray.some(word => word === '')) {
                setError('Please enter at least one word.');
                return;
            }
            console.log("Reached here in frontend");
            const response = await axios.post('/api/ngram/plot', { words: wordsArray });
            setPlotData(response.data.plotData);
            setError('');
        } catch (error) {
            console.error('Error fetching ngram plot:', error);
            setError('Failed to fetch ngram plot. Please try again later.');
        }
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Enter words (comma-separated):
                    <input 
                        type="text" 
                        value={words} 
                        onChange={(e) => setWords(e.target.value)} 
                    />
                </label>
                <button type="submit">Generate Plot</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {plotData && (
                <div>
                    <h2>Ngram Plot</h2>
                    {/* Render the plot image */}
                    <img src={`data:image/png;base64,${plotData}`} alt="Ngram Plot" />
                </div>
            )}
        </div>
    );
};

export default NgramSearch;


// // frontend/src/pages/NgramSearch/NgramSearch.js

// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';
// import './NgramSearch.css';

// export default function NgramSearch() {
//   // Hardcoded word frequency data
//   const data = {
//     labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010'],
//     datasets: [
//       {
//         label: 'Sample Word Frequency',
//         data: [12, 19, 3, 5, 2, 3, 10, 15, 20, 25, 30],
//         borderColor: 'rgba(75, 192, 192, 1)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     maintainAspectRatio: false,
//     responsive: true,
//     scales: {
//       x: {
//         beginAtZero: true,
//       },
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className="ngram-search-container">
//       <h1 className="ngram-search-title">Ngram Search</h1>
//       <div className="ngram-search-chart">
//         <Line data={data} options={options} />
//       </div>
//     </div>
//   );
// }
