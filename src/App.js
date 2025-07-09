import { useState } from 'react';
import Message from './Message';

function App() {
  const [text, setText] = useState('');

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>컴포넌트 분리 실습</h1>

      <input
        type='text'
        placeholder='메세지를 입력하세요'
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{padding: '8px', fontSize: '16px'}}
      />
      
      <Message text={text} />
    </div>
  );
}

export default App;
