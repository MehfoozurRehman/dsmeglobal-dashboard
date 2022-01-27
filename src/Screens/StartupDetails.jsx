import React from "react";
import { useNavigate } from "react-router-dom";
import startup__details__img from "../Assets/startup__details__img.png";
import InputBox from "../Components/InputBox";
export default function Startup() {
  const navigate = useNavigate();
  return (
    <div className="main__container">
      <div className="main__container__header">
        <div className="main__container__header__heading">Startup</div>
        <div className="main__container__header__buttons"></div>
      </div>
      <div className="main__container__sub__heading">
        <button
          onClick={() => {
            navigate("/Dashboard/startup");
          }}
          className="main__container__sub__heading__btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.556"
            height="17.629"
            viewBox="0 0 20.556 17.629"
          >
            <g id="_507257" data-name="507257" transform="translate(0 -31.842)">
              <g
                id="Group_506"
                data-name="Group 506"
                transform="translate(0 31.842)"
              >
                <path
                  id="Path_753"
                  data-name="Path 753"
                  d="M19.32,39.213a1.469,1.469,0,0,0-.254-.019H4.564l.316-.147a2.941,2.941,0,0,0,.831-.588l4.067-4.067a1.522,1.522,0,0,0,.213-1.949,1.471,1.471,0,0,0-2.206-.191L.431,39.606a1.471,1.471,0,0,0,0,2.08h0l7.354,7.354a1.471,1.471,0,0,0,2.206-.147,1.522,1.522,0,0,0-.213-1.949L5.718,42.871a2.942,2.942,0,0,0-.735-.537l-.441-.2H18.984A1.522,1.522,0,0,0,20.536,40.9,1.471,1.471,0,0,0,19.32,39.213Z"
                  transform="translate(0 -31.842)"
                  fill="#d39844"
                />
              </g>
            </g>
          </svg>
        </button>
        Startup Details
      </div>
      <div className="main__container__content">
        <div className="startup__details__container">
          <div className="startup__details__container__img__wrapper">
            <img
              src={startup__details__img}
              alt="startup__details__img"
              className="startup__details__container__img"
            />
          </div>

          <div className="startup__details__container__content">
            <div className="startup__details__container__content__left">
              <div className="startup__details__container__content__left__entry">
                Name
              </div>
              <div className="startup__details__container__content__left__entry">
                Website
              </div>
              <div className="startup__details__container__content__left__entry">
                Start-up Industry
              </div>
              <div className="startup__details__container__content__left__entry">
                Start-up Stage
              </div>
              <div className="startup__details__container__content__left__entry">
                Start-up Model
              </div>
            </div>
            <div className="startup__details__container__content__right">
              <div className="startup__details__container__content__right__entry">
                Jhon Doe
              </div>
              <div className="startup__details__container__content__right__entry">
                Data Scientist, Simens
              </div>
              <div className="startup__details__container__content__right__entry">
                27 Years, Male
              </div>
              <div className="startup__details__container__content__right__entry">
                Amsterdam, netherlands
              </div>
              <div className="startup__details__container__content__right__entry">
                Bachelors in Data Science
              </div>
            </div>
          </div>
        </div>
        <div className="startup__details__container__text__box">
          <div className="startup__details__container__text__box__left">
            <InputBox
              disabled
              variant="textbox"
              title=" What Problem Is Your Start-Up Solving?"
            />
            <InputBox
              disabled
              variant="textbox"
              title=" What Problem Is Your Start-Up Solving?"
            />
          </div>
          <div className="startup__details__container__text__box__right">
            <InputBox
              variant="textbox"
              disabled
              title=" What Problem Is Your Start-Up Solving?"
            />
            <InputBox
              variant="textbox"
              disabled
              title=" What Problem Is Your Start-Up Solving?"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
