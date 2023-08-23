import { motion } from 'framer-motion'

import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import PropTypes from 'prop-types';

const FeedbackCard = ({ index, name, testimonial, designation, company}) => (
  <motion.div 
    variants={fadeIn("","spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>&quot;</p>
    <div className='mt-1'>
      <p className='text-white trackinf-wider text-[18px]'>{testimonial}</p>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} @ {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);FeedbackCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const Feedbacks = () => {
  return (
    <>
      <div className='mt-12 bg-black-100 rounded-[20px]'>
        <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>to whom I am truly grateful</p>
            <h2 className={styles.sectionHeadText}>Professional Recommenders</h2>
          </motion.div>
        </div>

        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard 
              key={testimonial.name}
              index={index}
              {...testimonial}
            />         
          ))}
      </div>
    </div>
    </>
    
  )
}

const FeedbackSection = SectionWrapper(Feedbacks)
export default FeedbackSection 
