import Image from 'next/image'
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
        <div className='user-card'>
            <div className='user-card_avatar '>
                <Image src={imageUrl} alt />
            </div>
        </div>
    )
}
