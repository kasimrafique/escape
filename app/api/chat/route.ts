"use server";

import { asChatMessages, ModelFusionTextStream } from "@modelfusion/vercel-ai";
import { Message, OpenAIStream, StreamingTextResponse } from "ai";
import { readFile } from "fs/promises";
import { ollama, streamText } from "modelfusion";
import OpenAI from "openai";

export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json();

  const systemPrompt = await readFile(
    process.cwd() + "/app/prompt.txt",
    "utf-8",
  );

  console.log(systemPrompt);

  const textStream = await streamText({
    model: ollama.ChatTextGenerator({ model: "mistral" }).withChatPrompt(),
    prompt: {
      system: systemPrompt,
      messages: asChatMessages(messages),
    },
  });

  const llamaStream = ModelFusionTextStream(textStream);

  return new StreamingTextResponse(llamaStream);
}
