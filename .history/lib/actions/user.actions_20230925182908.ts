"use server"

import { connectToDB } from '../mongoose'
import User from '../models/user.model';
import { revalidatePath } from 'next/cache';

export async function fetchUser(userId: string) {
    connectToDB();
}

export async function updateUser(userId: string, image: string, path: string,bio: string,name: string,username: string,): Promise<void> {
    connectToDB();
    try{
        
    }
}