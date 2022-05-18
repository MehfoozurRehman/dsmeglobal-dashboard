import React from "react";
import { useNavigate } from "react-router-dom";

function NavLink({ title, svg, path, defaultChecked, id, onClick }) {
  const navigate = useNavigate();
  return (
    <div className="sidebar__container__content__entry">
      <input
        defaultChecked={defaultChecked}
        type="radio"
        name="sidebar__container__content__entry__input"
        id={id ? id : "sidebar__container__content__entry__input"}
        className="sidebar__container__content__entry__input"
        checked={window.location.pathname === path}
        onChange={() => {
          navigate(path);
        }}
        onClick={onClick}
      />
      <div className="nav__bar__content__link__content">
        <div className="nav__bar__content__link__content__svg__wrapper">
          {svg}
        </div>
        <span>{title}</span>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar__container">
      <div className="sidebar__container__links">
        <NavLink
          title="Dashboard"
          path="/dashboard"
          defaultChecked
          id="sidebar__container__content__entry__input__1"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30.3"
              height="22.3"
              viewBox="0 0 30.3 22.3"
            >
              <g id="dashboard" transform="translate(0.15 0.15)">
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1497.306)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="0.3"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1497.306)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="0.3"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1509.306)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="0.3"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1509.306)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="0.3"
                />
              </g>
            </svg>
          }
        />
        <NavLink
          title="Our Services"
          path="/dashboard/services"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.768"
              height="21.771"
              viewBox="0 0 21.768 21.771"
            >
              <g
                id="Group_1009"
                data-name="Group 1009"
                transform="translate(0)"
              >
                <path
                  id="Path_12013"
                  data-name="Path 12013"
                  d="M-387.568,170.072a10.3,10.3,0,0,0-.976-3.193,10.836,10.836,0,0,0-2.976-3.739,10.769,10.769,0,0,0-3.773-1.976,8.871,8.871,0,0,0-2.273-.388,19.155,19.155,0,0,0-2.013.017,10.032,10.032,0,0,0-3.593,1.025,10.826,10.826,0,0,0-3.723,2.963,10.769,10.769,0,0,0-1.98,3.771,8.81,8.81,0,0,0-.391,2.293c-.015.686-.03,1.372.023,2.055a9.543,9.543,0,0,0,.543,2.394,10.806,10.806,0,0,0,2.562,4.083,10.572,10.572,0,0,0,1.991,1.579,11.043,11.043,0,0,0,3.842,1.472c.355.065.715.052,1.07.1h1.614c.271-.041.548-.018.819-.054a10.321,10.321,0,0,0,2.036-.5,10.746,10.746,0,0,0,4.634-3.144,10.815,10.815,0,0,0,2.524-5.3c.061-.341.045-.687.1-1.028v-1.657C-387.554,170.591-387.534,170.33-387.568,170.072ZM-398.4,180.826a9.175,9.175,0,0,1-9.156-9.176,9.17,9.17,0,0,1,9.19-9.164,9.182,9.182,0,0,1,9.157,9.176A9.176,9.176,0,0,1-398.4,180.826Z"
                  transform="translate(409.28 -160.757)"
                  fill="#fff"
                />
                <path
                  id="Path_12014"
                  data-name="Path 12014"
                  d="M-392.383,178.271q0-.5,0-1a.834.834,0,0,1,.8-.918,2.306,2.306,0,0,0,.853-.216,1.7,1.7,0,0,0,.844-1.885,1.7,1.7,0,0,0-1.7-1.286,1.69,1.69,0,0,0-1.638,1.692.86.86,0,0,1-.877.847.848.848,0,0,1-.827-.913,3.4,3.4,0,0,1,3.112-3.324A3.407,3.407,0,0,1-388.191,174a3.411,3.411,0,0,1-2.319,3.891c-.141.044-.183.1-.179.245.011.4.007.793,0,1.189a.856.856,0,0,1-.846.854.857.857,0,0,1-.851-.85C-392.386,178.979-392.383,178.625-392.383,178.271Z"
                  transform="translate(402.428 -165.773)"
                  fill="#fff"
                />
                <path
                  id="Path_12015"
                  data-name="Path 12015"
                  d="M-390.46,190.6a1.074,1.074,0,0,1,1.066-1.065,1.074,1.074,0,0,1,1.058,1.073,1.074,1.074,0,0,1-1.066,1.065A1.073,1.073,0,0,1-390.46,190.6Z"
                  transform="translate(400.292 -174.499)"
                  fill="#fff"
                />
              </g>
            </svg>
          }
        />
        <NavLink
          title="Our Projects"
          path="/dashboard/projects"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.768"
              height="21.771"
              viewBox="0 0 21.768 21.771"
            >
              <g
                id="Group_1009"
                data-name="Group 1009"
                transform="translate(0)"
              >
                <path
                  id="Path_12013"
                  data-name="Path 12013"
                  d="M-387.568,170.072a10.3,10.3,0,0,0-.976-3.193,10.836,10.836,0,0,0-2.976-3.739,10.769,10.769,0,0,0-3.773-1.976,8.871,8.871,0,0,0-2.273-.388,19.155,19.155,0,0,0-2.013.017,10.032,10.032,0,0,0-3.593,1.025,10.826,10.826,0,0,0-3.723,2.963,10.769,10.769,0,0,0-1.98,3.771,8.81,8.81,0,0,0-.391,2.293c-.015.686-.03,1.372.023,2.055a9.543,9.543,0,0,0,.543,2.394,10.806,10.806,0,0,0,2.562,4.083,10.572,10.572,0,0,0,1.991,1.579,11.043,11.043,0,0,0,3.842,1.472c.355.065.715.052,1.07.1h1.614c.271-.041.548-.018.819-.054a10.321,10.321,0,0,0,2.036-.5,10.746,10.746,0,0,0,4.634-3.144,10.815,10.815,0,0,0,2.524-5.3c.061-.341.045-.687.1-1.028v-1.657C-387.554,170.591-387.534,170.33-387.568,170.072ZM-398.4,180.826a9.175,9.175,0,0,1-9.156-9.176,9.17,9.17,0,0,1,9.19-9.164,9.182,9.182,0,0,1,9.157,9.176A9.176,9.176,0,0,1-398.4,180.826Z"
                  transform="translate(409.28 -160.757)"
                  fill="#fff"
                />
                <path
                  id="Path_12014"
                  data-name="Path 12014"
                  d="M-392.383,178.271q0-.5,0-1a.834.834,0,0,1,.8-.918,2.306,2.306,0,0,0,.853-.216,1.7,1.7,0,0,0,.844-1.885,1.7,1.7,0,0,0-1.7-1.286,1.69,1.69,0,0,0-1.638,1.692.86.86,0,0,1-.877.847.848.848,0,0,1-.827-.913,3.4,3.4,0,0,1,3.112-3.324A3.407,3.407,0,0,1-388.191,174a3.411,3.411,0,0,1-2.319,3.891c-.141.044-.183.1-.179.245.011.4.007.793,0,1.189a.856.856,0,0,1-.846.854.857.857,0,0,1-.851-.85C-392.386,178.979-392.383,178.625-392.383,178.271Z"
                  transform="translate(402.428 -165.773)"
                  fill="#fff"
                />
                <path
                  id="Path_12015"
                  data-name="Path 12015"
                  d="M-390.46,190.6a1.074,1.074,0,0,1,1.066-1.065,1.074,1.074,0,0,1,1.058,1.073,1.074,1.074,0,0,1-1.066,1.065A1.073,1.073,0,0,1-390.46,190.6Z"
                  transform="translate(400.292 -174.499)"
                  fill="#fff"
                />
              </g>
            </svg>
          }
        />
        <NavLink
          title="Our Work"
          path="/dashboard/work"
          svg={
            <svg
              id="Group_1012"
              data-name="Group 1012"
              xmlns="http://www.w3.org/2000/svg"
              width="24.74"
              height="21.549"
              viewBox="0 0 24.74 21.549"
            >
              <path
                id="Path_12018"
                data-name="Path 12018"
                d="M-248.886,183.02a3.274,3.274,0,0,0-2.683-3.122,10.44,10.44,0,0,0-1.711-.044,3.19,3.19,0,0,0-2.873,1.674c-.1.165-.134.2-.285.046a5.721,5.721,0,0,0-3.433-1.682,17.874,17.874,0,0,0-2-.04,5.722,5.722,0,0,0-4.221,1.743c-.119.118-.155.124-.242-.032a3.2,3.2,0,0,0-2.372-1.672,10.614,10.614,0,0,0-1.663-.038,3.252,3.252,0,0,0-3.108,2.3c-.051.165-.1.333-.143.5v6.04c.015.017.037.03.043.049a1.406,1.406,0,0,0,1.453,1.062c1.385,0,2.77,0,4.154,0,.146,0,.2.038.231.185a1.671,1.671,0,0,0,1.733,1.365h9.541a1.658,1.658,0,0,0,1.7-1.347c.038-.17.1-.2.266-.2q2.09.011,4.179,0a1.452,1.452,0,0,0,1.441-1.444Q-248.882,185.689-248.886,183.02Zm-18.624.924a6.146,6.146,0,0,0-.274,2.139c0,.692,0,1.384.01,2.076,0,.155-.036.2-.2.2q-2-.01-4.008,0c-.182,0-.2-.063-.2-.219.007-.845,0-1.69,0-2.535,0-.8,0-1.593,0-2.39a1.83,1.83,0,0,1,1.91-1.912,7.88,7.88,0,0,1,1.348.035,1.81,1.81,0,0,1,1.523,1.734A2.225,2.225,0,0,1-267.51,183.944Zm11.328,5.616c0,.263-.088.339-.377.34h-9.368c-.334,0-.4-.069-.4-.415q0-1.847,0-3.694a4.333,4.333,0,0,1,3.693-4.413,7.12,7.12,0,0,1,3.6.211,4.373,4.373,0,0,1,2.85,4.036C-256.167,186.937-256.18,188.248-256.182,189.56Zm5.652-1.2q-2.015-.007-4.03,0c-.166,0-.175-.065-.174-.2q.006-1.292,0-2.582a6.4,6.4,0,0,0-.29-1.749,1.861,1.861,0,0,1,1.591-2.517,6.6,6.6,0,0,1,1.564.024,1.8,1.8,0,0,1,1.532,1.8c.009.828,0,1.658,0,2.486,0,.845,0,1.69,0,2.534C-250.329,188.313-250.372,188.356-250.53,188.356Z"
                transform="translate(273.623 -169.8)"
                fill="#fff"
              />
              <path
                id="Path_12019"
                data-name="Path 12019"
                d="M-254.646,161.723a4.2,4.2,0,0,0-4.242,4.177,4.194,4.194,0,0,0,4.19,4.23,4.2,4.2,0,0,0,4.217-4.154A4.2,4.2,0,0,0-254.646,161.723Zm-.022,6.957a2.781,2.781,0,0,1-2.77-2.756,2.779,2.779,0,0,1,2.75-2.752,2.78,2.78,0,0,1,2.758,2.743A2.78,2.78,0,0,1-254.668,168.68Z"
                transform="translate(267.053 -161.723)"
                fill="#fff"
              />
              <path
                id="Path_12020"
                data-name="Path 12020"
                d="M-268.758,167.3a2.652,2.652,0,0,0-2.685,2.635,2.652,2.652,0,0,0,2.641,2.68,2.653,2.653,0,0,0,2.673-2.623A2.651,2.651,0,0,0-268.758,167.3Zm-.023,3.865a1.23,1.23,0,0,1-1.213-1.214,1.231,1.231,0,0,1,1.2-1.2,1.229,1.229,0,0,1,1.213,1.214A1.232,1.232,0,0,1-268.78,171.168Z"
                transform="translate(272.651 -164.211)"
                fill="#fff"
              />
              <path
                id="Path_12021"
                data-name="Path 12021"
                d="M-238.092,167.3a2.652,2.652,0,0,0-2.66,2.636,2.652,2.652,0,0,0,2.642,2.679,2.65,2.65,0,0,0,2.673-2.649A2.65,2.65,0,0,0-238.092,167.3Zm-.014,3.865a1.232,1.232,0,0,1-1.2-1.206,1.23,1.23,0,0,1,1.219-1.209,1.23,1.23,0,0,1,1.2,1.206A1.229,1.229,0,0,1-238.105,171.168Z"
                transform="translate(258.967 -164.211)"
                fill="#fff"
              />
            </svg>
          }
        />
        <NavLink
          title="Our Clients"
          path="/dashboard/client"
          svg={
            <svg
              id="Group_1011"
              data-name="Group 1011"
              xmlns="http://www.w3.org/2000/svg"
              width="23.297"
              height="21.227"
              viewBox="0 0 23.297 21.227"
            >
              <path
                id="Path_12017"
                data-name="Path 12017"
                d="M-332.025,163.12a1.393,1.393,0,0,0-.857-1.313,2.109,2.109,0,0,0-.973-.175h-13.627c-.117,0-.224.021-.286-.14a13.342,13.342,0,0,0-.752-1.48,5.572,5.572,0,0,0-1.328-1.71,1.4,1.4,0,0,0-1.538-.32,5.377,5.377,0,0,0-.995.575,7.018,7.018,0,0,0-2.935,6.208,9.944,9.944,0,0,0,1.222,4.4c1,1.859,2.077,3.682,3.18,5.484a10.026,10.026,0,0,0,1.6,1.962,8.016,8.016,0,0,0,5.17,2.471,6.9,6.9,0,0,0,4.166-1.065,1.376,1.376,0,0,0,.678-1.313,2.277,2.277,0,0,0-.113-.627,10.251,10.251,0,0,0-2.279-3.75l-.018-.018a2.215,2.215,0,0,0-2.878-.317c-.273.158-.546.316-.821.471a.944.944,0,0,1-.714.1,1.835,1.835,0,0,1-1.2-.879c-.8-1.377-1.6-2.758-2.4-4.136a1.493,1.493,0,0,1-.208-.573,1.328,1.328,0,0,1,.453-1.425c.316-.212.657-.386,1-.585a.907.907,0,0,0,.36.437q2.562,2.01,5.122,4.021a1.883,1.883,0,0,0,2.588,0q2.311-1.81,4.616-3.627l2.651-2.082v9.142c0,.094,0,.188,0,.282a.385.385,0,0,1-.415.44c-.094.006-.188,0-.282,0h-4.67a2.2,2.2,0,0,0-.231,0,.552.552,0,0,0-.535.6.54.54,0,0,0,.584.517q2.515,0,5.03,0a1.526,1.526,0,0,0,1.637-1.648v-9.393C-332.025,163.479-332.025,163.3-332.025,163.12Zm-17.113.936c-.273.158-.545.318-.819.472a2.208,2.208,0,0,0-1.119,1.844,2.955,2.955,0,0,0,.436,1.833c.8,1.34,1.552,2.7,2.354,4.042a2.727,2.727,0,0,0,2.715,1.426,1.855,1.855,0,0,0,.765-.269c.3-.172.6-.35.908-.523a.94.94,0,0,1,1.243.089,3.589,3.589,0,0,1,.794.865,9.232,9.232,0,0,1,1.369,2.528c.007.025.021.047.027.072.114.488.093.5-.335.768a6.03,6.03,0,0,1-2.508.8,6.922,6.922,0,0,1-4.6-1.634,9.285,9.285,0,0,1-2.052-2.31c-1.1-1.776-2.155-3.577-3.143-5.416a8.807,8.807,0,0,1-1.1-4.443,5.772,5.772,0,0,1,2.437-4.707c.245-.181.525-.315.787-.475a.227.227,0,0,1,.261.032,1.653,1.653,0,0,1,.428.365,9.065,9.065,0,0,1,1.74,3.269C-348.354,163.389-348.5,163.688-349.138,164.057Zm13.507.195-5.4,4.24a.881.881,0,0,1-1.36-.007q-2.536-2-5.075-3.99c-.086-.068-.181-.126-.278-.194a2.012,2.012,0,0,0,.356-1.377c-.025-.221.11-.181.234-.181h13.441C-334.389,163.274-335.01,163.764-335.631,164.251Z"
                transform="translate(355.322 -157.865)"
                fill="#fff"
              />
            </svg>
          }
        />
        <NavLink
          title="Our Blogs"
          path="/dashboard/blogs"
          svg={
            <svg
              id="Group_1011"
              data-name="Group 1011"
              xmlns="http://www.w3.org/2000/svg"
              width="23.297"
              height="21.227"
              viewBox="0 0 23.297 21.227"
            >
              <path
                id="Path_12017"
                data-name="Path 12017"
                d="M-332.025,163.12a1.393,1.393,0,0,0-.857-1.313,2.109,2.109,0,0,0-.973-.175h-13.627c-.117,0-.224.021-.286-.14a13.342,13.342,0,0,0-.752-1.48,5.572,5.572,0,0,0-1.328-1.71,1.4,1.4,0,0,0-1.538-.32,5.377,5.377,0,0,0-.995.575,7.018,7.018,0,0,0-2.935,6.208,9.944,9.944,0,0,0,1.222,4.4c1,1.859,2.077,3.682,3.18,5.484a10.026,10.026,0,0,0,1.6,1.962,8.016,8.016,0,0,0,5.17,2.471,6.9,6.9,0,0,0,4.166-1.065,1.376,1.376,0,0,0,.678-1.313,2.277,2.277,0,0,0-.113-.627,10.251,10.251,0,0,0-2.279-3.75l-.018-.018a2.215,2.215,0,0,0-2.878-.317c-.273.158-.546.316-.821.471a.944.944,0,0,1-.714.1,1.835,1.835,0,0,1-1.2-.879c-.8-1.377-1.6-2.758-2.4-4.136a1.493,1.493,0,0,1-.208-.573,1.328,1.328,0,0,1,.453-1.425c.316-.212.657-.386,1-.585a.907.907,0,0,0,.36.437q2.562,2.01,5.122,4.021a1.883,1.883,0,0,0,2.588,0q2.311-1.81,4.616-3.627l2.651-2.082v9.142c0,.094,0,.188,0,.282a.385.385,0,0,1-.415.44c-.094.006-.188,0-.282,0h-4.67a2.2,2.2,0,0,0-.231,0,.552.552,0,0,0-.535.6.54.54,0,0,0,.584.517q2.515,0,5.03,0a1.526,1.526,0,0,0,1.637-1.648v-9.393C-332.025,163.479-332.025,163.3-332.025,163.12Zm-17.113.936c-.273.158-.545.318-.819.472a2.208,2.208,0,0,0-1.119,1.844,2.955,2.955,0,0,0,.436,1.833c.8,1.34,1.552,2.7,2.354,4.042a2.727,2.727,0,0,0,2.715,1.426,1.855,1.855,0,0,0,.765-.269c.3-.172.6-.35.908-.523a.94.94,0,0,1,1.243.089,3.589,3.589,0,0,1,.794.865,9.232,9.232,0,0,1,1.369,2.528c.007.025.021.047.027.072.114.488.093.5-.335.768a6.03,6.03,0,0,1-2.508.8,6.922,6.922,0,0,1-4.6-1.634,9.285,9.285,0,0,1-2.052-2.31c-1.1-1.776-2.155-3.577-3.143-5.416a8.807,8.807,0,0,1-1.1-4.443,5.772,5.772,0,0,1,2.437-4.707c.245-.181.525-.315.787-.475a.227.227,0,0,1,.261.032,1.653,1.653,0,0,1,.428.365,9.065,9.065,0,0,1,1.74,3.269C-348.354,163.389-348.5,163.688-349.138,164.057Zm13.507.195-5.4,4.24a.881.881,0,0,1-1.36-.007q-2.536-2-5.075-3.99c-.086-.068-.181-.126-.278-.194a2.012,2.012,0,0,0,.356-1.377c-.025-.221.11-.181.234-.181h13.441C-334.389,163.274-335.01,163.764-335.631,164.251Z"
                transform="translate(355.322 -157.865)"
                fill="#fff"
              />
            </svg>
          }
        />
        <NavLink
          title="Our Techonologies"
          path="/dashboard/techonologies"
          svg={
            <svg
              id="Group_1011"
              data-name="Group 1011"
              xmlns="http://www.w3.org/2000/svg"
              width="23.297"
              height="21.227"
              viewBox="0 0 23.297 21.227"
            >
              <path
                id="Path_12017"
                data-name="Path 12017"
                d="M-332.025,163.12a1.393,1.393,0,0,0-.857-1.313,2.109,2.109,0,0,0-.973-.175h-13.627c-.117,0-.224.021-.286-.14a13.342,13.342,0,0,0-.752-1.48,5.572,5.572,0,0,0-1.328-1.71,1.4,1.4,0,0,0-1.538-.32,5.377,5.377,0,0,0-.995.575,7.018,7.018,0,0,0-2.935,6.208,9.944,9.944,0,0,0,1.222,4.4c1,1.859,2.077,3.682,3.18,5.484a10.026,10.026,0,0,0,1.6,1.962,8.016,8.016,0,0,0,5.17,2.471,6.9,6.9,0,0,0,4.166-1.065,1.376,1.376,0,0,0,.678-1.313,2.277,2.277,0,0,0-.113-.627,10.251,10.251,0,0,0-2.279-3.75l-.018-.018a2.215,2.215,0,0,0-2.878-.317c-.273.158-.546.316-.821.471a.944.944,0,0,1-.714.1,1.835,1.835,0,0,1-1.2-.879c-.8-1.377-1.6-2.758-2.4-4.136a1.493,1.493,0,0,1-.208-.573,1.328,1.328,0,0,1,.453-1.425c.316-.212.657-.386,1-.585a.907.907,0,0,0,.36.437q2.562,2.01,5.122,4.021a1.883,1.883,0,0,0,2.588,0q2.311-1.81,4.616-3.627l2.651-2.082v9.142c0,.094,0,.188,0,.282a.385.385,0,0,1-.415.44c-.094.006-.188,0-.282,0h-4.67a2.2,2.2,0,0,0-.231,0,.552.552,0,0,0-.535.6.54.54,0,0,0,.584.517q2.515,0,5.03,0a1.526,1.526,0,0,0,1.637-1.648v-9.393C-332.025,163.479-332.025,163.3-332.025,163.12Zm-17.113.936c-.273.158-.545.318-.819.472a2.208,2.208,0,0,0-1.119,1.844,2.955,2.955,0,0,0,.436,1.833c.8,1.34,1.552,2.7,2.354,4.042a2.727,2.727,0,0,0,2.715,1.426,1.855,1.855,0,0,0,.765-.269c.3-.172.6-.35.908-.523a.94.94,0,0,1,1.243.089,3.589,3.589,0,0,1,.794.865,9.232,9.232,0,0,1,1.369,2.528c.007.025.021.047.027.072.114.488.093.5-.335.768a6.03,6.03,0,0,1-2.508.8,6.922,6.922,0,0,1-4.6-1.634,9.285,9.285,0,0,1-2.052-2.31c-1.1-1.776-2.155-3.577-3.143-5.416a8.807,8.807,0,0,1-1.1-4.443,5.772,5.772,0,0,1,2.437-4.707c.245-.181.525-.315.787-.475a.227.227,0,0,1,.261.032,1.653,1.653,0,0,1,.428.365,9.065,9.065,0,0,1,1.74,3.269C-348.354,163.389-348.5,163.688-349.138,164.057Zm13.507.195-5.4,4.24a.881.881,0,0,1-1.36-.007q-2.536-2-5.075-3.99c-.086-.068-.181-.126-.278-.194a2.012,2.012,0,0,0,.356-1.377c-.025-.221.11-.181.234-.181h13.441C-334.389,163.274-335.01,163.764-335.631,164.251Z"
                transform="translate(355.322 -157.865)"
                fill="#fff"
              />
            </svg>
          }
        />
        <NavLink
          title="Category"
          path="/dashboard/category"
          svg={
            <svg
              id="Group_1011"
              data-name="Group 1011"
              xmlns="http://www.w3.org/2000/svg"
              width="23.297"
              height="21.227"
              viewBox="0 0 23.297 21.227"
            >
              <path
                id="Path_12017"
                data-name="Path 12017"
                d="M-332.025,163.12a1.393,1.393,0,0,0-.857-1.313,2.109,2.109,0,0,0-.973-.175h-13.627c-.117,0-.224.021-.286-.14a13.342,13.342,0,0,0-.752-1.48,5.572,5.572,0,0,0-1.328-1.71,1.4,1.4,0,0,0-1.538-.32,5.377,5.377,0,0,0-.995.575,7.018,7.018,0,0,0-2.935,6.208,9.944,9.944,0,0,0,1.222,4.4c1,1.859,2.077,3.682,3.18,5.484a10.026,10.026,0,0,0,1.6,1.962,8.016,8.016,0,0,0,5.17,2.471,6.9,6.9,0,0,0,4.166-1.065,1.376,1.376,0,0,0,.678-1.313,2.277,2.277,0,0,0-.113-.627,10.251,10.251,0,0,0-2.279-3.75l-.018-.018a2.215,2.215,0,0,0-2.878-.317c-.273.158-.546.316-.821.471a.944.944,0,0,1-.714.1,1.835,1.835,0,0,1-1.2-.879c-.8-1.377-1.6-2.758-2.4-4.136a1.493,1.493,0,0,1-.208-.573,1.328,1.328,0,0,1,.453-1.425c.316-.212.657-.386,1-.585a.907.907,0,0,0,.36.437q2.562,2.01,5.122,4.021a1.883,1.883,0,0,0,2.588,0q2.311-1.81,4.616-3.627l2.651-2.082v9.142c0,.094,0,.188,0,.282a.385.385,0,0,1-.415.44c-.094.006-.188,0-.282,0h-4.67a2.2,2.2,0,0,0-.231,0,.552.552,0,0,0-.535.6.54.54,0,0,0,.584.517q2.515,0,5.03,0a1.526,1.526,0,0,0,1.637-1.648v-9.393C-332.025,163.479-332.025,163.3-332.025,163.12Zm-17.113.936c-.273.158-.545.318-.819.472a2.208,2.208,0,0,0-1.119,1.844,2.955,2.955,0,0,0,.436,1.833c.8,1.34,1.552,2.7,2.354,4.042a2.727,2.727,0,0,0,2.715,1.426,1.855,1.855,0,0,0,.765-.269c.3-.172.6-.35.908-.523a.94.94,0,0,1,1.243.089,3.589,3.589,0,0,1,.794.865,9.232,9.232,0,0,1,1.369,2.528c.007.025.021.047.027.072.114.488.093.5-.335.768a6.03,6.03,0,0,1-2.508.8,6.922,6.922,0,0,1-4.6-1.634,9.285,9.285,0,0,1-2.052-2.31c-1.1-1.776-2.155-3.577-3.143-5.416a8.807,8.807,0,0,1-1.1-4.443,5.772,5.772,0,0,1,2.437-4.707c.245-.181.525-.315.787-.475a.227.227,0,0,1,.261.032,1.653,1.653,0,0,1,.428.365,9.065,9.065,0,0,1,1.74,3.269C-348.354,163.389-348.5,163.688-349.138,164.057Zm13.507.195-5.4,4.24a.881.881,0,0,1-1.36-.007q-2.536-2-5.075-3.99c-.086-.068-.181-.126-.278-.194a2.012,2.012,0,0,0,.356-1.377c-.025-.221.11-.181.234-.181h13.441C-334.389,163.274-335.01,163.764-335.631,164.251Z"
                transform="translate(355.322 -157.865)"
                fill="#fff"
              />
            </svg>
          }
        />
        <NavLink
          title="Contact"
          path="/dashboard/contact"
          svg={
            <svg
              id="Group_1011"
              data-name="Group 1011"
              xmlns="http://www.w3.org/2000/svg"
              width="23.297"
              height="21.227"
              viewBox="0 0 23.297 21.227"
            >
              <path
                id="Path_12017"
                data-name="Path 12017"
                d="M-332.025,163.12a1.393,1.393,0,0,0-.857-1.313,2.109,2.109,0,0,0-.973-.175h-13.627c-.117,0-.224.021-.286-.14a13.342,13.342,0,0,0-.752-1.48,5.572,5.572,0,0,0-1.328-1.71,1.4,1.4,0,0,0-1.538-.32,5.377,5.377,0,0,0-.995.575,7.018,7.018,0,0,0-2.935,6.208,9.944,9.944,0,0,0,1.222,4.4c1,1.859,2.077,3.682,3.18,5.484a10.026,10.026,0,0,0,1.6,1.962,8.016,8.016,0,0,0,5.17,2.471,6.9,6.9,0,0,0,4.166-1.065,1.376,1.376,0,0,0,.678-1.313,2.277,2.277,0,0,0-.113-.627,10.251,10.251,0,0,0-2.279-3.75l-.018-.018a2.215,2.215,0,0,0-2.878-.317c-.273.158-.546.316-.821.471a.944.944,0,0,1-.714.1,1.835,1.835,0,0,1-1.2-.879c-.8-1.377-1.6-2.758-2.4-4.136a1.493,1.493,0,0,1-.208-.573,1.328,1.328,0,0,1,.453-1.425c.316-.212.657-.386,1-.585a.907.907,0,0,0,.36.437q2.562,2.01,5.122,4.021a1.883,1.883,0,0,0,2.588,0q2.311-1.81,4.616-3.627l2.651-2.082v9.142c0,.094,0,.188,0,.282a.385.385,0,0,1-.415.44c-.094.006-.188,0-.282,0h-4.67a2.2,2.2,0,0,0-.231,0,.552.552,0,0,0-.535.6.54.54,0,0,0,.584.517q2.515,0,5.03,0a1.526,1.526,0,0,0,1.637-1.648v-9.393C-332.025,163.479-332.025,163.3-332.025,163.12Zm-17.113.936c-.273.158-.545.318-.819.472a2.208,2.208,0,0,0-1.119,1.844,2.955,2.955,0,0,0,.436,1.833c.8,1.34,1.552,2.7,2.354,4.042a2.727,2.727,0,0,0,2.715,1.426,1.855,1.855,0,0,0,.765-.269c.3-.172.6-.35.908-.523a.94.94,0,0,1,1.243.089,3.589,3.589,0,0,1,.794.865,9.232,9.232,0,0,1,1.369,2.528c.007.025.021.047.027.072.114.488.093.5-.335.768a6.03,6.03,0,0,1-2.508.8,6.922,6.922,0,0,1-4.6-1.634,9.285,9.285,0,0,1-2.052-2.31c-1.1-1.776-2.155-3.577-3.143-5.416a8.807,8.807,0,0,1-1.1-4.443,5.772,5.772,0,0,1,2.437-4.707c.245-.181.525-.315.787-.475a.227.227,0,0,1,.261.032,1.653,1.653,0,0,1,.428.365,9.065,9.065,0,0,1,1.74,3.269C-348.354,163.389-348.5,163.688-349.138,164.057Zm13.507.195-5.4,4.24a.881.881,0,0,1-1.36-.007q-2.536-2-5.075-3.99c-.086-.068-.181-.126-.278-.194a2.012,2.012,0,0,0,.356-1.377c-.025-.221.11-.181.234-.181h13.441C-334.389,163.274-335.01,163.764-335.631,164.251Z"
                transform="translate(355.322 -157.865)"
                fill="#fff"
              />
            </svg>
          }
        />
        <NavLink
          title="News Letter"
          path="/dashboard/news-letter"
          svg={
            <svg
              id="Group_1011"
              data-name="Group 1011"
              xmlns="http://www.w3.org/2000/svg"
              width="23.297"
              height="21.227"
              viewBox="0 0 23.297 21.227"
            >
              <path
                id="Path_12017"
                data-name="Path 12017"
                d="M-332.025,163.12a1.393,1.393,0,0,0-.857-1.313,2.109,2.109,0,0,0-.973-.175h-13.627c-.117,0-.224.021-.286-.14a13.342,13.342,0,0,0-.752-1.48,5.572,5.572,0,0,0-1.328-1.71,1.4,1.4,0,0,0-1.538-.32,5.377,5.377,0,0,0-.995.575,7.018,7.018,0,0,0-2.935,6.208,9.944,9.944,0,0,0,1.222,4.4c1,1.859,2.077,3.682,3.18,5.484a10.026,10.026,0,0,0,1.6,1.962,8.016,8.016,0,0,0,5.17,2.471,6.9,6.9,0,0,0,4.166-1.065,1.376,1.376,0,0,0,.678-1.313,2.277,2.277,0,0,0-.113-.627,10.251,10.251,0,0,0-2.279-3.75l-.018-.018a2.215,2.215,0,0,0-2.878-.317c-.273.158-.546.316-.821.471a.944.944,0,0,1-.714.1,1.835,1.835,0,0,1-1.2-.879c-.8-1.377-1.6-2.758-2.4-4.136a1.493,1.493,0,0,1-.208-.573,1.328,1.328,0,0,1,.453-1.425c.316-.212.657-.386,1-.585a.907.907,0,0,0,.36.437q2.562,2.01,5.122,4.021a1.883,1.883,0,0,0,2.588,0q2.311-1.81,4.616-3.627l2.651-2.082v9.142c0,.094,0,.188,0,.282a.385.385,0,0,1-.415.44c-.094.006-.188,0-.282,0h-4.67a2.2,2.2,0,0,0-.231,0,.552.552,0,0,0-.535.6.54.54,0,0,0,.584.517q2.515,0,5.03,0a1.526,1.526,0,0,0,1.637-1.648v-9.393C-332.025,163.479-332.025,163.3-332.025,163.12Zm-17.113.936c-.273.158-.545.318-.819.472a2.208,2.208,0,0,0-1.119,1.844,2.955,2.955,0,0,0,.436,1.833c.8,1.34,1.552,2.7,2.354,4.042a2.727,2.727,0,0,0,2.715,1.426,1.855,1.855,0,0,0,.765-.269c.3-.172.6-.35.908-.523a.94.94,0,0,1,1.243.089,3.589,3.589,0,0,1,.794.865,9.232,9.232,0,0,1,1.369,2.528c.007.025.021.047.027.072.114.488.093.5-.335.768a6.03,6.03,0,0,1-2.508.8,6.922,6.922,0,0,1-4.6-1.634,9.285,9.285,0,0,1-2.052-2.31c-1.1-1.776-2.155-3.577-3.143-5.416a8.807,8.807,0,0,1-1.1-4.443,5.772,5.772,0,0,1,2.437-4.707c.245-.181.525-.315.787-.475a.227.227,0,0,1,.261.032,1.653,1.653,0,0,1,.428.365,9.065,9.065,0,0,1,1.74,3.269C-348.354,163.389-348.5,163.688-349.138,164.057Zm13.507.195-5.4,4.24a.881.881,0,0,1-1.36-.007q-2.536-2-5.075-3.99c-.086-.068-.181-.126-.278-.194a2.012,2.012,0,0,0,.356-1.377c-.025-.221.11-.181.234-.181h13.441C-334.389,163.274-335.01,163.764-335.631,164.251Z"
                transform="translate(355.322 -157.865)"
                fill="#fff"
              />
            </svg>
          }
        />
      </div>
      <div>
        <div className="sidebar__container__line"></div>
        <NavLink
          title="Logout"
          path="/"
          onClick={() => {
            window.localStorage.clear("user");
          }}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29.81"
              height="28.805"
              viewBox="0 0 29.81 28.805"
              fill="#fff"
            >
              <g id="loguot" transform="translate(29.81 28.805) rotate(180)">
                <path
                  id="Path_31"
                  data-name="Path 31"
                  d="M0,7.479H13.665l-3.457,3.127,1.677,1.854,6.89-6.23L11.885,0,10.208,1.854l3.457,3.126H0Z"
                  transform="translate(0 8.173)"
                />
                <path
                  id="Path_32"
                  data-name="Path 32"
                  d="M24.313,0H0V6.1H2.5V2.5H21.813V26.3H2.5v-3.66H0V28.8H24.313Z"
                  transform="translate(5.496)"
                />
              </g>
            </svg>
          }
        />
      </div>
    </div>
  );
}
