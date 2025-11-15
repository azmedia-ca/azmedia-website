import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, company, phone, message, budget, timeline } = data

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, message: 'Missing required fields' }, { status: 400 })
    }

    const html = `
      <h2>Contact Form — AZ Media</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || '-'}</p>
      <p><strong>Phone:</strong> ${phone || '-'}</p>
      <p><strong>Budget:</strong> ${budget || '-'}</p>
      <p><strong>Timeline:</strong> ${timeline || '-'}</p>
      <hr/>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `

    await resend.emails.send({
      from: process.env.RESEND_FROM || 'AZ Media <noreply@updates.az-media.ca>',
      to: 'info@az-media.ca',
      subject: `Contact — ${name}`,
      html
    })

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    console.error(e)
    return NextResponse.json({ ok: false, message: e?.message || 'Failed to send' }, { status: 500 })
  }
}
