import axios from "axios";


const TWEET_MAX_TIME_MS = 60*1000;

interface Tweet{
    contents: string;
    id : string 
}
export function getTweets(userName: string): Promise<Tweet[]>{
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://twttrapi.p.rapidapi.com/user-tweets?username=${userName}`,
        headers: { 
          'x-rapidapi-host': 'twttrapi.p.rapidapi.com', 
          'x-rapidapi-key':     process.env.RAPID_API_KEY 
        }
      };
      
      axios.request(config)
      .then((response) => {
        const timelineResponse = response.data.data.user_result.result.timeline_response.
        timeline.instructions.filter((x:any) =>x.__typename==="TimelineAddEntries");

        const tweets = timelineResponse.entries.map((x:any)=>({
            content:x.content.content.tweetResult.result.core.user_result.result.description
            description,
            id:,
            createdAt: x.content.content.tweetResult.result.core.user_result.result.description
            created_at
        }))
        return tweets;
      })
      .catch((error) => {
        return [];
      });
      
}