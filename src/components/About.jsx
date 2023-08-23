/* eslint-disable react/no-unknown-property */
import { Tilt } from  'react-tilt'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types';

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard= ({index, title, icon}) => (
  <Tilt className='xs:w-[250px] w-full'
        options={{
          max:45,
          scale:1,
          speed:450,
        }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0,75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
    </motion.div>
  </Tilt>
);
ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      
      <motion.p variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        👨‍💻 I&apos;m a skilled software developer, I excel in JavaScript, with deep expertise in frameworks like React, Node.js, and Django. 
        🚀 My adaptability allows me to quickly grasp new concepts, and I pride myself on collaborating closely with clients to craft efficient, scalable, and user-centric solutions. 
        🌍 Let&apos;s partner up and turn your visions into reality!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index) =>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}
const AboutSection = SectionWrapper(About, "about");
export default AboutSection;
