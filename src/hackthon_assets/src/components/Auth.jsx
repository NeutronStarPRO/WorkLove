import React, { useEffect, useState } from "react"
import { AuthClient } from "@dfinity/auth-client"
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/mint-page/img/logo.png"
import { FaUserCircle, FaCaretDown } from "react-icons/fa"
import LikeMessage from "../../assets/mint-page/img/LikeMessage.png"

function Auth() {
  const [signedIn, setSignedIn] = useState(false)
  const [principal, setPrincipal] = useState("")
  const [client, setClient] = useState()
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate()
  const initAuth = async () => {
    // create auth method
    const client = await AuthClient.create()
    // check if user is authenticated
    const isAuthenticated = await client.isAuthenticated()

    setClient(client)

    if (isAuthenticated) {
      // get auth client identity
      const identity = client.getIdentity()
      const principal = identity.getPrincipal().toString()
      setSignedIn(true)
      setPrincipal(principal)
    }
  }

  const signIn = async () => {
    const { identity, principal } = await new Promise((resolve, reject) => {
      client.login({
        identityProvider: "https://identity.ic0.app",
        onSuccess: () => {
          const identity = client.getIdentity()
          const principal = identity.getPrincipal().toString()
          resolve({ identity, principal })
        },
        onError: reject,
      })
    })
    setSignedIn(true)
    setPrincipal(principal)
    // setUser(principal)
    localStorage.setItem('user', principal)
    navigate('/mint')
  }

  const signOut = async () => {
    await client.logout()
    setSignedIn(false)
    setPrincipal("")
    // setUser(null)
    localStorage.clear()
    navigate('/')
  }


  useEffect(() => {
    initAuth()
  }, [])

  return (

    <div className="navigation-bar" id="navigation-container">

      <Link to='/'>
        <img src={logo} />
      </Link>

        <a className="doc" href="https://loveincyber.super.site/" target="_blank">Docs</a>


        {!signedIn && client ? (

          <a onClick={signIn} className="walletborder">
            Sign in
          </a>

        ) : null
        }
        <div className="notice">
          {
            signedIn && (
              <>
                <div className="btn-container">
                  <div
                    type="button"
                    className="btn"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <FaUserCircle />
                      {principal.substring(0, 6)}
                    <FaCaretDown />
                  </div>
                  <div className={showDropdown ? "dropdown show-dropdown" : "dropdown"}>
                    <div  className="dropdown-btn" >
                      <img src={LikeMessage} alt="" />
                      <Link to='/mint'>
                        &nbsp;&nbsp;Send Message
                      </Link>
                    </div>
                    <div className="dropdown-btn" >
                      <Link to='/invite'>
                      <svg t="1665140608220" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2545">
                        <path d="M653.224 370.782c119.494 119.618 117.854 311.396 0.72 429.18-0.22 0.24-0.48 0.5-0.72 0.74l-134.4 134.4c-118.54 118.54-311.398 118.524-429.92 0-118.54-118.52-118.54-311.4 0-429.92l74.212-74.212c19.68-19.68 53.572-6.6 54.588 21.212 1.296 35.444 7.652 71.054 19.38 105.442 3.972 11.644 1.134 24.524-7.566 33.224l-26.174 26.174c-56.052 56.052-57.81 147.32-2.31 203.92 56.048 57.158 148.172 57.498 204.65 1.02l134.4-134.38c56.382-56.382 56.146-147.514 0-203.66-7.402-7.388-14.858-13.128-20.682-17.138a32.074 32.074 0 0 1-13.894-25.212c-0.792-21.134 6.696-42.912 23.396-59.612l42.108-42.11c11.042-11.042 28.364-12.398 41.168-3.462a304.964 304.964 0 0 1 41.044 34.394zM935.094 88.898c-118.522-118.524-311.38-118.54-429.92 0l-134.4 134.4c-0.24 0.24-0.5 0.5-0.72 0.74-117.132 117.784-118.774 309.562 0.72 429.18a304.908 304.908 0 0 0 41.042 34.392c12.804 8.936 30.128 7.578 41.168-3.462l42.108-42.11c16.7-16.7 24.188-38.478 23.396-59.612a32.074 32.074 0 0 0-13.894-25.212c-5.824-4.01-13.28-9.75-20.682-17.138-56.146-56.146-56.382-147.278 0-203.66l134.4-134.38c56.478-56.478 148.6-56.138 204.65 1.02 55.5 56.6 53.744 147.868-2.31 203.92l-26.174 26.174c-8.7 8.7-11.538 21.58-7.566 33.224 11.728 34.388 18.084 69.998 19.38 105.442 1.018 27.812 34.908 40.892 54.588 21.212l74.212-74.212c118.542-118.518 118.542-311.398 0.002-429.918z" fill="#de9d9b" p-id="2546">
                        </path>
                      </svg>
                      &nbsp;&nbsp;Link Code
                      </Link>
                    </div>
                    <div className="dropdown-btn" onClick={signOut}>
                      <Link to=''>
                      <svg t="1665141200771" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2548">
                        <path d="M972.8 512l-307.2-256 0 153.6-358.4 0 0 204.8 358.4 0 0 153.6 307.2-256zM153.6 153.6l409.6 0 0-102.4-409.6 0c-56.32 0-102.4 46.08-102.4 102.4l0 716.8c0 56.32 46.08 102.4 102.4 102.4l409.6 0 0-102.4-409.6 0 0-716.8z" p-id="2549" fill="#de9d9b">
                        </path>
                      </svg>
                        &nbsp;&nbsp;Logout
                      </Link>
                    </div>
                  </div>
                </div>
              </>

            )
          }
        </div>
      </div>

  )
}

export { Auth }
