import React, { useState, useEffect } from 'react'
import { Actor, HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { AuthClient } from "@dfinity/auth-client"
import { idlFactory, canisterId, createActor } from "../../../declarations/post_service";
import Wrapper from "../../assets/wrappers/SearchBox";
import { FiSearch } from 'react-icons/fi'
import handOutline from '../../assets/mint-page/img/handOutline.png'

import Card from '../components/Card';
import { loading, switchover, noNFT } from './mint-main'
import { Auth } from '../components/Auth';

const SentInvitation = () => {
    const [code, setCode] = useState("")
    const [newMessage, setNewMessage] = useState("")
    const [sendername, setSenderame] = useState('')
    const user = localStorage.getItem("user");
    const shortenedName = `${user.substring(0, 8)}...`
    const onSubmit = async (e) => {
        e.preventDefault();
        if (code.length != 8) return
        linkCode({ code })
        switchover()
    }

    const userId = Principal.fromText('r7inp-6aaaa-aaaaa-aaabq-cai')
    const localHost = "http://localhost:8080/";
    const agent = new HttpAgent({ host: localHost });
    agent.fetchRootKey()

    const linkCode = async ({ code }) => {

        const authClient = await AuthClient.create()
        const identity = await authClient.getIdentity()

        try {
            // const authenticatedActor = await createActor(canisterId, {
            //     agentOptions: { identity, }
            // })
            // const newMessage = await authenticatedActor.linkByInvitationCode(code)
            const userActor = await Actor.createActor(idlFactory, {
                agent,
                canisterId: userId,
            })

            const newMessage = await userActor.linkByInvitationCode(code)
            // ------------------to be replaced
            const data = await newMessage.Ok
            const text = data.text
            const senderId = data.user_self_id
            setNewMessage(text)
            setSenderame(senderId)
            setCode("")

        } catch (err) {
            console.log(err);
        }
    }



    useEffect(() => { loading() }, [])

    return (
        <div>
            <Auth />

            <div className="container">

                <div className="card">
                    <div className="content">
                        <img className="handOutline" src={handOutline} />
                        <Wrapper>
                            <div><div className="search">
                                <input type="text" name="q" className="softbox" placeholder="Insert invitation code" onChange={(e) => setCode(e.target.value)} />
                                <button type="submit" className="softbtn" onClick={onSubmit}>
                                    <FiSearch />
                                </button>
                            </div></div>
                        </Wrapper>
                    </div>
                    <div className="content-2">
                        <Card receiver={shortenedName} text={newMessage} code={''} sender={sendername || user} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SentInvitation