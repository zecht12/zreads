import React from 'react'

interface Props{
    name: string,
    id: string,
    
}

export default function UserCard({id, key, imageUrl, name, username, personType}:Props) {
    return (
        <div>UserCard</div>
    )
}
