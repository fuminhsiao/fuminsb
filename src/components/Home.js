import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import michiganSkiBackground from "../assets/images/homepage/michigan-ski-background.webp";
import pic1 from "../assets/images/about/1.jpg";
import pic2 from "../assets/images/about/2.jpg";
import pic3 from "../assets/images/about/3.jpg";
import pic4 from "../assets/images/about/4.jpeg";
import pic6 from "../assets/images/about/6.jpeg";
import MiWinter1 from "../assets/images/about/MiWinter1.jpg";
import MiWinter2 from "../assets/images/about/MiWinter2.jpeg";
import MiWinter3 from "../assets/images/about/MIwinter3.webp";
import MiWinter4 from "../assets/images/about/MIwinter4.webp";
import MiWinter5 from "../assets/images/about/MIwinter5.webp";
import MiWinter6 from "../assets/images/about/MIwinter6.jpeg";

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  width: 1024px;
  text-align: center;
  margin-bottom: 2em;
`;

const FullscreenSection = styled(Section)`
  height: 60vh;
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
  color: #f0f8ff;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  text-align: left;
  margin-bottom: 0.2em;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #f0f8ff;
  max-width: 600px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  text-align: left;
  margin: 0 0 0 120px;
`;

const Text = styled(motion.p)`
  font-size: 1.5rem;
  color: #f0f8ff;
  width: 100%;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  text-align: left;
  margin: 0 0 0.5em 0;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  display: block;
`;

const WinterComparisonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const WinterExpectationSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1em;
`;

const WinterActualSection = styled(WinterExpectationSection)`
  width: 60%;
`;

const WinterHeading = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1em;
`;

const WinterImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1em;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  max-height: 680px;
  object-fit: cover;
`;

