import { useState } from 'react';

export function Colorbox() {
  const [color, setColor] = useState();
  const styles = {
    fontSize: "24px",
    background: color
  };
  
  const [colorList,setColorList] = useState([]);
  return (
    <div>
      <div className="add-color">
      <input
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        placeholder="Enter the color"
      />
      <button
        onClick={() => setColorList([...colorList, color])}
        className="btn-bg"
      >Add color</button>
      </div>
      {colorList.map((clr)=>(
        <Color color={clr} />
      ))}
    </div>

  );
}

function Color({color}){
  const styles = {
    background: color,
    height: "25px",
    width: "300px",
    marginTop: "10px",
  };
  return(
    <div style={styles}></div>
  )
}
