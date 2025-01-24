require("dotenv").config();
import { getTweets } from "./get-Tweets";

async function main(userName:string) {
    const newTweets = await getTweets(userName);
    console.log(newTweets);
    // for(tweet of newTweets)
    // {
        const tokenAddress = await getTokenFromLLM(tweet.contents);
    //     if(tokenAddress){

    //     }
    // }
    
}
main("kshitij_peace");