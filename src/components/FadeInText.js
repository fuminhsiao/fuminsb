import React from 'react';
import { motion } from 'framer-motion';

function FadeInText({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} // 初始透明度為0
      animate={{ opacity: 1 }} // 掛載時透明度逐漸增加至1
      exit={{ opacity: 0 }} // 卸載時透明度逐漸減少至0
      transition={{ duration: 1 }} // 設置動畫持續時間為1秒
    >
      <p style={{ fontSize: '2rem', textAlign: 'center' }}>{text}</p>
    </motion.div>
  );
}

export default FadeInText;
