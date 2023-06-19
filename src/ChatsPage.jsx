import { PrettyChatWindow } from "react-chat-engine-pretty";

// Additional CSS styles
import './extraCss.css';

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_PROJECT_ID}
        username={props.user.username || props.user.name}
        email={props.user.email}
        avatarUrl={props.user.avatar || props.user.picture}
        secret={props.user.secret || props.user.name}
      />
    </div>
  );
};

export default ChatsPage;