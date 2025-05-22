import { Resend } from "resend";

const resend = new Resend("re_jfYxqxjT_4gBLnAmgTDGxcBtjaPshm8Tr");

export default async function mail(email: string, website: string) {
  const data = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "surajnimeshh1000@gmail.com",
    subject: "Confirm your email",
    html: `
    <h1>New Website Submission</h1>
    <p>Website: ${website}</p>
    <p>Email: ${email}</p>
    `,
  });
  return data;
}
