import React, { useState, useEffect } from 'react'
import { Actor, HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { AuthClient } from "@dfinity/auth-client"
import { idlFactory, canisterId, createActor } from "../../../declarations/post_service";
import { useNavigate } from 'react-router-dom';
import { loading, switchover, noNFT } from './mint-main'
import Card from '../components/Card';
import Jazzicon from 'react-jazzicon'
import { Auth } from '../components/Auth';

function Mint() {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [code, setCode] = useState("");
    const user = localStorage.getItem("user");
    const shortenedName = `${user.substring(0, 6)} ... ${user.substring(user.length - 6)}`
    const userA = user.match(/\d/g).join('')
    const userB = userA.substring(3, 5)



    // ----- to be removed when live
    const userId = Principal.fromText('r7inp-6aaaa-aaaaa-aaabq-cai')
    const localHost = "http://localhost:8080/";
    const agent = new HttpAgent({ host: localHost });
    agent.fetchRootKey()
    //  --------- to be removed
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !text) return;
        sendMessage({ text, name })
        switchover()
    };



    const sendMessage = async ({ text, name }) => {
        const authClient = await AuthClient.create()
        const identity = await authClient.getIdentity()

        try {
            // const authenticatedActor = await createActor(canisterId, {
            //     agentOptions: { identity, }
            // })
            // const newMessage = await authenticatedActor.getInvitationCode(record)
            const userActor = await Actor.createActor(idlFactory, {
                agent,
                canisterId: userId,
            })
            let record = {
                "user_other_id": "",
                "text": text,
                "user_other_name": name,
            }
            const newMessage = await userActor.getInvitationCode(record)
            const code = await newMessage.Ok
            setCode(code)
            // ------------------to be replaced
        } catch (error) {
            console.log(error);
        }

        // ---------------------------------------

    }

    useEffect(() => { loading() }, [])
    useEffect(() => { setCode(code) }, [code])
    return (
        <section >
            <Auth />

            <div className="container">
                <div className="card">


                    {/* 
            <!-- =============================================================================================== -->
            <!-- ===================================   page1 - mint   ========================================== -->
            <!-- =============================================================================================== --> */}
                    <div className="content">
                        <h2>Hello, </h2>
                        <h2 className="h2-font">{shortenedName}</h2>
                        <div className="bottom-line"></div>
                        <div className="before-text">Leave your romantic <b>Love Message</b>.</div>
                        <form onSubmit={handleSubmit}>
                            <div className="love-message-wrapper">

                                <div className="textarea">
                                    <textarea className="love-text" placeholder="Type love message..." cols="15"
                                        rows="27" type="text"
                                        id="text"
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}></textarea>
                                </div>

                                <div className="NFT-wrapper">
                                    <div className="own-wrapper">

                                        <svg viewBox="0 0 32 32" id="heart">
                                            <path id="heart-path" d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454
                                            C30,20.335,16,28.261,16,28.261z" />
                                        </svg>

                                        <div className="own">
                                            <div className="own-title">
                                                {/* <!-- 加空格是因为样式用了居中布局，居中之后加空格让文字左对齐，如果用左对齐的话整个文本都左对齐了 --> */}
                                                LOVE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
                                                LOCKED
                                            </div>
                                            <div className="own-img">
                                                <Jazzicon diameter={100} seed={userB} />
                                            </div>
                                            <div className="own-address"></div>
                                            <div className="own-name">
                                                <input
                                                    type="text"
                                                    className="form-input"
                                                    placeholder="Type user name"
                                                    id="name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="NFT">
                                        {/* <div className="NFT-title">Media</div> */}
                                        {/* <div className="NFT-content"> */}
                                        {/* <button >upload</button> */}
                                        {/* </div> */}
                                    </div>
                                </div>

                            </div>
                            {/* <!-- sub按钮 --> */}
                            <button className="btn-submit" >Submit</button>
                        </form>
                    </div>



                    <div className="content-2">
                        <Card receiver={name} text={text} code={code} sender={user} />
                    </div>

                </div>

                {/* <!-- 右上角下拉菜单 --> */}
                {/* <div className="draft-profile-wrapper">
                    <div className="draft-profile">
                        <Jazzicon diameter={43} seed={userA} />
                        {/* <img className="draft-img" width="43px" src={profileFoto} alt=" " /> */}

                {/* <div className="draft-name">

                    <div className='profile-id'>
                        {`${user.substring(0, 6)}...`}
                        <br></br>
                    </div> */}
                {/* <img width="25px" src={downArrow} />

                            <ul className="draft-ul">
                                <li className="draft-li"><img src={LikeMessage} alt=" " />
                                    &nbsp;&nbsp; Send message</li>
                                <li className="draft-li"><img src={Ring} alt=" " /> &nbsp;&nbsp;
                                    The ring shop</li>
                                <li className="draft-li"><img src={Prize} alt=" " /> &nbsp;&nbsp;
                                    Ranking</li>
                                <li className="draft-li"><img src={User} alt=" " /> &nbsp;&nbsp;
                                    Profile</li>
                                <li className="draft-li"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sign off</li>
                            </ul> */}

                {/* </div>
                    </div>
                    <div className="notice">
                        <a onClick={signOut}>Sign out</a>

                    </div>
                </div> */}

            </div>
        </section >

    )
}

export default Mint