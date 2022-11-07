import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Jazzicon from 'react-jazzicon'
import { Actor, HttpAgent } from "@dfinity/agent"
import { Principal } from "@dfinity/principal"
import { AuthClient } from "@dfinity/auth-client"
import Card from '../components/Card'
import { Auth } from '../components/Auth'
import { loading, switchover, noNFT } from './mint-main'
import { idlFactory, canisterId, createActor } from "../../../declarations/post_service"
import { photo } from "../../../declarations/photo"
import { type } from 'os'

function Mint() {
    const [name, setName] = useState("")
    const [text, setText] = useState("")
    const [code, setCode] = useState("")
    const user = localStorage.getItem("user")
    const shortenedName = `${user.substring(0, 6)} ... ${user.substring(user.length - 6)}`
    const userA = user.match(/\d/g).join('')
    const userB = userA.substring(3, 5)
    var picId

    // ----- to be removed when live
    const userId = Principal.fromText('r7inp-6aaaa-aaaaa-aaabq-cai')
    const localHost = "http://localhost:8080/"
    const agent = new HttpAgent({ host: localHost })
    agent.fetchRootKey()
    //  ----- end



    // 检查图片类型
    function limitFileSize(file, limitSize) {
        var arr = ["KB", "MB", "GB"]
        var limit = limitSize.toUpperCase();
        var limitNum = 0;
        for (var i = 0; i < arr.length; i++) {
            var leval = limit.indexOf(arr[i]);
            if (leval > -1) {
                limitNum = parseInt(limit.substr(0, leval)) * Math.pow(1024, (i + 1))
                break
            }
        }
        if (file.size > limitNum) {
            return false
        }
        return true
    }
    // 检查图片类型,并选择图片后传给下一页展示
    function checkImg(sourceId, targetId) {
        var file = document.getElementById(sourceId).files[0]
        var imgUrl = getFileUrl(sourceId)
        const isltSize = limitFileSize(file, '2MB')
        if (isltSize) {
            getBase64(imgUrl)
            const imgPre = document.getElementById(targetId)
            imgPre.src = imgUrl
        } else {
            alert("Image too big! 0MB ~ 2MB")
            console.log("Image too big! 0MB ~ 2MB")
            document.getElementById(sourceId).value = ""
        }
    }
    // 拿到 input 选择文件的本地地址
    function getFileUrl(sourceUrl) {
        var url
        if (navigator.userAgent.indexOf("MSIE")>=1) { // IE
            url = document.getElementById(sourceUrl).value
        } else if (navigator.userAgent.indexOf("Firefox")>0) { // Firefox
            url = window.URL.createObjectURL(document.getElementById(sourceUrl).files.item(0))
        } else if (navigator.userAgent.indexOf("Chrome")>0) { // Chrome
            url = window.URL.createObjectURL(document.getElementById(sourceUrl).files.item(0))
        }
        return url
    }
    // 传入地址，图片转 base64
    function getBase64(imgUrl) {
        window.URL = window.URL || window.webkitURL
        var xhr = new XMLHttpRequest()
        xhr.open("get", imgUrl, true)
        xhr.responseType = "blob"
        xhr.onload = function() {
            if (this.status == 200) {
                // 得到一个 blob 对象
                var blob = this.response
                console.log("blob:", blob)
                
                let oFileReader = new FileReader()
                oFileReader.onloadend = function(e) {
                    // 此处拿到的已经是 base64 的图片了,可以赋值做相应的处理
                    console.log(e.target.result)
                    let name = imgUrl.name;
                    const index = name.lastIndexOf('.');
                    let extend = index >= 0 ? name.substring(index) : ''; // 从名字取
                    if (!extend) extend = '.' + file.type.split('/')[1]; // 从文件类型取
                    name = file.uid + extend;
                    let blobPic = {
                        content : e.target.result,
                        fileType : blob.type
                    }
                    // 提交图片,拿到后端返回的图片 id
                    picId = photo.savePic(blobPic, "1", "1", "")
                    console.log("picId:", picId)
                    // 提交限制
                    if (picId = null) {
                        console.log("没有picId, 已限制提交")
                        alert("photo upload false! Try again!")
                        document.getElementById(subPost).disabled = true
                    }
                }
                // oFileReader.readAsDataURL(blob)
            }
        }
        xhr.send()
    }
    



    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!name || !text) return
        sendMessage({ text, name, picId })
        switchover()
    };

    const sendMessage = async ({ text, name, picId }) => {
        const authClient = await AuthClient.create()
        const identity = await authClient.getIdentity()

        try {
            // ----- recover when live
            // const authenticatedActor = await createActor(canisterId, {
            //     agentOptions: { identity }
            // })
            // ----- end

            // ----- to be removed when live
            const userActor = await Actor.createActor(idlFactory, {
                agent,
                canisterId: userId,
            })
            // ----- end

            let record = {
                "user_other_id": "",
                "text": text,
                "user_other_name": name,
                "pic_id":picId,
            }

            // ----- recover when live
            // const newMessage = await authenticatedActor.getInvitationCode(record)
            // ----- end

            // ----- to be removed when live
            const newMessage = await userActor.getInvitationCode(record)
            // ----- end

            const code = await newMessage.Ok
            setCode(code)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { loading() }, [])
    useEffect(() => { setCode(code) }, [code])

    return (
        <section >
            <Auth />

            <div className="container">
                <div className="card">
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
                                                {/* 加空格是因为样式用了居中布局，居中之后加空格让文字左对齐，如果用左对齐的话整个文本都左对齐了 */}
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
                                        <div className="NFT-title">Media</div>
                                        <div className="NFT-content">
                                        <input
                                                name="imgOne"
                                                id="imgOne"
                                                onChange={(e) => checkImg(e.target.id, 'imgPre')}
                                                type="file"
                                                accept="image/x-png,image/jpeg,image/gif,image/svg+xml,image/webp"
                                                multiple
                                            />
                                            <div className="explore">explore 
                                                <svg t="1663486927256" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1485" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M436.053333 308.053333a32 32 0 0 1 45.226667 0L685.226667 512l-203.946667 203.946667a32 32 0 1 1-45.226667-45.226667L594.773333 512l-158.72-158.72a32 32 0 0 1 0-45.226667z" p-id="1486" fill="#ffffff">
                                                    </path>
                                                </svg>
                                            </div>
                                            <div className="create">create 
                                                <svg t="1663486927256" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1485" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M436.053333 308.053333a32 32 0 0 1 45.226667 0L685.226667 512l-203.946667 203.946667a32 32 0 1 1-45.226667-45.226667L594.773333 512l-158.72-158.72a32 32 0 0 1 0-45.226667z" p-id="1486" fill="#ffffff">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* sub按钮 */}
                            <button id="subPost" className="btn-submit">Submit</button>
                        </form>
                    </div>

                    <div className="content-2">
                        <Card receiver={name} text={text} code={code} sender={user} />
                    </div>

                </div>

                {/* 右上角下拉菜单 */}
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