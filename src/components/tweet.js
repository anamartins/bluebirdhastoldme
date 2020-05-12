import React from "react";
import "./style.scss";

function Tweet({ created_at, text, user, extended_entities }) {
  return (
    <div className="tweet">
      <p>{created_at}</p>
      <p>
        <img src={user.profile_image_url} />
      </p>
      <p>
        {user.name}
        <span> @{user.screen_name}</span>
      </p>
      <p>{text}</p>
      <p>
        {extended_entities &&
          extended_entities.media.map((item, index) => (
            <div className="media">
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
                <img key={item.id} src={item.media_url} />
              )}
            </div>
          ))}
      </p>
    </div>
  );
}

export default Tweet;
