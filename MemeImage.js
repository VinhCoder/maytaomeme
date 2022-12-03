import { createRef } from "react";
import Draggable from "react-draggable";
import Saving from "./layout/Saving";
function MemeImage({ textTop, textDes, textMeme, memeUrl }) {
  const memeRef = createRef();

  return (
    <div className="meme-form" ref={memeRef}>
      <h2 className="meme-form-text-name">{textTop}</h2>
      {textMeme.map((text, index) => {
        return (
          <Draggable key={index}>
            <h2 className="meme-form-text-name">{text}</h2>
          </Draggable>
        );
      })}
      <img className="meme-img" src={memeUrl} alt="error" />;
      <Draggable>
        <h3 className="meme-form-text-description">{textDes}</h3>
      </Draggable>
      <Saving memeRef={memeRef} />
    </div>
  );
}
export default MemeImage;
