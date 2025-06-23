import React, { PureComponent } from 'react';
import Navbar from '../components/Navbar';
import PetKnowledge from '../components/PetKnowledge';
import SubscribeSection from '../components/SubscribeSection';
import { motion } from 'framer-motion';

export default class About extends PureComponent {
  render() {
    return (
      <div>
        <Navbar />

        {/* Animate PetKnowledge */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <PetKnowledge />
        </motion.div>

        {/* Animate SubscribeSection */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          <SubscribeSection />
        </motion.div>
      </div>
    );
  }
}
