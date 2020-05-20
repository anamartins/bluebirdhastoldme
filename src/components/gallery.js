import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.showGalleryPhoto = this.showGalleryPhoto.bind(this);

    this.state = {
      index: 0,
    };
  }

  showGalleryPhoto(direction) {
    this.setState({ index: this.state.index + direction });
  }

  render() {
    return (
      <div className="gallery">
        {this.props.media.length > 1 ? (
          <div
            className={
              this.state.index === 0
                ? "gallery-arrow left dis"
                : "gallery-arrow left"
            }
            disabled={this.state.index === 0}
          >
            {" "}
            <button type="button" onClick={() => this.showGalleryPhoto(-1)}>
              {" < "}
            </button>
          </div>
        ) : (
          ""
        )}
        <div className="gallery-wrapper">
          {this.props.media.map((item, index) => (
            <div
              className={index !== this.state.index ? "media hid" : "media"}
              key={item.id}
            >
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
        </div>
        {this.props.media.length > 1 ? (
          <div
            className={
              this.state.index === this.props.media.length - 1
                ? "gallery-arrow rigth dis"
                : "gallery-arrow right"
            }
            disabled={this.state.index === this.props.media.length - 1}
          >
            <button type="button" onClick={() => this.showGalleryPhoto(1)}>
              {" > "}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

Gallery.propTypes = {
  media: PropTypes.array,
};

export default Gallery;
