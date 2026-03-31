// EnPassive Data Storage v5.4 - 正式版（修正課表與影片）

const dietData = {
    breakfast: [
        { name: "經典燕麥蛋白碗", desc: "1.5杯燕麥 + 無乳糖奶 + 1勺蛋白粉 + 香蕉 + 2蛋" },
        { name: "地瓜優格蛋白組", desc: "地瓜1條 + 水煮蛋3顆 + 無乳糖優格150g" },
        { name: "超商蛋白急救包", desc: "無糖豆漿1瓶 + 茶葉蛋2顆 + 地瓜1個" },
        { name: "蛋白煎餅早餐", desc: "蛋白粉煎餅（蛋白粉+蛋+燕麥）+ 藍莓 + 花生醬少許" },
        { name: "鮪魚優格碗", desc: "水煮蛋2顆 + 低脂鮪魚罐 + 無糖優格200g + 小黃瓜" },
        { name: "全蛋地瓜吐司組", desc: "全蛋3顆 + 地瓜1條 + 全麥吐司1片 + 酪梨少許" }
    ],
    
    lunch: [
        { name: "經典雞胸增肌餐", desc: "雞胸200g + 糙米1.5杯 + 大量蔬菜淋橄欖油" },
        { name: "海鮮 Omega-3 餐", desc: "鮭魚/鯛魚200g + 藜麥飯 + 生菜沙拉" },
        { name: "瘦牛肉蔬菜便當", desc: "瘦牛肉180g + 糙米1杯 + 花椰菜 + 紅蘿蔔" },
        { name: "豆腐雞胸混合餐", desc: "板豆腐半塊 + 雞胸150g + 紫米飯 + 大量青菜" },
        { name: "鮪魚糙米沙拉碗", desc: "鮪魚罐2罐 + 糙米1杯 + 玉米 + 小黃瓜 + 橄欖油" },
        { name: "低卡便當風", desc: "去皮雞腿200g + 地瓜 + 半顆水煮蛋 + 大量綠葉菜" }
    ],
    
    dinner: [
        { name: "鑄鐵鍋牛排晚餐", desc: "瘦牛肉200g + 地瓜1.5個 + 烤蘆筍" },
        { name: "鮭魚豆腐修復餐", desc: "鮭魚150g + 板豆腐半塊 + 白飯1杯" },
        { name: "清蒸魚蔬菜餐", desc: "虱目魚/鱈魚200g + 大量清蒸蔬菜 + 少量糙米" },
        { name: "雞胸菇類低卡餐", desc: "雞胸180g + 杏鮑菇 + 金針菇 + 花椰菜" },
        { name: "蛋豆腐修復碗", desc: "水煮蛋3顆 + 嫩豆腐 + 菠菜 + 少許芝麻油" },
        { name: "瘦豬里肌蔬菜餐", desc: "瘦豬里肌150g + 地瓜 + 大量綠葉菜 + 少許堅果" }
    ],
    
    snack: [
        { name: "堅果豆漿補給", desc: "無糖豆漿 + 一把無調味堅果" },
        { name: "訓練後蛋白奶昔", desc: "1勺蛋白粉 + 無乳糖奶 + 半根香蕉" },
        { name: "希臘優格蛋白杯", desc: "無糖希臘優格200g + 藍莓 + 奇亞籽" },
        { name: "水煮蛋堅果組", desc: "水煮蛋2顆 + 無調味綜合堅果20g" },
        { name: "低脂乳酪條 + 地瓜", desc: "低脂乳酪條2條 + 小地瓜1個" },
        { name: "蛋白優格 + 肉桂", desc: "無糖優格150g + 1勺蛋白粉 + 肉桂粉" }
    ]
};

const workoutData = {
    "mode_a": {
        name: "週末重裝＋平日居家 (安全防護版)",
        description: "週六上肢、週日下肢。嚴格執行「3秒下、1秒上」節奏，姿勢優先，關節不適立即停止。",
        schedule: [
            { 
                day: "週六 (健身房)", 
                type: "重訓", 
                focus: "上肢大重量",
                exercises: [
                    { name: "槓鈴臥推 (或啞鈴地板臥推)", vid: "utIPsneUnuY" },
                    { name: "滑輪下拉 (或輔助引體向上)", vid: "AOpi-p0cJkc" },
                    { name: "機械划船", vid: "GZbfZ033f74" },
                    { name: "繩索三頭下壓", vid: "2-LAMcpzODU" },
                    { name: "蝴蝶擴胸訓練機 (Pec Deck Fly)", vid: "fEOl1ZzWzNs" }
                ]
            },
            { 
                day: "週日 (健身房)", 
                type: "重訓", 
                focus: "下肢大重量 (關節保護版)",
                exercises: [
                    { name: "槓鈴深蹲 (或高腳杯深蹲/椅子輔助)", vid: "dO-51htz_eA" },
                    { name: "腿舉機 (Leg Press)", vid: "vZ9rufloaoo" },
                    { name: "六角槓硬舉 (Trap Bar) 或箱上硬舉", vid: "hQgFixeXdZo" },
                    { name: "坐姿腿彎舉", vid: "F488k67BTNo" },
                    { name: "髖內收機 (Hip Adductor)", vid: "4pfeckTaLOg" }
                ]
            },
            { 
                day: "週一", 
                type: "休", 
                focus: "完全休息", 
                routine: "補充魚油＋善存，確保深層睡眠，恢復神經系統。" 
            },
            { 
                day: "週二/三 (居家啞鈴)", 
                type: "重訓", 
                // 🔄 修改 1：週二/三改為上肢維持
                focus: "上肢維持",
                exercises: [
                    { name: "輔助引體向上 或 啞鈴划船", vid: "ZHllQTJf7eA" },
                    { name: "啞鈴地板臥推", vid: "uUGDRwge4F8" },
                    { name: "啞鈴肩推 (坐姿)", vid: "qEwKCR5JCog" }
                ]
            },
            { 
                day: "週四/五 (居家啞鈴)", 
                type: "重訓", 
                // 🔄 修改 1：週四/五改為下肢維持
                focus: "下肢維持 (安全版)",
                exercises: [
                    { name: "保加利亞單腿蹲 (椅子輔助)", vid: "vLuhN_glFZ8" },
                    { name: "啞鈴高腳杯深蹲", vid: "MeIiIdhgPwg" },
                    // 🔄 修改 2：修正啞鈴臀橋影片，改為標準啞鈴臀推教學
                    { name: "啞鈴臀橋 (Glute Bridge)", vid: "h8Z0-31R08k" }
                ]
            }
        ]
    }
};
