import { NextResponse } from 'next/server';
import { execSync } from 'child_process';

export async function GET() {
    try {
        const output = execSync('bash /home/bali-vibes-tech/umacoding/deploy.sh 2>&1', {
            encoding: 'utf8',
            timeout: 60000
        });
        return NextResponse.json({ success: true, output });
    } catch (err: any) {
        return NextResponse.json(
            {
                success: false,
                error: err.message,
                output: err.stdout ? err.stdout.toString() : err.message
            },
            { status: 500 }
        );
    }
}
