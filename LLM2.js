import dotenv from "dotenv";
import readlineSync from 'readline-sync'
dotenv.config();

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

const chat = ai.chats.create({
    model: "gemini-3-flash-preview",
    history : [],
})


async function main() {
    const userProblem = readlineSync.question("Ask me anything --> ")
    const response1 = await chat.sendMessage({
        message: userProblem,
    });
    console.log(response1.text);
    main();
}

main();
  
// Chatting();