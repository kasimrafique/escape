import { useEffect, useRef } from "react";
import { OpenSans } from "../lib/fonts";

export default function Chat({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
}: {
  input: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current && !isLoading) {
      ref.current.focus();
    }
  }, [isLoading]);

  return (
    <div className="flex fixed w-full bottom-0">
      <form
        onSubmit={handleSubmit}
        className="flex-grow bg-gray-950 rounded-t-xl p-5 mx-2"
      >
        <div className="flex">
          <p className={`mr-3 ${OpenSans.className}`}>{">"}</p>
          <input
            autoFocus
            ref={ref}
            disabled={isLoading}
            type="text"
            className="w-full bg-transparent outline-none"
            value={input}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}
