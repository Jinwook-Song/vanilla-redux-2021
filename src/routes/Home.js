import { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  function onChange(event) {
    setText(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="what's to do"
          value={text}
          onChange={onChange}
        />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

// eslint-disable-next-line
export default Home;
