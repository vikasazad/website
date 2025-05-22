import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, website } = await request.json();

    const response = await resend.emails.send({
      from: "Buildbility <onboarding@resend.dev>",
      to: ["surajnimeshh1000@gmail.com"],
      subject: "New Business Inquiry",
      html: `
        <h2>New Business Inquiry</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
      `,
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
