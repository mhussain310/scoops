import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { removeNotification } from "../../actions";

import "./Notification.css";

const STYLES = ["success", "error"];

const Notification = ({
  showNotification,
  message,
  notificationStyle,
  removeNotification,
}) => {
  const checkNotificationStyle = STYLES.includes(notificationStyle)
    ? notificationStyle
    : STYLES[0];

  const checkIconStyle =
    checkNotificationStyle === STYLES[0] ? (
      <svg
        className="notification__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
      >
        <g>
          <path
            fillRule="evenodd"
            d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
          />
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
        </g>
      </svg>
    ) : (
      <svg
        className="notification__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
      >
        <path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7zm0-1C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8z" />
        <path d="M12.2 10.8L9.4 8l2.8-2.8l-1.4-1.4L8 6.6L5.2 3.8L3.8 5.2L6.6 8l-2.8 2.8l1.4 1.4L8 9.4l2.8 2.8z" />
      </svg>
    );

  const hideNotification = () =>
    notiRef.current.classList.add("notification--hidden");

  const notiRef = useRef();

  useEffect(() => {
    let notiTimeout;

    hideNotification();

    if (showNotification) {
      notiRef.current.classList.remove("notification--hidden");

      notiTimeout = setTimeout(() => {
        removeNotification();
        hideNotification();
      }, 3000);
    }

    return () => clearTimeout(notiTimeout);
  });

  return (
    <div ref={notiRef} className="notification notification--hidden">
      <div
        className={`notification__wrapper notification__wrapper--${checkNotificationStyle}`}
        onClick={hideNotification}
      >
        {checkIconStyle}
        <span className="notification__text">{message}</span>
      </div>
    </div>
  );
};

const mapStateToProps = ({ notification }) => {
  return {
    showNotification: notification.showNotification,
    notificationStyle: notification.notificationStyle,
    message: notification.message,
  };
};

export default connect(mapStateToProps, { removeNotification })(Notification);
