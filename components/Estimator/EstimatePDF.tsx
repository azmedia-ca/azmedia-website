import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 11,
    color: '#333333',
  },
  header: {
    backgroundColor: '#667eea',
    padding: 30,
    marginBottom: 30,
    borderRadius: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    opacity: 0.9,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#667eea',
    marginBottom: 12,
    paddingBottom: 6,
    borderBottom: '2px solid #667eea',
  },
  infoRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f9fafb',
    marginBottom: 6,
    borderRadius: 4,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#4b5563',
    width: '40%',
  },
  infoValue: {
    color: '#1f2937',
    width: '60%',
  },
  estimateBox: {
    backgroundColor: '#f3f4f6',
    border: '2px solid #667eea',
    borderRadius: 8,
    padding: 20,
    marginTop: 15,
  },
  estimateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottom: '1px solid #e5e7eb',
  },
  estimateRowLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  estimateTotal: {
    marginTop: 10,
    paddingTop: 10,
    borderTop: '2px solid #667eea',
  },
  estimateTotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#667eea',
  },
  featureItem: {
    padding: 8,
    backgroundColor: '#f9fafb',
    marginBottom: 5,
    borderRadius: 4,
  },
  featureText: {
    fontSize: 11,
  },
  footer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    textAlign: 'center',
  },
  footerText: {
    fontSize: 10,
    color: '#6b7280',
    marginBottom: 4,
  },
  disclaimer: {
    marginTop: 15,
    fontSize: 9,
    color: '#6b7280',
    fontStyle: 'italic',
  },
})

type EstimatePDFProps = {
  info: {
    name: string
    email: string
    company?: string
    deliveryDate?: string
    projectName: string
  }
  selection: {
    service: string
    complexity: string
    daysUntil: number
  }
  features: Record<string, number>
  estimate: {
    base: number
    subtotal: number
    complexity: number
    urgency: number
    total: number
  }
}

export const EstimatePDF: React.FC<EstimatePDFProps> = ({ info, selection, features, estimate }) => {
  const selectedFeatures = Object.entries(features).filter(([, qty]) => qty > 0)

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Project Estimate</Text>
          <Text style={styles.headerSubtitle}>AZ Media - Your Digital Partner</Text>
        </View>

        {/* Client Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Client Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Project Name:</Text>
            <Text style={styles.infoValue}>{info.projectName}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Full Name:</Text>
            <Text style={styles.infoValue}>{info.name}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>{info.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Company:</Text>
            <Text style={styles.infoValue}>{info.company || 'Not provided'}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Preferred Delivery:</Text>
            <Text style={styles.infoValue}>{info.deliveryDate || 'Not specified'}</Text>
          </View>
        </View>

        {/* Project Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Project Details</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Service Type:</Text>
            <Text style={styles.infoValue}>{selection.service}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Complexity Level:</Text>
            <Text style={styles.infoValue}>{selection.complexity}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Timeline:</Text>
            <Text style={styles.infoValue}>{selection.daysUntil} days</Text>
          </View>
        </View>

        {/* Selected Features */}
        {selectedFeatures.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Selected Features</Text>
            {selectedFeatures.map(([key, qty]) => (
              <View key={key} style={styles.featureItem}>
                <Text style={styles.featureText}>
                  {key}: {qty}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Cost Estimate */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cost Estimate</Text>
          <View style={styles.estimateBox}>
            <View style={styles.estimateRow}>
              <Text>Base Price:</Text>
              <Text style={{ fontWeight: 'bold' }}>${estimate.base.toLocaleString()} CAD</Text>
            </View>
            <View style={styles.estimateRow}>
              <Text>Features Subtotal:</Text>
              <Text style={{ fontWeight: 'bold' }}>${estimate.subtotal.toLocaleString()} CAD</Text>
            </View>
            <View style={styles.estimateRow}>
              <Text>Complexity Multiplier:</Text>
              <Text style={{ fontWeight: 'bold' }}>×{estimate.complexity.toFixed(2)}</Text>
            </View>
            <View style={styles.estimateRowLast}>
              <Text>Urgency Multiplier:</Text>
              <Text style={{ fontWeight: 'bold' }}>×{estimate.urgency.toFixed(2)}</Text>
            </View>

            <View style={styles.estimateTotal}>
              <View style={styles.estimateTotalRow}>
                <Text>Total Estimate:</Text>
                <Text>${estimate.total.toLocaleString()} CAD</Text>
              </View>
            </View>
          </View>

          <Text style={styles.disclaimer}>
            * This is an automated estimate with ±15% confidence. Final pricing will be confirmed after project consultation.
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>AZ Media | Calgary, Alberta</Text>
          <Text style={styles.footerText}>hello@az-media.ca | +1 (587) 3936400</Text>
          <Text style={[styles.footerText, { marginTop: 10 }]}>
            We'll review this estimate and get back to you within 24 hours.
          </Text>
        </View>
      </Page>
    </Document>
  )
}
