import React from 'react';
import styled from 'styled-components';
import pic1 from '../assets/images/resorts/Mt Brighton.png'
import pic2 from '../assets/images/resorts/Pine Knob.png'
import pic3 from '../assets/images/resorts/Cannonsburg.png'



const ResortContainer = styled.div`
  max-width: 1280px;
  margin: 2rem auto;
  text-align: left;
`;

const Resort = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ResortImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ResortTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ResortDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ResortPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #2e8b57;
`;

// 新增的表格樣式
const ResortTable = styled.table`
  width: 100%;
  margin: 2rem auto;
  border-collapse: collapse;
  text-align: center;
`;

const TableHeader = styled.th`
  padding: 1rem;
  background-color: #4caf50;
  color: white;
  border: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 1rem;
  border: 1px solid #ddd;
  max-width:10rem;
`;
const TableCellLeftAligned = styled.td`
  padding: 1rem;
  border: 1px solid #ddd;
  max-width: 10rem;
  text-align: left;
`

function Resorts() {
  return (
    <ResortContainer>
      <h2>密西根雪場</h2>
      <p>雪場資訊會逐漸補齊，並根據我個人經驗持續更新。</p>
      <ResortTable>
  <thead>
    <tr>
      <TableHeader>雪場</TableHeader>
      <TableHeader>距離 Ann Arbor</TableHeader>
      <TableHeader>距離 East Lansing</TableHeader>
      <TableHeader>雪況</TableHeader>
      <TableHeader>雪道</TableHeader>
      <TableHeader>人潮</TableHeader>
      <TableHeader>體驗</TableHeader>
      <TableHeader>建議</TableHeader>
    </tr>
  </thead>
  <tbody>
  <tr>
    <TableCell>Mt. Brighton</TableCell>
    <TableCell>25 分鐘</TableCell>
    <TableCell>50 分鐘</TableCell>
    <TableCell>較差</TableCell>
    <TableCell>短</TableCell>
    <TableCell>較多</TableCell>
    <TableCell>普通</TableCell>
    <TableCellLeftAligned>學生票便宜單日票較貴，距離AA近，適合Ann Arbor學生，適合喜愛隨時都能去雪場玩玩或練習的人，雪道較短、簡單但也足夠，人潮較多。</TableCellLeftAligned>
  </tr>
  <tr>
    <TableCell>Mt. Holly</TableCell>
    <TableCell>50-70 分鐘</TableCell>
    <TableCell>1 小時</TableCell>
    <TableCell>優良</TableCell>
    <TableCell>短~中</TableCell>
    <TableCell>較少</TableCell>
    <TableCell>優良</TableCell>
    <TableCellLeftAligned>單日票便宜季票貴，雪況與體驗較佳，適合多種坡度與地形滑行，樹林也不少，PARK人較少，季票較貴需斟酌滑行次數再考慮，適合在意雪況的人。人潮較少不太需要排隊上lift。</TableCellLeftAligned>
  </tr>
  <tr>
    <TableCell>Pine Knob</TableCell>
    <TableCell>50-70 分鐘</TableCell>
    <TableCell>1 小時</TableCell>
    <TableCell>普通</TableCell>
    <TableCell>短~中</TableCell>
    <TableCell>較多</TableCell>
    <TableCell>普通</TableCell>
    <TableCellLeftAligned>同Mt. Holly但人潮較多。</TableCellLeftAligned>
  </tr>
  <tr>
    <TableCell>Cannonsburg</TableCell>
    <TableCell>2 小時</TableCell>
    <TableCell>1 小時 15 分鐘</TableCell>
    <TableCell>普通</TableCell>
    <TableCell>短~中</TableCell>
    <TableCell>普通</TableCell>
    <TableCell>較差</TableCell>
    <TableCellLeftAligned>價格低，適合East Lansing學生與Grand Rapids居民，人潮不少且lift數量較少，有時需要排隊。</TableCellLeftAligned>
  </tr>
  <tr>
    <TableCell>Caberfae</TableCell>
    <TableCell>3 小時</TableCell>
    <TableCell>2 小時 15 分鐘</TableCell>
    <TableCell>優良</TableCell>
    <TableCell>中~長</TableCell>
    <TableCell>普通</TableCell>
    <TableCell>優良</TableCell>
    <TableCellLeftAligned>距離較遠，雪道較長，雪況佳，整體體驗佳，適合中段滑雪者。</TableCellLeftAligned>
  </tr>
  <tr>
    <TableCell>Boyne Mountain</TableCell>
    <TableCell>3 小時 20 分鐘</TableCell>
    <TableCell>2 小時 45 分鐘</TableCell>
    <TableCell>優秀</TableCell>
    <TableCell>長</TableCell>
    <TableCell>平日少假日多</TableCell>
    <TableCell>優秀</TableCell>
    <TableCellLeftAligned>密西根南邊較高級雪場，雪道多且長(相對密西根其他)，雪況佳，樹林多且有趣，PARK部分較多中大坡，有個吊橋可供不滑雪朋友觀光，含SKI IN-OUT(住宿出門即雪道)，適合季末滑2~3天。</TableCellLeftAligned>
  </tr>
  <tr>
    <TableCell>Crystal Mountain</TableCell>
    <TableCell>3 小時 30 分鐘</TableCell>
    <TableCell>2 小時 45 分鐘</TableCell>
    <TableCell>優秀</TableCell>
    <TableCell>長</TableCell>
    <TableCell>平日少假日多</TableCell>
    <TableCell>優秀</TableCell>
    <TableCellLeftAligned>同Boyne但沒吊橋。</TableCellLeftAligned>
  </tr>
  <tr>
    <TableCell>Mt. Bohemia</TableCell>
    <TableCell>9 小時</TableCell>
    <TableCell>8 小時 30分</TableCell>
    <TableCell>極佳但不壓雪全野雪</TableCell>
    <TableCell>極長且陡峭</TableCell>
    <TableCell>少</TableCell>
    <TableCell>恐怖至極</TableCell>
    <TableCellLeftAligned>
      中西部最有名滑雪場，適合高級滑雪者(官網規定新手禁入)，幾乎只有雙黑道以上。擁有天然雪，雪道極具挑戰性，以樹林滑雪和粉雪為主，不少碎石懸崖。
    </TableCellLeftAligned>
  </tr>
</tbody>
</ResortTable>

      

      <Resort>
        <ResortImage src={pic1} alt="雪場A" />
        <ResortTitle>Mt. Brighton</ResortTitle>
        <ResortDescription>
          Mt. Brighton是我來密西根時第一個去的雪場，原因是那天沒查好，跑去了CANNONSBURG櫃台說太熱還沒開，當天就想滑雪，從EL往西跑這麼遠還要折返到東邊的BRIGHTON，想到就很悲傷。<br/><br/>
          Mt. Brighton是EPIC體系中密西根唯一的雪場，離AA很近只需要20多分鐘，距離EL約50分鐘，且學生票價便宜，是個可以經常去練習的好地方。<br/>
          缺點也很明顯，除了道短之外，其雪況也不怎麼好。建議是盡量避開人多的時候去，否則差勁的雪況加上滿滿的人潮，雪都變成硬冰了，比較影響滑行體驗。<br/>
          另外初學如果使用Mt. Brighton的Bunny Hill須注意他們的道很短且歪向一側，雖然有兩條可以使用但比較好的一道通常他們的school會占用到那一道。<br/>
          <br/>
          許多人問我雪場本身的票$105與EPIC 1-DAY PASS $59(包含PEAK DAYS$69)的區別，既然EPIC比較便宜那為啥要買雪場出的，主要差別是EPIC要先買才有這價格，到時會漲到比較高還是低不確定，且EPIC票除非特殊原因(懷孕、其他正當理由需證明)不能退，雪場自己出的票除去稅金可退，他賺的是當下買的現金流(猜測)。
          <br/>          <br/>

          關於學生票，請注意關注當季的規則，一般是大學生12學分，研究生6學分，領票日會要求你證明，還會跟你說GOOD JOB，讓你心裡很爽，因為你的爸媽看到你的成績單不會說GJ只會叫你應該少滑雪多念書。
        </ResortDescription>
        <ResortPrice>票價(浮動價格)：$59 / PEAK DAYS $69 / 季票 $577 / 大學生票 $331 / 7日票 $326 </ResortPrice>
      </Resort>

      <Resort>
        <ResortImage src={pic2} alt="雪場B" />
        <ResortTitle>Mt Holly、Pine Knob、Alpine Valley</ResortTitle>
        <ResortDescription>
          這幾個有推出聯票(包含加拿大的Searchmount 威斯康辛的Alpine 西邊的Bittersweet 太遠不贅述)<br/>
          離AA大約都50~70分鐘，離EL一個小時左右<br/><br/>
          雪道比起Mt. Brighton並不能說長很多，但雪況好且體驗好上許多<br/>
          Pine Knob的人數會比其他兩個多上不少，Pine Knob的Park部分比較完整但相對也有許多當地人會在那邊練習。<br/>
          且Pine Knob有俱樂部與school幾乎隨時都在那邊上課，如果需要在Bunny Hill練習會需要一點勇氣<br/>
          Mt. Holly有最好的雪道和雪況，Park的部分也很不錯，人少好滑行，整體體驗良好，對於比較害怕他人眼光的練習者很適合，Bunny Hill很大且舒適。<br/>
          Alpine Valley我只去過一次，神奇的是Skier很多，整體還算不錯大概介於Pine Knob與Mt. Holly中間<br/>
          <br/>
          另外如果想要考教練的人如果買了季票可以去Searchmount考試，考試費用並不包含雪票要自己買(但有不小的折扣就是了)。<br/>
          這個系列的季票是浮動的(9月 $700/ 10月 $742/ 11月 $784 / 12月後 $825)，單日票是固定的。
        </ResortDescription>
        <ResortPrice>票價：單日 $ 56 / 假日 $69 / 季票 $784 (11月)</ResortPrice>
      </Resort>

      <Resort>
        <ResortImage src={pic3} alt="雪場C" />
        <ResortTitle>Cannonsburg</ResortTitle>
        <ResortDescription>
          Cannonsburg是一間在Grand Rapids的雪場，也是我上兩季最主要去的雪場<br/>
          Cannonsburg是南邊季票最便宜的雪場，如果雪季剛結束直接買的話可以來到$199USD，並隨時間增加<br/>
          這個雪場距離AA大約要2個小時，距離EL 70分鐘左右，比較適合MSU的學生<br/>
          整體來說論設備是最差的雪場，雪道的話稍優於Brighton<br/>
          但此雪場經常很晚才開(1月初~1月中)，且提早結束(3月初)，購買季票要好好規劃時間<br/>
          Cannonsburg也經常會節省人力導致沒有lift operator而關閉一些雪道<br/>
          Park的部分還不錯，Bunny Hill區域在2024改成PARK並移動到更小的角落，不適合初學<br/>
          有一道可以Tubing適合一起去但不滑雪的朋友
          
        </ResortDescription>
        <ResortPrice>票價(浮動)：單日 $45 / 節假日 $55 / 季票 $359 / 6次票 $160</ResortPrice>
      </Resort>


    </ResortContainer>
  );
}

export default Resorts;
