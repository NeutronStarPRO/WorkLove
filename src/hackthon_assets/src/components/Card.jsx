import React, { useState, useEffect } from 'react'
import Jazzicon from 'react-jazzicon'
import hearts from "../../assets/mint-page/img/3heart.png"
import ringNFT from "../../assets/mint-page/img/ring-nft.png"
import heartArrow from "../../assets/mint-page/img/heart-arrow.png"
import { AiOutlineCopy } from "react-icons/ai"
import { getPicture } from "../../../declarations/photo"

const Card = ({ receiver, text, code, sender }) => {

    const userA = sender.match(/\d/g).join('')
    const userB = userA.substring(3, 5)
    const date = new Date()
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const today = date.toLocaleDateString("en-US", options)
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setAlert(false), 1000)
        return () => clearTimeout(timeout)
    }, [alert])

    return (

        <section>
            <h2>Congratulations!</h2>
            <div className="bottom-line"></div>
            <div className="before-text">Your <b>Lovelocked</b> in blockchain.</div>
            <img className="three-heart" src={hearts} alt="" />
            <div className="contract-wrapper" id="wrapper-hover">
                <div className="text-box">
                    <div className="show-NFT">
                        <img id="imgPre" src={ringNFT} alt="You have no img."/>
                    </div>
                    <div className="right-box">
                        <div className="share-btn">
                                        <a href="#">
                                            <svg width="50" height="50" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_3328_731)">
                                                    <path d="M20.5 4.8125L24.625 8.9375M20.5 19.9375V4.8125V19.9375ZM20.5 4.8125L16.375 8.9375L20.5 4.8125Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M26 26.125H15C13.6438 26.125 13.2058 26.1185 12.8722 26.0657C10.8129 25.7396 9.1979 24.1245 8.87175 22.0653C8.81891 21.7316 8.8125 21.2937 8.8125 19.9375C8.8125 18.5813 8.81891 18.1434
                                                     8.87175 17.8097C9.1979 15.7505 10.8129 14.1354 12.8722 13.8093C13.2058 13.7565 13.6438 13.75 15 13.75H15.3437C15.9133 13.75 16.375 13.2883 16.375 12.7187C16.375 12.1492 15.9133 11.6875 15.3437
                                                      11.6875H15C13.7226 11.6875 13.0839 11.6875 12.5495 11.7721C9.60776 12.2381 7.30058 14.5453 6.83464 17.487C6.75 18.0214 6.75 18.6601 6.75 19.9375C6.75 21.2149 6.75 21.8536 6.83464 22.388C7.30058
                                                       25.3297 9.60774 27.6369 12.5495 28.1028C13.0839 28.1875 13.7226 28.1875 15 28.1875H26C27.2774 28.1875 27.9161 28.1875 28.4505 28.1028C31.3922 27.6369 33.6994 25.3297 34.1653 22.388C34.25 21.8536
                                                        34.25 21.2149 34.25 19.9375C34.25 18.6601 34.25 18.0214 34.1653 17.487C33.6994 14.5453 31.3922 12.2381 28.4505 11.7721C27.9161 11.6875 27.2774 11.6875 26 11.6875H25.6562C25.0867 11.6875 24.625 12.1492 24.625 12.7187C24.625 13.2883 25.0867
                                                         13.75 25.6562 13.75H26C27.3562 13.75 27.7941 13.7565 28.1278 13.8093C30.187
                                                         14.1354 31.8021 15.7505 32.1282
                                                         17.8097C32.181 18.1434 32.1875 18.5813 32.1875 19.9375C32.1875 21.2937 32.181 21.7316 32.1282 22.0653C31.8021 24.1245 30.187 25.7396 28.1278 26.0657C27.7941 26.1185 27.3562 26.125 26 26.125Z" fill="white"/>
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_3328_731" x="0" y="0" width="41" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                        <feOffset dy="4"/>
                                                        <feGaussianBlur stdDeviation="2"/>
                                                        <feComposite in2="hardAlpha" operator="out"/>
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3328_731"/>
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3328_731" result="shape"/>
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </a>
                                        <div className="share-hover">
                                            {alert && <p className="alert">
                                                <svg t="1665155564581" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2535" width="30" height="30">
                                                    <path d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m-114.176-310.954667a53.333333 53.333333 0 0 0 75.434667 0l323.328-323.328a53.333333 53.333333 0 1 0-75.434667-75.434666l-287.914667 283.306666-128.853333-128.853333a53.333333 53.333333 0 1 0-75.434667 75.434667l168.874667 168.874666z" fill="#1afa29" p-id="2536">
                                                    </path>
                                                </svg>&nbsp;
                                                code copied to clipboard
                                            </p>}
                                            {code && <p >
                                                <div className="title">Send Invitation</div>
                                                <div className="invitation-code">
                                                    Code: &nbsp;{code}
                                                    <AiOutlineCopy onClick={() => {
                                                        setAlert(true);
                                                        navigator.clipboard.writeText(code);
                                                    }} />
                                                </div>
                                                <svg className="invitation-code-svg" t="1665140608220" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2545">
                                                    <path d="M653.224 370.782c119.494 119.618 117.854 311.396 0.72 429.18-0.22 0.24-0.48 0.5-0.72 0.74l-134.4 134.4c-118.54 118.54-311.398 118.524-429.92 0-118.54-118.52-118.54-311.4 0-429.92l74.212-74.212c19.68-19.68 53.572-6.6 54.588 21.212 1.296 35.444 7.652 71.054 19.38 105.442 3.972 11.644 1.134 24.524-7.566 33.224l-26.174 26.174c-56.052 56.052-57.81 147.32-2.31 203.92 56.048 57.158 148.172 57.498 204.65 1.02l134.4-134.38c56.382-56.382 56.146-147.514 0-203.66-7.402-7.388-14.858-13.128-20.682-17.138a32.074 32.074 0 0 1-13.894-25.212c-0.792-21.134 6.696-42.912 23.396-59.612l42.108-42.11c11.042-11.042 28.364-12.398 41.168-3.462a304.964 304.964 0 0 1 41.044 34.394zM935.094 88.898c-118.522-118.524-311.38-118.54-429.92 0l-134.4 134.4c-0.24 0.24-0.5 0.5-0.72 0.74-117.132 117.784-118.774 309.562 0.72 429.18a304.908 304.908 0 0 0 41.042 34.392c12.804 8.936 30.128 7.578 41.168-3.462l42.108-42.11c16.7-16.7 24.188-38.478 23.396-59.612a32.074 32.074 0 0 0-13.894-25.212c-5.824-4.01-13.28-9.75-20.682-17.138-56.146-56.146-56.382-147.278 0-203.66l134.4-134.38c56.478-56.478 148.6-56.138 204.65 1.02 55.5 56.6 53.744 147.868-2.31 203.92l-26.174 26.174c-8.7 8.7-11.538 21.58-7.566 33.224 11.728 34.388 18.084 69.998 19.38 105.442 1.018 27.812 34.908 40.892 54.588 21.212l74.212-74.212c118.542-118.518 118.542-311.398 0.002-429.918z" fill="#de9d9b" p-id="2546">
                                                    </path>
                                                </svg>
                                                Copy link
                                            </p>}
                                        </div>
                        </div>
                        <div className="text">
                            Message was {code ? "posted" : "linked"} successfully: "{text}"
                        </div>
                        <div className="date">
                            <img src={date} alt="" />
                            {/* <span>520days</span> */}
                        </div>
                        {/* <div className="money">
                                        10$
                                    </div> */}
                    </div>
                </div>
                <div className="contract-img">
                    <Jazzicon diameter={60} seed={userA} />

                    {/* <img style={{ width: "7 %" }} src={profileFoto} alt="" /> */}
                    <img src={heartArrow} alt="" />
                    <Jazzicon diameter={60} seed={userB} />
                    {/* <img style={{ width: "7 %" }} src={walletProfile} alt="" /> */}
                </div>
                <div className="contract-name">
                    <div className="address-owner">{`${sender.substring(0, 8)}...`}</div>
                    <div className="address-lover">{receiver}</div>
                </div>
                {/* <div className="contract-name">
                                <div className="name-owner">{`${user.substring(0, 10)}...`}</div>
                                <div className="name-lover">{name}</div>
                            </div> */}
                <a href='' className="over-and-back">{code ? "Send Another Message" : "Link another code"}</a>
                <div className="bottom-address-wrapper">
                    <div className="bottom-address">
                        {/* Record: 0x56cc...b3eab4 */}
                        {today}
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Card