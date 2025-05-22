interface EmailData {
  email: string;
  website: string;
}

export async function sendInquiryEmail(data: EmailData) {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to send email");
    }

    return { success: true, data: result.data };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}
