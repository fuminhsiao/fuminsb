import React, { useState } from "react";
import styled from "styled-components";
import mtHolly from "../assets/images/resorts/Mt Holly2.jpg";
import mtBrighton from "../assets/images/resorts/Mt Brighton3.png";

const CalculatorContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: left;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #1e3d58;
  text-align: center;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  display: block;
  margin-top: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const CheckboxContainer = styled.div`
  margin-top: 1rem;
`;

const ResortContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 1rem;
`;

const ResortOuterContainer = styled.div`
  display: flex;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const CalculateButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: #1e3d58;
  color: #f0f8ff;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #163042;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
  min-height: 170px;
`;

const Result = styled.div`
  font-size: 1.2rem;
  color: #333;
  margin-top: 1.5rem;
  text-align: center;
`;

function TicketCalculator() {
  const [weekdaysMtHolly, setWeekdaysMtHolly] = useState("");
  const [holidaysMtHolly, setHolidaysMtHolly] = useState("");
  const [daysMtBrighton, setDaysMtBrighton] = useState("");
  const [isStudent, setIsStudent] = useState(false);
  const [rentEquipment, setRentEquipment] = useState(false);
  const [equipmentPurchase, setEquipmentPurchase] = useState("");
  const [recommendation, setRecommendation] = useState(null);

  const ticketPrices = {
    mtHolly: {
      weekday: 54,
      holiday: 67,
      season: 784,
    },
    mtBrighton: {
      singleDay: 85,
      student: 331,
      adult: 577,
      week: 326,
    },
    equipmentRent: 45,
  };

  const handleCalculate = () => {
    let totalCostMtHolly = 0;
    let totalCostMtBrighton = 0;
    let totalRentCost = 0;
    let bestOptionMtHolly = "";
    let bestOptionMtBrighton = "";
    let bestOptionEquipment = "";

    // 計算 Mt. Holly 的最佳方案
    const daysA = Number(weekdaysMtHolly);
    const daysH = Number(holidaysMtHolly);
    const totalMtHollyDaysCost =
      daysA * ticketPrices.mtHolly.weekday +
      daysH * ticketPrices.mtHolly.holiday;

    if (totalMtHollyDaysCost >= ticketPrices.mtHolly.season) {
      bestOptionMtHolly = `建議購買 Mt. Holly 的季票 $${ticketPrices.mtHolly.season}`;
      totalCostMtHolly = ticketPrices.mtHolly.season;
    } else {
      totalCostMtHolly = totalMtHollyDaysCost;
      bestOptionMtHolly = `建議購買 Mt. Holly 平日 ${daysA} 天和節假日 ${daysH} 天票，共計 $${totalCostMtHolly}`;
    }

    // 計算 Mt. Brighton 的最佳方案
    const daysB = Number(daysMtBrighton);
    if (isStudent) {
      // 若為大學生
      if (daysB >= 4) {
        bestOptionMtBrighton = `建議購買 Mt. Brighton 的大學生票 $${ticketPrices.mtBrighton.student}`;
        totalCostMtBrighton = ticketPrices.mtBrighton.student;
      } else {
        totalCostMtBrighton = daysB * ticketPrices.mtBrighton.singleDay;
        bestOptionMtBrighton = `建議購買 Mt. Brighton 單日票 ${daysB} 天 $${totalCostMtBrighton}`;
      }
    } else {
      // 若不是大學生
      if (daysB > 7) {
        const extraDays = daysB - 7;
        const combinedCost = ticketPrices.mtBrighton.week + extraDays * ticketPrices.mtBrighton.singleDay;

        if (combinedCost >= ticketPrices.mtBrighton.adult) {
          bestOptionMtBrighton = `建議購買 Mt. Brighton 的一般季票 $${ticketPrices.mtBrighton.adult}`;
          totalCostMtBrighton = ticketPrices.mtBrighton.adult;
        } else {
          bestOptionMtBrighton = `建議購買 Mt. Brighton 的7日票 $${ticketPrices.mtBrighton.week} + ${extraDays} 天單日票 ($${extraDays * ticketPrices.mtBrighton.singleDay})`;
          totalCostMtBrighton = combinedCost;
        }
      } else if (daysB === 7 || (daysB * ticketPrices.mtBrighton.singleDay >= ticketPrices.mtBrighton.week && daysB <= 7)) {
        bestOptionMtBrighton = `建議購買 Mt. Brighton 的7日票 $${ticketPrices.mtBrighton.week}`;
        totalCostMtBrighton = ticketPrices.mtBrighton.week;
      } else if (daysB * ticketPrices.mtBrighton.singleDay >= ticketPrices.mtBrighton.adult) {
        bestOptionMtBrighton = `建議購買 Mt. Brighton 的一般季票 $${ticketPrices.mtBrighton.adult}`;
        totalCostMtBrighton = ticketPrices.mtBrighton.adult;
      } else {
        totalCostMtBrighton = daysB * ticketPrices.mtBrighton.singleDay;
        bestOptionMtBrighton = `建議購買 Mt. Brighton 單日票 ${daysB} 天 $${totalCostMtBrighton}`;
      }
    }

    // 計算租裝備的總成本
    if (rentEquipment) {
      totalRentCost = (daysA + daysH + daysB) * ticketPrices.equipmentRent;
    }

    // 裝備購買建議
    const equipmentCost = equipmentPurchase ? Number(equipmentPurchase) : 0;
    if (rentEquipment && equipmentCost && totalRentCost >= equipmentCost) {
      bestOptionEquipment = `建議購買$${equipmentPurchase} 裝備，租金總成本 ($${totalRentCost}) 高於購買裝備。`;
    } else if (rentEquipment) {
      bestOptionEquipment = `租金總成本為 $${totalRentCost}，裝備租金划算於購買。`;
    } else if (equipmentCost) {
      bestOptionEquipment = `建議購買$${equipmentPurchase} 裝備。`;
      totalRentCost = equipmentCost;
    } else {
      bestOptionEquipment = "未選擇租或購買裝備。";
    }

    // 計算總金額
    const totalCost = totalCostMtHolly + totalCostMtBrighton;
    const totalRent = totalRentCost;

    // 設定最終建議
    setRecommendation({
      bestOptionMtHolly,
      bestOptionMtBrighton,
      bestOptionEquipment,
      totalCost,
      totalRent,
    });
  };

  return (
    <CalculatorContainer>
      <Title>滑雪票價與裝備試算</Title>
      <ResortOuterContainer>
        <ResortContainer>
          <Image src={mtHolly} alt="Mt. Holly" />
          <Label htmlFor="weekdaysMtHolly">Mt. Holly 平日($56)：</Label>
          <Input
            type="number"
            id="weekdaysMtHolly"
            value={weekdaysMtHolly}
            onChange={(e) => setWeekdaysMtHolly(e.target.value)}
            placeholder="Mt. Holly 平日"
          />
          <Label htmlFor="holidaysMtHolly">Mt. Holly 節假日($69)：</Label>
          <Input
            type="number"
            id="holidaysMtHolly"
            value={holidaysMtHolly}
            onChange={(e) => setHolidaysMtHolly(e.target.value)}
            placeholder="Mt. Holly 節假日滑雪天數"
          />
        </ResortContainer>

        <ResortContainer>
          <Image src={mtBrighton} alt="Mt. Brighton" />
          <Label htmlFor="daysMtBrighton">Mt. Brighton (約$85)：</Label>
          <Input
            type="number"
            id="daysMtBrighton"
            value={daysMtBrighton}
            onChange={(e) => setDaysMtBrighton(e.target.value)}
            placeholder="輸入 Mt. Brighton 滑雪天數"
          />
          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              id="isStudent"
              checked={isStudent}
              onChange={(e) => setIsStudent(e.target.checked)}
            />
            <Label htmlFor="isStudent" style={{ display: "inline" }}>
              是否為大學生
            </Label>
          </CheckboxContainer>
        </ResortContainer>
      </ResortOuterContainer>

      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          id="rentEquipment"
          checked={rentEquipment}
          onChange={(e) => setRentEquipment(e.target.checked)}
        />
        <Label htmlFor="rentEquipment" style={{ display: "inline" }}>
          是否租裝備 ($45/天)
        </Label>
      </CheckboxContainer>

      <Label htmlFor="equipmentPurchase">購買裝備選項：</Label>
      <Select
        id="equipmentPurchase"
        value={equipmentPurchase}
        onChange={(e) => setEquipmentPurchase(e.target.value)}
      >
        <option value="">不購買裝備</option>
        <option value="100">$100 裝備</option>
        <option value="200">$200 裝備</option>
        <option value="300">$300 裝備</option>
        <option value="400">$400 裝備</option>
        <option value="500">$500 裝備</option>
        <option value="600">$600 裝備</option>
        <option value="700">$700 裝備</option>
      </Select>

      <CalculateButton onClick={handleCalculate}>計算建議方案</CalculateButton>

      {recommendation && (
        <Result>
          <p>
            <strong>建議購買：</strong>
          </p>
          <p>{recommendation.bestOptionMtHolly}</p>
          <p>+</p>
          <p>{recommendation.bestOptionMtBrighton}</p>
          <br />
          <p>總金額：雪票${recommendation.totalCost} + 租裝${recommendation.totalRent}</p>
          <p>{recommendation.bestOptionEquipment}</p>
        </Result>
      )}
    </CalculatorContainer>
  );
}

export default TicketCalculator;
