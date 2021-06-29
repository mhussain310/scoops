import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

import "./Socials.css";

const MARGIN_STYLES = ["socials--margin-modal", "socials--margin-article"];

const Socials = ({ url, title, description, buttonSize, marginStyle }) => {
  const checkMarginStyle = MARGIN_STYLES.includes(marginStyle)
    ? marginStyle
    : MARGIN_STYLES[0];

  return (
    <ul className={`socials ${checkMarginStyle}`}>
      <li className="socials__item">
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={buttonSize} round />
        </FacebookShareButton>
      </li>
      <li className="socials__item">
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={buttonSize} round />
        </TwitterShareButton>
      </li>
      <li className="socials__item">
        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon size={buttonSize} round />
        </WhatsappShareButton>
      </li>
      <li className="socials__item">
        <EmailShareButton url={url} subject={title} body={description}>
          <EmailIcon size={buttonSize} round />
        </EmailShareButton>
      </li>
    </ul>
  );
};

export default Socials;
