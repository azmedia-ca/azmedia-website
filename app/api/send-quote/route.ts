import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Format features list
    const featuresList = Object.entries(features)
      .filter(([_, qty]) => (qty as number) > 0)
      .map(([key, qty]) => `<li><strong>${key}:</strong> ${qty}</li>`)
      .join('')

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
            }
            .content {
              background: #ffffff;
              padding: 30px;
              border: 1px solid #e5e7eb;
              border-top: none;
            }
            .section {
              margin-bottom: 25px;
            }
            .section h2 {
              color: #667eea;
              font-size: 20px;
              margin-bottom: 15px;
              border-bottom: 2px solid #667eea;
              padding-bottom: 8px;
            }
            .info-grid {
              display: grid;
              gap: 10px;
            }
            .info-row {
              display: flex;
              padding: 8px;
              background: #f9fafb;
              border-radius: 5px;
            }
            .info-label {
              font-weight: 600;
              color: #4b5563;
              min-width: 150px;
            }
            .info-value {
              color: #1f2937;
            }
            .estimate-box {
              background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
              border: 2px solid #667eea;
              border-radius: 10px;
              padding: 20px;
              margin-top: 20px;
            }
            .estimate-row {
              display: flex;
              justify-content: space-between;
              padding: 8px 0;
              border-bottom: 1px solid #e5e7eb;
            }
            .estimate-row:last-child {
              border-bottom: none;
            }
            .estimate-total {
              font-size: 24px;
              font-weight: bold;
              color: #667eea;
              margin-top: 10px;
              padding-top: 10px;
              border-top: 2px solid #667eea;
            }
            ul {
              list-style: none;
              padding: 0;
            }
            ul li {
              padding: 8px;
              margin: 5px 0;
              background: #f9fafb;
              border-radius: 5px;
            }
            .footer {
              background: #f9fafb;
              padding: 20px;
              text-align: center;
              border-radius: 0 0 10px 10px;
              color: #6b7280;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>📊 New Project Estimate</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">AZ Media - Your Digital Partner</p>
          </div>

          <div class="content">
            <div class="section">
              <h2>👤 Client Information</h2>
              <div class="info-grid">
                <div class="info-row">
                  <span class="info-label">Project Name:</span>
                  <span class="info-value">${info.projectName}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Full Name:</span>
                  <span class="info-value">${info.name}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Email:</span>
                  <span class="info-value">${info.email}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Company:</span>
                  <span class="info-value">${info.company || 'Not provided'}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Preferred Delivery:</span>
                  <span class="info-value">${info.deliveryDate || 'Not specified'}</span>
                </div>
              </div>
            </div>

            <div class="section">
              <h2>🎯 Project Details</h2>
              <div class="info-grid">
                <div class="info-row">
                  <span class="info-label">Service Type:</span>
                  <span class="info-value">${selection.service}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Complexity Level:</span>
                  <span class="info-value">${selection.complexity}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Timeline:</span>
                  <span class="info-value">${selection.daysUntil} days</span>
                </div>
              </div>
            </div>

            ${featuresList ? `
              <div class="section">
                <h2>✨ Selected Features</h2>
                <ul>
                  ${featuresList}
                </ul>
              </div>
            ` : ''}

            <div class="section">
              <h2>💰 Cost Estimate</h2>
              <div class="estimate-box">
                <div class="estimate-row">
                  <span>Base Price:</span>
                  <span><strong>$${estimate.base.toLocaleString()} CAD</strong></span>
                </div>
                <div class="estimate-row">
                  <span>Features Subtotal:</span>
                  <span><strong>$${estimate.subtotal.toLocaleString()} CAD</strong></span>
                </div>
                <div class="estimate-row">
                  <span>Complexity Multiplier:</span>
                  <span><strong>×${estimate.complexity.toFixed(2)}</strong></span>
                </div>
                <div class="estimate-row">
                  <span>Urgency Multiplier:</span>
                  <span><strong>×${estimate.urgency.toFixed(2)}</strong></span>
                </div>
                <div class="estimate-total">
                  <div class="estimate-row">
                    <span>Total Estimate:</span>
                    <span>$${estimate.total.toLocaleString()} CAD</span>
                  </div>
                </div>
              </div>
              <p style="margin-top: 15px; color: #6b7280; font-size: 14px;">
                <em>* This is an automated estimate with ±15% confidence. Final pricing will be confirmed after project consultation.</em>
              </p>
            </div>
          </div>

          <div class="footer">
            <p><strong>AZ Media</strong> | Calgary, Alberta</p>
            <p>📧 hello@az-media.ca | 📞 +1 (587) 3936400</p>
            <p style="margin-top: 10px; font-size: 12px;">We'll review this estimate and get back to you within 24 hours.</p>
          </div>
        </body>
      </html>
    `

    // Get receivers from environment variable
    const receivers = process.env.RECEIVERS?.split(',').map(email => email.trim()) || ['info@az-media.ca']

    await resend.emails.send({
      from: process.env.RESEND_FROM || 'AZ Media <noreply@updates.az-media.ca>',
      to: receivers,
      cc: [info.email],
      subject: `New Estimate Request: ${info.projectName} - $${estimate.total.toLocaleString()} CAD`,
      html
    })

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    console.error(e)
    return NextResponse.json({ ok: false, message: e?.message || 'Failed to send' }, { status: 500 })
  }
}
