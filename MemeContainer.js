import React, { useEffect, useState } from "react";
import MemeGenerate from "./MemeGenerate";
import MemeImage from "./MemeImage";

function MemeContainer() {
  const [text, setText] = useState({
    textTop: "",
  });

  function handleChange(e) {
    setText({
      textTop: e.target.value,
    });
  }
  const [texting, setTexting] = useState([]);
  function addText(e) {
    e.preventDefault();
    alert("Bạn muốn thêm text cho meme?");
    setTexting((prev) => [...prev, text.textTop]);
    setText({
      textTop: "",
    });
  }
  //api.imgflip.com/get_memes
  const [data, setData] = useState({
    memeImg: [],
  });
  useEffect(() => {
    // tạo GET request để lấy danh sách todos
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => setData({ memeImg: response.data.memes }));
  }, []);

  const [url, setUrl] = useState({
    url: "https://i.imgflip.com/30b1gx.jpg",
  });
  let [count, setCount] = useState(0);
  function nextMeme(e) {
    e.preventDefault();
    setCount(++count);
    if (count > 99) {
      setCount(0);
    }
    if (data.memeImg[count]) {
      setUrl(data.memeImg[count]);
    }
  }

  function previousMeme(e) {
    e.preventDefault();
    setCount(--count);
    if (count < 1) {
      setCount(99);
    }
    if (data.memeImg[count]) {
      setUrl(data.memeImg[count]);
    }
  }
  console.log(count);
  if (url.url) {
    url.url = url.url;
    console.log(url.url);
  }
  return (
    <div className="container">
      <MemeGenerate
        handleChange={handleChange}
        textTop={text.textTop}
        addText={addText}
        nextMeme={nextMeme}
        previousMeme={previousMeme}
      />
      <MemeImage
        textTop={text.textTop}
        textDes={text.textDes}
        textMeme={texting}
        memeUrl={url.url}
      />
    </div>
  );
}

export default MemeContainer;
