// ==========================================
// 飲食資料庫 (Diet Database) - 52歲 / 增肌 / 無乳糖友善 / 台灣好採買
// 目標熱量: ~2700 kcal | 蛋白質: 110-120g | 碳水: 360g | 脂肪: 80g
// ==========================================
const dietData = [
    {
        id: "D_BREAKFAST_01",
        timing: "pre_workout",
        name: "無乳糖活力早餐：燕麥片＋植物/分離蛋白＋香蕉",
        description: "1.5杯燕麥片用無糖豆漿或杏仁奶煮，加入1勺豌豆/分離乳清蛋白與1根香蕉。完美提供晨間低GI碳水與無乳糖蛋白質。",
        tags: ["早餐", "高碳水", "無乳糖", "快速準備"]
    },
    {
        id: "D_LUNCH_01",
        timing: "post_workout",
        name: "增肌午餐：烤雞胸肉＋糙米飯＋大量蔬菜",
        description: "200g 烤雞胸或去皮雞腿，配上 1.5 杯糙米與淋上 1 茶匙橄欖油的深綠色蔬菜（如花椰菜、菠菜）。",
        tags: ["午餐", "高蛋白", "優質油脂", "便當友善"]
    },
    {
        id: "D_DINNER_01",
        timing: "fasting_break",
        name: "黃金修復晚餐：鑄鐵鍋煎牛排/鮭魚＋地瓜",
        description: "200g 瘦牛肉或鮭魚（富含 Omega-3），搭配 1.5 個中型地瓜，以及和風沙拉。完美契合你的鑄鐵鍋料理習慣！",
        tags: ["晚餐", "高蛋白", "肌酸/Omega-3", "需下廚"]
    },
    {
        id: "D_SNACK_01",
        timing: "snack",
        name: "抗發炎點心：無糖豆漿＋一把杏仁＋蘋果",
        description: "下午或睡前容易餓時補充。杏仁提供好油保護50歲後的關節與賀爾蒙，豆漿提供平穩的植物蛋白。",
        tags: ["點心", "健康脂肪", "抗發炎", "無乳糖"]
    }
];

// ==========================================
// 訓練資料庫 (Workout Database) - 週末健身房 + 平日居家 + 50+安全影片
// ==========================================
const workoutData = {
    "mode_a": {
        name: "週末重裝＋平日居家 (上下半身 4 天分化) - 52歲安全版",
        description: "週末大重量，平日啞鈴維持。每組間休息 90–120 秒，動作請維持「3秒下、1秒上」的節奏，保護關節並最大化肌肉感受度！",
        schedule: [
            { 
                day: "週六 (健身房)", 
                type: "重訓", 
                focus: "下肢大重量 (高碳日)", 
                routine: `1. 槓鈴深蹲 4x8-10 <a href="https://www.youtube.com/watch?v=dO-51htz_eA" target="_blank">🎥 50+安全教學</a><br>2. 腿舉機 (Leg Press) 4x10-12 (腳放高減少膝蓋壓力)<br>3. 羅馬尼亞硬舉 (RDL) 4x8-10 <a href="https://www.youtube.com/watch?v=hQgFixeXdZo" target="_blank">🎥 啞鈴/槓鈴版</a><br>4. 坐姿腿彎舉 3x12` 
            },
            { 
                day: "週日 (健身房)", 
                type: "重訓", 
                focus: "上肢大重量 (中碳日)", 
                routine: `1. 槓鈴臥推 4x8-10 <a href="https://www.youtube.com/watch?v=utIPsneUnuY" target="_blank">🎥 50+專屬教學</a><br>2. 滑輪下拉 4x8-12 <a href="https://www.youtube.com/watch?v=AOpi-p0cJkc" target="_blank">🎥 50+初學者版</a><br>3. 機械划船 4x10<br>4. 繩索三頭下壓 3x12` 
            },
            { 
                day: "週一", 
                type: "恢復", 
                focus: "完全休息或散步 (低碳日)", 
                routine: "補充 5g 肌酸 + 魚油 + 維生素 D3。盡量睡滿 8 小時！" 
            },
            { 
                day: "週二/週三 (居家)", 
                type: "重訓", 
                focus: "啞鈴下肢與核心 (中高碳日)", 
                routine: `1. 保加利亞單腿蹲 4x10-12/腿 <a href="https://www.youtube.com/watch?v=vLuhN_glFZ8" target="_blank">🎥 居家啞鈴版</a><br>2. 啞鈴直腿硬舉 4x12<br>3. 啞鈴高腳杯深蹲 3x15<br>4. 平板支撐 3x60秒` 
            },
            { 
                day: "週四/週五 (居家)", 
                type: "重訓", 
                focus: "引體向上與啞鈴上肢 (中碳日)", 
                routine: `1. 彈力帶輔助引體向上 4x力竭 <a href="https://www.youtube.com/watch?v=ZHllQTJf7eA" target="_blank">🎥 彈力帶輔助</a><br>2. 啞鈴地板臥推 4x10-15 <a href="https://www.youtube.com/watch?v=uUGDRwge4F8" target="_blank">🎥 地板版</a><br>3. 啞鈴肩推 3x10-12 <a href="https://www.youtube.com/watch?v=qEwKCR5JCog" target="_blank">🎥 肩推教學</a><br>4. 啞鈴二頭彎舉 3x12` 
            }
        ]
    },
    "mode_b": {
        name: "全居家啞鈴模式 (備用方案)",
        description: "如果某個週末剛好沒空去健身房，可以切換成純啞鈴與單槓的居家訓練模式維持進度。",
        schedule: [
            { day: "Day 1 (居家)", type: "重訓", focus: "上半身推力", routine: `啞鈴地板臥推 4x10-15 <a href="https://www.youtube.com/watch?v=uUGDRwge4F8" target="_blank">🎥教學</a><br>啞鈴肩推 4x10-12 <a href="https://www.youtube.com/watch?v=qEwKCR5JCog" target="_blank">🎥教學</a><br>伏地挺身 3x力竭` },
            { day: "Day 2 (居家)", type: "重訓", focus: "下肢", routine: `保加利亞單腿蹲 4x10-15/腿 <a href="https://www.youtube.com/watch?v=vLuhN_glFZ8" target="_blank">🎥教學</a><br>啞鈴羅馬尼亞硬舉 4x12 <a href="https://www.youtube.com/watch?v=hQgFixeXdZo" target="_blank">🎥教學</a><br>啞鈴弓箭步 3x12` },
            { day: "Day 3", type: "恢復", focus: "休息", routine: "活動度伸展" },
            { day: "Day 4 (居家)", type: "重訓", focus: "上半身拉力", routine: `引體向上 4x力竭 <a href="https://www.youtube.com/watch?v=ZHllQTJf7eA" target="_blank">🎥教學</a><br>啞鈴單臂划船 4x10-12/手<br>啞鈴二頭彎舉 3x12` },
            { day: "Day 5", type: "恢復", focus: "心肺", routine: "戶外慢跑或快走 30 分鐘" }
        ]
    }
};