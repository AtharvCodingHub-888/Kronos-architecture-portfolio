import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, projectType, budget, message } = body;

        if (!name || !email || !projectType || !budget || !message) {
            return Response.json(
                { success: false, error: "All fields are required." },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "KRONOS Inquiry <onboarding@resend.dev>",
            to: "mythosai888111@gmail.com",
            subject: `New Consultation Request from ${name}`,
            replyTo: email,
            html: `
                <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
                    <div style="border-bottom: 2px solid #d4af37; padding-bottom: 16px; margin-bottom: 24px;">
                        <h2 style="margin: 0; font-size: 20px; letter-spacing: 2px; color: #111;">KRONOS — New Client Inquiry</h2>
                    </div>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #888; width: 140px;">Name</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #888;">Email</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;"><a href="mailto:${email}" style="color: #d4af37;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #888;">Project Type</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">${projectType}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #888;">Budget Range</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">${budget}</td>
                        </tr>
                    </table>
                    <div style="margin-bottom: 24px;">
                        <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #888; margin-bottom: 8px;">Project Brief</p>
                        <p style="font-size: 14px; line-height: 1.8; white-space: pre-wrap;">${message}</p>
                    </div>
                    <div style="border-top: 1px solid #eee; padding-top: 16px; font-size: 11px; color: #aaa; letter-spacing: 1px; text-transform: uppercase;">
                        Sent via KRONOS Portfolio Contact Form
                    </div>
                </div>
            `,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error("Resend email error:", error);
        return Response.json(
            { success: false, error: "Failed to send email." },
            { status: 500 }
        );
    }
}
