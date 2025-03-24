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


function Capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

import React from 'react'

interface ChatForumProps {
  clerkUser: any; // Replace 'any' with the appropriate type
  slug: string;
}

function ChatForum({ clerkUser, slug }: ChatForumProps) {
  

const apiKey = "794xebu5vtq7";
const userId = clerkUser.id;
const userName = clerkUser.fullName;
const userToken = clerkUser.token;


  
  
  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };

  const [channel, setChannel] = useState<StreamChannel>();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel("messaging", slug, {
      image: "https://getstream.io/random_png/?name=react",
      name: Capitalize(slug) + "Discussion",
      members: [userId],
    });

    setChannel(channel);

    // channel.addMembers([userId]);


  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
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
}


export default ChatForum;