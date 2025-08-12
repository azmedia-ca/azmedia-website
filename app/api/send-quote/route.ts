import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const {
      info, // step 0
      selection, // step 1
      features, // step 2
      estimate // step 3
    } = data

    const required = ['name','email','projectName']
    for (const key of required) {
      if (!info?.[key]) return NextResponse.json({ ok: false, message: `Missing ${key}` }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    const html = `
      <h2>New Instant Quote — AZ Media</h2>
      <p><strong>Project:</strong> ${info.projectName}</p>
      <p><strong>Name:</strong> ${info.name}</p>
      <p><strong>Email:</strong> ${info.email}</p>
      <p><strong>Company:</strong> ${info.company || '-'}</p>
      <p><strong>Preferred Delivery:</strong> ${info.deliveryDate || '-'}</p>
      <hr/>
      <h3>Selection</h3>
      <pre>${JSON.stringify(selection, null, 2)}</pre>
      <h3>Features</h3>
      <pre>${JSON.stringify(features, null, 2)}</pre>
      <h3>Estimate (CAD)</h3>
      <pre>${JSON.stringify(estimate, null, 2)}</pre>
    `

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'AZ Media <no-reply@az-media.ca>',
      to: 'info@az-media.ca',
      subject: `Instant Quote — ${info.projectName} (${info.name})`,
      html
    })

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    console.error(e)
    return NextResponse.json({ ok: false, message: e?.message || 'Failed to send' }, { status: 500 })
  }
}
