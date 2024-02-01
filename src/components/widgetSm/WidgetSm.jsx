import "./widgetSm.scss";
import { Visibility } from "@mui/icons-material";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="assets/me.png" className="widgetSmImg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anh Tran</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="assets/me.png" className="widgetSmImg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anh Tran</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="assets/me.png" className="widgetSmImg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anh Tran</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="assets/me.png" className="widgetSmImg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anh Tran</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="assets/me.png" className="widgetSmImg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anh Tran</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
}
