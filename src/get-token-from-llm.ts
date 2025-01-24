import OpenAI  from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY
});

export async function getTokenFromLLM(contents:string): Promise<string>{

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        store: true,
        messages: [
            {"role": "system", "content": "You are an AI agent that needs to tell me if this tweet is about a solana token.Return me either the address of the solana token or return me null if you cant find the solana address in this tweet.Only return if it says its a bull post"},
            {"role":"user","content": contents}
        ]
        
    });
    return completion.choices[0].message.content ?? "null";

}