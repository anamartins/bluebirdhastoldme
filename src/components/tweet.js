import React from "react";
import "./style.scss";

function Tweet({
  created_at,
  text,
  user,
  id_str,
  entities,
  urls,
  extended_entities,
}) {
  return (
    <div className="tweet">
      <div className="user-photo">
        <img src={user.profile_image_url} />
      </div>
      <div className="tweet-data">
        <div className="user-name">
          <span>{user.name}</span>
          <span> @{user.screen_name}</span>
        </div>
        <p>{text}</p>

        {extended_entities &&
          extended_entities.media.map((item, index) => (
            <div className="media" key={item.id}>
              {item.type === "video" ? (
                <video controls>
                  <source
                    src={
                      item.video_info.variants.find(
                        (element) => element.content_type === "video/mp4"
                      ).url
                    }
                  />
                </video>
              ) : (
                <img src={item.media_url} />
              )}
            </div>
          ))}
        <p className="tweet-time">
          {created_at.substr(8, 2)} {created_at.substr(4, 3)}{" "}
          {created_at.substr(-4)} {created_at.substr(11, 5)}
        </p>
        <p>"id_str", {id_str}</p>
        <p>
          https://twitter.com/{user.screen_name}/status/{id_str}
        </p>
        <p>
          <a
            href={`https://twitter.com/${user.screen_name}/status/${id_str}`}
            target="_blank"
          >
            See on Twitter
          </a>
        </p>
      </div>
    </div>
  );
}

export default Tweet;
