'use client'
import { motion } from 'framer-motion'
import { Shield, Zap, Target, Award, Clock, HeadphonesIcon } from "lucide-react"

export function Features() {
  const features = [
    {
      title: "Premium Design Excellence",
      description: "Award-winning creative that sets your brand apart and drives meaningful engagement.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Lightning-Fast Development",
      description: "Cutting-edge technology stack ensuring blazing performance and seamless user experiences.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Strategic ROI Focus",
      description: "Every decision backed by data, every campaign optimized for maximum return on investment.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Enterprise-Grade Security",
      description: "Bank-level security protocols protecting your data and your customers' privacy.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Rapid Delivery Promise",
      description: "Focused sprints and agile methodology ensuring your projects launch on time, every time.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "White-Glove Support",
      description: "Dedicated account management and 24/7 technical support when you need it most.",
      icon: <HeadphonesIcon className="w-6 h-6" />,
    },
  ];

  return (
    <div className="relative">
      {/* Section header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Award className="w-4 h-4" />
          Why Choose AZ Media
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Premium Features That 
          <span className="block text-brand-600">Drive Real Results</span>
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We don't just build websites and campaigns—we engineer digital experiences that 
          transform your business and exceed your goals.
        </p>
      </div>

      {/* Features grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className="card p-8 h-full hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 bg-brand-100 group-hover:bg-brand-200 rounded-2xl mb-6 transition-all duration-300">
                <div className="text-brand-600 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Subtle border accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-brand-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </motion.div>
        ))}
      </div>

      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-brand-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-brand-200/20 rounded-full blur-3xl -z-10" />
    </div>
  );
}
