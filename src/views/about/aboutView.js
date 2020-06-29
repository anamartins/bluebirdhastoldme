import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import "./style.scss";

class AboutView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="about-content">
          <h2 className="about">Who are you?</h2>
          <p>
            Hello! My name is Ana. I'm Brazilian, but I've been living in
            Amsterdam. I'm learning programming - being more specific, I'm
            studying React/Redux. I've decided to build this website to practice
            it. You can see my{" "}
            <a href="https://www.linkedin.com/in/anacmartins/" target="_blank">
              Linkedin{" "}
            </a>
            and my{" "}
            <a href="https://github.com/anamartins" target="_blank">
              Github
            </a>
            . This project is there, too!
          </p>

          <h2 className="about">What is Animal Crossing?</h2>
          <p>
            Animal Crossing is a Nintendo game. The latest version is called{" "}
            <a
              href="https://www.nintendo.com/games/detail/animal-crossing-new-horizons-switch/"
              target="_blank"
            >
              {" "}
              New Horizons
            </a>
            , and I'm totally obsessed with it. In this game, you travel to a
            desert island and you can invite some anthropomorphized animals to
            live there with you; in other words, they are pretty cute creatures
            which talk, fish, sing, practice yoga and shop just like humans.
            They have names, birthdays, personalities and they are 391. It is a
            pretty fun game, I totally recommend it.
          </p>

          <h2 className="about">What does this website do?</h2>
          <p>
            Here, I'm listing all those villagers and what people are saying
            about them on Twitter, once we can take photos and post them on
            Twitter through Switch console very easily. It's kinda funny see all
            the photos and videos in other islands. I only show here what people
            are posting on Twitter, through simple search.
          </p>

          <h2 className="about">A blue bird what?</h2>
          <p>
            In Portuguese, when you want to say that someone told you something
            -like 'rumour has it' -, you can say 'a little bird has told me'.
            Well, Twitter is the blue bird telling us lots of things about all
            the villagers in this case. It is important to say that{" "}
            <b>
              Blue Bird Has Told Me is a fan site and is not affiliated with
              Nintendo. Animal Crossing and related media are trademarks of
              Nintendo.
            </b>
          </p>

          <h2 className="about">Some credits</h2>
          <p>
            I'm using icons I've found on{" "}
            <a href="https://thenounproject.com/" target="_blank">
              The Noun Project
            </a>
            . I've Pro Downloaded all of them, to express my gratitude to all
            those talented designers.
          </p>
          <ul>
            <li>
              Sun by{" "}
              <a href="https://thenounproject.com/solomakhin/" target="_blank">
                Vadim Solomakhin
              </a>
            </li>
            <li>
              Birthday Cake by{" "}
              <a href="https://thenounproject.com/iconpai19/" target="_blank">
                IconPai
              </a>
            </li>
            <li>
              Smile by{" "}
              <a href="https://thenounproject.com/acondiff/" target="_blank">
                Austin Condiff
              </a>
            </li>
            <li>
              Heart by{" "}
              <a href="https://thenounproject.com/FafiAC/" target="_blank">
                Fabiana Antonioli
              </a>
            </li>
            <li>
              Message in a Bottle and Ocean by{" "}
              <a
                href="https://thenounproject.com/andreluizgollo/"
                target="_blank"
              >
                André Luiz Gollo
              </a>
            </li>
            <li>
              Leaf by{" "}
              <a href="https://thenounproject.com/Ilhamije/" target="_blank">
                Iham Juliandi
              </a>
            </li>
          </ul>

          <p>
            I've got villagers icons and photos on{" "}
            <a href="https://tinyurl.com/acnh-sheet" target="_blank">
              Animal Crossing: New Horizons Data Spreadhseet
            </a>
            . If you want to say thank you to them, follow me and{" "}
            <a href="https://acnhcdn.com/" target="_blank">
              donate{" "}
            </a>
            some coins (real life ones, not bells!).
          </p>
        </div>
      </div>
    );
  }
}

export default AboutView;
