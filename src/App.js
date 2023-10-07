import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // the text entered by the user
  const [text, setText] = useState('');

  // word count
  const [wordCount, setWordCount] = useState(0);

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // array of words
    const words = text.split(' ');

    // update word count
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });
    setWordCount(wordCount);

   
  }, [text]);

  return (
    <div className='container'>
      <h2>Responsive Paragraph Word Counter</h2>
      <div className="textBox">
        <div>
        <textarea className="text"
          value={text}
          onChange={changeHandler}
          placeholder='Type something...'
        ></textarea></div>

        <div>
          <p className='word-count'>Word Count: {wordCount}</p>
         
        </div>
      </div>
    </div>
  );
}

export default App;