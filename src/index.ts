interface Tweet{
    contents: string;
    id : string

}

async function main(userName:String) {
    const newTweets:Tweet[] = await getTweets(userName);
    for(tweet of newTweets)
    {
        const tokenAddress = await getTokenFromLLM(tweet.contents);
        if(tokenAddress){

        }
    }
    
}
main();