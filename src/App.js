import React from "react";
import { Header, Main, Sidebar } from "./components";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imageVault: [],
      selected: null,
    };
  }

  handleChangeSelected = ({ target: { name, value } }) => {
    this.setState(prevState => ({
      ...prevState,
      selected: {
        ...prevState.selected,
        [name]: value,
      },
    }));
  };

  saveMeme = meme => {
    const imageVault = [...this.state.imageVault];
    if (this.state.selected) {
      imageVault.splice(this.state.selected.i, 1, this.state.selected);
      this.setState({ selected: null });
    } else {
      imageVault.push(meme);
    }
    this.setState({ imageVault });
  };

  delMeme = i => {
    const imageVault = [...this.state.imageVault];
    imageVault.splice(i, 1);
    this.setState({ imageVault });
  };

  editMeme = i => {
    const selected = { ...this.state.imageVault[i] };
    selected.i = i;
    this.setState({ selected });
  };

  render() {
    return (
      <>
        <Header />
        <Main
          saveMeme={this.saveMeme}
          selected={this.state.selected}
          handleChange={this.handleChangeSelected}
        />
        <Sidebar
          imageVault={this.state.imageVault}
          delMeme={this.delMeme}
          editMeme={this.editMeme}
        />
      </>
    );
  }
}

export default App;
