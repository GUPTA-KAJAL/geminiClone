import React, { useState } from 'react'
import './SideBar.css'
import {assets} from "../../assets/assets"
import {Context }from "../../Context/Context"
import { useContext } from 'react'
const SideBar = () => {
    const[extended,setExtended]=useState(false);
    const {onSent,previousPrompts,setRecentPrompt,newChat}=useContext(Context);
    
    //using this on clickin the recent opened prompts it shows on the screen
    const loadPrompt=async(prompt)=>{
        setRecentPrompt(prompt);
        await onSent(prompt)
    }
    return (
    <div className='sideBar'>
       <div className="top">
            <img onClick={()=>{setExtended(!extended)}} className='menu' src={assets.menu_icon} />
            <div  onClick={()=>newChat()} className="new-chat">
                <img  src={assets.plus_icon}/>
                {extended?<p>New Chat</p>:null}
            </div>
            {extended
                ?
                <div className="recent">
                    <p className='recent-title'>Recent</p>
                    {previousPrompts.map((item,index)=>{
                        return(
                            <div onClick={()=>{loadPrompt(item)}} className="recent-entry">
                                <img src={assets.message_icon}/>
                                <p>{item.slice(0,18)}...</p>
                            </div>
                        )
                    })}

                </div>
                :
                null
            }

       </div>
       <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon}/>
            {extended ? <p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.history_icon}/>
            {extended ? <p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon}/>
            {extended ? <p>Settings</p>:null}
        </div>
       </div>
    </div>
  )
}

export default SideBar