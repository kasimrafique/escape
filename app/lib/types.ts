export type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export type RequestBody = {
  model: "llama2";
  message: Message[];
};

export type ResponseBody = {
  model: "llama2";
  created_at: string;
  message: Message;
  done: boolean;
};
