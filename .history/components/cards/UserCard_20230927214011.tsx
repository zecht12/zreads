import Image from 'next/image'
import React from 'react'

interface Props{
    name: string,
    id: string,
    username: string,
    personType: string,
    imageUrl: string,
}

export default function UserCard({id, imageUrl, name, username, personType}:Props) {
    return (
        <div className='user-card'>
            <div className='user-card_avatar '>
                <Image src={imageUrl} alt='logo' width={48} height={48} className='rounde full'  />
                <div className='flex text-ellipsis'>
                    <h4>{name|</h4>
                </div>
            </div
        </div>
    )
}
