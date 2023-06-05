import { Link } from "react-router-dom";
import { ChatIcon } from "../icons";
import { sidebarItems } from "./items";
import "./style.css";

const Sidebar = () => {
  return (
    <div className="border-end px-2 py-3 sidebar-container">
      <div className="d-flex align-items-center justify-content-center gap-1 p-3 border rounded text-center">
        <ChatIcon style={{ fontSize: "20px" }} />
        <span>
          <b>WEB GPT</b>
        </span>
      </div>

      {/* MENU ITEMS */}
      <div className="mt-4"></div>
      {sidebarItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          style={{ color: "#333", textDecoration: "none" }}
        >
          <SidebarItem
            text={item.title}
            icon={<item.icon style={{ fontSize: "16px" }} />}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;

const SidebarItem = ({ text, icon }) => {
  return (
    <div
      className="d-flex align-items-center gap-1 p-2 border rounded mb-2"
      style={{ cursor: "pointer" }}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
};
