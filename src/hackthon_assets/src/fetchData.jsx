import React, { useEffect, useState } from 'react'
import Loading from './loading'

const url = 'https://cyberprofile-v2.vercel.app/api/profile/'
const id = '0xeBeD0BF2701e905b4C576B3dC943D797bAc226ed'
function FetchData() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [avatar, setAvatar] = useState(null)
    useEffect(() => {
        async function fetchUser() {
            setLoading(true)
            try {

                const resp = await fetch(`${url}${id}`)
                const data = await resp.json()
                if (data) {
                    setData(data)
                } if (data.ensAvatar) {
                    setAvatar(data.ensAvatar.url)
                }
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }
        fetchUser()
    }, [id])
    if (loading) return <Loading />
    if (!data) return <h3>user address doesn't exist.</h3>
    return (
        <div>
            <h2>address:{data.address}</h2>
            {data.name && <h2>name: {data.name}</h2>}
            {avatar && <img src={avatar} alt={data.name} width={100} />}
        </div>
    )
}

export default FetchData