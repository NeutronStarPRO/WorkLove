import Wrapper from "../../assets/wrappers/SearchBox";
import React from 'react'
import { useState } from 'react'
const SearchBox = () => {
    const [code, setCode] = useState("")
    return (
        <Wrapper>
            <div><div className="search">
                <input type="text" name="q" className="softbox" placeholder="Type to SEARCH" onChange={(e) => setCode(e.target.value)} />
                <button type="submit" className="softbtn"><i className="fa fa-search" onClick={onSubmit}></i></button>
            </div></div>
        </Wrapper>
    )
}

export default SearchBox