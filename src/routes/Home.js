import { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
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
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

// eslint-disable-next-line
export default connect(mapStateToProps)(Home);
