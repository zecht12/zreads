"use server"

import { connectToDB } from '../mongoose'

export async function fetchUser(userId: string) {
    connectToDB();
}

export async function updateUser({userId: string,bio: string,name: string,username: string,}: Params): Promise<void> {
    connectToDB();
}