import { useState } from "react";

function App() {
  const app_page = {
    backgroundColor: "#686867",
    textAlign: "center",
    minHeight: "100vh",
    padding: "1px",
  };

  const headerStyle = {
    color: "#FFD832",
    margin: 0,
    padding: "25px",
  };

  const foodList = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "1000px",
    width: "100%",
    margin: "auto",
    marginBottom: "20px",
  };

  return (
    <main style={app_page}>
      <h1 style={headerStyle}>โหวตอาหาร</h1>
      <div style={foodList}>
        <Food
          title="อาหารคาว"
          subtitle="ข้าวผัด"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imgSrc="https://img.wongnai.com/p/1920x0/2019/12/19/d5537700a7274ac09964b6a51dd0a9f6.jpg"
        />
        <Food
          title="อาหารหวาน"
          subtitle="บัวลอย"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imgSrc="https://f.ptcdn.info/371/081/000/rz7gbk127laZ0YjQvz9FU-o.jpg"
        />
      </div>
    </main>
  );
}

function Food(props) {
  let [vote, setVote] = useState(0);

  const handleVote = () => {
    if (vote === 10) {
      alert("Cannot Vote more");
      return;
    }
    setVote(vote + 1);
  };

  const handleUnvote = () => {
    if (vote === 0) {
      alert("Cannot unvote");
      return;
    }
    setVote(vote - 1);
  };

  const boxStyle = {
    backgroundColor: "#F7E6D2",
    borderRadius: "10px",
    border: "2px solid black",
    width: "75%",
    padding: "20px",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    justifyContent: "center",
  };

  const contentStyle = {
    textAlign: "left",
  };

  const titleStyle = {
    fontSize: "24px",
  };

  const subStyle = {
    fontSize: "17px",
  };

  const imgStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
  };

  const voteStyle = {
    backgroundColor: "#78E400",
    border: "2px solid black",
    borderRadius: "12px",
    color: "#A742FF",
    fontSize: "24px",
    fontWeight: "bold",
    padding: "7px",
  };

  return (
    <div style={boxStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>{props.title}</h1>
          <h2 style={subStyle}>{props.subtitle}</h2>
          <p>{props.description}</p>
        </div>
        <img src={props.imgSrc} alt={props.subtitle} style={imgStyle}></img>
      </div>

      <div style={containerStyle}>
        <Button text="Click to Vote" onClick={handleVote} />
        <div style={voteStyle}>
          {vote === 0 ? "MIN" : vote === 10 ? "MAX" : vote}
        </div>
        <Button text="Click to Unvote" onClick={handleUnvote} />
      </div>
    </div>
  );
}

function Button(props) {
  const buttonStyle = {
    backgroundColor: "#FFFFFF",
    padding: "5px",
    width: "fit-content",
    height: "40px",
    borderRadius: "4px",
    marginTop: "auto",
  };

  return (
    <button style={buttonStyle} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default App;
