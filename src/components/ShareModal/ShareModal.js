import React, { useRef } from "react";
import { connect } from "react-redux";
import { toggleShareModal, addToClipboard } from "../../actions";
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
import Overlay from "../Overlay/Overlay";

import "./ShareModal.css";

const ShareModal = ({
  showModal,
  article,
  toggleShareModal,
  addToClipboard,
}) => {
  const inputRef = useRef();

  const copyToClipboard = () => {
    inputRef.current.select();
    addToClipboard();
  };

  return (
    <>
      <div className={`modal ${showModal ? "modal--active" : ""}`}>
        <div className="modal__header">
          <h1 className="modal__header-title">Share</h1>
          <svg
            className="modal__header-close"
            onClick={() => toggleShareModal(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path d="M12 12l7 7" strokeWidth="3" strokeLinecap="round" />
              <path d="M12 12L5 5" strokeWidth="3" strokeLinecap="round" />
              <path d="M12 12l-7 7" strokeWidth="3" strokeLinecap="round" />
              <path d="M12 12l7-7" strokeWidth="3" strokeLinecap="round" />
            </g>
          </svg>
        </div>
        <div className="modal__content">
          <p className="modal__text">Share this link via</p>
          <ul className="socials">
            <li className="socials__item">
              <FacebookShareButton url={article.url} quote={article.title}>
                <FacebookIcon size={"40px"} round />
              </FacebookShareButton>
            </li>
            <li className="socials__item">
              <TwitterShareButton url={article.url} title={article.title}>
                <TwitterIcon size={"40px"} round />
              </TwitterShareButton>
            </li>
            <li className="socials__item">
              <WhatsappShareButton url={article.url} title={article.title}>
                <WhatsappIcon size={"40px"} round />
              </WhatsappShareButton>
            </li>
            <li className="socials__item">
              <EmailShareButton
                url={article.url}
                subject={article.title}
                body={article.description}
              >
                <EmailIcon size={"40px"} round />
              </EmailShareButton>
            </li>
          </ul>
          <p className="modal__text">Click to copy link</p>
          <div className="clipboard">
            <input
              ref={inputRef}
              type="text"
              readOnly
              className="clipboard__field"
              value={article.url}
              onClick={copyToClipboard}
            />
            <button className="clipboard__copy" onClick={copyToClipboard}>
              Copy
            </button>
          </div>
        </div>
      </div>
      <Overlay
        show={showModal}
        handleClick={() => toggleShareModal(false)}
        modal
      />
    </>
  );
};

const mapStateToProps = ({ share }) => {
  return { showModal: share.showModal, article: share.article };
};

export default connect(mapStateToProps, {
  toggleShareModal,
  addToClipboard,
})(ShareModal);
