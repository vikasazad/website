import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, website } = await req.json();
    const { data, error } = await resend.emails.send({
      from: "Work <onboarding@resend.dev>",
      to: ["surajnimeshh1000@gmail.com"],
      subject: "New Website Submission",
      html: `
    <h1>New Website Submission</h1>
    <p>Website: ${website}</p>
    <p>Email: ${email}</p>
    `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
