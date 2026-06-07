import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { venue, day, time } = await request.json();

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.NOTIFICATION_EMAIL!,
      subject: "🎉 Ashley Accepted Your Date Proposal!",
      html: `
        <h2>❤️ Ashley accepted your date proposal!</h2>

        <p><strong>📍 Venue:</strong> ${venue}</p>

        <p><strong>📅 Day:</strong> ${day}</p>

        <p><strong>🕒 Time:</strong> ${time}</p>

        <hr>

        <p>Go plan your date! 😊</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { success: false, error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}