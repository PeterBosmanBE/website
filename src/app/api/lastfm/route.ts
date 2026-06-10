import { LastFMUser } from 'lastfm-ts-api';
import { NextResponse } from 'next/server';

export async function GET() {
    const apiKey = process.env.LASTFM_TOKEN;
    if (!apiKey) return NextResponse.json({ error: 'Missing API key' }, { status: 500 });

    const user = new LastFMUser(apiKey, process.env.LASTFM_SECRET!, process.env.LASTFM_SESSION!);

    const recent = await user.getRecentTracks({ user: process.env.LASTFM_USERNAME, limit: 5 });
    return NextResponse.json(recent);
}