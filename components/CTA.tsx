export function CTA() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="card p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to build something remarkable?</h3>
            <p className="text-slate-600">Senior-level craft. Calgary roots. Global impact.</p>
          </div>
          <div className="flex gap-3">
            <a href="#estimate" className="btn-primary">Get a Quote</a>
            <a href="#contact" className="btn-ghost">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
