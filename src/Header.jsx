import { Component } from "react";
import "./Header.css";
class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <h1
          id="title"
          className="text-center"
          style={{ color: "#3e207c", fontFamily: "cursive" }}
        >
          <abbr title="Kisii University Computing Students Association">
            KUCSA{" "}
          </abbr>
          Space
        </h1>
        <div
          id="logo"
          style={{
            width: 100,
            height: 100,
            border: "1px solid #3e207c",
            display: "block",
            margin: "auto",
            borderRadius: "50%",
          }}
        ></div>
        <q>
          Kisii University Computing Students Association is exploring the tech
          potential of its members to introduce plans and programs that are
          aimed at exposing our members to the job market and trends, a voice to
          the surrounding society and a direct engagements professionally across
          Africa and global society that leads to future career growth and
          employability.
        </q>
        <h1 className="keys">We:</h1>
        <ul>
          <li>Connect members with alumni for professional networking.</li>
          <li>
            Broaden perspectives on global tech challenges by sharing
            international tech insights.
          </li>
          <li>Bring diverse tech professionals to engage with our members.</li>
          <li>Create networking spaces for collaborative global projects.</li>
          <li>
            Establish a platform for sharing and rapidly implementing innovative
            ideas worldwide.
          </li>
          <li>
            Facilitate a hub for employers, innovators, investors, and mentors
            to support and advise on new ideas.
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
