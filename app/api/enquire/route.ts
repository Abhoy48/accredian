import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real app, you would save this to a database (Prisma, MongoDB, etc.)
    // or send an email via Resend/SendGrid.
    console.log('New Lead Received:', body);

    // Mock delay to simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ 
      success: true, 
      message: 'Your inquiry has been received! Our team will contact you soon.' 
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to process inquiry.' 
    }, { status: 500 });
  }
}
