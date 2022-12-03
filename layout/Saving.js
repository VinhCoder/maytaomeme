import { Fragment } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";

function Saving({ memeRef }) {
  function handleSave(e, memeRef) {
    e.preventDefault();
    alert("Bạn muốn lưu meme vào máy?");
    exportComponentAsJPEG(memeRef);
  }
  return (
    <Fragment>
      <button className="save-btn" onClick={(e) => handleSave(e, memeRef)}>
        <span>Lưu meme</span>
      </button>
    </Fragment>
  );
}

export default Saving;
