import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/leaf.png";
import "./style.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY !== 0 && !this.state.scroll) {
      this.setState({ scroll: true });
    } else if (window.scrollY === 0 && this.state.scroll) {
      this.setState({ scroll: false });
    }
  }

  render() {
    return (
      <div className={this.state.scroll ? "header fold" : "header unfold"}>
        <div className="name">
          <img src={logo} />
          <h1>
            <Link to="/">Blue Bird Has Told Me</Link>
          </h1>
        </div>
        <div className="button">
          <Link to="/about">
            <button type="button">?</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
