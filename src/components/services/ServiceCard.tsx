
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceFeature {
  key: string;
  text: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: ServiceFeature[];
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    }
  })
};

export const ServiceCard = ({ title, description, icon, features, index }: ServiceCardProps) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className="rounded-lg p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
    >
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-full bg-gray-50 mr-4">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">
          {title}
        </h3>
      </div>
      <p className="text-gray-700 mb-8 leading-relaxed">{description}</p>
      <ul className="space-y-4">
        {features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{feature.text}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
