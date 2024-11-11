import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import michiganSkiBackground from "../assets/images/homepage/michigan-ski-background.webp";
import pic1 from "../assets/images/coaches/fumin.jpeg";
import pic2 from "../assets/images/self/1.jpeg";
import pic3 from "../assets/images/self/2.jpeg";

import pic4 from "../assets/images/self/3.jpeg";

import pic5 from "../assets/images/self/4.jpeg";

import pic6 from "../assets/images/self/5.jpeg";

import pic7 from "../assets/images/self/6.jpeg";



// Styling components
const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Section = styled.div`
  width: 1024px;
  text-align: center;
  margin-bottom: 2em;
`;

const FullscreenSection = styled(Section)`
  height: 100vh;
  background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.2),
      rgba(0, 0, 0, 0.7)
    ),
    url(${michiganSkiBackground}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: #f0f8ff;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  margin: 0 0 0 120px;
  text-align: left;
`;

const ContentTitle = styled(motion.h1)`
  font-size: 3rem;
  color: #333;
  text-align: left;
  margin-bottom: 0.2em;
`;

const Text = styled(motion.p)`
  font-size: 1.5rem;
  color: #333;
  text-align: left;
  margin: 0 0 0.5em 0;
`;

const Image = styled.img`
  width: 100%; /* Adjust image size */
  border-radius: 10px;
  display: block;
  margin: 0 auto; /* Center the image */
`;

const GallerySection = styled.div`
  width: 100%;
  max-width: 1024px;
  margin-top: 2em;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
`;

const GalleryImage = styled.img`
  max-width: 200px; /* Gallery image size */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  color: #333;
  text-align: left;
  margin-top: 1em;
  margin-bottom: 0.5em;
`;

const ImageContainer = styled.div`
  display:flex;
`

function About() {
  const [galleryImages] = useState([
    pic3, // Replace these with actual gallery images
    pic4,
    pic5,
    pic6,
    pic7,
  ]);

  return (
    <PageWrapper>
      <Section>
        <ImageContainer><Image src={pic2} alt="fumin" /></ImageContainer>
        
        <ContentTitle>Fumin Hsiao 富珉</ContentTitle>
        <Text>
          <Subtitle>關於我</Subtitle>
          大家好!
          我是富珉Fumin。我對我的名字滿無可奈何的，除了小時候查榜每次珉都會變成亂碼或是問號，永遠查不到成績，到現在每次美國人問我怎麼拚時，當我開始F...U....就會被投以譴責的眼光:
          Did you just say F U? I can only say: Hey Bro, That's my name...what
          can I do about that? 即便如此我還是挺喜歡我的名字。
          <br />
          <br />
          相比於我的前女友，我的人生毫無規劃，所以當她決定來美國念PhD時，一把鼻涕一把眼淚說我會跟她分手的時候，我也只好說:是在幹喔
          不然就結婚啊! 於是我被迫結婚後也跟著申請了一個Master學位來到了密西根。
          原本機械業的我自以為UX很潮還不用寫CODE就選了相關科系，畢業後才發現，哎呀!
          不可思議，找不到工作耶。
          <br />
          <br />
          大家可能也發現了，我廢話很多，有些人喜歡聽廢話，有些人不喜歡，你看，又是兩句廢話。但我終於要說到滑雪了。
          <br />
          <br />
          <Subtitle>為什麼喜歡滑雪?</Subtitle>
          身為一個誠實的人，to be honest，因為我覺得滑雪很帥，我想炫耀! 對!
          <br />
          比起滑雪本身，炫耀自己多厲害似乎能給我更大的快感，即使自己技術爛的時候也很愛秀，很愛指點怎麼滑，啊~~多麼的醜陋啊......
          <br />
          但我們都知道，Who care? 99%的人只會在意自己有沒有滑好!
          <br />
          有這種炫耀之心或是只是想滑雪打卡拍照的朋友們，這也不會不好!
          這是很棒的心態，你要想，至少你踏出第一步了!
          <br />
          <br />
          逐漸滑下去後，漸漸地就算沒有觀眾也會想要滑，滑雪本身就是一種享受，尤其大家一起滑的時候，絕對不是密西根冬天太無聊了。
          <br />
          <br />
          <Subtitle>為什麼當滑雪教練</Subtitle>
          我有個朋友，看到了一個滑雪教練劈腿很多學員女朋友的新聞，從此立志當滑雪教練，對!
          我的那個朋友就是我......
          <br />
          的朋友啦! 相信我，你可以放心讓我教，因為我已經結婚了，還剛有個女兒。
          <br />
          <br />
          大家在寫SOP的時候不是都要寫短期目標和長期目標嗎?
          <br />
          對，我當教練的短期目標，就是希望訓練一批盲從我的滑雪死士，在季末跟我一起去滑Mt.
          Bohemia(詳見雪場介紹)，單獨去我怕我死在樹林裡沒人發現。
          <br />
          長期的目標呢，是我發自內心的，神經病般的熱愛滑雪，夏天的時候也想著滑雪滑雪滑雪，去Sleeping
          Bear Dune的時候也在想這沙灘，能滑吧?
          這麼棒的東西，我要洗腦附近的人都愛上滑雪。
          <br /><br />
          因此一言以蔽之，我當教練短期長期的目標就是洗腦正常人變成滑雪瘋子。
          <br />
          <Subtitle>教學理念</Subtitle>
          雖然接受了CASI完整的教學訓練並也會使用他們的系統化教學方法，但我更傾向於根據學生的學習結果反思我的教學方向。
          相較於傳統的訓練方式（按A-B-C-D步驟進行，C做不好就返回B），我更偏好於用多種模態切換來達成學習目的。<br /><br />
          因此我強調教學的靈活性，滑雪是一項自由的運動，不需要拘泥於循序漸進的學習方式。即便學生還不會S
          TURN，但如果對180度或360度的跳躍有興趣，也可以嘗試去完成，因為跳躍也有助於滑行的掌控。“多模態學習”（Multi-Modal
          Learning）方法，透過不同的概念和方式去構建整體技術，讓學生在體驗的過程中逐步掌握滑雪。<br /><br />
          
        </Text>
      </Section>


    </PageWrapper>
  );
}

export default About;
