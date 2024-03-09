import { Message } from "ai/react";
import { Inter } from "../lib/fonts";
import clsx from "clsx";

export default function Messages({ messages }: { messages: Message[] }) {
  return (
    <div className="w-full grow py-10 px-16 overflow-y-scroll scroll-auto max-h-[90vh]">
      <ul>
        {messages.map((message, index) => (
          <li
            key={index}
            className={clsx("text-white py-2", {
              [Inter.className]: message.role === "user",
            })}
          >
            {`"${message.content}"`}
          </li>
        ))}
      </ul>
      <style jsx>{`
        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
      `}</style>
    </div>
  );
}
