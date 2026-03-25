// ==========================================
// 飲食資料庫 (Diet Database) - 最終精簡版 (無乳糖 + 台灣通路)
// ==========================================
const dietData = {
    breakfast: [
        { name: "經典燕麥高蛋白碗", desc: "1.5杯燕麥 + 無乳糖鮮奶煮 + 1勺蛋白粉 + 香蕉 + 水煮蛋2顆（全聯光泉/Arla 無乳糖奶）" },
        { name: "地瓜優格蛋白組", desc: "烤地瓜1個 + 水煮蛋3顆 + 無乳糖優格150g + 半根香蕉（全聯石安蛋 + 無乳糖優格）" },
        { name: "超商快速蛋白早餐", desc: "無糖豆漿1瓶 + 茶葉蛋2顆 + 烤地瓜1個 + 無乳糖鮮奶250ml（7-11/全家）" },
        { name: "燕麥蛋餅風 (鹹食)", desc: "燕麥片1杯 + 水煮蛋3顆 + 無糖豆漿300ml（泡軟後混合蛋液）" }
    ],
    lunch: [
        { name: "經典雞胸增肌便當", desc: "雞胸肉200g + 糙米1.5杯 + 大量蒸蔬菜淋橄欖油（全聯卜蜂/大成雞胸）" },
        { name: "海鮮 Omega-3 餐", desc: "鮭魚或鯛魚200g + 藜麥飯 + 生菜沙拉（全聯冷凍鮭魚片）" },
        { name: "外食/Subway 方案", desc: "Subway 烤雞肉堡（不加醬、加橄欖油）或超商高蛋白雞胸便當" },
        { name: "豆腐雞肉雙拼", desc: "板豆腐半塊 + 雞胸150g 快炒 + 大量青菜 + 半碗糙米" }
    ],
    dinner: [
        { name: "鑄鐵鍋牛排晚餐", desc: "瘦牛肉200g + 烤地瓜1.5個 + 烤蘆筍/青花菜（家樂福/全聯冷藏牛排）" },
        { name: "鮭魚豆腐修復餐", desc: "鮭魚150g + 板豆腐半塊 + 白飯1杯 + 燙青菜（全聯冷凍鮭魚）" },
        { name: "豬里肌低脂快炒", desc: "豬里肌肉片200g 炒木耳/青椒 + 糙米1杯（低脂高B1）" },
        { name: "清爽魚肉蔬菜鍋", desc: "虱目魚或鯛魚200g + 當季蔬菜煮湯（清爽不油膩）" }
    ],
    snack: [
        { name: "堅果豆漿補給", desc: "無糖豆漿1杯 + 一把無調味堅果（全聯萬歲牌原味）" },
        { name: "水煮毛豆點心", desc: "毛豆一碗（全聯冷凍毛豆俠，高蛋白解饞）" },
        { name: "無乳糖優格水果", desc: "無乳糖優格150g + 藍莓或蘋果" },
        { name: "訓練後蛋白奶昔", desc: "1勺蛋白粉 + 無乳糖奶 + 半根香蕉（訓練後快速補充）" }
    ]
};

