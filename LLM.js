import dotenv from "dotenv";
import readlineSync from 'readline-sync'
dotenv.config();

import { GoogleGenAI } from "@google/genai";
import { text } from "node:stream/consumers";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-3-flash-preview",
//     contents: "Explain how AI works in a few words in detailed explanation",
//   });
//   console.log(response.text);
// }

// main();


const history = [];
async function Chatting(userProblem) {

    history.push({
        role : 'user',
        parts : [{text : userProblem}]
    })

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: history
    });

    history.push({
        role : 'user',
        parts : [{text : response.text}]
    })

    console.log(response.text);
}

async function main() {
    const userProblem = readlineSync.question("Ask me anything --> ")
    await Chatting(userProblem);
    main();
}

main();
  
// Chatting();