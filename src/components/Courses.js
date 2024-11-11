import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background-color: #e0f7fa;
    padding: 5em 0;
`;

const ContentContainer = styled.div`
    flex: 1;
    max-width: 480px;
    margin-right: 2em;
    color: #333;
    text-align: left;
`;

const SectionTitle = styled.h2`
    font-size: 1.8rem;
    color: #00796b;
    margin-bottom: 1em;
`;

const SubsectionTitle = styled.h3`
    font-size: 1.4rem;
    color: #555;
    margin-bottom: 0.5em;
`;

const ObjectiveText = styled.p`
    font-weight: bold;
    color: #333;
    font-size: 1.1rem;
    margin-bottom: 0.5em;
`;

const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const StyledForm = styled.form`
    background-color: #ffffff;
    padding: 0 1.5rem 1.5rem 1.5rem;
    border-radius: 15px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
    width: 360px;
    text-align: center;
`;

const FormTitle = styled.h2`
    color: #00796b;
    font-size: 1.8rem;
    margin-bottom: 15px;
`;

const Description = styled.p`
    color: #555;
    font-size: 0.9rem;
    margin-bottom: 20px;
    text-align: left;
`;

const Label = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
    color: #333;
    text-align: left;
`;

const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    margin-bottom: 18px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    transition: border-color 0.3s ease;
    &:focus {
        border-color: #00796b;
        outline: none;
    }
`;

const Select = styled.select`
    width: 100%;
    padding: 12px;
    margin-bottom: 18px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    transition: border-color 0.3s ease;
    &:focus {
        border-color: #00796b;
        outline: none;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 12px;
    margin-bottom: 18px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    resize: none;
    transition: border-color 0.3s ease;
    &:focus {
        border-color: #00796b;
        outline: none;
    }
`;

const Button = styled.button`
    width: 100%;
    max-width: 320px;
    padding: 12px;
    border: none;
    border-radius: 8px;
    background-color: #00796b;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #004d40;
    }
`;

const Courses = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        hasCar: 'No',
        preference: 'Both',
        resort: 'MT BRIGHTON',
        lessonType: 'Group',
        weekday: 'Monday',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'ru040708',
            'template_afi5bw9',
            {
                ...formData,
                recipient_email: 'ru040708@gmail.com'
            },
            'e0i-pveAI20BzAz4N'
        ).then(() => {
            alert('您的需求已成功發送！');
        }).catch(() => {
            alert('發送失敗，請重試。');
        });
    };

    return (
        <Wrapper>
            <ContentContainer>
                <SectionTitle>課程內容</SectionTitle>
                
                <SubsectionTitle>零基礎班</SubsectionTitle>
                <ObjectiveText>課程目標: 認識單板、安全守則、具備雪上移動能力</ObjectiveText>
                <p>基礎與滑動: 認識裝備、單腳移動、上下纜車、安全守則</p>
                <p>控制: Heelside/Toeside推坡與落葉飄</p>
                
                <SubsectionTitle>初級班</SubsectionTitle>
                <ObjectiveText>課程目標: 用彎形控制速度與方向</ObjectiveText>
                <p>轉彎: J-Turn、C Turn、連結C Turn</p>
                <p>流暢滑行: S Turn、彎形控制</p>
                <SubsectionTitle>費用</SubsectionTitle>
                <ObjectiveText>$60/HR +$10/人 </ObjectiveText>
                <ObjectiveText>為保障課程品質(避免教練只教喜歡的學生)，最多三人 </ObjectiveText>
                <p>若您需要我接送，East Lansing免錢，Ann Arbor $40/車</p>
            </ContentContainer>
            
            <FormContainer>
                <StyledForm onSubmit={handleSubmit}>
                    <FormTitle>報名</FormTitle>
                    <Description>不確定如何開始滑雪嗎？別擔心，這不是正式的報名表單！完全無壓力～這份表單只是讓我了解您的滑雪意願，並幫助您找到合適的教練、滑雪夥伴，或是拼車的好朋友。如果想更快聯繫到我，請追蹤我的 IG、LINE 或微信：@ru040708。滑雪之路就在前方，Let's hit the slopes!  </Description>

                    <Label>姓名：</Label>
                    <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <Label>電子郵件：</Label>
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <Label>是否需要接送：</Label>
                    <Select name="hasCar" value={formData.hasCar} onChange={handleChange}>
                        <option value="Yes">是</option>
                        <option value="No">否</option>
                    </Select>

                    <Label>您想學習的內容：</Label>
                    <Select name="preference" value={formData.preference} onChange={handleChange}>
                        <option value="Ski">雙板</option>
                        <option value="Snowboard">單板</option>
                        <option value="Both">兩者皆可</option>
                    </Select>

                    <Label>偏好的滑雪場：</Label>
                    <Select name="resort" value={formData.resort} onChange={handleChange}>
                        <option value="MT BRIGHTON">MT BRIGHTON</option>
                        <option value="MT HOLLY">MT HOLLY</option>
                    </Select>

                    <Label>課程類型：</Label>
                    <Select name="lessonType" value={formData.lessonType} onChange={handleChange}>
                        <option value="Private">個人課程</option>
                        <option value="Group">團體課程</option>
                    </Select>

                    <Label>偏好的時間：</Label>
                    <Select name="weekday" value={formData.weekday} onChange={handleChange}>
                        <option value="Monday">星期一</option>
                        <option value="Tuesday">星期二</option>
                        <option value="Wednesday">星期三</option>
                        <option value="Thursday">星期四</option>
                        <option value="Friday">星期五</option>
                        <option value="Saturday">星期六</option>
                        <option value="Sunday">星期日</option>
                    </Select>

                    <Label>留言：</Label>
                    <TextArea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="請輸入任何問題或需求"
                    />

                    <Button type="submit">送出需求</Button>
                </StyledForm>
            </FormContainer>
        </Wrapper>
    );
};

export default Courses;