// ==========================================
// 訓練資料庫 (Workout Database) - 直接示範影片版
// ==========================================
const workoutData = {
    "mode_a": {
        name: "週末重裝＋平日居家 (上下半身 4 天分化) - 52歲安全版",
        description: "週末健身房大重量，平日在家啞鈴維持。請嚴格執行「3秒下、1秒上」節奏保護關節。",
        schedule: [
            { 
                day: "週六 (健身房)", 
                type: "重訓", 
                focus: "下肢大重量", 
                routine: `1. 槓鈴深蹲 4x8-10 <a href="https://www.youtube.com/watch?v=ultWZbUMPL8" target="_blank">🎥直接示範</a><br>2. 腿舉機 4x10-12 <a href="https://www.youtube.com/watch?v=IZxyjW7MPJQ" target="_blank">🎥直接示範</a><br>3. 羅馬尼亞硬舉 4x8-10 <a href="https://www.youtube.com/watch?v=7j-2w4-P14I" target="_blank">🎥直接示範</a><br>4. 坐姿/俯臥腿彎舉 3x12 <a href="https://www.youtube.com/watch?v=5xR8tvg4-yM" target="_blank">🎥直接示範</a>` 
            },
            { 
                day: "週日 (健身房)", 
                type: "重訓", 
                focus: "上肢大重量", 
                routine: `1. 槓鈴/機械臥推 4x8-10 <a href="https://www.youtube.com/watch?v=4Y2ZdHCOXok" target="_blank">🎥直接示範</a><br>2. 滑輪下拉 4x8-12 <a href="https://www.youtube.com/watch?v=AOpi-p0cJkc" target="_blank">🎥直接示範</a><br>3. 機械划船 4x10 <a href="https://www.youtube.com/watch?v=7o2oolbmzeI" target="_blank">🎥直接示範</a><br>4. 繩索三頭下壓 3x12 <a href="https://www.youtube.com/watch?v=2-LAMcpzODU" target="_blank">🎥直接示範</a>` 
            },
            { 
                day: "週一", 
                type: "恢復", 
                focus: "完全休息", 
                routine: "補充魚油＋善存。今日目標：深層睡眠 8 小時。" 
            },
            { 
                day: "週二/週三 (居家)", 
                type: "重訓", 
                focus: "啞鈴下肢與核心", 
                routine: `1. 保加利亞單腿蹲 4x10-12/腿 <a href="https://www.youtube.com/watch?v=vLuhN_glFZ8" target="_blank">🎥直接示範</a><br>2. 啞鈴直腿硬舉 4x12 <a href="https://www.youtube.com/watch?v=hQgFixeXdZo" target="_blank">🎥直接示範</a><br>3. 啞鈴高腳杯深蹲 3x15 <a href="https://www.youtube.com/watch?v=MeIiIdhgPwg" target="_blank">🎥直接示範</a><br>4. 平板支撐 3x60秒 <a href="https://www.youtube.com/watch?v=pSHjTRCQxIw" target="_blank">🎥直接示範</a>` 
            },
            { 
                day: "週四/週五 (居家)", 
                type: "重訓", 
                focus: "引體向上與啞鈴上肢", 
                routine: `1. 輔助引體向上 4x力竭 <a href="https://www.youtube.com/watch?v=ZHllQTJf7eA" target="_blank">🎥直接示範</a><br>2. 啞鈴地板臥推 4x10-15 <a href="https://www.youtube.com/watch?v=uUGDRwge4F8" target="_blank">🎥直接示範</a><br>3. 啞鈴肩推 3x10-12 <a href="https://www.youtube.com/watch?v=qEwKCR5JCog" target="_blank">🎥直接示範</a><br>4. 啞鈴二頭彎舉 3x12 <a href="https://www.youtube.com/watch?v=ykJmrZ5v0Oo" target="_blank">🎥直接示範</a>` 
            }
        ]
    },
    "mode_b": {
        name: "全居家啞鈴模式 (備用方案)",
        description: "週末沒空去健身房時的居家替代方案。",
        schedule: [
            { day: "Day 1", type: "重訓", focus: "上半身推力", routine: `啞鈴地板臥推 4x15 <a href="https://www.youtube.com/watch?v=uUGDRwge4F8" target="_blank">🎥直接示範</a><br>啞鈴肩推 4x12 <a href="https://www.youtube.com/watch?v=qEwKCR5JCog" target="_blank">🎥直接示範</a><br>伏地挺身 3x力竭` },
            { day: "Day 2", type: "重訓", focus: "下肢", routine: `保加利亞單腿蹲 4x12/腿 <a href="https://www.youtube.com/watch?v=vLuhN_glFZ8" target="_blank">🎥直接示範</a><br>啞鈴羅馬尼亞硬舉 4x12 <a href="https://www.youtube.com/watch?v=hQgFixeXdZo" target="_blank">🎥直接示範</a>` },
            { day: "Day 3", type: "恢復", focus: "休息", routine: "活動度伸展" },
            { day: "Day 4", type: "重訓", focus: "上半身拉力", routine: `引體向上 4x力竭 <a href="https://www.youtube.com/watch?v=ZHllQTJf7eA" target="_blank">🎥直接示範</a><br>啞鈴單臂划船 4x12/手 <a href="https://www.youtube.com/watch?v=pYcpY20QaE8" target="_blank">🎥直接示範</a>` },
            { day: "Day 5", type: "恢復", focus: "心肺", routine: "戶外慢跑或快走 30 分鐘" }
        ]
    }
};
