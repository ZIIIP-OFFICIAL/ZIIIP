import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../services/emailService";
// import {
//   GetEmailBody,
//   GetEmailSubject,
// } from "../../services/emailTemplateService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only post request allowed" });
  }
  try {
    const { name, model, contactNo } = req.body;

    //send email to admin
    // const emailSubject = await GetEmailSubject("contact/contact_subject.txt");

    const data = {
      name: name,
      model: model,
      contactNo: contactNo,
    };

    // const emailBody = await GetEmailBody("contact/contact_body.txt", data);

    // const emailParam = {
    //   to: "lsuyogya@gmail.com",
    //   // from: process.env.ADMIN_EMAIL as string,
    //   subject: emailSubject,
    //   text: emailBody,
    // };

    // sendEmail(emailParam);

    return res.status(200).json({ message: "Order Email Sent Successfully" });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    res.status(500).json({ message: errorMessage });
  }
}
