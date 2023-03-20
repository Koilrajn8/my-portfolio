import {useState} from 'react';


export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="counter-container">
      <button onClick={() => setLike(like + 1)} className="bt-sz-lg">
        👍{like}
      </button>
      <button onClick={() => setDislike(dislike + 1)} className="bt-sz-lg">
        👎{dislike}
      </button>
    </div>
  );
}