const PicText = styled(motion.p)`
  font-size: 1rem;
  text-align: right;
  color: #000;
  opacity: 0.3;
  margin: 0;
  font-style: italic;
`;

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <PageWrapper>
      <FullscreenSection ref={containerRef}>
        <AnimatePresence>
          {isVisible && (
            <>
              <Title
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Skiing and Snowboarding
                <br />
                in Michigan
              </Title>
              <Subtitle
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                密西根滑雪碎碎念
              </Subtitle>
            </>
          )}
        </AnimatePresence>
      </FullscreenSection>

      <Section>
        <ContentTitle style={{ color: "#000" }}>密西根雪季</ContentTitle>

        <Text style={{ color: "#333" }}>
          繽紛的紅葉，溫暖的人文，還是的純淨的湖景讓您愛上了密西根? <br />
          每當我問道: 你們喜歡密西根嗎? <br />
          他們總是回答: <br />
          <br />
          <br />
          不喜歡阿，畢業之後要去加州
          <br />
          ...真不給面子
          <br />
          <br />
          對! 密西根很無聊... <br />
          Ann Arbor的朋友常常跟我說，East Lansing很好玩啊!
          好吃的東西比這邊多很多!
          <br />
          East Lansing的朋友也常跟我說，你在Ann Arbor那邊很熱鬧吧!
          好吃的東西很多!
          <br />
          好了拜託不要再互吹了...得不到的最美
          <br />
          <br />
          那...冬天呢?
          <br />
          期不期待下雪呀!
          <br />
          <WinterComparisonWrapper>
            {/* Left Section */}
            <WinterExpectationSection>
              <WinterHeading>理想</WinterHeading>
              <WinterImage src={MiWinter3} alt="Expected Winter Image" />
            </WinterExpectationSection>

            {/* Right Section */}
            <WinterActualSection>
              <WinterHeading>現實</WinterHeading>
              <WinterImage src={MiWinter1} alt="Actual Winter Image 1" />
              <WinterImage src={MiWinter2} alt="Actual Winter Image 2" />
            </WinterActualSection>

            {/* Left Section */}
            <WinterExpectationSection>
              <WinterHeading>第一次看到雪</WinterHeading>
              <WinterImage src={MiWinter4} alt="Expected Winter Image" />
            </WinterExpectationSection>

            {/* Right Section */}
            <WinterExpectationSection>
              <WinterHeading>當你要去上課</WinterHeading>
              <WinterImage src={MiWinter5} alt="Expected Winter Image" />
            </WinterExpectationSection>
          </WinterComparisonWrapper>
          讓我們化悲憤為力量，愛上冬天吧!
          <Image src={MiWinter6} />
          <PicText>圖片僅供參考，請以實物為準</PicText>
          <PicText>
            滑雪有歡樂也有痛痛痛痛痛，加入前請詳閱說明書並購買屁墊
          </PicText>
        </Text>
      </Section>

      <Section>
        <ContentTitle style={{ color: "#000" }}>
          為什麼要在密西根滑雪
        </ContentTitle>

        <Text style={{ color: "#333", margin: "0" }}>
          密西根這種鳥地方，幹嘛來這邊滑雪
          <br />
          你說的對，能去科羅拉多，能去加州塔霍，能去日本加拿大滑雪，幹嘛來密西根滑...
          <br />
          阿就沒辦法，人就在密西根吼
          <br />
          <br />
          對於我們留學生
          <br />
          當你看到同學們畢業後賺錢當主管，去日本滑雪
          <br />
          而我們還在這邊小組報告，小組成員還吃飽不幹事
          <br />
          漸漸地無法遏止心中的怒火 <br />
          <br />
          何不轉念一想
          <br />
          他們去一次要坐飛機要住旅館要請教練滑三天高級雪場花個十萬台幣!
          <br />
          我們住家裡搭朋友車滑一學期爛雪場，欸對，看起來很寒酸但只要花1000鎂!
          <br />
          <br />
          我們得到什麼?
          <br />
          是的! 吃酸葡萄的失落感...! Nooooooo! 是滿滿的CP值，我們最愛CP值了!
          誰能抗拒CP值呢????
          <br />
          你滑一季的時數能抵上他們三季，他們花一次的錢能抵上你滑三年!
          <br /> <br />
          下次吼，有朋友找你去日本滑雪
          <br />
          你就先不要說你會滑，裝滑雪小白
          <br />
          然後到現場阿唷威不可思議你怎麼這麼強
          <br />
          復仇的滋味 太美好了
          <br />
        </Text>
        <Image src={pic2} alt="為什麼在密西根滑雪" />
        <PicText>這裡雪道短，Lift更爛，但我們要說服自己一切都很好</PicText>
      </Section>

      <Section>
        <ContentTitle style={{ color: "#000" }}>
          在密西根滑雪的好處
        </ContentTitle>
        <Text style={{ color: "#333", margin: "0" }}>
          以前有個朋友跟我說她要去日本滑雪了
          <br />
          過了一個禮拜她回來，臉上帶著滿滿的不爽
          <br />
          我問她怎麼啦?
          <br />
          她說: 我大概花了10萬台幣，結果好像什麼都沒滑到!
          <br />
          接著她開始跟我訴說教練(叫Tim)多不會教，第一天光穿鞋就耗掉一個小時，下LIFT摔得亂七八糟還被他笑，只教她正妹朋友不教她(她也滿漂亮的呀為什麼)
          <br />
          隔年，她再次與朋友訂了機票去日本滑雪 <br />
          結果遇到了疫情，旅館教練費都不給退
          <br />
          ...那個朋友就是我，嗚嗚嗚我的樂桃點數到底在何方
          <br />
          <br />
          在這邊以上鳥事都不用擔心!!! <br />
          只需要一台車，或一個有車的滑雪朋友，或工具人，或是駝獸
          <br />
          便宜的雪票，便宜二手裝備
          <br />
          滑到你午餐吐出來還有找!
          <br />
          <br />
          姑且做了一個
          <a
            target="_blank"
            href="https://forms.gle/y5unhTQW586EHdSc7"
            style={{
              color: "#1E90FF",
              textDecoration: "underline",
            }}
            rel="noreferrer"
          >
            Google表單
          </a>
          來協助大家湊車，請隨興填寫<br />
          
          <a
            target="_blank"
            href="https://docs.google.com/spreadsheets/d/1E0DiERJFfkM85Z9IMvJEMEZsX6u7rPexwSDSFhvOIpI/edit?usp=sharing"
            style={{
              color: "#1E90FF",
              textDecoration: "underline",
            }}
            rel="noreferrer"
          >
            <br />
            表單結果<br />

          </a><br />
        </Text>
        <Image src={pic4} alt="密西根滑雪好處" />
        <PicText>早晨的雪場人比較少，請與您的司機溝通好時間</PicText>
      </Section>

      <Section>
        <ContentTitle style={{ color: "#000" }}>該怎麼開始滑雪</ContentTitle>
        <Text style={{ color: "#333", margin: "0" }}>
          到了雪場後要怎麼開始滑雪?
          <br />
          教練還是自己學? 教練重要嗎? 自己學要注意什麼?
          <br />
          當然首推自己學啦! 雖然這樣講會被很多教練幹譙(包含我自己)
          <br />
          但都有一整個冬天了，何不試試看照著YT教學試試看?
          <br />
          那自學需要注意什麼呢?
          <br />
          我只能說，選對Youtuber。
          <br />
          黃嘉藍(Ｏ) 楚格山里人(？)
          <br />
          就醬!
          <br />
          <br />
          找朋友教的話，除非對方想追你(無性別刻板印象)或真的很喜歡教人的
          <br />
          我看過太多不歡而散的例子了，慎之慎之
          <br />
          EX: 上一季我看到一位女孩坐在雪裡對一位男孩說: 我腳好疼阿!
          男孩不知所措，最後大吵一架。
          <br />
          EX: 上上季有個朋友帶兩個朋友直接上Lift，結果就是決裂與走下山。
          <br />
          EX:
          有個叫做加百列的大廚放現任女朋友在山上自己跑去追薛丁格的懷孕的前女友，導致現任女友遇到義大利小開帥哥並恐將整部劇名改為艾蜜莉在羅馬。
          <br />
          <br />
          阿如果真的沒辦法自己學或沒有有耐心的朋友再找我或其他教練就好了。
          <br />
        </Text>
        <Image src={pic6} alt="如何開始滑雪" />
        <PicText>剛開始滑雪最重要的是教練嗎? 不，是屁墊(單板)。</PicText>
        <PicText>看看她們有屁墊開心的樣子...</PicText>
      </Section>

      <Section>
        <ContentTitle style={{ color: "#000" }}>要不要買...</ContentTitle>
        <Text style={{ color: "#333", margin: "0" }}>
          要不要買雪票和裝備? 要買哪一間? 買多少錢的裝備?
          <br />
          身為邪惡的推坑人，我會說:
          不要在那邊嘰嘰歪歪，通通給我買下去，省得想東想西。
          <br />
          但身為一個有同理心的前研究生，請欣賞我製作的簡陋
          <a
            href="/calculator"
            style={{
              color: "#1E90FF",
              textDecoration: "underline",
            }}
          >
            試算表
          </a>
          <br />
          <br />
          如果你超愛練習，日夜都練習，AA學生不用想太多，Mt. Brighton學生票買下去
          <br />
          EL學生考慮一下Mt. Brighton或Cannonsburg(雪季結束預先買明年)
          <br />
          如果你不確定，想先體驗一下
          <br />
          Mt. Holly或Pine
          Knob比較漂亮雪況較好，初雪者坡比較宜人，給自己增加一點想滑雪的動機。
          <br />
          <br />
          裝備可以先租個一兩次試試看，但如果會滑到10次左右就不建議了，一次45你都可以財富自由餐餐滷肉飯加大加湯加10顆滷蛋了。
          <br />
          一手裝備可看大型出清網站(REI、Moosejaw等等，之後再填坑)、二手裝備可尋找FB
          Marketplace或雪場季前季末出清
          <br />
        </Text>
        <Image src={pic3} alt="密西根滑雪裝備" />
        <PicText>以上絕非正常滑雪裝備...</PicText>
      </Section>
    </PageWrapper>
  );
}

export default Home;
