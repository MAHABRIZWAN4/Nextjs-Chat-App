"use client";
import { useState, useEffect } from "react";
import type { User, Channel as StreamChannel } from "stream-chat";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/v2/index.css";

const apiKey = "794xebu5vtq7";
const userId = "user_2uOaq4YTRP9tNurDi2i88CyYryY";
const userName = "Mahab";
const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8ydU9hcTRZVFJQOXROdXJEaTJpODhDeVlyeVkifQ.NLfyBoLtQDUXuAvLB7h0nXpd2nJUJSKLQgjDTGCqzgU";

const user: User = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=Mahab`,
};

const ChatForum = ({ slug }: { slug: string }) => {


  


  function toTitleCase(str: any) {
    return str.replace(/\b[a-z]/g, (char: any) => char.toUpperCase());
  }





  const [channel, setChannel] = useState<StreamChannel>();
  const [isClient, setIsClient] = useState(false);
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    setIsClient(true);
    if (!client) return;

    const channel = client.channel("messaging", slug, {
      image: "https://getstream.io/random_png/?name=react",
      name: toTitleCase(slug.replace(/-/g, " "))+"Discussion",
      members: [userId],
    });

    setChannel(channel);
  }, [client, slug]);

  if (!isClient || !client) return <div>Loading chat...</div>;



  return (
    <Chat client={client}>
      {channel && (
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      )}
    </Chat>
  );
};
export default ChatForum;
