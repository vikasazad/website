import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

interface EmailData {
  email: string;
  website: string;
}

export async function sendInquiryEmail(data: EmailData) {
  try {
    const response = await resend.emails.send({
      from: "Buildbility <onboarding@resend.dev>",
      to: ["surajnimeshh1000@gmail.com"],
      subject: "New Business Inquiry",
      html: `
        <h2>New Business Inquiry</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Website:</strong> ${data.website}</p>
      `,
    });
    return { success: true, data: response };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}
