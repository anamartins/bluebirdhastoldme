import React from "react";
import Gallery from "../gallery/gallery";
import twitterLogo from "./img/Twitter_Logo_Blue.png";
import "./style.scss";

function Tweet({ created_at, text, user, id_str, extended_entities }) {
  return (
    <div className="tweet">
      <div className="tweet-up">
        <div className="user-photo">
          <img src={user.profile_image_url_https} />
        </div>
        <div className="tweet-data">
          <div className="user-name">
            <span>{user.name}</span>

            <span>
              {" "}
              ● @
              <a href={`https://twitter.com/${user.screen_name}`}>
                {user.screen_name}
              </a>
            </span>
          </div>
          <p>{text}</p>

          <Gallery media={extended_entities.media} />

          <p className="tweet-time">
            {created_at.substr(8, 2)} {created_at.substr(4, 3)}{" "}
            {created_at.substr(-4)} {created_at.substr(11, 5)}
          </p>

          <div className="see-on-twitter">
            <a
              href={`https://twitter.com/${user.screen_name}/status/${id_str}`}
              target="_blank"
            >
              <img src={twitterLogo} /> <span>See on Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
