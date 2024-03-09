"use client";

import { useChat } from "ai/react";
import Chat from "./ui/chat";
import Messages from "./ui/messages";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({});

  return (
    <main className="bg-gray-900 h-full w-full justify-stretch">
      <Messages messages={messages} />
      <Chat
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </main>
  );
}
