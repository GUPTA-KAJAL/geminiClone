import React from 'react'
import "./Mainfile.css"
import {assets} from "../../assets/assets"
import { useContext } from 'react'
import {Context }from "../../Context/Context"
const Mainfile = () => {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);


  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon}/>
        </div>
        <div className="main-container">


            {
                !showResult ? 
                        <>
                            <div className="greet">
                                <p><span>Hello,Dev.</span></p>
                                <p>How can I help you today?</p>
                            </div>
                            <div className="cards">
                                <div className="card">
                                    <p>Explain the following code step-by-step in detail</p>
                                    <img src={assets.code_icon}/>
                                </div>
                                <div className="card">
                                    <p>Draft an email to a recruiter to accept a job offer</p>
                                    <img src={assets.message_icon}/>
                                </div>
                                <div className="card">
                                    <p>Explain what the keto diet is in simple terms</p>
                                    <img src={assets.bulb_icon}/>
                                </div>
                                <div className="card">
                                    <p>Outline a way to home routine:organizing my closet</p>
                                    <img src={assets.message_icon}/>
                                </div>
                            </div>
                        </> 
                        :
                         <div className='result'>
                            <div className="result-title">
                                <img src={assets.user_icon}/>
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="result-data">
                                <img src={assets.gemini_icon}/>
                                {
                                    loading
                                        ?
                                        <div className="loader">
                                            <hr />
                                            <hr />
                                            <hr />
                                        </div>
                                        :
                                        <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                                }

                            </div>
                         </div>
            }

            <div className="main-bottom">
                <div className="searchBox">
                    <input onChange={(e)=>setInput(e.target.value)}  value={input} type="text" placeholder='Enter a prompt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                       {input ? <img onClick={()=>onSent()} src={assets.send_icon} alt="" />: null} 
                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Mainfile
