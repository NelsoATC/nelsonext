
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  badgeColor?: string;
  badgeBackgroundColor?: string;
  titleSize?: string;
  centerText?: boolean;
  maxWidth?: string;
  marginBottom?: string;
}

export const SectionHeader = ({
  badge,
  title,
  subtitle,
  badgeColor = '#111827',
  badgeBackgroundColor = 'rgba(17, 24, 39, 0.05)',
  titleSize = 'text-4xl',
  centerText = true,
  maxWidth = 'max-w-2xl',
  marginBottom = 'mb-8'
}: SectionHeaderProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`${centerText ? 'text-center' : ''} ${marginBottom}`}
    >
      <span 
        className="inline-block px-3 py-1 text-sm font-medium rounded-full shadow-sm"
        style={{ backgroundColor: badgeBackgroundColor, color: badgeColor }}
      >
        {badge}
      </span>
      <h2 className={`mt-4 font-bold text-gray-900 ${titleSize}`}>
        {title}
      </h2>
      <p className={`mt-4 text-lg text-gray-600 ${centerText ? 'mx-auto' : ''} ${maxWidth}`}>
        {subtitle}
      </p>
    </motion.div>
  );
};
