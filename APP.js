const Telegram =require("node-telegram-bot-api");
const{configuration,OpenAIApi}=require("openai");
require("dotenv").config();
const token=process.env.BOT_TOKEN
const configuration=new configuration({
    apiKey:process.env.OpenAIApi,
});
const openai= newOpenAPI(configuration);
const bot=new Telegram(token,{polling:true});

bot.on("message", async(msg)=>{

    console.log(msg);
    const response= await openai.createCompletion({
     model:"text-davinci-300",
     prompt: "text",
     temperature:0.7,
     max_token:100   
    });
    //console.log(response.data.choices[0].text)
    const res=response.data.choices[0].text;
    bot.sendMessage(chatId,res)
});

