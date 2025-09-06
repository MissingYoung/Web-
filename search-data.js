// search-data.js (手动更新至最新内容版本 - V2)

const searchData = [
    // --- 首页 (index.html) ---
    { "pageTitle": "首页", "pageUrl": "index.html", "content": "探索自然的奇迹", "context": "从雪山之巅到热带雨林，发现未曾踏足的风景。" },
    { "pageTitle": "首页", "pageUrl": "index.html", "content": "品味舌尖上的云南", "context": "每一道菜，都是一个民族的故事与风情。" },
    { "pageTitle": "首页", "pageUrl": "index.html", "content": "沉浸于活着的风情", "context": "参与一场节庆，感受这片土地的热情与心跳。" },
    { "pageTitle": "首页", "pageUrl": "index.html", "content": "触摸千年的文脉", "context": "从指尖的技艺到古老的文字，体验文化的深度。" },
    { "pageTitle": "首页", "pageUrl": "index.html", "content": "点击地图上的州/市，探索云南", "context": "首页交互式地图" },
    { "pageTitle": "首页", "pageUrl": "index.html", "content": "开启你的探索之旅", "context": "首页核心分类导航" },

    // --- 关于我们 (about.html) ---
    { "pageTitle": "关于我们", "pageUrl": "about.html", "content": "探索美食的真谛", "context": "我们不仅仅是寻找美味，更是追寻食物背后的文化与人情..." },
    { "pageTitle": "关于我们", "pageUrl": "about.html", "content": "沉浸于绝美风光", "context": "从巍峨的山脉到宁静的海岸线，我们带您发现那些能让时间静止的风景..." },
    { "pageTitle": "关于我们", "pageUrl": "about.html", "content": "聆听人文的回响", "context": "历史与现代在这里交汇。我们深入城市的肌理..." },
    { "pageTitle": "关于我们", "pageUrl": "about.html", "content": "感受文化遗产的美", "context": "摩挲粗糙石壁上的绝美壁画，临摹生动隽永的古老文字..." },
    
    // --- 联系我们 (contact.html) ---
    { "pageTitle": "联系我们", "pageUrl": "contact.html", "content": "联系我们", "context": "你可以通过以下方式联系我，我会第一时间回复你。" },

    // --- 美食页面 (theme_food.html) ---
    { "pageTitle": "美食寻味", "pageUrl": "theme_food.html#guoqiao-mixian", "content": "过桥米线", "context": "这不只是一碗米线，更是一场充满仪式感的盛宴。" },
    { "pageTitle": "美食寻味", "pageUrl": "theme_food.html#qiguo-ji", "content": "汽锅鸡", "context": "源自建水的独特烹饪技艺，不加一滴水，全靠蒸汽凝结成汤。" },
    { "pageTitle": "美食寻味", "pageUrl": "theme_food.html#xuanwei-huotui", "content": "宣威火腿", "context": "与金华火腿、安福火腿齐名的中国三大名腿之一。" },
    { "pageTitle": "美食寻味", "pageUrl": "theme_food.html#xianhua-bing", "content": "鲜花饼", "context": "将可食用的玫瑰花瓣裹入酥皮，烘烤而成。" },
    { "pageTitle": "美食寻味", "pageUrl": "theme_food.html#daiwei-kaoyu", "content": "傣味烤鱼", "context": "用香茅草、大芫荽等多种热带香料填满鱼腹..." },
    { "pageTitle": "美食寻味", "pageUrl": "theme_food.html#rushan", "content": "乳扇", "context": "大理白族的传统奶制品，形如折扇。" },
    { "pageTitle": "美食寻味", "pageUrl": "theme_food.html#lijiang-baba", "content": "丽江粑粑", "context": "分为咸甜两种口味，用精制麦面和雪山泉水和面..." },
    { "pageTitle": "美食寻味", "pageUrl": "theme_food.html#douhua-mixian", "content": "豆花米线", "context": "将嫩滑的豆花覆盖在煮好的米线上..." },
    { "pageTitle": "美食寻味", "pageUrl": "theme_food.html#dajiujia", "content": "大救驾", "context": "即腾冲炒饵块，传说曾救过永历皇帝的驾而得名。" },
    { "pageTitle": "美食寻味", "pageUrl": "theme_food.html#boluo-fan", "content": "菠萝饭", "context": "将整个菠萝挖空作为容器，填入浸泡过的糯米..." },

    // --- 景点页面 (theme_scenery.html) ---
    { "pageTitle": "必游景点", "pageUrl": "theme_scenery.html#lijiang-gucheng", "content": "丽江古城", "context": "联合国教科文组织世界文化遗产..." },
    { "pageTitle": "必游景点", "pageUrl": "theme_scenery.html#yulong-xueshan", "content": "玉龙雪山", "context": "纳西族的神山，由13座雪峰组成..." },
    { "pageTitle": "必游景点", "pageUrl": "theme_scenery.html#erhai", "content": "洱海", "context": "风花雪月四景之一的“洱海月”，是云南第二大高原湖泊。" },
    { "pageTitle": "必游景点", "pageUrl": "theme_scenery.html#pudacuo-guojiagongyuan", "content": "普达措国家公园", "context": "中国大陆第一个国家公园，位于香格里拉。" },
    { "pageTitle": "必游景点", "pageUrl": "theme_scenery.html#redai-zhiwuyuan", "content": "中科院热带植物园", "context": "中国面积最大、物种最丰富的植物园。" },
    { "pageTitle": "必游景点", "pageUrl": "theme_scenery.html#yuanyang-titian", "content": "元阳哈尼梯田", "context": "哈尼族人历时1300多年开垦出的农业奇观。" },
    { "pageTitle": "必游景点", "pageUrl": "theme_scenery.html#hutiao-xia", "content": "虎跳峡", "context": "世界上最深的大峡谷之一，以其“险”而闻名。" },
    { "pageTitle": "必游景点", "pageUrl": "theme_scenery.html#shilin", "content": "石林风景区", "context": "典型的喀斯特地貌奇观，被誉为“天下第一奇观”。" },
    { "pageTitle": "必游景点", "pageUrl": "theme_scenery.html#luguhu", "content": "泸沽湖", "context": "川滇两省共辖，以其绝美的湖光山色和独特的摩梭“走婚”文化而闻名。" },
    { "pageTitle": "必游景点", "pageUrl": "theme_scenery.html#puzhehei", "content": "普者黑", "context": "彝语意为“盛满鱼虾的池塘”，是典型的喀斯特湿地田园风光。" },

    // --- 人文页面 (theme_humanities.html) ---
    { "pageTitle": "人文故事", "pageUrl": "theme_humanities.html#xishuangbanna-daizu-poshuijie", "content": "西双版纳.傣族.泼水节", "context": "于每年公历四月中旬举行，是傣族最盛大的传统节日..." },
    { "pageTitle": "人文故事", "pageUrl": "theme_humanities.html#dali-baizu-sanyuejie", "content": "大理.白族.三月街", "context": "又称“观音市”，是白族千年一遇的传统盛会。" },
    { "pageTitle": "人文故事", "pageUrl": "theme_humanities.html#chuxiong-yizu-huobajie", "content": "楚雄.彝族.火把节", "context": "被誉为“东方的狂欢节”，于每年农历六月二十四举行。" },
    { "pageTitle": "人文故事", "pageUrl": "theme_humanities.html#lijiang-naxizu-dongbawenhua", "content": "丽江.纳西族.东巴文化", "context": "纳西族的古老传统文化，核心是东巴教和其使用的象形文字..." },
    { "pageTitle": "人文故事", "pageUrl": "theme_humanities.html#lijiang-mosuoren-zouhunxisu", "content": "丽江.摩梭人.走婚习俗", "context": "生活在泸沽湖畔的摩梭人，至今仍保留着母系社会形态..." },
    { "pageTitle": "人文故事", "pageUrl": "theme_humanities.html#honghe-hanizu-changjieyan", "content": "红河.哈尼族.长街宴", "context": "哈尼族的“昂玛突”节期间举行的盛大宴席。" },
    { "pageTitle": "人文故事", "pageUrl": "theme_humanities.html#diqing-zangzu-xianziwu", "content": "迪庆.藏族.弦子舞", "context": "香格里拉地区藏族人民生活中不可或缺的歌舞形式。" },
    { "pageTitle": "人文故事", "pageUrl": "theme_humanities.html#lincang-wazu-muguwenhua", "content": "临沧.佤族.木鼓文化", "context": "木鼓是佤族的通天神器和民族象征..." },

    // --- 文化页面 (theme_culture.html) ---
    { "pageTitle": "文化体验", "pageUrl": "theme_culture.html#lijiang-naxizu-dongbagujiwenxian", "content": "丽江.纳西族.东巴古籍文献", "context": "世界记忆遗产，是东巴教的经书。" },
    { "pageTitle": "文化体验", "pageUrl": "theme_culture.html#dali-baizu-zaranjiyi", "content": "大理.白族.扎染技艺", "context": "国家级非物质文化遗产。工匠用针线在白布上缝扎出各种图案..." },
    { "pageTitle": "文化体验", "pageUrl": "theme_culture.html#honghe-jianshui-jianshuizitaoshaozhijiyi", "content": "红河.建水.建水紫陶烧制技艺", "context": "中国四大名陶之一，以其“无釉磨光”的独特工艺而著称。" },
    { "pageTitle": "文化体验", "pageUrl": "theme_culture.html#dehong-daizu-jianzhiyishu", "content": "德宏.傣族.剪纸艺术", "context": "多用于装饰和节庆，题材广泛，包括神话传说、动物图腾..." },
    { "pageTitle": "文化体验", "pageUrl": "theme_culture.html#chuxiong-yizu-haicaiqiang", "content": "楚雄.彝族.海菜腔", "context": "彝族支系尼苏人的一种多声部民歌..." },
    { "pageTitle": "文化体验", "pageUrl": "theme_culture.html#diqing-zangzu-gesaerwangchuanshuo", "content": "迪庆.藏族.格萨尔王传说", "context": "世界上最长的活态史诗，讲述了英雄格萨尔王降妖伏魔..." },
    { "pageTitle": "文化体验", "pageUrl": "theme_culture.html#puer-duominzu-puerchazhizuojiyi", "content": "普洱.多民族.普洱茶制作技艺", "context": "一项人类非物质文化遗产代表作..." },
    { "pageTitle": "文化体验", "pageUrl": "theme_culture.html#kunming-saniren-yizu-ashimachuanshuo", "content": "昆明.撒尼人(彝族).阿诗玛传说", "context": "彝族撒尼人的经典长篇叙事诗..." },
    { "pageTitle": "文化体验", "pageUrl": "theme_culture.html#xishuangbanna-daizu-zhanghayanchang", "content": "西双版纳.傣族.章哈演唱", "context": "“章哈”意为“知识渊博的歌手”，是傣族传统的说唱艺术形式。" },
    { "pageTitle": "文化体验", "pageUrl": "theme_culture.html#nujiang-lisuzu-kuoshijie", "content": "怒江.傈僳族.阔时节", "context": "傈僳族最隆重的新年节日，意为“岁首”。" }
];