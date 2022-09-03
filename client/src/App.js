import React, { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import { Chat, Channel } from "stream-chat-react";
import Auth from "./components/Auth";
import MessagingContainer from "./components/MessagingContainer";
import Video from "./components/Video";
import "@stream-io/stream-chat-css/dist/css/index.css";

const client = StreamChat.getInstance("ywj9cyryquv2");

const App = () => {
  const [clientReady, setClientReady] = useState(false);
  const [channel, setChannel] = useState(null);

  const authToken = false;

  useEffect(() => {
    const setupClient = async () => {
      try {
        await client.connectUser(
          {
            id: "dave-matthews",
            name: "Dave Matthews",
          },
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZGF2ZS1tYXR0aGV3cyJ9.k0JytMxXRUwy43B83CPirifqpj4zWrIWeNKyNGZB9s8"
        );
        const channel = await client.channel("gaming", "gaming-demo", {
          name: "Gaming Demo",
        });
        setChannel(channel);

        setClientReady(true);
      } catch (err) {
        console.log(err);
      }
    };

    setupClient();
  }, []);

  if (!clientReady) return null;

  return (
    <>
      {!authToken && <Auth />}
      {authToken && (
        <Chat client={client} darkMode={true}>
          <Channel channel={channel}>
            <Video />
            <MessagingContainer />
          </Channel>
        </Chat>
      )}
    </>
  );
};

export default App;
