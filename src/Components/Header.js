import React, { useState } from "react";
import { Link } from "react-router-dom";

function Notification() {
  return (
    <div className="notification__panel__content__entry">
      <div className="notification__panel__content__entry__heading">
        Lorem ipsum dolor sit amet.
      </div>
      <div className="notification__panel__content__entry__info">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid earum
        saepe reiciendis sed enim repellat nisi provident in eligendi at!
      </div>
    </div>
  );
}

function NotificationPanel() {
  return (
    <div className="notification__panel">
      <div className="notification__panel__header">
        <div className="notification__panel__header__heading">
          Notifications
        </div>
        <button className="notification__panel__header__btn">Clear All</button>
      </div>
      <div className="notification__panel__content">
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </div>
    </div>
  );
}

export default function Header() {
  const [notificationOpen, setNotificationOpen] = useState(false);
  return (
    <div className="header__container">
      <Link
        to="/dashboard"
        className="header__container__logo"
        onClick={() => {
          document.getElementById(
            "sidebar__container__content__entry__input__1"
          ).checked = true;
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="202.265"
          height="53.088"
          viewBox="0 0 202.265 53.088"
        >
          <g
            id="Group_489"
            data-name="Group 489"
            transform="translate(1422.524 -1010.94)"
          >
            <text
              id="PEERVEST"
              transform="translate(-1352.259 1037.94)"
              fill="#0a264e"
              font-size="28"
              font-family="CenturyGothic, Century Gothic"
            >
              <tspan x="0" y="0">
                PEERVEST
              </tspan>
            </text>
            <text
              id="GLOBAL"
              transform="translate(-1352.726 1056.94)"
              fill="#0a264e"
              font-size="16"
              font-family="CenturyGothic, Century Gothic"
            >
              <tspan x="0" y="0">
                GLOBAL
              </tspan>
            </text>
            <g
              id="Group_3"
              data-name="Group 3"
              transform="translate(-1422.524 1012.081)"
            >
              <g id="Group_2" data-name="Group 2">
                <g
                  id="Group_1"
                  data-name="Group 1"
                  transform="translate(0 0.014)"
                >
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M-1393.558,1025.96a1.2,1.2,0,0,0,1.035-1.8c-1.4-2.437-2.68-4.667-4.013-6.864a1.817,1.817,0,0,0-1.333-.707c-7.946-.038-15.891-.021-23.837-.009a4.424,4.424,0,0,0-.818.23l29.485,51.091a1.2,1.2,0,0,0,2.073,0c1.423-2.449,2.783-4.775,4.044-7.153.212-.4-.228-1.261-.542-1.809q-8.959-15.6-17.963-31.184l-.009-.016a1.2,1.2,0,0,1,1.04-1.786Z"
                    transform="translate(1422.524 -1016.57)"
                    fill="#d39844"
                  />
                </g>
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M-1351.485,1018.248a1.128,1.128,0,0,0-.972-1.69c-2.939-.01-5.647-.029-8.35.068-.451.016-.97.835-1.289,1.382-3.558,6.108-7.081,12.236-10.618,18.355l-.008.014a1.124,1.124,0,0,1-1.936,0c-.988-1.662-1.944-3.252-2.79-4.9a3.036,3.036,0,0,0-3.276-1.977c-2.16.136-4.332.087-6.681.06a1.128,1.128,0,0,0-.986,1.691l13.728,23.778a1.127,1.127,0,0,0,1.951,0Z"
                  transform="translate(1411.714 -1016.55)"
                  fill="#0a264e"
                />
              </g>
            </g>
          </g>
        </svg>
      </Link>
      <button
        className="header__container__btn"
        onClick={() => {
          notificationOpen
            ? setNotificationOpen(false)
            : setNotificationOpen(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15.158"
          height="18.972"
          viewBox="0 0 15.158 18.972"
        >
          <g
            id="Icon_ionic-ios-notifications-outline"
            data-name="Icon ionic-ios-notifications-outline"
            transform="translate(-6.775 -3.93)"
          >
            <path
              id="Path_12011"
              data-name="Path 12011"
              d="M18.524,28.336a.614.614,0,0,0-.6.484,1.188,1.188,0,0,1-.237.517.9.9,0,0,1-.763.28.911.911,0,0,1-.763-.28,1.188,1.188,0,0,1-.237-.517.614.614,0,0,0-.6-.484h0a.618.618,0,0,0-.6.754,2.119,2.119,0,0,0,2.2,1.759,2.115,2.115,0,0,0,2.2-1.759.621.621,0,0,0-.6-.754Z"
              transform="translate(-2.581 -7.947)"
              fill="#0A2751"
            />
            <path
              id="Path_12012"
              data-name="Path 12012"
              d="M21.742,17.98c-.73-.963-2.167-1.527-2.167-5.837,0-4.424-1.954-6.2-3.774-6.629-.171-.043-.294-.1-.294-.28V5.1A1.163,1.163,0,0,0,14.369,3.93H14.34A1.163,1.163,0,0,0,13.2,5.1v.138c0,.175-.123.237-.294.28-1.826.432-3.774,2.2-3.774,6.629,0,4.31-1.437,4.87-2.167,5.837a.941.941,0,0,0,.754,1.508H21A.942.942,0,0,0,21.742,17.98Zm-1.849.275H8.835a.208.208,0,0,1-.156-.346,5.745,5.745,0,0,0,1-1.584,10.746,10.746,0,0,0,.678-4.182,7.272,7.272,0,0,1,.991-4.116,3.043,3.043,0,0,1,1.835-1.309,1.662,1.662,0,0,0,.882-.5.375.375,0,0,1,.564-.009,1.718,1.718,0,0,0,.891.507,3.043,3.043,0,0,1,1.835,1.309,7.272,7.272,0,0,1,.991,4.116,10.746,10.746,0,0,0,.678,4.182,5.81,5.81,0,0,0,1.019,1.607A.2.2,0,0,1,19.893,18.256Z"
              fill="#0A2751"
            />
          </g>
        </svg>
        {notificationOpen ? <NotificationPanel /> : null}
      </button>
    </div>
  );
}
