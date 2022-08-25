import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  MessageList,
  MessageInput,
  Thread,
  Window,
} from "stream-chat-react";

const client = new StreamChat("yf7e3c6uy7m5b");

client.connectUser(
  {
    id: "dave-matthews",
    name: "Dave Matthews",
  },
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZGF2ZS1tYXR0aGV3cyJ9
    .dc7 - QjQfOffOCGCRQDEP2rClSlnni7LGzoiLOxyVDyY
);

const channel = client.channel("gaming", {
  name: "Gaming Demo",
  members: ["dave-matthews", "trey-anastasio"],
});

const App = () => (
  <Chat client={client}>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
