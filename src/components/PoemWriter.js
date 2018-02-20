import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      display: 'block',
    };
  }

  handleChange = (event) => {

    this.setState({
      value: event.target.value
    })

    // split on new line and trim the empty or whitespace
    // more on .trim here: https://goo.gl/A8wU3x
    const poem = event.target.value.split('\n').filter(entry => entry.trim() !== '');
    const poemLines = poem.length
    console.log(poemLines) // works

    let lineOneLength = poem[0] ? poem[0].split(" ").length : 0
    let lineTwoLength = poem[1] ? poem[1].split(" ").length : 0
    let lineThreeLength = poem[2] ? poem[2].split(" ").length : 0
    console.log(lineOneLength) // works


    if(poemLines === 3 && lineOneLength === 5 && lineTwoLength === 3 && lineThreeLength === 5){
      this.setState({
        display: 'none',
      })
    }

  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div id="poem-validation-error" style={{ color: "red", display: this.state.display }}>
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
