import { createContext, useState } from "react";
import runChat from "../config/gemini"
export const Context=createContext();

export const AppContext = (props) =>{
    const[input,setInput]=useState("");
    const[recentPrompt,setRecentPrompt]=useState("");
    const[previousPrompts,setPreviousPrompts]=useState([]);
    const[showResult,setShowResult]=useState(false);
    const[loading,setLoading]=useState(false);
    const[resultData,setResultData]=useState("");
    

    //adding typin effect
    const delayPara=(index,nextWord)=>{
        setTimeout(function(){
            setResultData(prev=>prev+nextWord)
        },75*index)
    }

    const newChat=()=>{
        setLoading(false);
        setShowResult(false)
    }

    const onSent=async(prompt)=>{
        setResultData("")
        setLoading(true);
        setShowResult(true);
        let response
        if(prompt != undefined){
            //will show the data based on user input
             response= await runChat(prompt);
             setRecentPrompt(prompt)
        }else{
            //will show the data based on recent prompts
            setPreviousPrompts(prev=>[...prev,input])
            setRecentPrompt(input);
            response= await runChat(input);
       
        }
        // setRecentPrompt(input);
        // setPreviousPrompts(prev=>[...prev,input])
       
        let responseArray=response.split("*");
        let newResponse="";
        for(let i=0;i<responseArray.length;i++)
        {
            if(i==0 || i%2 !==1 ){   //even indexes which is not begin with text which is like **
                newResponse +=responseArray[i]
            }
            else{
                newResponse +="<b>"+responseArray[i]+"</b>"  //used to bold that text which is like **
            }
        }
        let newResponse2=newResponse.split("*").join("</br>") //whereever is single * then it will start with new line
        // setResultData(newResponse2);
        let newResponseArray=newResponse2.split(" ");
        for(let i=0;i<newResponseArray.length;i++){
            const nextWord=newResponseArray[i];
            delayPara(i,nextWord+" ")
        }
        setLoading(false);
        setInput("");

    }

    

    const contextValue={
        previousPrompts,
        setPreviousPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

