import React, { useEffect, useState } from "react"
import { loading, switchover, switchback } from './main'
import { useGlobalContext } from './context'
import { Auth } from "./components/Auth"
import Search from "./Search"
import heartGit from '../assets/home-page/assets/jump-heart.png'
import irrArrow from '../assets/home-page/assets/irregular-arrow.png'
import arrow from '../assets/home-page/assets/arrow.png'
import signArrow from '../assets/home-page/assets/sign-arrow.png'

export function Hero() {

    const { messages } = useGlobalContext();
    const [input, setInput] = useState('');

    useEffect(() => {
        loading()
    }, []);

    const handleSubmit = () => {
        switchover();
    }


    const handleClick = () => {
        setInput(input);
    }


    const handleGoback = () => {
        setInput('');
        switchback();
    }

    return (
        <>
            <Auth />
            <img className="jump-heart shake shake-slow" src={heartGit} alt="" />

            <img className="right-arrow" src={irrArrow} alt="" />

            <div className="headline">
                <img className="left-arrow" src={arrow} alt="" />
                <h1>What a lovely time,</h1>
                <h1> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; when you were</h1>
                <h1 className="outline">mine and I was &nbsp;
                    <a>
                        yours.
                        <svg viewBox="0 0 70 36">
                            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                        </svg>
                    </a>
                </h1>
                <p>Express love in blockchain.</p>
                <button type="submit" className="headlinebutton" onClick={handleSubmit}>Get start now</button>
            </div>

            <div className="headline-2">
                <div className="go-back-home">
                    <a href="#" onClick={handleGoback}> Go back <img src={signArrow} /></a>
                </div>
                <div className="welcome">
                    <span className="welcome-1"> Welcome to </span><br />
                    <span className="welcome-2"> Love.in.Cyber. </span><br />
                    <div className="welcome-3"> A new way to express your LOVE! </div><br />
                    <input className="welcome-input" type="text" placeholder="Search for her/him" onChange={(e) => setInput(e.target.value)} />
                    <img className="welcome-btn" src={signArrow} onClick={handleClick} />
                </div>
            </div>

            <Search data={messages} input={input} />

        </>
    )
}