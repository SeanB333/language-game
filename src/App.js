
import React, { Component } from 'react';
import LanguageCard from "./components/languageCard";
import Wrapper from "./components/wrapper";
import Title from "./components/title";
import Score from "./components/score";
import languages from "./languages.json";

class App extends Component {

  state = {
    languages,
    clickedChar: [],
    score: 0
  };

  checkWin = () => {
    if (this.state.score === 12) {
      alert("You won! Play again?");
      this.setState({
        clickedChar: [],
        score: 0
      })
    };
  };

  shuffle = id => {
    this.setState({
      languages: this.state.languages.sort(function (a, b) {
        return 0.5 - Math.random();
      }),
      clickedChar: this.state.clickedChar.concat(id),
      score: this.state.score + 1
    });

    if (this.state.clickedChar.includes(id)) {
      alert("You lose! Play again?");
      this.setState({
        clickedChar: [],
        score: 0
      })
    };

  };

  render() {
    this.checkWin();
    return (
      <Wrapper>
        <Score>{this.state.score}</Score>
        <Title>Language Game</Title>
        {this.state.languages.map(languages => (
          <LanguageCard 
            id={languages.id}
            key={languages.id}
            name={languages.name}
            image={languages.image}
            shuffle={this.shuffle}
          />
        ))}
      </Wrapper>
    );
  };

};

export default App;