const dietData = {
    breakfast: [
        { name: "選項A：燕麥高蛋白碗", desc: "1.5杯燕麥片＋無糖豆漿或杏仁奶＋1勺植物/分離蛋白粉＋1根香蕉。" },
        { name: "選項B：超商便利組合", desc: "無糖高纖豆漿 1 瓶＋茶葉蛋 2 顆＋地瓜 1 顆。" }
    ],
    lunch: [
        { name: "選項A：經典雞胸便當", desc: "烤/煎雞胸肉 200g＋糙米飯 1.5 杯＋深綠色蔬菜（淋一茶匙橄欖油）。" },
        { name: "選項B：健康魚肉餐", desc: "煎鯛魚/鱸魚片 200g＋藜麥飯/蕎麥麵＋生菜沙拉。" },
        { name: "選項C：外食救星", desc: "Subway 烤雞肉堡（不加醬/改橄欖油）＋無糖豆漿。" }
    ],
    dinner: [
        { name: "選項A：鑄鐵鍋牛排", desc: "瘦牛肉 200g＋烤地瓜 1.5 個＋烤蘆筍/青花菜。" },
        { name: "選項B：鮭魚豆腐餐", desc: "鮭魚切片 150g＋板豆腐半塊＋白飯 1 杯＋燙青菜。" },
        { name: "選項C：豬里肌快炒", desc: "低脂豬里肌肉片 200g 炒蔬菜＋糙米飯 1 杯。" }
    ],
    snack: [
        { name: "選項A：豆漿堅果飲", desc: "無糖豆漿 1 杯＋一把無調味杏仁（約 15 顆）。" },
        { name: "選項B：純粹毛豆", desc: "水煮毛豆一碗（植物性優質蛋白）。" },
        { name: "選項C：水果加餐", desc: "蘋果 1 顆 或 藍莓一小碗。" }
    ]
};

const workoutData = {
    "mode_a": {
        name: "週末重裝＋平日居家 (上下半身 4 天分化)",
        schedule: [
            { 
                day: "週六 (健身房)", 
                type: "重訓", 
                focus: "下肢大重量", 
                routine: `1. 槓鈴深蹲 4x8-10 <a href="https://www.youtube.com/watch?v=dO-51htz_eA" target="_blank">🎥教學</a><br>2. 腿舉機 (Leg Press) 4x10-12 <a href="https://www.youtube.com/watch?v=IZxyjW7cgng" target="_blank">🎥教學</a><br>3. 羅馬尼亞硬舉 (RDL) 4x8-10 <a href="https://www.youtube.com/watch?v=hQgFixeXdZo" target="_blank">🎥教學</a><br>4. 坐姿/俯臥腿彎舉 3x12 <a href="https://www.youtube.com/watch?v=F488k67BTNo" target="_blank">🎥教學</a>` 
            },
            { 
                day: "週日 (健身房)", 
                type: "重訓", 
                focus: "上肢大重量", 
                routine: `1. 槓鈴/機械臥推 4x8-10 <a href="https://www.youtube.com/watch?v=utIPsneUnuY" target="_blank">🎥教學</a><br>2. 滑輪下拉 4x8-12 <a href="https://www.youtube.com/watch?v=AOpi-p0cJkc" target="_blank">🎥教學</a><br>3. 機械划船 4x10 <a href="https://www.youtube.com/watch?v=GZbfZ033f74" target="_blank">🎥教學</a><br>4. 繩索三頭下壓 3x12 <a href="https://www.youtube.com/watch?v=2-LAMcpzODU" target="_blank">🎥教學</a>` 
            },
            { 
                day: "週一", 
                type: "恢復", 
                focus: "完全休息或散步", 
                routine: "讓連續兩天大重量的神經系統恢復。吃足營養，盡量睡滿 8 小時！" 
            },
            { 
                day: "週二/週三 (居家)", 
                type: "重訓", 
                focus: "啞鈴下肢與核心", 
                routine: `1. 保加利亞單腿蹲 4x10-12/腿 <a href="https://www.youtube.com/watch?v=vLuhN_glFZ8" target="_blank">🎥教學</a><br>2. 啞鈴直腿硬舉 4x12 <a href="https://www.youtube.com/watch?v=hQgFixeXdZo" target="_blank">🎥教學</a><br>3. 啞鈴高腳杯深蹲 3x15 <a href="https://www.youtube.com/watch?v=MeIiIdhgPwg" target="_blank">🎥教學</a><br>4. 平板支撐 3x60秒 <a href="https://www.youtube.com/watch?v=pSHjTRCQxIw" target="_blank">🎥教學</a>` 
            },
            { 
                day: "週四/週五 (居家)", 
                type: "重訓", 
                focus: "引體向上與啞鈴上肢", 
                routine: `1. 輔助引體向上 4x力竭 <a href="https://www.youtube.com/watch?v=ZHllQTJf7eA" target="_blank">🎥教學</a><br>2. 啞鈴地板臥推 4x10-15 <a href="https://www.youtube.com/watch?v=uUGDRwge4F8" target="_blank">🎥教學</a><br>3. 啞鈴肩推 3x10-12 <a href="https://www.youtube.com/watch?v=qEwKCR5JCog" target="_blank">🎥教學</a><br>4. 啞鈴二頭彎舉 3x12 <a href="https://www.youtube.com/watch?v=ykJmrZ5v0Oo" target="_blank">🎥教學</a>` 
            }
        ]
    },
    "mode_b": {
        name: "全居家啞鈴模式 (備用方案)",
        schedule: [
            { day: "Day 1", type: "重訓", focus: "上半身推力", routine: `啞鈴地板臥推 4x15 <a href="https://www.youtube.com/watch?v=uUGDRwge4F8" target="_blank">🎥教學</a><br>啞鈴肩推 4x12 <a href="https://www.youtube.com/watch?v=qEwKCR5JCog" target="_blank">🎥教學</a><br>伏地挺身 3x力竭` },
            { day: "Day 2", type: "重訓", focus: "下肢", routine: `保加利亞單腿蹲 4x12/腿 <a href="https://www.youtube.com/watch?v=vLuhN_glFZ8" target="_blank">🎥教學</a><br>啞鈴羅馬尼亞硬舉 4x12 <a href="https://www.youtube.com/watch?v=hQgFixeXdZo" target="_blank">🎥教學</a>` },
            { day: "Day 3", type: "恢復", focus: "休息", routine: "活動度伸展" },
            { day: "Day 4", type: "重訓", focus: "上半身拉力", routine: `引體向上 4x力竭 <a href="https://www.youtube.com/watch?v=ZHllQTJf7eA" target="_blank">🎥教學</a><br>啞鈴單臂划船 4x12/手 <a href="https://www.youtube.com/watch?v=pYcpY20QaE8" target="_blank">🎥教學</a>` },
            { day: "Day 5", type: "恢復", focus: "心肺", routine: "戶外慢跑或快走 30 分鐘" }
        ]
    }
};