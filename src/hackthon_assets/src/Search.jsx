import React from 'react';
import Message from './Message';


function Search({ data, input }) {

    const filteredPersons = [...data].filter(
        person => {
            return (
                person
                    .user_self_id
                    .toLowerCase()
                    .includes(input.toLowerCase()) ||
                person
                    .text
                    .toLowerCase()
                    .includes(input.toLowerCase())
            );
        }
    );

    return (
        <>
            <Message data={filteredPersons} />
        </>

    );
}

export default Search;