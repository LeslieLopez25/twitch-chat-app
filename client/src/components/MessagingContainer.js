import {
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import { useState } from "react";
import React from "react";
import { useCookies } from "react-cookie";
import UserList from "./UserList";
import { FaUsers, FaArrowAltCircleLeft } from "react-icons/fa";

const MessagingContainer = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [userListVisible, setUserListVisible] = useState(false);

  const logout = () => {
    removeCookie("Name", cookies.Name);
    removeCookie("HashedPassword", cookies.HashedPassword);
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.Token);
    window.location.reload();
  };

  return (
    <div className="messaging-container">
      {!userListVisible && (
        <Window>
          <FaUsers onClick={() => setUserListVisible(true)} />
          <ChannelHeader />
          <MessageList />
          <MessageInput />
          <button className="standard-button" onClick={logout}>
            Logout
          </button>
          <UserList users={users} />
        </Window>
      )}
      {userListVisible && (
        <Window>
          <div className="chat-container">
            <FaArrowAltCircleLeft onClick={() => setUserListVisible(false)} />
            <ChannelHeader title="Users" />
          </div>
        </Window>
      )}
      <Thread />
    </div>
  );
};

export default MessagingContainer;
