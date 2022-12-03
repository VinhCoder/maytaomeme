function MemeGenerate({
  handleChange,
  textTop,
  addText,
  nextMeme,
  previousMeme,
}) {
  return (
    <form className="form-container">
      <div className="form-field">
        <input
          type="text"
          value={textTop}
          name="textTop"
          className="meme-context"
          placeholder="Nhập văn bản cho meme..."
          onChange={(e) => handleChange(e)}
        />
        <div className="add-and-save">
          <button className="add-btn" onClick={(e) => addText(e)}>
            Thêm text
          </button>
          {/* <button className="save-btn" onClick={(e) => handleSave(e, memeRef)}>
            Save
          </button> */}
        </div>
        <div className="meme-generate-btn">
          <button
            className="meme-previous-btn"
            onClick={(e) => previousMeme(e)}
          >
            {" "}
            Quay lại{" "}
          </button>
          <button className="meme-next-btn" onClick={(e) => nextMeme(e)}>
            Meme khác
          </button>
        </div>
      </div>
    </form>
  );
}

export default MemeGenerate;
