require("dotenv").config();
import { getTweets } from "./get-Tweets";
import { getTokenFromLLM } from "./get-token-from-llm";

async function main(userName:string) {
    // const newTweets = await getTweets(userName);
    // for( let tweet of newTweets){
    //     const tokenAddress = await getTokenFromLLM(tweet.contents);
    //     if(tokenAddress!=="null")
    //             console.log(tokenAddress);
    //     else
    //         console.log("null");
    
    // }
    getTokenFromLLM("hiii I am bearish on solana ");
}
main("rovercrc");