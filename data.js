// data.js
const workoutData = {
    "mode_a": {
        schedule: [
            {
                day: "週一",
                type: "居家",
                focus: "核心與上肢基礎",
                exercises: [
                    { name: "伏地挺身 (Push-up)", vid: "IODxDxX7oi4" },
                    { name: "捲腹 (Crunch)", vid: "Xyd_fa5zoEU" },
                    { name: "棒式 (Plank)", vid: "pSHjTRCQxIw" }
                ]
            },
            {
                day: "週二",
                type: "居家",
                focus: "下肢與臀部",
                exercises: [
                    { name: "徒手深蹲 (Bodyweight Squat)", vid: "U3HlEF_E9fo" },
                    { name: "分腿蹲 (Lunge)", vid: "QOVaHwm-Q6U" },
                    { name: "臀橋 (Glute Bridge)", vid: "8bbE64NuDTU" }
                ]
            },
            {
                day: "週三",
                type: "休息",
                focus: "主動恢復",
                routine: "建議進行 15-20 分鐘全身拉伸、瑜珈或輕度散步，促進肌肉修復。"
            },
            {
                day: "週四",
                type: "居家",
                focus: "核心進階",
                exercises: [
                    { name: "俄羅斯轉體 (Russian Twist)", vid: "wkD8rjkodUI" },
                    { name: "仰臥起坐 (Sit-up)", vid: "1fbU_MkV7NE" },
                    { name: "側棒式 (Side Plank)", vid: "NXr4Fv8yQvk" }
                ]
            },
            {
                day: "週五",
                type: "休息",
                focus: "重訓前放鬆",
                routine: "準備週末的高強度健身房訓練，請確保補充足夠的碳水與優質睡眠。"
            },
            {
                day: "週六",
                type: "重訓",
                focus: "上半身肌肥大 (健身房)",
                exercises: [
                    { name: "槓鈴臥推 (Bench Press)", vid: "gRVjAtPip0Y" },
                    { name: "滑輪下拉 (Lat Pulldown)", vid: "CAwf7n6Luuc" },
                    { name: "啞鈴肩推 (Dumbbell Shoulder Press)", vid: "qEwKCR5JCog" },
                    { name: "坐姿划船 (Seated Cable Row)", vid: "GZbfZ033f74" },
                    { name: "蝴蝶擴胸訓練機 (Pec Deck Fly)", vid: "fEOl1ZzWzNs" } // 🌟 新增：蝴蝶擴胸機
                ]
            },
            {
                day: "週日",
                type: "重訓",
                focus: "下半身與腿部 (健身房)",
                exercises: [
                    { name: "槓鈴深蹲 (Barbell Squat)", vid: "MVMNK0HiV9k" },
                    { name: "腿舉機 (Leg Press)", vid: "vZ9rufloaoo" }, // 🌟 更新：修正失效的影片連結
                    { name: "羅馬尼亞硬舉 (RDL)", vid: "JCXUYuzwNrM" },
                    { name: "坐姿腿屈伸 (Leg Extension)", vid: "YyvSfVjQeL0" },
                    { name: "髖內收機 (Hip Adductor)", vid: "4pfeckTaLOg" } // 🌟 新增：髖內收機
                ]
            }
        ]
    }
};

const dietData = {
    breakfast: [
        { name: "燕麥蛋白碗", desc: "燕麥片 50g + 乳清蛋白 1匙 + 堅果 10g (快速補充能量)" },
        { name: "全麥鮪魚蛋吐司", desc: "全麥吐司 2片 + 水煮鮪魚 1罐 + 煎蛋 1顆 (高蛋白質)" }
    ],
    lunch: [
        { name: "雞胸肉輕食便當", desc: "雞胸肉 150g + 糙米飯 150g + 燙青菜 1碗" },
        { name: "瘦牛肉藜麥沙拉", desc: "瘦牛肉 150g + 藜麥 100g + 綜合生菜 + 橄欖油" }
    ],
    dinner: [
        { name: "鮭魚地瓜餐", desc: "烤鮭魚 150g + 烤地瓜 150g + 花椰菜 1碗 (富含 Omega-3)" },
        { name: "豬里肌配馬鈴薯", desc: "煎豬里肌 150g + 馬鈴薯泥 150g + 四季豆 1碗" }
    ],
    snack: [
        { name: "無糖希臘優格", desc: "無糖希臘優格 150g + 藍莓一小把 (緩釋酪蛋白)" },
        { name: "乳清蛋白飲", desc: "乳清蛋白 1匙 + 無糖豆漿 300ml (訓練後最佳)" }
    ]
};
