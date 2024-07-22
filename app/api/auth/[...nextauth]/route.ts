
import { NextResponse } from 'next/server';

// Define a GET handler to return a static response
export async function GET() {
  return NextResponse.json({
    message: 'This is a static response for testing purposes.',
  });
}
