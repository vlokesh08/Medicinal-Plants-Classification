import { useState } from "react";
import OpenAI from 'openai';
const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const openai = new OpenAI({
    apiKey: apiKey, // This is the default and can be omitted
  });

const gpt3 = async () => {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: "give me the medicinal use of plant tulasi" }],
        model: "gpt-3.5-turbo",
      });
      console.log(chatCompletion.choices[0]);
}
export const ChatGpt = () => {

    const [chat, setChat] = useState("");

  return (
    <>
        <input type="text" placeholder="Type your message here" value={chat} onChange={(e)=>{setChat(e.target.value)}} />
        {/* <button onClick={gpt3}>Send</button> */}
    </>
  )
}
