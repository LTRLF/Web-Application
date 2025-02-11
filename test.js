import "./App.css";
import { useState } from "react";

function App() {
  const appStyle = {
    backgroundColor: "#686867",
    textAlign: "center",
    height: "100vh",
  };

  const headerStyle = {
    color: "#FFD832",
    margin: "0",
    padding: "20px",
  };

  const foodListStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <main style={appStyle}>
      <h1 style={headerStyle}>โหวตอาหาร</h1>
      <div style={foodListStyle}>
        <Food
          title="อาหารคาว"
          subtitle="ข้าวผัด"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
          imgSrc="https://img.wongnai.com/p/1920x0/2019/12/19/d5537700a7274ac09964b6a51dd0a9f6.jpg"
        />
        <Food
          title="อาหารหวาน"
          subtitle="บัวลอย"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content"
          imgSrc="https://img-global.cpcdn.com/recipes/b468838663f7b8e7/1200x630cq70/photo.jpg"
        />
      </div>
    </main>
  );
}

function Food(props) {
  let [vote, setVote] = useState(0);

  const handleVote = () => {
    if (vote == 10) {
      alert("You can't vote more than 10 times");
      return;
    }
    setVote(vote + 1);
  };

  const handleUnvote = () => {
    if (vote == 0) {
      alert("You can't unvote more than 0 times");
      return;
    }
    setVote(vote - 1);
  };

  const boxStyle = {
    backgroundColor: "#F7E6D2",
    borderRadius: "10px",
    border: "2px solid #000000",
    padding: "20px",
    width: "75%",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "16px",
  };

  const contentStyle = {
    textAlign: "left",
  };

  const titleStyle = {
    fontSize: "24px",
  };

  const subtitleStyle = {
    fontSize: "18px",
  };

  const imgStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "10px",
    objectFit: "cover",
  };

  const voteStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "purple",
    backgroundColor: "green",
    border: "2px solid black",
    padding: "4px",
    borderRadius: "5px",
  };

  return (
    <div style={boxStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>{props.title}</h1>
          <h2 style={subtitleStyle}>{props.subtitle}</h2>
          <p>{props.description}</p>
        </div>
        <img src={props.imgSrc} alt="image" style={imgStyle} />
      </div>

      
      <div style={containerStyle}>
        <Button text="Click to vote" onClick={handleVote} />
        <div style={voteStyle}>
          {vote == 0 ? "MIN" : vote === 10 ? "MAX" : vote}
        </div>
        <Button text="Click to unvote" onClick={handleUnvote} />
      </div>
    </div>
  );
}

function Button(props) {
  const buttonStyle = {
    backgroundColor: "#FFFFFF",
    padding: "10px",
    width: "fit-content",
    borderRadius: "5px",
    border: "1px solid #101010",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default App;