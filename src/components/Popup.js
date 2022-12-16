import React from "react";
import { useAppContext } from "../context/Context";
import { CgClose } from "react-icons/cg";

const Popup = () => {
  const { popup, setPopup } = useAppContext();
  const { title, poster, release_date, description, vote_count, vote_average } =
    popup.data;
  const hidePopup = () => {
    setPopup({ isOpne: false, data: {} });
  };
  const [year,month,date]=release_date.split("-");
  const monthFull = new Date(year, month, date).toLocaleString("default", { month: "short" });
  return (
    <div className="popup_wrapper">
      <div className="popup">
        <div className="popup_header">
          <h1 className="popup_header_title">{title}</h1>
          <button
            type="button"
            onClick={() => hidePopup()}
            className="popup_close"
          >
            <CgClose />
          </button>
        </div>
        <div className="popup_body">
          <div className="popup_poster">
            <img src={poster} alt={title} />
          </div>
          <div className="popup_text">
            <h3 className="popup_release">
              Release date:<span>{monthFull} {date}, {year}</span>
            </h3>
            <p className="popup_para">{description}</p>
            <p className="popup_rating">
              <span>{vote_average.toFixed(1)}</span> / {10} ({vote_count} total
              votes)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
