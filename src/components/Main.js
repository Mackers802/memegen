import React from "react";
import Image from "./Image";
import axios from "axios";
import "./Main.css";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      imageUrl: "",
      topText: "",
      bottomText: "",
    };
  }

  async componentDidMount() {
    await this.refresh();
  }

  refresh = async () => {
    let randomIdNum = Math.floor(Math.random() * 99);
    const resp = await axios.get(`https://api.imgflip.com/get_memes`);
    const randomImg = resp.data.data.memes[randomIdNum];
    this.setState(prevState => ({
      ...prevState,
      name: randomImg.name,
      imageUrl: randomImg.url,
      topText: "",
      bottomText: "",
    }));
  };

  handleChange = e => {
    if (!this.props.selected) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    } else this.props.handleChange(e);
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.selected && !this.props.selected) {
      await this.refresh();
    }
  }

  render() {
    const imageProps = this.props.selected ? this.props.selected : this.state;

    return (
      <div className="Main">
        <div>
          <Image {...imageProps} handleChange={this.handleChange} />

          <button className="refresh" onClick={this.refresh}>
            Refresh
          </button>
          <button
            className="save"
            onClick={() => this.props.saveMeme(this.state)}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default Main;
