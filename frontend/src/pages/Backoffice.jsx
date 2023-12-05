import "../styles/backoffice.css";
import Profile from "../components/Profile";

export default function Backoffice() {
  return (
    <div className="backoffice_content">
      <div>
        <div className="component-container">
          <Profile />
        </div>
      </div>
    </div>
  );
}
