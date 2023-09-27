import React from 'react'

interface Props{
    name: string,
    id: string,
    username: string,
    personType: string,
    imageUrl: string,
}

export default function UserCard({id, key, imageUrl, name, username, personType}:Props) {
    return (
        <div className='use-card'>
            
        </div>
    )
}
