import React, { PureComponent } from 'react'
import Navbar from '../components/Navbar'
import PetGallery from '../components/PetGallery'
import { motion } from 'framer-motion'
import SubscribeSection from '../components/SubscribeSection'

export class Category extends PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 40 }}     
          animate={{ opacity: 1, y: 0 }}       n
          transition={{ duration: 0.6, ease: 'easeOut' }}  
        >
          <PetGallery />
        </motion.div>
        <SubscribeSection />
      </div>
    )
  }
}

export default Category
