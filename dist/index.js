"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const get_token_from_llm_1 = require("./get-token-from-llm");
function main(userName) {
    return __awaiter(this, void 0, void 0, function* () {
        // const newTweets = await getTweets(userName);
        // for( let tweet of newTweets){
        //     const tokenAddress = await getTokenFromLLM(tweet.contents);
        //     if(tokenAddress!=="null")
        //             console.log(tokenAddress);
        //     else
        //         console.log("null");
        // }
        (0, get_token_from_llm_1.getTokenFromLLM)("hiii I am bearish on solana ");
    });
}
main("rovercrc");
