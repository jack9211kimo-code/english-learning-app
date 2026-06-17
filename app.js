
const STORAGE_KEY = "english_daily_web_v1";

const starterWords = [
  { word:"coffee", meaning:"咖啡", phonetic:"/ˈkɔːfi/", level:"A1", category:"餐飲", picture:"☕", memory:"看到 ☕ 就想 coffee。", example:"I would like a coffee, please.", exampleZh:"我想要一杯咖啡，謝謝。", options:["咖啡","收據","公車","雨傘"] },
  { word:"water", meaning:"水", phonetic:"/ˈwɔːtər/", level:"A1", category:"餐飲", picture:"💧", memory:"口渴看到 💧 就是 water。", example:"Can I have some water?", exampleZh:"可以給我一些水嗎？", options:["水","錢包","轉角","地址"] },
  { word:"breakfast", meaning:"早餐", phonetic:"/ˈbrekfəst/", level:"A1", category:"餐飲", picture:"🍳", memory:"早上吃 🍳 breakfast。", example:"What do you usually eat for breakfast?", exampleZh:"你早餐通常吃什麼？", options:["早餐","雨天","電梯","車票"] },
  { word:"lunch", meaning:"午餐", phonetic:"/lʌntʃ/", level:"A1", category:"餐飲", picture:"🍱", memory:"中午便當 🍱 lunch。", example:"Let's have lunch together.", exampleZh:"我們一起吃午餐吧。", options:["午餐","發票","房間","車站"] },
  { word:"dinner", meaning:"晚餐", phonetic:"/ˈdɪnər/", level:"A1", category:"餐飲", picture:"🍽️", memory:"晚上用餐 🍽️ dinner。", example:"Dinner is ready.", exampleZh:"晚餐準備好了。", options:["晚餐","樓梯","雨傘","藥局"] },
  { word:"menu", meaning:"菜單", phonetic:"/ˈmenjuː/", level:"A1", category:"餐飲", picture:"📋", memory:"點餐先看 📋 menu。", example:"Can I see the menu?", exampleZh:"我可以看菜單嗎？", options:["菜單","行李","捷運","密碼"] },
  { word:"order", meaning:"點餐；訂購", phonetic:"/ˈɔːrdər/", level:"A2", category:"餐飲", picture:"🧾", memory:"拿著單子 🧾 order。", example:"Are you ready to order?", exampleZh:"你準備好點餐了嗎？", options:["點餐；訂購","忘記","轉彎","修理"] },
  { word:"receipt", meaning:"收據", phonetic:"/rɪˈsiːt/", level:"A2", category:"購物", picture:"🧾", memory:"結帳後的小紙條 🧾 receipt。", example:"Can I have a receipt?", exampleZh:"可以給我收據嗎？", options:["收據","牙刷","鄰居","櫃檯"] },
  { word:"discount", meaning:"折扣", phonetic:"/ˈdɪskaʊnt/", level:"A2", category:"購物", picture:"🏷️", memory:"看到標籤 🏷️ 想到 discount。", example:"Is there a discount today?", exampleZh:"今天有折扣嗎？", options:["折扣","早餐","地址","感冒"] },
  { word:"price", meaning:"價格", phonetic:"/praɪs/", level:"A1", category:"購物", picture:"💲", memory:"商品上的 💲 是 price。", example:"What is the price?", exampleZh:"價格是多少？", options:["價格","座位","文件","車門"] },
  { word:"cash", meaning:"現金", phonetic:"/kæʃ/", level:"A1", category:"購物", picture:"💵", memory:"紙鈔 💵 cash。", example:"Do you accept cash?", exampleZh:"你們收現金嗎？", options:["現金","藥","電梯","會議"] },
  { word:"card", meaning:"卡片；信用卡", phonetic:"/kɑːrd/", level:"A1", category:"購物", picture:"💳", memory:"刷 💳 就是 card。", example:"Can I pay by card?", exampleZh:"我可以刷卡嗎？", options:["卡片；信用卡","咖啡","窗戶","方向"] },
  { word:"bag", meaning:"袋子；包包", phonetic:"/bæɡ/", level:"A1", category:"購物", picture:"🛍️", memory:"購物袋 🛍️ bag。", example:"Do you need a bag?", exampleZh:"你需要袋子嗎？", options:["袋子；包包","晚餐","藥局","行程"] },
  { word:"size", meaning:"尺寸", phonetic:"/saɪz/", level:"A1", category:"購物", picture:"📏", memory:"量大小用 📏 size。", example:"What size do you wear?", exampleZh:"你穿什麼尺寸？", options:["尺寸","日期","杯子","郵局"] },
  { word:"cheap", meaning:"便宜的", phonetic:"/tʃiːp/", level:"A1", category:"購物", picture:"🪙", memory:"少少錢 🪙 cheap。", example:"This store is cheap.", exampleZh:"這家店很便宜。", options:["便宜的","忙碌的","遙遠的","口渴的"] },
  { word:"expensive", meaning:"昂貴的", phonetic:"/ɪkˈspensɪv/", level:"A2", category:"購物", picture:"💎", memory:"像 💎 一樣貴 expensive。", example:"This phone is too expensive.", exampleZh:"這支手機太貴了。", options:["昂貴的","安靜的","濕的","空的"] },
  { word:"station", meaning:"車站", phonetic:"/ˈsteɪʃən/", level:"A1", category:"交通", picture:"🚉", memory:"看到 🚉 就是 station。", example:"Where is the train station?", exampleZh:"火車站在哪裡？", options:["車站","餐廳","收據","浴室"] },
  { word:"bus", meaning:"公車", phonetic:"/bʌs/", level:"A1", category:"交通", picture:"🚌", memory:"🚌 bus 很好記。", example:"I take the bus to work.", exampleZh:"我搭公車去上班。", options:["公車","早餐","價格","牙醫"] },
  { word:"taxi", meaning:"計程車", phonetic:"/ˈtæksi/", level:"A1", category:"交通", picture:"🚕", memory:"黃色 🚕 taxi。", example:"Let's take a taxi.", exampleZh:"我們搭計程車吧。", options:["計程車","晚餐","收據","會議"] },
  { word:"subway", meaning:"捷運；地鐵", phonetic:"/ˈsʌbweɪ/", level:"A2", category:"交通", picture:"🚇", memory:"地下跑的 🚇 subway。", example:"The subway is faster.", exampleZh:"捷運比較快。", options:["捷運；地鐵","錢包","餐巾紙","天氣"] },
  { word:"ticket", meaning:"票", phonetic:"/ˈtɪkɪt/", level:"A1", category:"交通", picture:"🎫", memory:"入場或搭車要 🎫 ticket。", example:"I need to buy a ticket.", exampleZh:"我需要買一張票。", options:["票","袋子","鹽巴","椅子"] },
  { word:"platform", meaning:"月台；平台", phonetic:"/ˈplætfɔːrm/", level:"A2", category:"交通", picture:"🚉", memory:"等車的地方 platform。", example:"Which platform should I go to?", exampleZh:"我應該去幾號月台？", options:["月台；平台","折扣","藥局","雨傘"] },
  { word:"left", meaning:"左邊", phonetic:"/left/", level:"A1", category:"問路", picture:"⬅️", memory:"箭頭 ⬅️ left。", example:"Turn left at the corner.", exampleZh:"在轉角左轉。", options:["左邊","右邊","直走","後面"] },
  { word:"right", meaning:"右邊", phonetic:"/raɪt/", level:"A1", category:"問路", picture:"➡️", memory:"箭頭 ➡️ right。", example:"The bank is on your right.", exampleZh:"銀行在你的右邊。", options:["右邊","左邊","樓上","裡面"] },
  { word:"straight", meaning:"直走", phonetic:"/streɪt/", level:"A1", category:"問路", picture:"⬆️", memory:"箭頭 ⬆️ straight。", example:"Go straight for two blocks.", exampleZh:"直走兩個街區。", options:["直走","下車","結帳","取消"] },
  { word:"corner", meaning:"轉角", phonetic:"/ˈkɔːrnər/", level:"A2", category:"問路", picture:"↪️", memory:"路口轉彎 ↪️ corner。", example:"There is a cafe on the corner.", exampleZh:"轉角有一家咖啡店。", options:["轉角","收據","牙膏","雨衣"] },
  { word:"near", meaning:"附近；靠近", phonetic:"/nɪr/", level:"A1", category:"問路", picture:"📍", memory:"📍 定位附近 near。", example:"Is there a pharmacy near here?", exampleZh:"這附近有藥局嗎？", options:["附近；靠近","昂貴","遲到","口渴"] },
  { word:"far", meaning:"遠的", phonetic:"/fɑːr/", level:"A1", category:"問路", picture:"🛣️", memory:"路很長 🛣️ far。", example:"Is it far from here?", exampleZh:"離這裡遠嗎？", options:["遠的","乾淨的","便宜的","空的"] },
  { word:"address", meaning:"地址", phonetic:"/ˈædres/", level:"A2", category:"問路", picture:"🏠", memory:"找 🏠 要 address。", example:"Can you send me the address?", exampleZh:"你可以把地址傳給我嗎？", options:["地址","晚餐","感冒","排隊"] },
  { word:"weather", meaning:"天氣", phonetic:"/ˈweðər/", level:"A1", category:"天氣", picture:"🌤️", memory:"天空 🌤️ weather。", example:"How is the weather today?", exampleZh:"今天天氣如何？", options:["天氣","菜單","票","牙刷"] },
  { word:"rain", meaning:"下雨；雨", phonetic:"/reɪn/", level:"A1", category:"天氣", picture:"🌧️", memory:"🌧️ rain。", example:"It might rain later.", exampleZh:"晚點可能會下雨。", options:["下雨；雨","公車","價格","杯子"] },
  { word:"umbrella", meaning:"雨傘", phonetic:"/ʌmˈbrelə/", level:"A1", category:"天氣", picture:"☂️", memory:"下雨拿 ☂️ umbrella。", example:"Don't forget your umbrella.", exampleZh:"別忘了你的雨傘。", options:["雨傘","收據","牙醫","方向"] },
  { word:"hot", meaning:"熱的", phonetic:"/hɑːt/", level:"A1", category:"天氣", picture:"🔥", memory:"像 🔥 一樣 hot。", example:"It is very hot today.", exampleZh:"今天很熱。", options:["熱的","冷的","遠的","忙的"] },
  { word:"cold", meaning:"冷的；感冒", phonetic:"/koʊld/", level:"A1", category:"天氣", picture:"❄️", memory:"看到 ❄️ cold。", example:"It is cold outside.", exampleZh:"外面很冷。", options:["冷的；感冒","便宜的","有空的","安靜的"] },
  { word:"busy", meaning:"忙碌的", phonetic:"/ˈbɪzi/", level:"A1", category:"心情狀態", picture:"🏃", memory:"一直跑 🏃 busy。", example:"I am busy right now.", exampleZh:"我現在很忙。", options:["忙碌的","便宜的","口渴的","準時的"] },
  { word:"tired", meaning:"累的", phonetic:"/ˈtaɪərd/", level:"A1", category:"心情狀態", picture:"😴", memory:"想睡 😴 tired。", example:"I feel tired today.", exampleZh:"我今天覺得很累。", options:["累的","貴的","附近的","乾淨的"] },
  { word:"hungry", meaning:"餓的", phonetic:"/ˈhʌŋɡri/", level:"A1", category:"心情狀態", picture:"🤤", memory:"想吃東西 🤤 hungry。", example:"I'm hungry. Let's eat.", exampleZh:"我餓了，我們去吃飯吧。", options:["餓的","渴的","忙的","遲到的"] },
  { word:"thirsty", meaning:"口渴的", phonetic:"/ˈθɜːrsti/", level:"A1", category:"心情狀態", picture:"🥤", memory:"想喝 🥤 thirsty。", example:"I am thirsty.", exampleZh:"我口渴了。", options:["口渴的","餓的","吵的","新的"] },
  { word:"happy", meaning:"開心的", phonetic:"/ˈhæpi/", level:"A1", category:"心情狀態", picture:"😊", memory:"笑臉 😊 happy。", example:"I'm happy to see you.", exampleZh:"很高興見到你。", options:["開心的","緊張的","遠的","便宜的"] },
  { word:"nervous", meaning:"緊張的", phonetic:"/ˈnɜːrvəs/", level:"A2", category:"心情狀態", picture:"😰", memory:"冒汗 😰 nervous。", example:"I feel nervous before the meeting.", exampleZh:"開會前我覺得緊張。", options:["緊張的","開心的","便宜的","乾淨的"] },
  { word:"sorry", meaning:"抱歉", phonetic:"/ˈsɑːri/", level:"A1", category:"禮貌用語", picture:"🙏", memory:"雙手合十 🙏 sorry。", example:"Sorry, I'm late.", exampleZh:"抱歉，我遲到了。", options:["抱歉","價格","車站","現金"] },
  { word:"please", meaning:"請；麻煩", phonetic:"/pliːz/", level:"A1", category:"禮貌用語", picture:"🙇", memory:"有禮貌 🙇 please。", example:"Please wait a moment.", exampleZh:"請等一下。", options:["請；麻煩","轉角","口渴","行李"] },
  { word:"thanks", meaning:"謝謝", phonetic:"/θæŋks/", level:"A1", category:"禮貌用語", picture:"🙏", memory:"感謝用 thanks。", example:"Thanks for your help.", exampleZh:"謝謝你的幫忙。", options:["謝謝","早餐","方向","藥局"] },
  { word:"welcome", meaning:"歡迎；不用謝", phonetic:"/ˈwelkəm/", level:"A1", category:"禮貌用語", picture:"🤝", memory:"迎接朋友 🤝 welcome。", example:"You're welcome.", exampleZh:"不客氣。", options:["歡迎；不用謝","收據","廁所","轉車"] },
  { word:"excuse", meaning:"打擾；不好意思", phonetic:"/ɪkˈskjuːz/", level:"A2", category:"禮貌用語", picture:"🙋", memory:"舉手 🙋 excuse me。", example:"Excuse me, where is the restroom?", exampleZh:"不好意思，洗手間在哪裡？", options:["打擾；不好意思","結帳","加熱","排隊"] },
  { word:"restroom", meaning:"洗手間", phonetic:"/ˈrestruːm/", level:"A1", category:"生活", picture:"🚻", memory:"公共標誌 🚻 restroom。", example:"Where is the restroom?", exampleZh:"洗手間在哪裡？", options:["洗手間","車站","折扣","晚餐"] },
  { word:"phone", meaning:"手機；電話", phonetic:"/foʊn/", level:"A1", category:"生活", picture:"📱", memory:"📱 phone。", example:"My phone is out of battery.", exampleZh:"我的手機沒電了。", options:["手機；電話","現金","地址","藥"] },
  { word:"charger", meaning:"充電器", phonetic:"/ˈtʃɑːrdʒər/", level:"A2", category:"生活", picture:"🔌", memory:"插頭 🔌 charger。", example:"Do you have a charger?", exampleZh:"你有充電器嗎？", options:["充電器","菜單","月台","折扣"] },
  { word:"battery", meaning:"電池；電量", phonetic:"/ˈbætəri/", level:"A2", category:"生活", picture:"🔋", memory:"🔋 battery。", example:"My battery is low.", exampleZh:"我的電量很低。", options:["電池；電量","公車","午餐","櫃檯"] },
  { word:"key", meaning:"鑰匙", phonetic:"/kiː/", level:"A1", category:"生活", picture:"🔑", memory:"🔑 key。", example:"I forgot my key.", exampleZh:"我忘了帶鑰匙。", options:["鑰匙","雨傘","價格","餐廳"] },
  { word:"wallet", meaning:"錢包", phonetic:"/ˈwɑːlɪt/", level:"A2", category:"生活", picture:"👛", memory:"裝錢的 👛 wallet。", example:"I can't find my wallet.", exampleZh:"我找不到我的錢包。", options:["錢包","車票","感冒","水"] },
  { word:"appointment", meaning:"預約；約定", phonetic:"/əˈpɔɪntmənt/", level:"B1", category:"工作醫療", picture:"📅", memory:"行事曆 📅 appointment。", example:"I have an appointment at three.", exampleZh:"我三點有預約。", options:["預約；約定","折扣","雨傘","午餐"] },
  { word:"meeting", meaning:"會議", phonetic:"/ˈmiːtɪŋ/", level:"A2", category:"工作醫療", picture:"👥", memory:"一群人 👥 meeting。", example:"The meeting starts at ten.", exampleZh:"會議十點開始。", options:["會議","收據","藥局","飲料"] },
  { word:"schedule", meaning:"行程；時間表", phonetic:"/ˈskedʒuːl/", level:"B1", category:"工作醫療", picture:"🗓️", memory:"🗓️ schedule。", example:"My schedule is full today.", exampleZh:"我今天行程滿了。", options:["行程；時間表","計程車","尺寸","咖啡"] },
  { word:"available", meaning:"有空的；可用的", phonetic:"/əˈveɪləbl/", level:"B1", category:"工作醫療", picture:"✅", memory:"時間可以 ✅ available。", example:"Are you available this afternoon?", exampleZh:"你今天下午有空嗎？", options:["有空的；可用的","昂貴的","口渴的","迷路的"] },
  { word:"doctor", meaning:"醫生", phonetic:"/ˈdɑːktər/", level:"A1", category:"工作醫療", picture:"🧑‍⚕️", memory:"白袍 🧑‍⚕️ doctor。", example:"I need to see a doctor.", exampleZh:"我需要看醫生。", options:["醫生","店員","司機","鄰居"] },
  { word:"pharmacy", meaning:"藥局", phonetic:"/ˈfɑːrməsi/", level:"A2", category:"工作醫療", picture:"💊", memory:"買藥 💊 pharmacy。", example:"Is there a pharmacy near here?", exampleZh:"這附近有藥局嗎？", options:["藥局","車站","早餐","地址"] },
  { word:"medicine", meaning:"藥", phonetic:"/ˈmedɪsən/", level:"A2", category:"工作醫療", picture:"💊", memory:"💊 medicine。", example:"Take this medicine after meals.", exampleZh:"飯後吃這個藥。", options:["藥","收據","雨傘","方向"] },
  { word:"headache", meaning:"頭痛", phonetic:"/ˈhedeɪk/", level:"A2", category:"工作醫療", picture:"🤕", memory:"頭不舒服 🤕 headache。", example:"I have a headache.", exampleZh:"我頭痛。", options:["頭痛","折扣","車票","菜單"] },
  { word:"fever", meaning:"發燒", phonetic:"/ˈfiːvər/", level:"A2", category:"工作醫療", picture:"🌡️", memory:"溫度計 🌡️ fever。", example:"I think I have a fever.", exampleZh:"我覺得我發燒了。", options:["發燒","地址","午餐","電池"] },
  { word:"help", meaning:"幫忙", phonetic:"/help/", level:"A1", category:"緊急溝通", picture:"🆘", memory:"🆘 help。", example:"Can you help me?", exampleZh:"你可以幫我嗎？", options:["幫忙","結帳","天氣","車站"] },
  { word:"lost", meaning:"迷路的；遺失的", phonetic:"/lɔːst/", level:"A2", category:"緊急溝通", picture:"🧭", memory:"方向不見 🧭 lost。", example:"I'm lost.", exampleZh:"我迷路了。", options:["迷路的；遺失的","昂貴的","乾淨的","有空的"] },
  { word:"emergency", meaning:"緊急情況", phonetic:"/ɪˈmɜːrdʒənsi/", level:"B1", category:"緊急溝通", picture:"🚨", memory:"警報 🚨 emergency。", example:"This is an emergency.", exampleZh:"這是緊急情況。", options:["緊急情況","早餐","收據","折扣"] },
  { word:"police", meaning:"警察", phonetic:"/pəˈliːs/", level:"A2", category:"緊急溝通", picture:"👮", memory:"👮 police。", example:"Please call the police.", exampleZh:"請報警。", options:["警察","醫生","店員","司機"] },
  { word:"call", meaning:"打電話；呼叫", phonetic:"/kɔːl/", level:"A1", category:"緊急溝通", picture:"📞", memory:"📞 call。", example:"Can you call me later?", exampleZh:"你可以晚點打給我嗎？", options:["打電話；呼叫","點餐","轉彎","排隊"] },
  { word:"wait", meaning:"等待", phonetic:"/weɪt/", level:"A1", category:"生活", picture:"⏳", memory:"沙漏 ⏳ wait。", example:"Please wait a minute.", exampleZh:"請等一分鐘。", options:["等待","折扣","車站","發燒"] },
  { word:"late", meaning:"遲到；晚的", phonetic:"/leɪt/", level:"A1", category:"時間", picture:"⏰", memory:"鬧鐘響了 ⏰ late。", example:"I'm sorry I'm late.", exampleZh:"抱歉我遲到了。", options:["遲到；晚的","便宜的","口渴的","乾淨的"] },
  { word:"early", meaning:"早的", phonetic:"/ˈɜːrli/", level:"A1", category:"時間", picture:"🌅", memory:"日出 🌅 early。", example:"I woke up early today.", exampleZh:"我今天很早起床。", options:["早的","遠的","昂貴的","忙的"] },
  { word:"today", meaning:"今天", phonetic:"/təˈdeɪ/", level:"A1", category:"時間", picture:"📆", memory:"日曆的今天 📆 today。", example:"What are you doing today?", exampleZh:"你今天要做什麼？", options:["今天","昨天","明天","下週"] },
  { word:"tomorrow", meaning:"明天", phonetic:"/təˈmɑːroʊ/", level:"A1", category:"時間", picture:"➡️📆", memory:"下一天 ➡️ tomorrow。", example:"See you tomorrow.", exampleZh:"明天見。", options:["明天","今天","昨天","現在"] },
  { word:"yesterday", meaning:"昨天", phonetic:"/ˈjestərdeɪ/", level:"A1", category:"時間", picture:"⬅️📆", memory:"前一天 ⬅️ yesterday。", example:"I was busy yesterday.", exampleZh:"我昨天很忙。", options:["昨天","明天","今晚","現在"] },
  { word:"morning", meaning:"早上", phonetic:"/ˈmɔːrnɪŋ/", level:"A1", category:"時間", picture:"🌄", memory:"日出 🌄 morning。", example:"Good morning.", exampleZh:"早安。", options:["早上","晚上","午餐","收據"] },
  { word:"evening", meaning:"傍晚；晚上", phonetic:"/ˈiːvnɪŋ/", level:"A1", category:"時間", picture:"🌆", memory:"夕陽 🌆 evening。", example:"Are you free this evening?", exampleZh:"你今天晚上有空嗎？", options:["傍晚；晚上","早上","地址","車票"] },
  { word:"clean", meaning:"乾淨的；清理", phonetic:"/kliːn/", level:"A1", category:"住宿生活", picture:"🧼", memory:"肥皂 🧼 clean。", example:"The room is clean.", exampleZh:"房間很乾淨。", options:["乾淨的；清理","昂貴的","遲到的","附近的"] },
  { word:"room", meaning:"房間", phonetic:"/ruːm/", level:"A1", category:"住宿生活", picture:"🛏️", memory:"床 🛏️ room。", example:"My room is on the second floor.", exampleZh:"我的房間在二樓。", options:["房間","票","收據","菜單"] },
  { word:"hotel", meaning:"飯店；旅館", phonetic:"/hoʊˈtel/", level:"A1", category:"住宿生活", picture:"🏨", memory:"🏨 hotel。", example:"We booked a hotel near the station.", exampleZh:"我們訂了車站附近的飯店。", options:["飯店；旅館","藥局","早餐","折扣"] },
  { word:"elevator", meaning:"電梯", phonetic:"/ˈelɪveɪtər/", level:"A2", category:"住宿生活", picture:"🛗", memory:"上下樓 🛗 elevator。", example:"Where is the elevator?", exampleZh:"電梯在哪裡？", options:["電梯","雨傘","地址","現金"] },
  { word:"noise", meaning:"噪音", phonetic:"/nɔɪz/", level:"A2", category:"住宿生活", picture:"🔊", memory:"很吵 🔊 noise。", example:"There is too much noise outside.", exampleZh:"外面太吵了。", options:["噪音","價格","牙刷","藥"] },
  { word:"quiet", meaning:"安靜的", phonetic:"/ˈkwaɪət/", level:"A2", category:"住宿生活", picture:"🤫", memory:"噓 🤫 quiet。", example:"This place is quiet.", exampleZh:"這個地方很安靜。", options:["安靜的","昂貴的","口渴的","遲到的"] }
];

const phraseBank = [
  { en:"Could you say that again?", zh:"你可以再說一次嗎？", tag:"聽不清楚" },
  { en:"What does this word mean?", zh:"這個單字是什麼意思？", tag:"問意思" },
  { en:"I am still learning English.", zh:"我還在學英文。", tag:"自我介紹" },
  { en:"Let me think for a second.", zh:"讓我想一下。", tag:"爭取時間" },
  { en:"Can you give me an example?", zh:"你可以給我一個例子嗎？", tag:"問例子" },
  { en:"How do you say this in English?", zh:"這個用英文怎麼說？", tag:"問說法" },
  { en:"Could you speak more slowly?", zh:"你可以說慢一點嗎？", tag:"聽力" },
  { en:"I'm looking for the restroom.", zh:"我在找洗手間。", tag:"問路" },
  { en:"Can I pay by card?", zh:"我可以刷卡嗎？", tag:"購物" },
  { en:"I would like this one, please.", zh:"我想要這個，謝謝。", tag:"點餐購物" },
  { en:"Is this seat taken?", zh:"這個位子有人坐嗎？", tag:"公共場合" },
  { en:"I need help.", zh:"我需要幫忙。", tag:"緊急" },
  { en:"I'm not sure.", zh:"我不太確定。", tag:"表達想法" },
  { en:"That sounds good.", zh:"聽起來不錯。", tag:"回應" },
  { en:"Sorry, I don't understand.", zh:"抱歉，我聽不懂。", tag:"溝通" }
];


const adultStarterWords = [
  {
    "word": "breast",
    "meaning": "胸部；乳房（較普通）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：breast = 胸部；乳房（較普通）。注意語氣與使用場合。",
    "example": "Breast is a normal word for this body part.",
    "exampleZh": "胸部；乳房（較普通）",
    "options": [
      "胸部；乳房（較普通）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "boobs",
    "meaning": "奶子；胸部（口語／粗俗）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：boobs = 奶子；胸部（口語／粗俗）。注意語氣與使用場合。",
    "example": "Boobs is casual and can sound vulgar.",
    "exampleZh": "奶子；胸部（口語／粗俗）",
    "options": [
      "奶子；胸部（口語／粗俗）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "nipple",
    "meaning": "乳頭",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：nipple = 乳頭。注意語氣與使用場合。",
    "example": "Nipple is a body-part word.",
    "exampleZh": "乳頭",
    "options": [
      "乳頭",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "butt",
    "meaning": "屁股（口語）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：butt = 屁股（口語）。注意語氣與使用場合。",
    "example": "Butt is a common casual word.",
    "exampleZh": "屁股（口語）",
    "options": [
      "屁股（口語）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "ass",
    "meaning": "屁股；也可當罵人字（粗俗）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：ass = 屁股；也可當罵人字（粗俗）。注意語氣與使用場合。",
    "example": "Ass is vulgar, so do not use it in formal situations.",
    "exampleZh": "屁股；也可當罵人字（粗俗）",
    "options": [
      "屁股；也可當罵人字（粗俗）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "penis",
    "meaning": "陰莖（正式）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：penis = 陰莖（正式）。注意語氣與使用場合。",
    "example": "Penis is the formal word.",
    "exampleZh": "陰莖（正式）",
    "options": [
      "陰莖（正式）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "dick",
    "meaning": "雞巴；陰莖（粗俗）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：dick = 雞巴；陰莖（粗俗）。注意語氣與使用場合。",
    "example": "Dick is very casual and vulgar.",
    "exampleZh": "雞巴；陰莖（粗俗）",
    "options": [
      "雞巴；陰莖（粗俗）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "cock",
    "meaning": "雞巴；陰莖（成人片常見粗俗詞）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：cock = 雞巴；陰莖（成人片常見粗俗詞）。注意語氣與使用場合。",
    "example": "Cock is a vulgar porn-related word.",
    "exampleZh": "雞巴；陰莖（成人片常見粗俗詞）",
    "options": [
      "雞巴；陰莖（成人片常見粗俗詞）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "vagina",
    "meaning": "陰道；女性生殖器（正式）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：vagina = 陰道；女性生殖器（正式）。注意語氣與使用場合。",
    "example": "Vagina is the formal word.",
    "exampleZh": "陰道；女性生殖器（正式）",
    "options": [
      "陰道；女性生殖器（正式）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "pussy",
    "meaning": "小穴；女性陰部（粗俗）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：pussy = 小穴；女性陰部（粗俗）。注意語氣與使用場合。",
    "example": "Pussy is vulgar and common in porn contexts.",
    "exampleZh": "小穴；女性陰部（粗俗）",
    "options": [
      "小穴；女性陰部（粗俗）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "clitoris",
    "meaning": "陰蒂（正式）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：clitoris = 陰蒂（正式）。注意語氣與使用場合。",
    "example": "Clitoris is an anatomical word.",
    "exampleZh": "陰蒂（正式）",
    "options": [
      "陰蒂（正式）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "balls",
    "meaning": "睪丸；蛋蛋（口語）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：balls = 睪丸；蛋蛋（口語）。注意語氣與使用場合。",
    "example": "Balls is a casual word for testicles.",
    "exampleZh": "睪丸；蛋蛋（口語）",
    "options": [
      "睪丸；蛋蛋（口語）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "testicles",
    "meaning": "睪丸（正式）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：testicles = 睪丸（正式）。注意語氣與使用場合。",
    "example": "Testicles is the formal word.",
    "exampleZh": "睪丸（正式）",
    "options": [
      "睪丸（正式）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "anus",
    "meaning": "肛門（正式）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：anus = 肛門（正式）。注意語氣與使用場合。",
    "example": "Anus is the formal word.",
    "exampleZh": "肛門（正式）",
    "options": [
      "肛門（正式）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "genitals",
    "meaning": "生殖器；私處（正式總稱）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：genitals = 生殖器；私處（正式總稱）。注意語氣與使用場合。",
    "example": "Genitals means private sexual body parts.",
    "exampleZh": "生殖器；私處（正式總稱）",
    "options": [
      "生殖器；私處（正式總稱）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "make out",
    "meaning": "激吻；親熱",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "💋",
    "memory": "18+ 詞彙：make out = 激吻；親熱。注意語氣與使用場合。",
    "example": "Make out means to kiss passionately.",
    "exampleZh": "激吻；親熱",
    "options": [
      "激吻；親熱",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "have sex",
    "meaning": "發生性關係；做愛",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：have sex = 發生性關係；做愛。注意語氣與使用場合。",
    "example": "Have sex is a general expression.",
    "exampleZh": "發生性關係；做愛",
    "options": [
      "發生性關係；做愛",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "fuck",
    "meaning": "幹；性交；粗俗說法",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：fuck = 幹；性交；粗俗說法。注意語氣與使用場合。",
    "example": "Fuck is very vulgar and should be used carefully.",
    "exampleZh": "幹；性交；粗俗說法",
    "options": [
      "幹；性交；粗俗說法",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "oral sex",
    "meaning": "口交（正式／中性）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：oral sex = 口交（正式／中性）。注意語氣與使用場合。",
    "example": "Oral sex is the neutral term.",
    "exampleZh": "口交（正式／中性）",
    "options": [
      "口交（正式／中性）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "blowjob",
    "meaning": "口交，通常指幫男性口交（粗俗）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：blowjob = 口交，通常指幫男性口交（粗俗）。注意語氣與使用場合。",
    "example": "Blowjob is a common adult slang word.",
    "exampleZh": "口交，通常指幫男性口交（粗俗）",
    "options": [
      "口交，通常指幫男性口交（粗俗）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "handjob",
    "meaning": "手交，通常指用手幫男性（成人俚語）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：handjob = 手交，通常指用手幫男性（成人俚語）。注意語氣與使用場合。",
    "example": "Handjob is adult slang.",
    "exampleZh": "手交，通常指用手幫男性（成人俚語）",
    "options": [
      "手交，通常指用手幫男性（成人俚語）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "fingering",
    "meaning": "指交；用手指刺激（成人俚語）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：fingering = 指交；用手指刺激（成人俚語）。注意語氣與使用場合。",
    "example": "Fingering is adult slang.",
    "exampleZh": "指交；用手指刺激（成人俚語）",
    "options": [
      "指交；用手指刺激（成人俚語）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "masturbate",
    "meaning": "自慰（較正式）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：masturbate = 自慰（較正式）。注意語氣與使用場合。",
    "example": "Masturbate is the formal verb.",
    "exampleZh": "自慰（較正式）",
    "options": [
      "自慰（較正式）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "jerk off",
    "meaning": "打手槍；男性自慰（粗俗）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：jerk off = 打手槍；男性自慰（粗俗）。注意語氣與使用場合。",
    "example": "Jerk off is casual and vulgar.",
    "exampleZh": "打手槍；男性自慰（粗俗）",
    "options": [
      "打手槍；男性自慰（粗俗）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "orgasm",
    "meaning": "高潮（正式）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：orgasm = 高潮（正式）。注意語氣與使用場合。",
    "example": "Orgasm is the formal word.",
    "exampleZh": "高潮（正式）",
    "options": [
      "高潮（正式）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "cum",
    "meaning": "射精；精液；高潮（粗俗成人用語）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：cum = 射精；精液；高潮（粗俗成人用語）。注意語氣與使用場合。",
    "example": "Cum is vulgar adult slang.",
    "exampleZh": "射精；精液；高潮（粗俗成人用語）",
    "options": [
      "射精；精液；高潮（粗俗成人用語）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "ejaculate",
    "meaning": "射精（正式）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：ejaculate = 射精（正式）。注意語氣與使用場合。",
    "example": "Ejaculate is the formal verb.",
    "exampleZh": "射精（正式）",
    "options": [
      "射精（正式）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "thrust",
    "meaning": "抽插；推進動作（成人語境常見）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：thrust = 抽插；推進動作（成人語境常見）。注意語氣與使用場合。",
    "example": "Thrust can mean a pushing movement.",
    "exampleZh": "抽插；推進動作（成人語境常見）",
    "options": [
      "抽插；推進動作（成人語境常見）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "ride",
    "meaning": "騎乘；女上位語境常見",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：ride = 騎乘；女上位語境常見。注意語氣與使用場合。",
    "example": "Ride can be used as adult slang.",
    "exampleZh": "騎乘；女上位語境常見",
    "options": [
      "騎乘；女上位語境常見",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "anal sex",
    "meaning": "肛交（成人詞彙）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：anal sex = 肛交（成人詞彙）。注意語氣與使用場合。",
    "example": "Anal sex is an adult term.",
    "exampleZh": "肛交（成人詞彙）",
    "options": [
      "肛交（成人詞彙）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "porn",
    "meaning": "色情片；A片",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🎬",
    "memory": "18+ 詞彙：porn = 色情片；A片。注意語氣與使用場合。",
    "example": "Porn means sexually explicit video or media.",
    "exampleZh": "色情片；A片",
    "options": [
      "色情片；A片",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "adult video",
    "meaning": "成人影片；A片",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🎬",
    "memory": "18+ 詞彙：adult video = 成人影片；A片。注意語氣與使用場合。",
    "example": "Adult video is a softer way to say porn video.",
    "exampleZh": "成人影片；A片",
    "options": [
      "成人影片；A片",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "nude",
    "meaning": "裸體的；裸照",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：nude = 裸體的；裸照。注意語氣與使用場合。",
    "example": "Nude means without clothes.",
    "exampleZh": "裸體的；裸照",
    "options": [
      "裸體的；裸照",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "naked",
    "meaning": "全裸的；沒穿衣服的",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：naked = 全裸的；沒穿衣服的。注意語氣與使用場合。",
    "example": "Naked is a common word.",
    "exampleZh": "全裸的；沒穿衣服的",
    "options": [
      "全裸的；沒穿衣服的",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "explicit",
    "meaning": "露骨的；明確色情的",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "⚠️",
    "memory": "18+ 詞彙：explicit = 露骨的；明確色情的。注意語氣與使用場合。",
    "example": "Explicit content is not suitable for all audiences.",
    "exampleZh": "露骨的；明確色情的",
    "options": [
      "露骨的；明確色情的",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "hardcore",
    "meaning": "重口味色情；硬色情",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🎬",
    "memory": "18+ 詞彙：hardcore = 重口味色情；硬色情。注意語氣與使用場合。",
    "example": "Hardcore is stronger than softcore.",
    "exampleZh": "重口味色情；硬色情",
    "options": [
      "重口味色情；硬色情",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "softcore",
    "meaning": "較輕度色情；軟色情",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🎬",
    "memory": "18+ 詞彙：softcore = 較輕度色情；軟色情。注意語氣與使用場合。",
    "example": "Softcore is less explicit than hardcore.",
    "exampleZh": "較輕度色情；軟色情",
    "options": [
      "較輕度色情；軟色情",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "amateur",
    "meaning": "素人；非專業拍攝",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🎬",
    "memory": "18+ 詞彙：amateur = 素人；非專業拍攝。注意語氣與使用場合。",
    "example": "Amateur means not professional.",
    "exampleZh": "素人；非專業拍攝",
    "options": [
      "素人；非專業拍攝",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "solo",
    "meaning": "單人；單人自慰類型",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🎬",
    "memory": "18+ 詞彙：solo = 單人；單人自慰類型。注意語氣與使用場合。",
    "example": "Solo means one person only.",
    "exampleZh": "單人；單人自慰類型",
    "options": [
      "單人；單人自慰類型",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "POV",
    "meaning": "第一人稱視角",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🎬",
    "memory": "18+ 詞彙：POV = 第一人稱視角。注意語氣與使用場合。",
    "example": "POV means point of view.",
    "exampleZh": "第一人稱視角",
    "options": [
      "第一人稱視角",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "cumshot",
    "meaning": "射精鏡頭；成人片詞彙（粗俗）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：cumshot = 射精鏡頭；成人片詞彙（粗俗）。注意語氣與使用場合。",
    "example": "Cumshot is a porn-related slang word.",
    "exampleZh": "射精鏡頭；成人片詞彙（粗俗）",
    "options": [
      "射精鏡頭；成人片詞彙（粗俗）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "creampie",
    "meaning": "內射類型；成人片詞彙（粗俗）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：creampie = 內射類型；成人片詞彙（粗俗）。注意語氣與使用場合。",
    "example": "Creampie is a vulgar porn category word.",
    "exampleZh": "內射類型；成人片詞彙（粗俗）",
    "options": [
      "內射類型；成人片詞彙（粗俗）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "facial",
    "meaning": "射臉類型；成人片詞彙（粗俗）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：facial = 射臉類型；成人片詞彙（粗俗）。注意語氣與使用場合。",
    "example": "Facial can be a vulgar porn term.",
    "exampleZh": "射臉類型；成人片詞彙（粗俗）",
    "options": [
      "射臉類型；成人片詞彙（粗俗）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "squirting",
    "meaning": "潮吹；成人片詞彙",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：squirting = 潮吹；成人片詞彙。注意語氣與使用場合。",
    "example": "Squirting is an adult-content term.",
    "exampleZh": "潮吹；成人片詞彙",
    "options": [
      "潮吹；成人片詞彙",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "dirty talk",
    "meaning": "情色挑逗話；性愛時的挑逗語",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "💬",
    "memory": "18+ 詞彙：dirty talk = 情色挑逗話；性愛時的挑逗語。注意語氣與使用場合。",
    "example": "Dirty talk means sexual teasing words.",
    "exampleZh": "情色挑逗話；性愛時的挑逗語",
    "options": [
      "情色挑逗話；性愛時的挑逗語",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "horny",
    "meaning": "性慾高漲的；想做愛的（粗俗口語）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔥",
    "memory": "18+ 詞彙：horny = 性慾高漲的；想做愛的（粗俗口語）。注意語氣與使用場合。",
    "example": "Horny is casual adult slang.",
    "exampleZh": "性慾高漲的；想做愛的（粗俗口語）",
    "options": [
      "性慾高漲的；想做愛的（粗俗口語）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "sexy",
    "meaning": "性感的",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔥",
    "memory": "18+ 詞彙：sexy = 性感的。注意語氣與使用場合。",
    "example": "Sexy means sexually attractive.",
    "exampleZh": "性感的",
    "options": [
      "性感的",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "hot",
    "meaning": "性感的；很辣的",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔥",
    "memory": "18+ 詞彙：hot = 性感的；很辣的。注意語氣與使用場合。",
    "example": "Hot can mean very attractive.",
    "exampleZh": "性感的；很辣的",
    "options": [
      "性感的；很辣的",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "turn on",
    "meaning": "挑起性慾；讓人興奮",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔥",
    "memory": "18+ 詞彙：turn on = 挑起性慾；讓人興奮。注意語氣與使用場合。",
    "example": "That outfit turns me on.",
    "exampleZh": "挑起性慾；讓人興奮",
    "options": [
      "挑起性慾；讓人興奮",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "wet",
    "meaning": "濕了；成人語境指性興奮",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "💧",
    "memory": "18+ 詞彙：wet = 濕了；成人語境指性興奮。注意語氣與使用場合。",
    "example": "Wet can have an adult meaning in sexual contexts.",
    "exampleZh": "濕了；成人語境指性興奮",
    "options": [
      "濕了；成人語境指性興奮",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "hard",
    "meaning": "硬了；成人語境指勃起",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：hard = 硬了；成人語境指勃起。注意語氣與使用場合。",
    "example": "Hard can have an adult meaning.",
    "exampleZh": "硬了；成人語境指勃起",
    "options": [
      "硬了；成人語境指勃起",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "moan",
    "meaning": "呻吟",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "💬",
    "memory": "18+ 詞彙：moan = 呻吟。注意語氣與使用場合。",
    "example": "Moan means to make a low sound.",
    "exampleZh": "呻吟",
    "options": [
      "呻吟",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "tease",
    "meaning": "挑逗；逗弄",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "💬",
    "memory": "18+ 詞彙：tease = 挑逗；逗弄。注意語氣與使用場合。",
    "example": "Tease can mean to sexually provoke someone.",
    "exampleZh": "挑逗；逗弄",
    "options": [
      "挑逗；逗弄",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "seduce",
    "meaning": "誘惑；勾引",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "💬",
    "memory": "18+ 詞彙：seduce = 誘惑；勾引。注意語氣與使用場合。",
    "example": "Seduce means to attract someone sexually.",
    "exampleZh": "誘惑；勾引",
    "options": [
      "誘惑；勾引",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "climax",
    "meaning": "高潮；劇情高潮",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：climax = 高潮；劇情高潮。注意語氣與使用場合。",
    "example": "Climax can mean orgasm or the high point of a story.",
    "exampleZh": "高潮；劇情高潮",
    "options": [
      "高潮；劇情高潮",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "fetish",
    "meaning": "性癖；特殊癖好",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🎭",
    "memory": "18+ 詞彙：fetish = 性癖；特殊癖好。注意語氣與使用場合。",
    "example": "Fetish means a strong sexual interest in something.",
    "exampleZh": "性癖；特殊癖好",
    "options": [
      "性癖；特殊癖好",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "kink",
    "meaning": "特殊性癖；非傳統偏好",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🎭",
    "memory": "18+ 詞彙：kink = 特殊性癖；非傳統偏好。注意語氣與使用場合。",
    "example": "Kink is a casual word for unusual sexual preference.",
    "exampleZh": "特殊性癖；非傳統偏好",
    "options": [
      "特殊性癖；非傳統偏好",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "fantasy",
    "meaning": "性幻想；幻想",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🎭",
    "memory": "18+ 詞彙：fantasy = 性幻想；幻想。注意語氣與使用場合。",
    "example": "Fantasy means something imagined.",
    "exampleZh": "性幻想；幻想",
    "options": [
      "性幻想；幻想",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "roleplay",
    "meaning": "角色扮演",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🎭",
    "memory": "18+ 詞彙：roleplay = 角色扮演。注意語氣與使用場合。",
    "example": "Roleplay means acting as a character or situation.",
    "exampleZh": "角色扮演",
    "options": [
      "角色扮演",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "cosplay",
    "meaning": "角色扮演服裝；Cosplay",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🎭",
    "memory": "18+ 詞彙：cosplay = 角色扮演服裝；Cosplay。注意語氣與使用場合。",
    "example": "Cosplay means dressing as a character.",
    "exampleZh": "角色扮演服裝；Cosplay",
    "options": [
      "角色扮演服裝；Cosplay",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "BDSM",
    "meaning": "BDSM；成人性癖總稱",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🎭",
    "memory": "18+ 詞彙：BDSM = BDSM；成人性癖總稱。注意語氣與使用場合。",
    "example": "BDSM is an adult preference term.",
    "exampleZh": "BDSM；成人性癖總稱",
    "options": [
      "BDSM；成人性癖總稱",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "dominant",
    "meaning": "支配方；主導方",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🎭",
    "memory": "18+ 詞彙：dominant = 支配方；主導方。注意語氣與使用場合。",
    "example": "Dominant means leading or controlling.",
    "exampleZh": "支配方；主導方",
    "options": [
      "支配方；主導方",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "submissive",
    "meaning": "臣服方；被支配方",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🎭",
    "memory": "18+ 詞彙：submissive = 臣服方；被支配方。注意語氣與使用場合。",
    "example": "Submissive means yielding to another person.",
    "exampleZh": "臣服方；被支配方",
    "options": [
      "臣服方；被支配方",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "bondage",
    "meaning": "綑綁玩法；束縛",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🎭",
    "memory": "18+ 詞彙：bondage = 綑綁玩法；束縛。注意語氣與使用場合。",
    "example": "Bondage is an adult kink term.",
    "exampleZh": "綑綁玩法；束縛",
    "options": [
      "綑綁玩法；束縛",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "spanking",
    "meaning": "打屁股；成人性癖語境常見",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🎭",
    "memory": "18+ 詞彙：spanking = 打屁股；成人性癖語境常見。注意語氣與使用場合。",
    "example": "Spanking can be an adult kink term.",
    "exampleZh": "打屁股；成人性癖語境常見",
    "options": [
      "打屁股；成人性癖語境常見",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "vanilla",
    "meaning": "普通型；沒有特殊性癖的",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🍦",
    "memory": "18+ 詞彙：vanilla = 普通型；沒有特殊性癖的。注意語氣與使用場合。",
    "example": "Vanilla means conventional or not kinky.",
    "exampleZh": "普通型；沒有特殊性癖的",
    "options": [
      "普通型；沒有特殊性癖的",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "sex toy",
    "meaning": "情趣用品",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🔞",
    "memory": "18+ 詞彙：sex toy = 情趣用品。注意語氣與使用場合。",
    "example": "Sex toy means an adult toy.",
    "exampleZh": "情趣用品",
    "options": [
      "情趣用品",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "consent",
    "meaning": "同意；性同意",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "✅",
    "memory": "18+ 詞彙：consent = 同意；性同意。注意語氣與使用場合。",
    "example": "Consent must be clear and voluntary.",
    "exampleZh": "同意；性同意",
    "options": [
      "同意；性同意",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "boundary",
    "meaning": "界線；底線",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "✅",
    "memory": "18+ 詞彙：boundary = 界線；底線。注意語氣與使用場合。",
    "example": "A boundary is a limit you do not want crossed.",
    "exampleZh": "界線；底線",
    "options": [
      "界線；底線",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "safe word",
    "meaning": "安全詞；喊了就要停止的詞",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "✅",
    "memory": "18+ 詞彙：safe word = 安全詞；喊了就要停止的詞。注意語氣與使用場合。",
    "example": "A safe word means stop immediately.",
    "exampleZh": "安全詞；喊了就要停止的詞",
    "options": [
      "安全詞；喊了就要停止的詞",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "condom",
    "meaning": "保險套",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🛡️",
    "memory": "18+ 詞彙：condom = 保險套。注意語氣與使用場合。",
    "example": "Use a condom is a common safety sentence.",
    "exampleZh": "保險套",
    "options": [
      "保險套",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "protection",
    "meaning": "保護措施；保險套語境常見",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🛡️",
    "memory": "18+ 詞彙：protection = 保護措施；保險套語境常見。注意語氣與使用場合。",
    "example": "Protection often means condoms in sexual contexts.",
    "exampleZh": "保護措施；保險套語境常見",
    "options": [
      "保護措施；保險套語境常見",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "birth control",
    "meaning": "避孕；避孕措施",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🛡️",
    "memory": "18+ 詞彙：birth control = 避孕；避孕措施。注意語氣與使用場合。",
    "example": "Birth control means contraception.",
    "exampleZh": "避孕；避孕措施",
    "options": [
      "避孕；避孕措施",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "contraception",
    "meaning": "避孕（正式）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🛡️",
    "memory": "18+ 詞彙：contraception = 避孕（正式）。注意語氣與使用場合。",
    "example": "Contraception is the formal word.",
    "exampleZh": "避孕（正式）",
    "options": [
      "避孕（正式）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "STI",
    "meaning": "性傳染病（較新常用縮寫）",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🏥",
    "memory": "18+ 詞彙：STI = 性傳染病（較新常用縮寫）。注意語氣與使用場合。",
    "example": "STI means sexually transmitted infection.",
    "exampleZh": "性傳染病（較新常用縮寫）",
    "options": [
      "性傳染病（較新常用縮寫）",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "STD",
    "meaning": "性病；性傳染病",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🏥",
    "memory": "18+ 詞彙：STD = 性病；性傳染病。注意語氣與使用場合。",
    "example": "STD means sexually transmitted disease.",
    "exampleZh": "性病；性傳染病",
    "options": [
      "性病；性傳染病",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "get tested",
    "meaning": "做性病檢查",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🏥",
    "memory": "18+ 詞彙：get tested = 做性病檢查。注意語氣與使用場合。",
    "example": "Get tested means to take a medical test.",
    "exampleZh": "做性病檢查",
    "options": [
      "做性病檢查",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "comfortable",
    "meaning": "舒服的；能接受的",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "✅",
    "memory": "18+ 詞彙：comfortable = 舒服的；能接受的。注意語氣與使用場合。",
    "example": "Are you comfortable with this?",
    "exampleZh": "舒服的；能接受的",
    "options": [
      "舒服的；能接受的",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "stop",
    "meaning": "停止；停下來",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "🛑",
    "memory": "18+ 詞彙：stop = 停止；停下來。注意語氣與使用場合。",
    "example": "Stop means stop immediately.",
    "exampleZh": "停止；停下來",
    "options": [
      "停止；停下來",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  },
  {
    "word": "slow down",
    "meaning": "慢一點",
    "phonetic": "",
    "level": "18+",
    "category": "18+ 成人英文",
    "picture": "✅",
    "memory": "18+ 詞彙：slow down = 慢一點。注意語氣與使用場合。",
    "example": "Slow down means do it more slowly.",
    "exampleZh": "慢一點",
    "options": [
      "慢一點",
      "色情片詞彙",
      "同意與安全",
      "普通日常用語"
    ]
  }
];
starterWords.push(...adultStarterWords);
starterWords.push(...aiImageStarterWords);

const adultPhraseBank = [
  {
    "en": "This is an 18+ word, so use it carefully.",
    "zh": "這是 18+ 成人詞彙，所以要小心使用。",
    "tag": "18+成人英文"
  },
  {
    "en": "This word is very vulgar.",
    "zh": "這個字非常粗俗。",
    "tag": "18+成人英文"
  },
  {
    "en": "This is a porn term, not polite English.",
    "zh": "這是色情片用語，不是禮貌英文。",
    "tag": "18+成人英文"
  },
  {
    "en": "I want you.",
    "zh": "我想要你。",
    "tag": "18+成人英文"
  },
  {
    "en": "You are so sexy.",
    "zh": "你好性感。",
    "tag": "18+成人英文"
  },
  {
    "en": "You turn me on.",
    "zh": "你讓我興奮。",
    "tag": "18+成人英文"
  },
  {
    "en": "I am horny.",
    "zh": "我性慾上來了／我想做愛。",
    "tag": "18+成人英文"
  },
  {
    "en": "Touch me.",
    "zh": "摸我。",
    "tag": "18+成人英文"
  },
  {
    "en": "Kiss me.",
    "zh": "親我。",
    "tag": "18+成人英文"
  },
  {
    "en": "Do not stop.",
    "zh": "不要停。",
    "tag": "18+成人英文"
  },
  {
    "en": "Harder.",
    "zh": "用力一點。",
    "tag": "18+成人英文"
  },
  {
    "en": "Faster.",
    "zh": "快一點。",
    "tag": "18+成人英文"
  },
  {
    "en": "Slower.",
    "zh": "慢一點。",
    "tag": "18+成人英文"
  },
  {
    "en": "I am close.",
    "zh": "我快到了／快高潮了。",
    "tag": "18+成人英文"
  },
  {
    "en": "I am coming.",
    "zh": "我要高潮了。",
    "tag": "18+成人英文"
  },
  {
    "en": "Are you comfortable with this?",
    "zh": "你這樣可以嗎？",
    "tag": "18+成人英文"
  },
  {
    "en": "Do you want this?",
    "zh": "你想要這樣嗎？",
    "tag": "18+成人英文"
  },
  {
    "en": "We can stop anytime.",
    "zh": "我們隨時都可以停。",
    "tag": "18+成人英文"
  },
  {
    "en": "Please stop.",
    "zh": "請停下來。",
    "tag": "18+成人英文"
  },
  {
    "en": "Use a condom.",
    "zh": "戴保險套。",
    "tag": "18+成人英文"
  },
  {
    "en": "Do you have protection?",
    "zh": "你有保護措施／保險套嗎？",
    "tag": "18+成人英文"
  },
  {
    "en": "Have you been tested?",
    "zh": "你有做過性病檢查嗎？",
    "tag": "18+成人英文"
  }
];

const aiImageStarterWords = [
  {
    "word": "prompt",
    "meaning": "提示詞",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：prompt = 提示詞。常用在 提示詞基礎。",
    "example": "Write the prompt before you generate the image.",
    "exampleZh": "提示詞",
    "options": [
      "提示詞",
      "背景",
      "輪廓光",
      "高解析修復"
    ]
  },
  {
    "word": "keyword",
    "meaning": "關鍵字",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：keyword = 關鍵字。常用在 提示詞基礎。",
    "example": "This term is often used in 提示詞基礎 when generating images.",
    "exampleZh": "關鍵字",
    "options": [
      "關鍵字",
      "構圖",
      "渲染圖",
      "臉部細節"
    ]
  },
  {
    "word": "prompt engineering",
    "meaning": "提示詞工程",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：prompt engineering = 提示詞工程。常用在 提示詞基礎。",
    "example": "This term is often used in 提示詞基礎 when generating images.",
    "exampleZh": "提示詞工程",
    "options": [
      "提示詞工程",
      "解析度",
      "顯示記憶體",
      "插畫風格"
    ]
  },
  {
    "word": "positive prompt",
    "meaning": "正向提示詞",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：positive prompt = 正向提示詞。常用在 提示詞基礎。",
    "example": "This term is often used in 提示詞基礎 when generating images.",
    "exampleZh": "正向提示詞",
    "options": [
      "正向提示詞",
      "高解析度",
      "手勢／肢體動作",
      "採樣器"
    ]
  },
  {
    "word": "negative prompt",
    "meaning": "負向提示詞",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：negative prompt = 負向提示詞。常用在 提示詞基礎。",
    "example": "Add a negative prompt to avoid bad anatomy.",
    "exampleZh": "負向提示詞",
    "options": [
      "負向提示詞",
      "飽和度",
      "遮罩",
      "節點"
    ]
  },
  {
    "word": "tag",
    "meaning": "標籤詞",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：tag = 標籤詞。常用在 提示詞基礎。",
    "example": "This term is often used in 提示詞基礎 when generating images.",
    "exampleZh": "標籤詞",
    "options": [
      "標籤詞",
      "節點",
      "正向提示詞",
      "材質紋理"
    ]
  },
  {
    "word": "phrase",
    "meaning": "片語／短語",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：phrase = 片語／短語。常用在 提示詞基礎。",
    "example": "This term is often used in 提示詞基礎 when generating images.",
    "exampleZh": "片語／短語",
    "options": [
      "片語／短語",
      "角度",
      "打光／光線",
      "變體"
    ]
  },
  {
    "word": "syntax",
    "meaning": "語法結構",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：syntax = 語法結構。常用在 提示詞基礎。",
    "example": "This term is often used in 提示詞基礎 when generating images.",
    "exampleZh": "語法結構",
    "options": [
      "語法結構",
      "工作流程",
      "提示詞工程",
      "渲染圖"
    ]
  },
  {
    "word": "token",
    "meaning": "詞元",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：token = 詞元。常用在 提示詞基礎。",
    "example": "This term is often used in 提示詞基礎 when generating images.",
    "exampleZh": "詞元",
    "options": [
      "詞元",
      "高解析修復",
      "長寬比",
      "語法結構"
    ]
  },
  {
    "word": "prompt weight",
    "meaning": "提示詞權重",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：prompt weight = 提示詞權重。常用在 提示詞基礎。",
    "example": "This term is often used in 提示詞基礎 when generating images.",
    "exampleZh": "提示詞權重",
    "options": [
      "提示詞權重",
      "LoRA 模組",
      "佇列",
      "中景"
    ]
  },
  {
    "word": "wildcard",
    "meaning": "萬用變數",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：wildcard = 萬用變數。常用在 提示詞基礎。",
    "example": "This term is often used in 提示詞基礎 when generating images.",
    "exampleZh": "萬用變數",
    "options": [
      "萬用變數",
      "高解析度",
      "手勢／肢體動作",
      "採樣器"
    ]
  },
  {
    "word": "prompt template",
    "meaning": "提示詞模板",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：prompt template = 提示詞模板。常用在 提示詞基礎。",
    "example": "This term is often used in 提示詞基礎 when generating images.",
    "exampleZh": "提示詞模板",
    "options": [
      "提示詞模板",
      "風格化",
      "服裝",
      "種子"
    ]
  },
  {
    "word": "composition",
    "meaning": "構圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：composition = 構圖。常用在 構圖與鏡位。",
    "example": "This term is often used in 構圖與鏡位 when generating images.",
    "exampleZh": "構圖",
    "options": [
      "構圖",
      "排程器",
      "PNG 參數資訊",
      "透視"
    ]
  },
  {
    "word": "framing",
    "meaning": "取景／框景",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：framing = 取景／框景。常用在 構圖與鏡位。",
    "example": "This term is often used in 構圖與鏡位 when generating images.",
    "exampleZh": "取景／框景",
    "options": [
      "取景／框景",
      "去噪強度",
      "擴充套件",
      "寫實風格"
    ]
  },
  {
    "word": "portrait",
    "meaning": "人像構圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：portrait = 人像構圖。常用在 構圖與鏡位。",
    "example": "This term is often used in 構圖與鏡位 when generating images.",
    "exampleZh": "人像構圖",
    "options": [
      "人像構圖",
      "背景",
      "輪廓光",
      "高解析修復"
    ]
  },
  {
    "word": "close-up",
    "meaning": "特寫",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：close-up = 特寫。常用在 構圖與鏡位。",
    "example": "This term is often used in 構圖與鏡位 when generating images.",
    "exampleZh": "特寫",
    "options": [
      "特寫",
      "片語／短語",
      "寫實風格",
      "眼神接觸"
    ]
  },
  {
    "word": "medium shot",
    "meaning": "中景",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：medium shot = 中景。常用在 構圖與鏡位。",
    "example": "This term is often used in 構圖與鏡位 when generating images.",
    "exampleZh": "中景",
    "options": [
      "中景",
      "背光",
      "文生圖",
      "解析度"
    ]
  },
  {
    "word": "full body",
    "meaning": "全身",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：full body = 全身。常用在 構圖與鏡位。",
    "example": "This term is often used in 構圖與鏡位 when generating images.",
    "exampleZh": "全身",
    "options": [
      "全身",
      "節點",
      "正向提示詞",
      "材質紋理"
    ]
  },
  {
    "word": "wide shot",
    "meaning": "遠景／廣角畫面",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：wide shot = 遠景／廣角畫面。常用在 構圖與鏡位。",
    "example": "This term is often used in 構圖與鏡位 when generating images.",
    "exampleZh": "遠景／廣角畫面",
    "options": [
      "遠景／廣角畫面",
      "圖生圖",
      "ControlNet 控制模組",
      "提示詞"
    ]
  },
  {
    "word": "angle",
    "meaning": "角度",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：angle = 角度。常用在 構圖與鏡位。",
    "example": "This term is often used in 構圖與鏡位 when generating images.",
    "exampleZh": "角度",
    "options": [
      "角度",
      "佇列",
      "片語／短語",
      "清晰對焦"
    ]
  },
  {
    "word": "perspective",
    "meaning": "透視",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：perspective = 透視。常用在 構圖與鏡位。",
    "example": "This term is often used in 構圖與鏡位 when generating images.",
    "exampleZh": "透視",
    "options": [
      "透視",
      "種子",
      "歷史紀錄",
      "背景"
    ]
  },
  {
    "word": "background",
    "meaning": "背景",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：background = 背景。常用在 構圖與鏡位。",
    "example": "This term is often used in 構圖與鏡位 when generating images.",
    "exampleZh": "背景",
    "options": [
      "背景",
      "臉部細節",
      "LoRA 模組",
      "顯示卡運算單元"
    ]
  },
  {
    "word": "foreground",
    "meaning": "前景",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：foreground = 前景。常用在 構圖與鏡位。",
    "example": "This term is often used in 構圖與鏡位 when generating images.",
    "exampleZh": "前景",
    "options": [
      "前景",
      "VAE 色彩／細節模組",
      "預覽",
      "中景"
    ]
  },
  {
    "word": "depth of field",
    "meaning": "景深",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：depth of field = 景深。常用在 構圖與鏡位。",
    "example": "This term is often used in 構圖與鏡位 when generating images.",
    "exampleZh": "景深",
    "options": [
      "景深",
      "角色",
      "放大增強",
      "佇列"
    ]
  },
  {
    "word": "photorealistic",
    "meaning": "寫實風格",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：photorealistic = 寫實風格。常用在 風格與畫質。",
    "example": "This term is often used in 風格與畫質 when generating images.",
    "exampleZh": "寫實風格",
    "options": [
      "寫實風格",
      "高品質佳作（常見提示詞）",
      "人體結構",
      "步數"
    ]
  },
  {
    "word": "anime style",
    "meaning": "動漫風格",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：anime style = 動漫風格。常用在 風格與畫質。",
    "example": "This term is often used in 風格與畫質 when generating images.",
    "exampleZh": "動漫風格",
    "options": [
      "動漫風格",
      "預覽",
      "語法結構",
      "風格化"
    ]
  },
  {
    "word": "illustration",
    "meaning": "插畫風格",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：illustration = 插畫風格。常用在 風格與畫質。",
    "example": "This term is often used in 風格與畫質 when generating images.",
    "exampleZh": "插畫風格",
    "options": [
      "插畫風格",
      "負向提示詞",
      "背景",
      "表情"
    ]
  },
  {
    "word": "concept art",
    "meaning": "概念藝術",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：concept art = 概念藝術。常用在 風格與畫質。",
    "example": "This term is often used in 風格與畫質 when generating images.",
    "exampleZh": "概念藝術",
    "options": [
      "概念藝術",
      "遮罩",
      "種子",
      "正向提示詞"
    ]
  },
  {
    "word": "line art",
    "meaning": "線稿",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：line art = 線稿。常用在 風格與畫質。",
    "example": "This term is often used in 風格與畫質 when generating images.",
    "exampleZh": "線稿",
    "options": [
      "線稿",
      "批次張數",
      "提示詞",
      "插畫風格"
    ]
  },
  {
    "word": "render",
    "meaning": "渲染圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：render = 渲染圖。常用在 風格與畫質。",
    "example": "This term is often used in 風格與畫質 when generating images.",
    "exampleZh": "渲染圖",
    "options": [
      "渲染圖",
      "手勢／肢體動作",
      "透明背景",
      "中繼資料"
    ]
  },
  {
    "word": "texture",
    "meaning": "材質紋理",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：texture = 材質紋理。常用在 風格與畫質。",
    "example": "This term is often used in 風格與畫質 when generating images.",
    "exampleZh": "材質紋理",
    "options": [
      "材質紋理",
      "解析度",
      "顯示記憶體",
      "動漫風格"
    ]
  },
  {
    "word": "detail",
    "meaning": "細節",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：detail = 細節。常用在 風格與畫質。",
    "example": "This term is often used in 風格與畫質 when generating images.",
    "exampleZh": "細節",
    "options": [
      "細節",
      "對稱性",
      "模型",
      "預設組"
    ]
  },
  {
    "word": "high resolution",
    "meaning": "高解析度",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：high resolution = 高解析度。常用在 風格與畫質。",
    "example": "This term is often used in 風格與畫質 when generating images.",
    "exampleZh": "高解析度",
    "options": [
      "高解析度",
      "佇列",
      "片語／短語",
      "清晰對焦"
    ]
  },
  {
    "word": "sharp focus",
    "meaning": "清晰對焦",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：sharp focus = 清晰對焦。常用在 風格與畫質。",
    "example": "This term is often used in 風格與畫質 when generating images.",
    "exampleZh": "清晰對焦",
    "options": [
      "清晰對焦",
      "解析度",
      "顯示記憶體",
      "動漫風格"
    ]
  },
  {
    "word": "stylized",
    "meaning": "風格化",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：stylized = 風格化。常用在 風格與畫質。",
    "example": "This term is often used in 風格與畫質 when generating images.",
    "exampleZh": "風格化",
    "options": [
      "風格化",
      "提示詞",
      "全身",
      "配色"
    ]
  },
  {
    "word": "masterpiece",
    "meaning": "高品質佳作（常見提示詞）",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：masterpiece = 高品質佳作（常見提示詞）。常用在 風格與畫質。",
    "example": "This term is often used in 風格與畫質 when generating images.",
    "exampleZh": "高品質佳作（常見提示詞）",
    "options": [
      "高品質佳作（常見提示詞）",
      "插畫風格",
      "配色",
      "模型"
    ]
  },
  {
    "word": "lighting",
    "meaning": "打光／光線",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：lighting = 打光／光線。常用在 光線與色彩。",
    "example": "This term is often used in 光線與色彩 when generating images.",
    "exampleZh": "打光／光線",
    "options": [
      "打光／光線",
      "正向提示詞",
      "透視",
      "姿勢"
    ]
  },
  {
    "word": "soft light",
    "meaning": "柔光",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：soft light = 柔光。常用在 光線與色彩。",
    "example": "This term is often used in 光線與色彩 when generating images.",
    "exampleZh": "柔光",
    "options": [
      "柔光",
      "圖生圖",
      "ControlNet 控制模組",
      "提示詞"
    ]
  },
  {
    "word": "rim light",
    "meaning": "輪廓光",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：rim light = 輪廓光。常用在 光線與色彩。",
    "example": "This term is often used in 光線與色彩 when generating images.",
    "exampleZh": "輪廓光",
    "options": [
      "輪廓光",
      "打光／光線",
      "手部",
      "去噪強度"
    ]
  },
  {
    "word": "backlight",
    "meaning": "背光",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：backlight = 背光。常用在 光線與色彩。",
    "example": "This term is often used in 光線與色彩 when generating images.",
    "exampleZh": "背光",
    "options": [
      "背光",
      "全身",
      "風格化",
      "參考圖"
    ]
  },
  {
    "word": "ambient light",
    "meaning": "環境光",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：ambient light = 環境光。常用在 光線與色彩。",
    "example": "This term is often used in 光線與色彩 when generating images.",
    "exampleZh": "環境光",
    "options": [
      "環境光",
      "眼神接觸",
      "裁切",
      "PNG 參數資訊"
    ]
  },
  {
    "word": "shadows",
    "meaning": "陰影",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：shadows = 陰影。常用在 光線與色彩。",
    "example": "This term is often used in 光線與色彩 when generating images.",
    "exampleZh": "陰影",
    "options": [
      "陰影",
      "採樣器",
      "中繼資料",
      "遠景／廣角畫面"
    ]
  },
  {
    "word": "contrast",
    "meaning": "對比",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：contrast = 對比。常用在 光線與色彩。",
    "example": "This term is often used in 光線與色彩 when generating images.",
    "exampleZh": "對比",
    "options": [
      "對比",
      "透明背景",
      "批次張數",
      "提示詞權重"
    ]
  },
  {
    "word": "saturation",
    "meaning": "飽和度",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：saturation = 飽和度。常用在 光線與色彩。",
    "example": "This term is often used in 光線與色彩 when generating images.",
    "exampleZh": "飽和度",
    "options": [
      "飽和度",
      "語法結構",
      "寫實風格",
      "服裝"
    ]
  },
  {
    "word": "color palette",
    "meaning": "配色",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：color palette = 配色。常用在 光線與色彩。",
    "example": "This term is often used in 光線與色彩 when generating images.",
    "exampleZh": "配色",
    "options": [
      "配色",
      "臉部細節",
      "LoRA 模組",
      "顯示卡運算單元"
    ]
  },
  {
    "word": "tone",
    "meaning": "色調",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：tone = 色調。常用在 光線與色彩。",
    "example": "This term is often used in 光線與色彩 when generating images.",
    "exampleZh": "色調",
    "options": [
      "色調",
      "負向提示詞",
      "背景",
      "表情"
    ]
  },
  {
    "word": "character",
    "meaning": "角色",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：character = 角色。常用在 人物與姿勢。",
    "example": "This term is often used in 人物與姿勢 when generating images.",
    "exampleZh": "角色",
    "options": [
      "角色",
      "提示詞工程",
      "角度",
      "色調"
    ]
  },
  {
    "word": "pose",
    "meaning": "姿勢",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：pose = 姿勢。常用在 人物與姿勢。",
    "example": "This term is often used in 人物與姿勢 when generating images.",
    "exampleZh": "姿勢",
    "options": [
      "姿勢",
      "全身",
      "風格化",
      "參考圖"
    ]
  },
  {
    "word": "expression",
    "meaning": "表情",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：expression = 表情。常用在 人物與姿勢。",
    "example": "This term is often used in 人物與姿勢 when generating images.",
    "exampleZh": "表情",
    "options": [
      "表情",
      "臉部細節",
      "LoRA 模組",
      "顯示卡運算單元"
    ]
  },
  {
    "word": "gesture",
    "meaning": "手勢／肢體動作",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：gesture = 手勢／肢體動作。常用在 人物與姿勢。",
    "example": "This term is often used in 人物與姿勢 when generating images.",
    "exampleZh": "手勢／肢體動作",
    "options": [
      "手勢／肢體動作",
      "遮罩",
      "種子",
      "正向提示詞"
    ]
  },
  {
    "word": "eye contact",
    "meaning": "眼神接觸",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：eye contact = 眼神接觸。常用在 人物與姿勢。",
    "example": "This term is often used in 人物與姿勢 when generating images.",
    "exampleZh": "眼神接觸",
    "options": [
      "眼神接觸",
      "人體結構",
      "選取區域",
      "圖庫"
    ]
  },
  {
    "word": "outfit",
    "meaning": "服裝",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：outfit = 服裝。常用在 人物與姿勢。",
    "example": "This term is often used in 人物與姿勢 when generating images.",
    "exampleZh": "服裝",
    "options": [
      "服裝",
      "LoRA 模組",
      "佇列",
      "特寫"
    ]
  },
  {
    "word": "anatomy",
    "meaning": "人體結構",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：anatomy = 人體結構。常用在 人物與姿勢。",
    "example": "This term is often used in 人物與姿勢 when generating images.",
    "exampleZh": "人體結構",
    "options": [
      "人體結構",
      "模型",
      "畫布",
      "取景／框景"
    ]
  },
  {
    "word": "symmetry",
    "meaning": "對稱性",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：symmetry = 對稱性。常用在 人物與姿勢。",
    "example": "This term is often used in 人物與姿勢 when generating images.",
    "exampleZh": "對稱性",
    "options": [
      "對稱性",
      "概念藝術",
      "配色",
      "模型檔／檢查點"
    ]
  },
  {
    "word": "hands",
    "meaning": "手部",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：hands = 手部。常用在 人物與姿勢。",
    "example": "This term is often used in 人物與姿勢 when generating images.",
    "exampleZh": "手部",
    "options": [
      "手部",
      "人像構圖",
      "細節",
      "局部重繪"
    ]
  },
  {
    "word": "face detail",
    "meaning": "臉部細節",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：face detail = 臉部細節。常用在 人物與姿勢。",
    "example": "This term is often used in 人物與姿勢 when generating images.",
    "exampleZh": "臉部細節",
    "options": [
      "臉部細節",
      "透明背景",
      "批次張數",
      "提示詞權重"
    ]
  },
  {
    "word": "text-to-image",
    "meaning": "文生圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：text-to-image = 文生圖。常用在 生圖模式與編修。",
    "example": "Text-to-image starts from a written prompt.",
    "exampleZh": "文生圖",
    "options": [
      "文生圖",
      "細節",
      "表情",
      "採樣器"
    ]
  },
  {
    "word": "image-to-image",
    "meaning": "圖生圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：image-to-image = 圖生圖。常用在 生圖模式與編修。",
    "example": "Image-to-image keeps part of the original composition.",
    "exampleZh": "圖生圖",
    "options": [
      "圖生圖",
      "服裝",
      "選取區域",
      "圖庫"
    ]
  },
  {
    "word": "inpainting",
    "meaning": "局部重繪",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：inpainting = 局部重繪。常用在 生圖模式與編修。",
    "example": "Use inpainting to fix the broken hands.",
    "exampleZh": "局部重繪",
    "options": [
      "局部重繪",
      "提示引導強度",
      "預設組",
      "前景"
    ]
  },
  {
    "word": "outpainting",
    "meaning": "外延補圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：outpainting = 外延補圖。常用在 生圖模式與編修。",
    "example": "This term is often used in 生圖模式與編修 when generating images.",
    "exampleZh": "外延補圖",
    "options": [
      "外延補圖",
      "背光",
      "文生圖",
      "批次張數"
    ]
  },
  {
    "word": "mask",
    "meaning": "遮罩",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：mask = 遮罩。常用在 生圖模式與編修。",
    "example": "This term is often used in 生圖模式與編修 when generating images.",
    "exampleZh": "遮罩",
    "options": [
      "遮罩",
      "環境光",
      "圖生圖",
      "Clip Skip 文字理解層跳過"
    ]
  },
  {
    "word": "reference image",
    "meaning": "參考圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：reference image = 參考圖。常用在 生圖模式與編修。",
    "example": "This term is often used in 生圖模式與編修 when generating images.",
    "exampleZh": "參考圖",
    "options": [
      "參考圖",
      "片語／短語",
      "景深",
      "手勢／肢體動作"
    ]
  },
  {
    "word": "variation",
    "meaning": "變體",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：variation = 變體。常用在 生圖模式與編修。",
    "example": "This term is often used in 生圖模式與編修 when generating images.",
    "exampleZh": "變體",
    "options": [
      "變體",
      "提示引導強度",
      "預設組",
      "前景"
    ]
  },
  {
    "word": "upscale",
    "meaning": "放大增強",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：upscale = 放大增強。常用在 生圖模式與編修。",
    "example": "Upscale the final image to make it clearer.",
    "exampleZh": "放大增強",
    "options": [
      "放大增強",
      "裁切",
      "Clip Skip 文字理解層跳過",
      "萬用變數"
    ]
  },
  {
    "word": "highres fix",
    "meaning": "高解析修復",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：highres fix = 高解析修復。常用在 生圖模式與編修。",
    "example": "This term is often used in 生圖模式與編修 when generating images.",
    "exampleZh": "高解析修復",
    "options": [
      "高解析修復",
      "顯示卡運算單元",
      "特寫",
      "陰影"
    ]
  },
  {
    "word": "face restore",
    "meaning": "臉部修復",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：face restore = 臉部修復。常用在 生圖模式與編修。",
    "example": "This term is often used in 生圖模式與編修 when generating images.",
    "exampleZh": "臉部修復",
    "options": [
      "臉部修復",
      "表情",
      "透明背景",
      "中繼資料"
    ]
  },
  {
    "word": "transparent background",
    "meaning": "透明背景",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：transparent background = 透明背景。常用在 生圖模式與編修。",
    "example": "This term is often used in 生圖模式與編修 when generating images.",
    "exampleZh": "透明背景",
    "options": [
      "透明背景",
      "參考圖",
      "提示引導強度",
      "標籤詞"
    ]
  },
  {
    "word": "crop",
    "meaning": "裁切",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：crop = 裁切。常用在 生圖模式與編修。",
    "example": "This term is often used in 生圖模式與編修 when generating images.",
    "exampleZh": "裁切",
    "options": [
      "裁切",
      "姿勢",
      "高解析修復",
      "匯出"
    ]
  },
  {
    "word": "background removal",
    "meaning": "去背",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：background removal = 去背。常用在 生圖模式與編修。",
    "example": "This term is often used in 生圖模式與編修 when generating images.",
    "exampleZh": "去背",
    "options": [
      "去背",
      "表情",
      "臉部修復",
      "中繼資料"
    ]
  },
  {
    "word": "selected region",
    "meaning": "選取區域",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：selected region = 選取區域。常用在 生圖模式與編修。",
    "example": "This term is often used in 生圖模式與編修 when generating images.",
    "exampleZh": "選取區域",
    "options": [
      "選取區域",
      "提示詞模板",
      "線稿",
      "手部"
    ]
  },
  {
    "word": "model",
    "meaning": "模型",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：model = 模型。常用在 模型與進階設定。",
    "example": "This term is often used in 模型與進階設定 when generating images.",
    "exampleZh": "模型",
    "options": [
      "模型",
      "解析度",
      "顯示記憶體",
      "動漫風格"
    ]
  },
  {
    "word": "checkpoint",
    "meaning": "模型檔／檢查點",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：checkpoint = 模型檔／檢查點。常用在 模型與進階設定。",
    "example": "This term is often used in 模型與進階設定 when generating images.",
    "exampleZh": "模型檔／檢查點",
    "options": [
      "模型檔／檢查點",
      "PNG 參數資訊",
      "萬用變數",
      "打光／光線"
    ]
  },
  {
    "word": "LoRA",
    "meaning": "LoRA 模組",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：LoRA = LoRA 模組。常用在 模型與進階設定。",
    "example": "This term is often used in 模型與進階設定 when generating images.",
    "exampleZh": "LoRA 模組",
    "options": [
      "LoRA 模組",
      "服裝",
      "去背",
      "圖庫"
    ]
  },
  {
    "word": "VAE",
    "meaning": "VAE 色彩／細節模組",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：VAE = VAE 色彩／細節模組。常用在 模型與進階設定。",
    "example": "This term is often used in 模型與進階設定 when generating images.",
    "exampleZh": "VAE 色彩／細節模組",
    "options": [
      "VAE 色彩／細節模組",
      "提示詞權重",
      "插畫風格",
      "人體結構"
    ]
  },
  {
    "word": "ControlNet",
    "meaning": "ControlNet 控制模組",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：ControlNet = ControlNet 控制模組。常用在 模型與進階設定。",
    "example": "ControlNet can help keep the pose stable.",
    "exampleZh": "ControlNet 控制模組",
    "options": [
      "ControlNet 控制模組",
      "顯示卡運算單元",
      "特寫",
      "陰影"
    ]
  },
  {
    "word": "sampler",
    "meaning": "採樣器",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：sampler = 採樣器。常用在 模型與進階設定。",
    "example": "This term is often used in 模型與進階設定 when generating images.",
    "exampleZh": "採樣器",
    "options": [
      "採樣器",
      "人體結構",
      "選取區域",
      "預設組"
    ]
  },
  {
    "word": "scheduler",
    "meaning": "排程器",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：scheduler = 排程器。常用在 模型與進階設定。",
    "example": "This term is often used in 模型與進階設定 when generating images.",
    "exampleZh": "排程器",
    "options": [
      "排程器",
      "人像構圖",
      "細節",
      "圖生圖"
    ]
  },
  {
    "word": "seed",
    "meaning": "種子",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：seed = 種子。常用在 模型與進階設定。",
    "example": "Use the same seed if you want a similar result.",
    "exampleZh": "種子",
    "options": [
      "種子",
      "去噪強度",
      "擴充套件",
      "景深"
    ]
  },
  {
    "word": "steps",
    "meaning": "步數",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：steps = 步數。常用在 模型與進階設定。",
    "example": "This term is often used in 模型與進階設定 when generating images.",
    "exampleZh": "步數",
    "options": [
      "步數",
      "工作流程",
      "提示詞工程",
      "線稿"
    ]
  },
  {
    "word": "CFG scale",
    "meaning": "提示引導強度",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：CFG scale = 提示引導強度。常用在 模型與進階設定。",
    "example": "This term is often used in 模型與進階設定 when generating images.",
    "exampleZh": "提示引導強度",
    "options": [
      "提示引導強度",
      "高品質佳作（常見提示詞）",
      "人體結構",
      "步數"
    ]
  },
  {
    "word": "denoise strength",
    "meaning": "去噪強度",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：denoise strength = 去噪強度。常用在 模型與進階設定。",
    "example": "This term is often used in 模型與進階設定 when generating images.",
    "exampleZh": "去噪強度",
    "options": [
      "去噪強度",
      "PNG 參數資訊",
      "萬用變數",
      "打光／光線"
    ]
  },
  {
    "word": "aspect ratio",
    "meaning": "長寬比",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：aspect ratio = 長寬比。常用在 模型與進階設定。",
    "example": "Choose the right aspect ratio for your poster.",
    "exampleZh": "長寬比",
    "options": [
      "長寬比",
      "提示詞模板",
      "線稿",
      "手部"
    ]
  },
  {
    "word": "resolution",
    "meaning": "解析度",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：resolution = 解析度。常用在 模型與進階設定。",
    "example": "This term is often used in 模型與進階設定 when generating images.",
    "exampleZh": "解析度",
    "options": [
      "解析度",
      "輪廓光",
      "臉部細節",
      "長寬比"
    ]
  },
  {
    "word": "batch size",
    "meaning": "批次張數",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：batch size = 批次張數。常用在 模型與進階設定。",
    "example": "This term is often used in 模型與進階設定 when generating images.",
    "exampleZh": "批次張數",
    "options": [
      "批次張數",
      "畫布",
      "負向提示詞",
      "材質紋理"
    ]
  },
  {
    "word": "clip skip",
    "meaning": "Clip Skip 文字理解層跳過",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：clip skip = Clip Skip 文字理解層跳過。常用在 模型與進階設定。",
    "example": "This term is often used in 模型與進階設定 when generating images.",
    "exampleZh": "Clip Skip 文字理解層跳過",
    "options": [
      "Clip Skip 文字理解層跳過",
      "放大增強",
      "去噪強度",
      "語法結構"
    ]
  },
  {
    "word": "workflow",
    "meaning": "工作流程",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：workflow = 工作流程。常用在 軟體操作與流程。",
    "example": "This term is often used in 軟體操作與流程 when generating images.",
    "exampleZh": "工作流程",
    "options": [
      "工作流程",
      "遮罩",
      "種子",
      "負向提示詞"
    ]
  },
  {
    "word": "node",
    "meaning": "節點",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：node = 節點。常用在 軟體操作與流程。",
    "example": "This term is often used in 軟體操作與流程 when generating images.",
    "exampleZh": "節點",
    "options": [
      "節點",
      "提示詞模板",
      "線稿",
      "手部"
    ]
  },
  {
    "word": "canvas",
    "meaning": "畫布",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：canvas = 畫布。常用在 軟體操作與流程。",
    "example": "This term is often used in 軟體操作與流程 when generating images.",
    "exampleZh": "畫布",
    "options": [
      "畫布",
      "中繼資料",
      "提示詞權重",
      "高品質佳作（常見提示詞）"
    ]
  },
  {
    "word": "layer",
    "meaning": "圖層",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：layer = 圖層。常用在 軟體操作與流程。",
    "example": "This term is often used in 軟體操作與流程 when generating images.",
    "exampleZh": "圖層",
    "options": [
      "圖層",
      "渲染圖",
      "角色",
      "LoRA 模組"
    ]
  },
  {
    "word": "queue",
    "meaning": "佇列",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：queue = 佇列。常用在 軟體操作與流程。",
    "example": "This term is often used in 軟體操作與流程 when generating images.",
    "exampleZh": "佇列",
    "options": [
      "佇列",
      "外延補圖",
      "排程器",
      "正向提示詞"
    ]
  },
  {
    "word": "preview",
    "meaning": "預覽",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：preview = 預覽。常用在 軟體操作與流程。",
    "example": "This term is often used in 軟體操作與流程 when generating images.",
    "exampleZh": "預覽",
    "options": [
      "預覽",
      "佇列",
      "語法結構",
      "清晰對焦"
    ]
  },
  {
    "word": "export",
    "meaning": "匯出",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：export = 匯出。常用在 軟體操作與流程。",
    "example": "This term is often used in 軟體操作與流程 when generating images.",
    "exampleZh": "匯出",
    "options": [
      "匯出",
      "眼神接觸",
      "裁切",
      "歷史紀錄"
    ]
  },
  {
    "word": "metadata",
    "meaning": "中繼資料",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：metadata = 中繼資料。常用在 軟體操作與流程。",
    "example": "This term is often used in 軟體操作與流程 when generating images.",
    "exampleZh": "中繼資料",
    "options": [
      "中繼資料",
      "萬用變數",
      "概念藝術",
      "對稱性"
    ]
  },
  {
    "word": "PNG info",
    "meaning": "PNG 參數資訊",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：PNG info = PNG 參數資訊。常用在 軟體操作與流程。",
    "example": "This term is often used in 軟體操作與流程 when generating images.",
    "exampleZh": "PNG 參數資訊",
    "options": [
      "PNG 參數資訊",
      "打光／光線",
      "對稱性",
      "提示引導強度"
    ]
  },
  {
    "word": "history",
    "meaning": "歷史紀錄",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：history = 歷史紀錄。常用在 軟體操作與流程。",
    "example": "This term is often used in 軟體操作與流程 when generating images.",
    "exampleZh": "歷史紀錄",
    "options": [
      "歷史紀錄",
      "工作流程",
      "正向提示詞",
      "渲染圖"
    ]
  },
  {
    "word": "gallery",
    "meaning": "圖庫",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：gallery = 圖庫。常用在 軟體操作與流程。",
    "example": "This term is often used in 軟體操作與流程 when generating images.",
    "exampleZh": "圖庫",
    "options": [
      "圖庫",
      "渲染圖",
      "角色",
      "LoRA 模組"
    ]
  },
  {
    "word": "preset",
    "meaning": "預設組",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：preset = 預設組。常用在 軟體操作與流程。",
    "example": "This term is often used in 軟體操作與流程 when generating images.",
    "exampleZh": "預設組",
    "options": [
      "預設組",
      "對稱性",
      "模型",
      "擴充套件"
    ]
  },
  {
    "word": "extension",
    "meaning": "擴充套件",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：extension = 擴充套件。常用在 軟體操作與流程。",
    "example": "This term is often used in 軟體操作與流程 when generating images.",
    "exampleZh": "擴充套件",
    "options": [
      "擴充套件",
      "角色",
      "放大增強",
      "佇列"
    ]
  },
  {
    "word": "GPU",
    "meaning": "顯示卡運算單元",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：GPU = 顯示卡運算單元。常用在 軟體操作與流程。",
    "example": "This term is often used in 軟體操作與流程 when generating images.",
    "exampleZh": "顯示卡運算單元",
    "options": [
      "顯示卡運算單元",
      "人體結構",
      "選取區域",
      "圖庫"
    ]
  },
  {
    "word": "VRAM",
    "meaning": "顯示記憶體",
    "phonetic": "",
    "level": "AI",
    "category": "AI 生圖英文",
    "picture": "🎨",
    "memory": "AI 生圖詞彙：VRAM = 顯示記憶體。常用在 軟體操作與流程。",
    "example": "Large images will use more VRAM.",
    "exampleZh": "顯示記憶體",
    "options": [
      "顯示記憶體",
      "Clip Skip 文字理解層跳過",
      "提示詞工程",
      "線稿"
    ]
  }
];

const aiImagePhraseBank = [
  {
    "en": "Write a clear prompt first.",
    "zh": "先寫一個清楚的提示詞。",
    "tag": "AI 生圖英文・提示詞基礎"
  },
  {
    "en": "Add a negative prompt to avoid extra fingers.",
    "zh": "加入負向提示詞，避免多出手指。",
    "tag": "AI 生圖英文・提示詞基礎"
  },
  {
    "en": "Use stronger prompt weight for the main subject.",
    "zh": "把主體的提示詞權重調高一點。",
    "tag": "AI 生圖英文・提示詞基礎"
  },
  {
    "en": "Use a full body composition.",
    "zh": "使用全身構圖。",
    "tag": "AI 生圖英文・構圖與鏡位"
  },
  {
    "en": "Move the camera angle a little lower.",
    "zh": "把鏡頭角度再往低一點。",
    "tag": "AI 生圖英文・構圖與鏡位"
  },
  {
    "en": "Add more depth of field to the background.",
    "zh": "替背景增加更多景深效果。",
    "tag": "AI 生圖英文・構圖與鏡位"
  },
  {
    "en": "Make the style more cinematic.",
    "zh": "讓風格更有電影感。",
    "tag": "AI 生圖英文・風格與畫質"
  },
  {
    "en": "I want a photorealistic portrait.",
    "zh": "我想要一張寫實風格的人像。",
    "tag": "AI 生圖英文・風格與畫質"
  },
  {
    "en": "Increase the detail and sharp focus.",
    "zh": "提高細節與清晰對焦。",
    "tag": "AI 生圖英文・風格與畫質"
  },
  {
    "en": "Use soft light on the face.",
    "zh": "在臉部使用柔光。",
    "tag": "AI 生圖英文・光線與色彩"
  },
  {
    "en": "The color palette should be warm and soft.",
    "zh": "配色應該偏暖且柔和。",
    "tag": "AI 生圖英文・光線與色彩"
  },
  {
    "en": "The contrast is too high.",
    "zh": "對比度太高了。",
    "tag": "AI 生圖英文・光線與色彩"
  },
  {
    "en": "Fix the hands and facial anatomy.",
    "zh": "修正手部和臉部的人體結構。",
    "tag": "AI 生圖英文・人物與姿勢"
  },
  {
    "en": "Give the character a natural smile.",
    "zh": "讓角色露出自然的微笑。",
    "tag": "AI 生圖英文・人物與姿勢"
  },
  {
    "en": "Change the pose to a sitting position.",
    "zh": "把姿勢改成坐姿。",
    "tag": "AI 生圖英文・人物與姿勢"
  },
  {
    "en": "Use inpainting to fix the eyes.",
    "zh": "用局部重繪來修眼睛。",
    "tag": "AI 生圖英文・生圖模式與編修"
  },
  {
    "en": "Use outpainting to extend the background.",
    "zh": "用外延補圖把背景延伸出去。",
    "tag": "AI 生圖英文・生圖模式與編修"
  },
  {
    "en": "Upscale the final image after generation.",
    "zh": "生成完成後再把最終圖片放大增強。",
    "tag": "AI 生圖英文・生圖模式與編修"
  },
  {
    "en": "Try another sampler with the same seed.",
    "zh": "用相同種子試試另一個採樣器。",
    "tag": "AI 生圖英文・模型與進階設定"
  },
  {
    "en": "Lower the denoise strength a little.",
    "zh": "把去噪強度稍微降低一點。",
    "tag": "AI 生圖英文・模型與進階設定"
  },
  {
    "en": "Set the aspect ratio to 9:16.",
    "zh": "把長寬比設成 9:16。",
    "tag": "AI 生圖英文・模型與進階設定"
  },
  {
    "en": "Load the LoRA before generating.",
    "zh": "生成前先載入 LoRA。",
    "tag": "AI 生圖英文・模型與進階設定"
  },
  {
    "en": "Save this workflow as a preset.",
    "zh": "把這個工作流程存成預設組。",
    "tag": "AI 生圖英文・軟體操作與流程"
  },
  {
    "en": "My GPU is running out of VRAM.",
    "zh": "我的顯卡 VRAM 快不夠了。",
    "tag": "AI 生圖英文・軟體操作與流程"
  },
  {
    "en": "Check the PNG info for the original settings.",
    "zh": "查看 PNG 資訊，確認原始參數設定。",
    "tag": "AI 生圖英文・軟體操作與流程"
  },
  {
    "en": "Queue four image variations.",
    "zh": "排入四張圖片變體。",
    "tag": "AI 生圖英文・軟體操作與流程"
  }
];

phraseBank.push(...adultPhraseBank);
phraseBank.push(...aiImagePhraseBank);


const imageGenStarterWords = [
  {
    "word": "prompt",
    "meaning": "提示詞；你輸入給 AI 的描述",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：prompt = 提示詞；你輸入給 AI 的描述。",
    "example": "Use prompt when working with AI image generation.",
    "exampleZh": "提示詞；你輸入給 AI 的描述",
    "options": [
      "提示詞；你輸入給 AI 的描述",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "positive prompt",
    "meaning": "正向提示詞；想出現的內容",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：positive prompt = 正向提示詞；想出現的內容。",
    "example": "Use positive prompt when working with AI image generation.",
    "exampleZh": "正向提示詞；想出現的內容",
    "options": [
      "正向提示詞；想出現的內容",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "negative prompt",
    "meaning": "反向提示詞；不想出現的內容",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：negative prompt = 反向提示詞；不想出現的內容。",
    "example": "Use negative prompt when working with AI image generation.",
    "exampleZh": "反向提示詞；不想出現的內容",
    "options": [
      "反向提示詞；不想出現的內容",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "tag",
    "meaning": "標籤；常用於動漫或模型提示詞",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：tag = 標籤；常用於動漫或模型提示詞。",
    "example": "Use tag when working with AI image generation.",
    "exampleZh": "標籤；常用於動漫或模型提示詞",
    "options": [
      "標籤；常用於動漫或模型提示詞",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "keyword",
    "meaning": "關鍵字",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：keyword = 關鍵字。",
    "example": "Use keyword when working with AI image generation.",
    "exampleZh": "關鍵字",
    "options": [
      "關鍵字",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "token",
    "meaning": "模型讀取的文字單位",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：token = 模型讀取的文字單位。",
    "example": "Use token when working with AI image generation.",
    "exampleZh": "模型讀取的文字單位",
    "options": [
      "模型讀取的文字單位",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "phrase",
    "meaning": "片語；一組提示詞",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：phrase = 片語；一組提示詞。",
    "example": "Use phrase when working with AI image generation.",
    "exampleZh": "片語；一組提示詞",
    "options": [
      "片語；一組提示詞",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "caption",
    "meaning": "圖片描述文字",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：caption = 圖片描述文字。",
    "example": "Use caption when working with AI image generation.",
    "exampleZh": "圖片描述文字",
    "options": [
      "圖片描述文字",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "prompt engineering",
    "meaning": "提示詞工程；設計提示詞的方法",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：prompt engineering = 提示詞工程；設計提示詞的方法。",
    "example": "Use prompt engineering when working with AI image generation.",
    "exampleZh": "提示詞工程；設計提示詞的方法",
    "options": [
      "提示詞工程；設計提示詞的方法",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "prompt syntax",
    "meaning": "提示詞語法",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：prompt syntax = 提示詞語法。",
    "example": "Use prompt syntax when working with AI image generation.",
    "exampleZh": "提示詞語法",
    "options": [
      "提示詞語法",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "prompt order",
    "meaning": "提示詞順序",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：prompt order = 提示詞順序。",
    "example": "Use prompt order when working with AI image generation.",
    "exampleZh": "提示詞順序",
    "options": [
      "提示詞順序",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "weight",
    "meaning": "權重；提高或降低某個詞的重要性",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：weight = 權重；提高或降低某個詞的重要性。",
    "example": "Use weight when working with AI image generation.",
    "exampleZh": "權重；提高或降低某個詞的重要性",
    "options": [
      "權重；提高或降低某個詞的重要性",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "emphasis",
    "meaning": "加強權重；讓詞更重要",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：emphasis = 加強權重；讓詞更重要。",
    "example": "Use emphasis when working with AI image generation.",
    "exampleZh": "加強權重；讓詞更重要",
    "options": [
      "加強權重；讓詞更重要",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "de-emphasis",
    "meaning": "降低權重；讓詞較不重要",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：de-emphasis = 降低權重；讓詞較不重要。",
    "example": "Use de-emphasis when working with AI image generation.",
    "exampleZh": "降低權重；讓詞較不重要",
    "options": [
      "降低權重；讓詞較不重要",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "parentheses",
    "meaning": "小括號；常用來加強權重",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：parentheses = 小括號；常用來加強權重。",
    "example": "Use parentheses when working with AI image generation.",
    "exampleZh": "小括號；常用來加強權重",
    "options": [
      "小括號；常用來加強權重",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "brackets",
    "meaning": "中括號；常用來降低權重",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：brackets = 中括號；常用來降低權重。",
    "example": "Use brackets when working with AI image generation.",
    "exampleZh": "中括號；常用來降低權重",
    "options": [
      "中括號；常用來降低權重",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "comma",
    "meaning": "逗號；用來分隔提示詞",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：comma = 逗號；用來分隔提示詞。",
    "example": "Use comma when working with AI image generation.",
    "exampleZh": "逗號；用來分隔提示詞",
    "options": [
      "逗號；用來分隔提示詞",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "wildcard",
    "meaning": "萬用詞；隨機替換提示詞用",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：wildcard = 萬用詞；隨機替換提示詞用。",
    "example": "Use wildcard when working with AI image generation.",
    "exampleZh": "萬用詞；隨機替換提示詞用",
    "options": [
      "萬用詞；隨機替換提示詞用",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "template",
    "meaning": "提示詞模板",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：template = 提示詞模板。",
    "example": "Use template when working with AI image generation.",
    "exampleZh": "提示詞模板",
    "options": [
      "提示詞模板",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "preset",
    "meaning": "預設組合",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：preset = 預設組合。",
    "example": "Use preset when working with AI image generation.",
    "exampleZh": "預設組合",
    "options": [
      "預設組合",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "style preset",
    "meaning": "風格預設",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：style preset = 風格預設。",
    "example": "Use style preset when working with AI image generation.",
    "exampleZh": "風格預設",
    "options": [
      "風格預設",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "trigger word",
    "meaning": "觸發詞；啟動 LoRA 或風格的關鍵詞",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：trigger word = 觸發詞；啟動 LoRA 或風格的關鍵詞。",
    "example": "Use trigger word when working with AI image generation.",
    "exampleZh": "觸發詞；啟動 LoRA 或風格的關鍵詞",
    "options": [
      "觸發詞；啟動 LoRA 或風格的關鍵詞",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "prompt mixing",
    "meaning": "混合提示詞",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：prompt mixing = 混合提示詞。",
    "example": "Use prompt mixing when working with AI image generation.",
    "exampleZh": "混合提示詞",
    "options": [
      "混合提示詞",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "prompt scheduling",
    "meaning": "提示詞排程；不同階段使用不同提示詞",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：prompt scheduling = 提示詞排程；不同階段使用不同提示詞。",
    "example": "Use prompt scheduling when working with AI image generation.",
    "exampleZh": "提示詞排程；不同階段使用不同提示詞",
    "options": [
      "提示詞排程；不同階段使用不同提示詞",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "blend",
    "meaning": "混合；把概念或圖像融合",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：blend = 混合；把概念或圖像融合。",
    "example": "Use blend when working with AI image generation.",
    "exampleZh": "混合；把概念或圖像融合",
    "options": [
      "混合；把概念或圖像融合",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "reference prompt",
    "meaning": "參考提示詞；仿照範例寫法",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "✍️",
    "memory": "AI 生圖詞彙：reference prompt = 參考提示詞；仿照範例寫法。",
    "example": "Use reference prompt when working with AI image generation.",
    "exampleZh": "參考提示詞；仿照範例寫法",
    "options": [
      "參考提示詞；仿照範例寫法",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "model",
    "meaning": "模型",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：model = 模型。",
    "example": "Use model when working with AI image generation.",
    "exampleZh": "模型",
    "options": [
      "模型",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "base model",
    "meaning": "基礎模型",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：base model = 基礎模型。",
    "example": "Use base model when working with AI image generation.",
    "exampleZh": "基礎模型",
    "options": [
      "基礎模型",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "checkpoint",
    "meaning": "主模型檔；常見 Stable Diffusion 模型",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：checkpoint = 主模型檔；常見 Stable Diffusion 模型。",
    "example": "Use checkpoint when working with AI image generation.",
    "exampleZh": "主模型檔；常見 Stable Diffusion 模型",
    "options": [
      "主模型檔；常見 Stable Diffusion 模型",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "safetensors",
    "meaning": "常見模型檔格式，較安全",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：safetensors = 常見模型檔格式，較安全。",
    "example": "Use safetensors when working with AI image generation.",
    "exampleZh": "常見模型檔格式，較安全",
    "options": [
      "常見模型檔格式，較安全",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "diffusion model",
    "meaning": "擴散模型",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：diffusion model = 擴散模型。",
    "example": "Use diffusion model when working with AI image generation.",
    "exampleZh": "擴散模型",
    "options": [
      "擴散模型",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "Stable Diffusion",
    "meaning": "穩定擴散；常見開源生圖模型",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：Stable Diffusion = 穩定擴散；常見開源生圖模型。",
    "example": "Use Stable Diffusion when working with AI image generation.",
    "exampleZh": "穩定擴散；常見開源生圖模型",
    "options": [
      "穩定擴散；常見開源生圖模型",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "SDXL",
    "meaning": "Stable Diffusion XL，大尺寸高品質模型",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：SDXL = Stable Diffusion XL，大尺寸高品質模型。",
    "example": "Use SDXL when working with AI image generation.",
    "exampleZh": "Stable Diffusion XL，大尺寸高品質模型",
    "options": [
      "Stable Diffusion XL，大尺寸高品質模型",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "Flux",
    "meaning": "常見新一代圖像生成模型名稱",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：Flux = 常見新一代圖像生成模型名稱。",
    "example": "Use Flux when working with AI image generation.",
    "exampleZh": "常見新一代圖像生成模型名稱",
    "options": [
      "常見新一代圖像生成模型名稱",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "Midjourney",
    "meaning": "常見線上 AI 生圖服務",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：Midjourney = 常見線上 AI 生圖服務。",
    "example": "Use Midjourney when working with AI image generation.",
    "exampleZh": "常見線上 AI 生圖服務",
    "options": [
      "常見線上 AI 生圖服務",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "DALL-E",
    "meaning": "OpenAI 的圖像生成模型名稱",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：DALL-E = OpenAI 的圖像生成模型名稱。",
    "example": "Use DALL-E when working with AI image generation.",
    "exampleZh": "OpenAI 的圖像生成模型名稱",
    "options": [
      "OpenAI 的圖像生成模型名稱",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "LoRA",
    "meaning": "小型風格或角色模型",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：LoRA = 小型風格或角色模型。",
    "example": "Use LoRA when working with AI image generation.",
    "exampleZh": "小型風格或角色模型",
    "options": [
      "小型風格或角色模型",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "LoRA weight",
    "meaning": "LoRA 權重；控制 LoRA 影響強度",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：LoRA weight = LoRA 權重；控制 LoRA 影響強度。",
    "example": "Use LoRA weight when working with AI image generation.",
    "exampleZh": "LoRA 權重；控制 LoRA 影響強度",
    "options": [
      "LoRA 權重；控制 LoRA 影響強度",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "LyCORIS",
    "meaning": "類似 LoRA 的模型擴充格式",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：LyCORIS = 類似 LoRA 的模型擴充格式。",
    "example": "Use LyCORIS when working with AI image generation.",
    "exampleZh": "類似 LoRA 的模型擴充格式",
    "options": [
      "類似 LoRA 的模型擴充格式",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "embedding",
    "meaning": "嵌入模型；文字反轉常用資源",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：embedding = 嵌入模型；文字反轉常用資源。",
    "example": "Use embedding when working with AI image generation.",
    "exampleZh": "嵌入模型；文字反轉常用資源",
    "options": [
      "嵌入模型；文字反轉常用資源",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "textual inversion",
    "meaning": "文字反轉；用小型向量學習概念",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：textual inversion = 文字反轉；用小型向量學習概念。",
    "example": "Use textual inversion when working with AI image generation.",
    "exampleZh": "文字反轉；用小型向量學習概念",
    "options": [
      "文字反轉；用小型向量學習概念",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "hypernetwork",
    "meaning": "舊式風格擴充模型",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：hypernetwork = 舊式風格擴充模型。",
    "example": "Use hypernetwork when working with AI image generation.",
    "exampleZh": "舊式風格擴充模型",
    "options": [
      "舊式風格擴充模型",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "VAE",
    "meaning": "影像編碼解碼模型，影響色彩與細節",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：VAE = 影像編碼解碼模型，影響色彩與細節。",
    "example": "Use VAE when working with AI image generation.",
    "exampleZh": "影像編碼解碼模型，影響色彩與細節",
    "options": [
      "影像編碼解碼模型，影響色彩與細節",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "refiner",
    "meaning": "精修模型；後段改善細節",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：refiner = 精修模型；後段改善細節。",
    "example": "Use refiner when working with AI image generation.",
    "exampleZh": "精修模型；後段改善細節",
    "options": [
      "精修模型；後段改善細節",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "inpaint model",
    "meaning": "局部重繪模型",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：inpaint model = 局部重繪模型。",
    "example": "Use inpaint model when working with AI image generation.",
    "exampleZh": "局部重繪模型",
    "options": [
      "局部重繪模型",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "control model",
    "meaning": "控制模型；搭配 ControlNet 使用",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：control model = 控制模型；搭配 ControlNet 使用。",
    "example": "Use control model when working with AI image generation.",
    "exampleZh": "控制模型；搭配 ControlNet 使用",
    "options": [
      "控制模型；搭配 ControlNet 使用",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "upscale model",
    "meaning": "放大模型",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：upscale model = 放大模型。",
    "example": "Use upscale model when working with AI image generation.",
    "exampleZh": "放大模型",
    "options": [
      "放大模型",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "face model",
    "meaning": "臉部修復或人像相關模型",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：face model = 臉部修復或人像相關模型。",
    "example": "Use face model when working with AI image generation.",
    "exampleZh": "臉部修復或人像相關模型",
    "options": [
      "臉部修復或人像相關模型",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "model merge",
    "meaning": "模型合併",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：model merge = 模型合併。",
    "example": "Use model merge when working with AI image generation.",
    "exampleZh": "模型合併",
    "options": [
      "模型合併",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "training data",
    "meaning": "訓練資料",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：training data = 訓練資料。",
    "example": "Use training data when working with AI image generation.",
    "exampleZh": "訓練資料",
    "options": [
      "訓練資料",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "dataset",
    "meaning": "資料集",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：dataset = 資料集。",
    "example": "Use dataset when working with AI image generation.",
    "exampleZh": "資料集",
    "options": [
      "資料集",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "fine-tuning",
    "meaning": "微調模型",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：fine-tuning = 微調模型。",
    "example": "Use fine-tuning when working with AI image generation.",
    "exampleZh": "微調模型",
    "options": [
      "微調模型",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "overfitting",
    "meaning": "過度擬合；模型太記住訓練圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：overfitting = 過度擬合；模型太記住訓練圖。",
    "example": "Use overfitting when working with AI image generation.",
    "exampleZh": "過度擬合；模型太記住訓練圖",
    "options": [
      "過度擬合；模型太記住訓練圖",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "undertrained",
    "meaning": "訓練不足",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：undertrained = 訓練不足。",
    "example": "Use undertrained when working with AI image generation.",
    "exampleZh": "訓練不足",
    "options": [
      "訓練不足",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "version",
    "meaning": "版本",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：version = 版本。",
    "example": "Use version when working with AI image generation.",
    "exampleZh": "版本",
    "options": [
      "版本",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "license",
    "meaning": "授權；模型使用規則",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧠",
    "memory": "AI 生圖詞彙：license = 授權；模型使用規則。",
    "example": "Use license when working with AI image generation.",
    "exampleZh": "授權；模型使用規則",
    "options": [
      "授權；模型使用規則",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "sampler",
    "meaning": "採樣器；影響出圖方式",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：sampler = 採樣器；影響出圖方式。",
    "example": "Use sampler when working with AI image generation.",
    "exampleZh": "採樣器；影響出圖方式",
    "options": [
      "採樣器；影響出圖方式",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "sampling method",
    "meaning": "採樣方法",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：sampling method = 採樣方法。",
    "example": "Use sampling method when working with AI image generation.",
    "exampleZh": "採樣方法",
    "options": [
      "採樣方法",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "scheduler",
    "meaning": "排程器；控制降噪流程",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：scheduler = 排程器；控制降噪流程。",
    "example": "Use scheduler when working with AI image generation.",
    "exampleZh": "排程器；控制降噪流程",
    "options": [
      "排程器；控制降噪流程",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "steps",
    "meaning": "步數；生成運算次數",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：steps = 步數；生成運算次數。",
    "example": "Use steps when working with AI image generation.",
    "exampleZh": "步數；生成運算次數",
    "options": [
      "步數；生成運算次數",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "CFG scale",
    "meaning": "提示詞遵從強度",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：CFG scale = 提示詞遵從強度。",
    "example": "Use CFG scale when working with AI image generation.",
    "exampleZh": "提示詞遵從強度",
    "options": [
      "提示詞遵從強度",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "guidance scale",
    "meaning": "引導強度；類似 CFG scale",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：guidance scale = 引導強度；類似 CFG scale。",
    "example": "Use guidance scale when working with AI image generation.",
    "exampleZh": "引導強度；類似 CFG scale",
    "options": [
      "引導強度；類似 CFG scale",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "seed",
    "meaning": "種子碼；控制隨機結果",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：seed = 種子碼；控制隨機結果。",
    "example": "Use seed when working with AI image generation.",
    "exampleZh": "種子碼；控制隨機結果",
    "options": [
      "種子碼；控制隨機結果",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "random seed",
    "meaning": "隨機種子",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：random seed = 隨機種子。",
    "example": "Use random seed when working with AI image generation.",
    "exampleZh": "隨機種子",
    "options": [
      "隨機種子",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "fixed seed",
    "meaning": "固定種子；方便重現同一張圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：fixed seed = 固定種子；方便重現同一張圖。",
    "example": "Use fixed seed when working with AI image generation.",
    "exampleZh": "固定種子；方便重現同一張圖",
    "options": [
      "固定種子；方便重現同一張圖",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "batch size",
    "meaning": "同時生成幾張",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：batch size = 同時生成幾張。",
    "example": "Use batch size when working with AI image generation.",
    "exampleZh": "同時生成幾張",
    "options": [
      "同時生成幾張",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "batch count",
    "meaning": "連續生成幾批",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：batch count = 連續生成幾批。",
    "example": "Use batch count when working with AI image generation.",
    "exampleZh": "連續生成幾批",
    "options": [
      "連續生成幾批",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "width",
    "meaning": "寬度",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：width = 寬度。",
    "example": "Use width when working with AI image generation.",
    "exampleZh": "寬度",
    "options": [
      "寬度",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "height",
    "meaning": "高度",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：height = 高度。",
    "example": "Use height when working with AI image generation.",
    "exampleZh": "高度",
    "options": [
      "高度",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "resolution",
    "meaning": "解析度",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：resolution = 解析度。",
    "example": "Use resolution when working with AI image generation.",
    "exampleZh": "解析度",
    "options": [
      "解析度",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "aspect ratio",
    "meaning": "長寬比",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：aspect ratio = 長寬比。",
    "example": "Use aspect ratio when working with AI image generation.",
    "exampleZh": "長寬比",
    "options": [
      "長寬比",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "denoise strength",
    "meaning": "重繪幅度；img2img 常用",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：denoise strength = 重繪幅度；img2img 常用。",
    "example": "Use denoise strength when working with AI image generation.",
    "exampleZh": "重繪幅度；img2img 常用",
    "options": [
      "重繪幅度；img2img 常用",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "noise",
    "meaning": "雜訊",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：noise = 雜訊。",
    "example": "Use noise when working with AI image generation.",
    "exampleZh": "雜訊",
    "options": [
      "雜訊",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "latent space",
    "meaning": "潛空間；模型內部影像空間",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：latent space = 潛空間；模型內部影像空間。",
    "example": "Use latent space when working with AI image generation.",
    "exampleZh": "潛空間；模型內部影像空間",
    "options": [
      "潛空間；模型內部影像空間",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "CLIP skip",
    "meaning": "跳過 CLIP 層數，影響理解風格",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：CLIP skip = 跳過 CLIP 層數，影響理解風格。",
    "example": "Use CLIP skip when working with AI image generation.",
    "exampleZh": "跳過 CLIP 層數，影響理解風格",
    "options": [
      "跳過 CLIP 層數，影響理解風格",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "ETA",
    "meaning": "採樣相關參數",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：ETA = 採樣相關參數。",
    "example": "Use ETA when working with AI image generation.",
    "exampleZh": "採樣相關參數",
    "options": [
      "採樣相關參數",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "tiling",
    "meaning": "無縫拼貼",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：tiling = 無縫拼貼。",
    "example": "Use tiling when working with AI image generation.",
    "exampleZh": "無縫拼貼",
    "options": [
      "無縫拼貼",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "restore faces",
    "meaning": "臉部修復",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：restore faces = 臉部修復。",
    "example": "Use restore faces when working with AI image generation.",
    "exampleZh": "臉部修復",
    "options": [
      "臉部修復",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "variation strength",
    "meaning": "變化強度",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：variation strength = 變化強度。",
    "example": "Use variation strength when working with AI image generation.",
    "exampleZh": "變化強度",
    "options": [
      "變化強度",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "subseed",
    "meaning": "副種子；混合變化用",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：subseed = 副種子；混合變化用。",
    "example": "Use subseed when working with AI image generation.",
    "exampleZh": "副種子；混合變化用",
    "options": [
      "副種子；混合變化用",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "interpolation",
    "meaning": "插值；在兩個結果之間過渡",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：interpolation = 插值；在兩個結果之間過渡。",
    "example": "Use interpolation when working with AI image generation.",
    "exampleZh": "插值；在兩個結果之間過渡",
    "options": [
      "插值；在兩個結果之間過渡",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "highres steps",
    "meaning": "高解析修復步數",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：highres steps = 高解析修復步數。",
    "example": "Use highres steps when working with AI image generation.",
    "exampleZh": "高解析修復步數",
    "options": [
      "高解析修復步數",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "upscale factor",
    "meaning": "放大倍率",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：upscale factor = 放大倍率。",
    "example": "Use upscale factor when working with AI image generation.",
    "exampleZh": "放大倍率",
    "options": [
      "放大倍率",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "tile size",
    "meaning": "分塊大小",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：tile size = 分塊大小。",
    "example": "Use tile size when working with AI image generation.",
    "exampleZh": "分塊大小",
    "options": [
      "分塊大小",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "VRAM",
    "meaning": "顯示卡記憶體",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：VRAM = 顯示卡記憶體。",
    "example": "Use VRAM when working with AI image generation.",
    "exampleZh": "顯示卡記憶體",
    "options": [
      "顯示卡記憶體",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "OOM",
    "meaning": "記憶體不足錯誤",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "⚙️",
    "memory": "AI 生圖詞彙：OOM = 記憶體不足錯誤。",
    "example": "Use OOM when working with AI image generation.",
    "exampleZh": "記憶體不足錯誤",
    "options": [
      "記憶體不足錯誤",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "text-to-image",
    "meaning": "文生圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：text-to-image = 文生圖。",
    "example": "Use text-to-image when working with AI image generation.",
    "exampleZh": "文生圖",
    "options": [
      "文生圖",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "txt2img",
    "meaning": "文生圖功能",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：txt2img = 文生圖功能。",
    "example": "Use txt2img when working with AI image generation.",
    "exampleZh": "文生圖功能",
    "options": [
      "文生圖功能",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "image-to-image",
    "meaning": "圖生圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：image-to-image = 圖生圖。",
    "example": "Use image-to-image when working with AI image generation.",
    "exampleZh": "圖生圖",
    "options": [
      "圖生圖",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "img2img",
    "meaning": "圖生圖功能",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：img2img = 圖生圖功能。",
    "example": "Use img2img when working with AI image generation.",
    "exampleZh": "圖生圖功能",
    "options": [
      "圖生圖功能",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "inpainting",
    "meaning": "局部重繪；修圖某一塊",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：inpainting = 局部重繪；修圖某一塊。",
    "example": "Use inpainting when working with AI image generation.",
    "exampleZh": "局部重繪；修圖某一塊",
    "options": [
      "局部重繪；修圖某一塊",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "outpainting",
    "meaning": "向外補圖；擴張畫面",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：outpainting = 向外補圖；擴張畫面。",
    "example": "Use outpainting when working with AI image generation.",
    "exampleZh": "向外補圖；擴張畫面",
    "options": [
      "向外補圖；擴張畫面",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "Hires fix",
    "meaning": "高解析修復；先小圖再放大精修",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：Hires fix = 高解析修復；先小圖再放大精修。",
    "example": "Use Hires fix when working with AI image generation.",
    "exampleZh": "高解析修復；先小圖再放大精修",
    "options": [
      "高解析修復；先小圖再放大精修",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "upscale",
    "meaning": "放大圖片",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：upscale = 放大圖片。",
    "example": "Use upscale when working with AI image generation.",
    "exampleZh": "放大圖片",
    "options": [
      "放大圖片",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "upscaler",
    "meaning": "放大器；放大模型或演算法",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：upscaler = 放大器；放大模型或演算法。",
    "example": "Use upscaler when working with AI image generation.",
    "exampleZh": "放大器；放大模型或演算法",
    "options": [
      "放大器；放大模型或演算法",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "latent upscale",
    "meaning": "潛空間放大",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：latent upscale = 潛空間放大。",
    "example": "Use latent upscale when working with AI image generation.",
    "exampleZh": "潛空間放大",
    "options": [
      "潛空間放大",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "face restoration",
    "meaning": "臉部修復",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：face restoration = 臉部修復。",
    "example": "Use face restoration when working with AI image generation.",
    "exampleZh": "臉部修復",
    "options": [
      "臉部修復",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "detailer",
    "meaning": "細節修復工具",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：detailer = 細節修復工具。",
    "example": "Use detailer when working with AI image generation.",
    "exampleZh": "細節修復工具",
    "options": [
      "細節修復工具",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "ADetailer",
    "meaning": "自動偵測臉、手等細節重繪工具",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：ADetailer = 自動偵測臉、手等細節重繪工具。",
    "example": "Use ADetailer when working with AI image generation.",
    "exampleZh": "自動偵測臉、手等細節重繪工具",
    "options": [
      "自動偵測臉、手等細節重繪工具",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "mask",
    "meaning": "遮罩；指定修改區域",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：mask = 遮罩；指定修改區域。",
    "example": "Use mask when working with AI image generation.",
    "exampleZh": "遮罩；指定修改區域",
    "options": [
      "遮罩；指定修改區域",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "masked area",
    "meaning": "被遮罩的區域",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：masked area = 被遮罩的區域。",
    "example": "Use masked area when working with AI image generation.",
    "exampleZh": "被遮罩的區域",
    "options": [
      "被遮罩的區域",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "unmasked area",
    "meaning": "未遮罩的區域",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：unmasked area = 未遮罩的區域。",
    "example": "Use unmasked area when working with AI image generation.",
    "exampleZh": "未遮罩的區域",
    "options": [
      "未遮罩的區域",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "resize",
    "meaning": "調整大小",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：resize = 調整大小。",
    "example": "Use resize when working with AI image generation.",
    "exampleZh": "調整大小",
    "options": [
      "調整大小",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "crop",
    "meaning": "裁切",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：crop = 裁切。",
    "example": "Use crop when working with AI image generation.",
    "exampleZh": "裁切",
    "options": [
      "裁切",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "crop and resize",
    "meaning": "裁切並縮放",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：crop and resize = 裁切並縮放。",
    "example": "Use crop and resize when working with AI image generation.",
    "exampleZh": "裁切並縮放",
    "options": [
      "裁切並縮放",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "fill",
    "meaning": "填補",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：fill = 填補。",
    "example": "Use fill when working with AI image generation.",
    "exampleZh": "填補",
    "options": [
      "填補",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "original",
    "meaning": "原圖模式",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：original = 原圖模式。",
    "example": "Use original when working with AI image generation.",
    "exampleZh": "原圖模式",
    "options": [
      "原圖模式",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "sketch",
    "meaning": "草圖模式",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：sketch = 草圖模式。",
    "example": "Use sketch when working with AI image generation.",
    "exampleZh": "草圖模式",
    "options": [
      "草圖模式",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "color sketch",
    "meaning": "彩色草圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：color sketch = 彩色草圖。",
    "example": "Use color sketch when working with AI image generation.",
    "exampleZh": "彩色草圖",
    "options": [
      "彩色草圖",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "interrogate",
    "meaning": "反推提示詞；從圖猜提示詞",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：interrogate = 反推提示詞；從圖猜提示詞。",
    "example": "Use interrogate when working with AI image generation.",
    "exampleZh": "反推提示詞；從圖猜提示詞",
    "options": [
      "反推提示詞；從圖猜提示詞",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "PNG info",
    "meaning": "讀取 PNG 內的生成資訊",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：PNG info = 讀取 PNG 內的生成資訊。",
    "example": "Use PNG info when working with AI image generation.",
    "exampleZh": "讀取 PNG 內的生成資訊",
    "options": [
      "讀取 PNG 內的生成資訊",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "post-processing",
    "meaning": "後製處理",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：post-processing = 後製處理。",
    "example": "Use post-processing when working with AI image generation.",
    "exampleZh": "後製處理",
    "options": [
      "後製處理",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "checkpoint switch",
    "meaning": "切換主模型",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：checkpoint switch = 切換主模型。",
    "example": "Use checkpoint switch when working with AI image generation.",
    "exampleZh": "切換主模型",
    "options": [
      "切換主模型",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "prompt history",
    "meaning": "提示詞歷史",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🖼️",
    "memory": "AI 生圖詞彙：prompt history = 提示詞歷史。",
    "example": "Use prompt history when working with AI image generation.",
    "exampleZh": "提示詞歷史",
    "options": [
      "提示詞歷史",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "ControlNet",
    "meaning": "控制網；用姿勢、線稿、深度控制出圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：ControlNet = 控制網；用姿勢、線稿、深度控制出圖。",
    "example": "Use ControlNet when working with AI image generation.",
    "exampleZh": "控制網；用姿勢、線稿、深度控制出圖",
    "options": [
      "控制網；用姿勢、線稿、深度控制出圖",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "control weight",
    "meaning": "控制權重",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：control weight = 控制權重。",
    "example": "Use control weight when working with AI image generation.",
    "exampleZh": "控制權重",
    "options": [
      "控制權重",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "control mode",
    "meaning": "控制模式",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：control mode = 控制模式。",
    "example": "Use control mode when working with AI image generation.",
    "exampleZh": "控制模式",
    "options": [
      "控制模式",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "preprocessor",
    "meaning": "前處理器；先把參考圖轉成控制圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：preprocessor = 前處理器；先把參考圖轉成控制圖。",
    "example": "Use preprocessor when working with AI image generation.",
    "exampleZh": "前處理器；先把參考圖轉成控制圖",
    "options": [
      "前處理器；先把參考圖轉成控制圖",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "OpenPose",
    "meaning": "姿勢骨架控制",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：OpenPose = 姿勢骨架控制。",
    "example": "Use OpenPose when working with AI image generation.",
    "exampleZh": "姿勢骨架控制",
    "options": [
      "姿勢骨架控制",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "pose",
    "meaning": "姿勢",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：pose = 姿勢。",
    "example": "Use pose when working with AI image generation.",
    "exampleZh": "姿勢",
    "options": [
      "姿勢",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "pose reference",
    "meaning": "姿勢參考圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：pose reference = 姿勢參考圖。",
    "example": "Use pose reference when working with AI image generation.",
    "exampleZh": "姿勢參考圖",
    "options": [
      "姿勢參考圖",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "depth map",
    "meaning": "深度圖；控制遠近空間",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：depth map = 深度圖；控制遠近空間。",
    "example": "Use depth map when working with AI image generation.",
    "exampleZh": "深度圖；控制遠近空間",
    "options": [
      "深度圖；控制遠近空間",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "Canny edge",
    "meaning": "邊緣線控制",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：Canny edge = 邊緣線控制。",
    "example": "Use Canny edge when working with AI image generation.",
    "exampleZh": "邊緣線控制",
    "options": [
      "邊緣線控制",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "lineart",
    "meaning": "線稿控制",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：lineart = 線稿控制。",
    "example": "Use lineart when working with AI image generation.",
    "exampleZh": "線稿控制",
    "options": [
      "線稿控制",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "scribble",
    "meaning": "塗鴉控制",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：scribble = 塗鴉控制。",
    "example": "Use scribble when working with AI image generation.",
    "exampleZh": "塗鴉控制",
    "options": [
      "塗鴉控制",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "segmentation",
    "meaning": "區塊分割控制",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：segmentation = 區塊分割控制。",
    "example": "Use segmentation when working with AI image generation.",
    "exampleZh": "區塊分割控制",
    "options": [
      "區塊分割控制",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "normal map",
    "meaning": "法線圖；控制表面方向",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：normal map = 法線圖；控制表面方向。",
    "example": "Use normal map when working with AI image generation.",
    "exampleZh": "法線圖；控制表面方向",
    "options": [
      "法線圖；控制表面方向",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "tile control",
    "meaning": "分塊細節控制",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：tile control = 分塊細節控制。",
    "example": "Use tile control when working with AI image generation.",
    "exampleZh": "分塊細節控制",
    "options": [
      "分塊細節控制",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "IP-Adapter",
    "meaning": "用參考圖影響角色或風格",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：IP-Adapter = 用參考圖影響角色或風格。",
    "example": "Use IP-Adapter when working with AI image generation.",
    "exampleZh": "用參考圖影響角色或風格",
    "options": [
      "用參考圖影響角色或風格",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "reference image",
    "meaning": "參考圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：reference image = 參考圖。",
    "example": "Use reference image when working with AI image generation.",
    "exampleZh": "參考圖",
    "options": [
      "參考圖",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "image prompt",
    "meaning": "圖片提示；用圖當提示",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：image prompt = 圖片提示；用圖當提示。",
    "example": "Use image prompt when working with AI image generation.",
    "exampleZh": "圖片提示；用圖當提示",
    "options": [
      "圖片提示；用圖當提示",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "style reference",
    "meaning": "風格參考",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：style reference = 風格參考。",
    "example": "Use style reference when working with AI image generation.",
    "exampleZh": "風格參考",
    "options": [
      "風格參考",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "character reference",
    "meaning": "角色參考",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：character reference = 角色參考。",
    "example": "Use character reference when working with AI image generation.",
    "exampleZh": "角色參考",
    "options": [
      "角色參考",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "face reference",
    "meaning": "臉部參考",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：face reference = 臉部參考。",
    "example": "Use face reference when working with AI image generation.",
    "exampleZh": "臉部參考",
    "options": [
      "臉部參考",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "composition reference",
    "meaning": "構圖參考",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：composition reference = 構圖參考。",
    "example": "Use composition reference when working with AI image generation.",
    "exampleZh": "構圖參考",
    "options": [
      "構圖參考",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "strength",
    "meaning": "強度",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：strength = 強度。",
    "example": "Use strength when working with AI image generation.",
    "exampleZh": "強度",
    "options": [
      "強度",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "guidance",
    "meaning": "引導",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：guidance = 引導。",
    "example": "Use guidance when working with AI image generation.",
    "exampleZh": "引導",
    "options": [
      "引導",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "conditioning",
    "meaning": "條件控制",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：conditioning = 條件控制。",
    "example": "Use conditioning when working with AI image generation.",
    "exampleZh": "條件控制",
    "options": [
      "條件控制",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "mask blur",
    "meaning": "遮罩邊緣模糊",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：mask blur = 遮罩邊緣模糊。",
    "example": "Use mask blur when working with AI image generation.",
    "exampleZh": "遮罩邊緣模糊",
    "options": [
      "遮罩邊緣模糊",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "inpaint area",
    "meaning": "重繪範圍",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：inpaint area = 重繪範圍。",
    "example": "Use inpaint area when working with AI image generation.",
    "exampleZh": "重繪範圍",
    "options": [
      "重繪範圍",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "only masked",
    "meaning": "只改遮罩區",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：only masked = 只改遮罩區。",
    "example": "Use only masked when working with AI image generation.",
    "exampleZh": "只改遮罩區",
    "options": [
      "只改遮罩區",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "whole picture",
    "meaning": "整張圖參與重繪",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🕹️",
    "memory": "AI 生圖詞彙：whole picture = 整張圖參與重繪。",
    "example": "Use whole picture when working with AI image generation.",
    "exampleZh": "整張圖參與重繪",
    "options": [
      "整張圖參與重繪",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "composition",
    "meaning": "構圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：composition = 構圖。",
    "example": "Use composition when working with AI image generation.",
    "exampleZh": "構圖",
    "options": [
      "構圖",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "framing",
    "meaning": "取景",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：framing = 取景。",
    "example": "Use framing when working with AI image generation.",
    "exampleZh": "取景",
    "options": [
      "取景",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "rule of thirds",
    "meaning": "三分法構圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：rule of thirds = 三分法構圖。",
    "example": "Use rule of thirds when working with AI image generation.",
    "exampleZh": "三分法構圖",
    "options": [
      "三分法構圖",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "centered composition",
    "meaning": "置中構圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：centered composition = 置中構圖。",
    "example": "Use centered composition when working with AI image generation.",
    "exampleZh": "置中構圖",
    "options": [
      "置中構圖",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "symmetry",
    "meaning": "對稱",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：symmetry = 對稱。",
    "example": "Use symmetry when working with AI image generation.",
    "exampleZh": "對稱",
    "options": [
      "對稱",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "foreground",
    "meaning": "前景",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：foreground = 前景。",
    "example": "Use foreground when working with AI image generation.",
    "exampleZh": "前景",
    "options": [
      "前景",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "midground",
    "meaning": "中景",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：midground = 中景。",
    "example": "Use midground when working with AI image generation.",
    "exampleZh": "中景",
    "options": [
      "中景",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "background",
    "meaning": "背景",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：background = 背景。",
    "example": "Use background when working with AI image generation.",
    "exampleZh": "背景",
    "options": [
      "背景",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "depth of field",
    "meaning": "景深",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：depth of field = 景深。",
    "example": "Use depth of field when working with AI image generation.",
    "exampleZh": "景深",
    "options": [
      "景深",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "bokeh",
    "meaning": "散景",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：bokeh = 散景。",
    "example": "Use bokeh when working with AI image generation.",
    "exampleZh": "散景",
    "options": [
      "散景",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "close-up",
    "meaning": "特寫",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：close-up = 特寫。",
    "example": "Use close-up when working with AI image generation.",
    "exampleZh": "特寫",
    "options": [
      "特寫",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "extreme close-up",
    "meaning": "超近特寫",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：extreme close-up = 超近特寫。",
    "example": "Use extreme close-up when working with AI image generation.",
    "exampleZh": "超近特寫",
    "options": [
      "超近特寫",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "medium shot",
    "meaning": "中景",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：medium shot = 中景。",
    "example": "Use medium shot when working with AI image generation.",
    "exampleZh": "中景",
    "options": [
      "中景",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "full body",
    "meaning": "全身",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：full body = 全身。",
    "example": "Use full body when working with AI image generation.",
    "exampleZh": "全身",
    "options": [
      "全身",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "upper body",
    "meaning": "上半身",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：upper body = 上半身。",
    "example": "Use upper body when working with AI image generation.",
    "exampleZh": "上半身",
    "options": [
      "上半身",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "portrait",
    "meaning": "人像直幅",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：portrait = 人像直幅。",
    "example": "Use portrait when working with AI image generation.",
    "exampleZh": "人像直幅",
    "options": [
      "人像直幅",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "landscape",
    "meaning": "橫幅風景",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：landscape = 橫幅風景。",
    "example": "Use landscape when working with AI image generation.",
    "exampleZh": "橫幅風景",
    "options": [
      "橫幅風景",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "wide shot",
    "meaning": "廣角遠景",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：wide shot = 廣角遠景。",
    "example": "Use wide shot when working with AI image generation.",
    "exampleZh": "廣角遠景",
    "options": [
      "廣角遠景",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "low angle",
    "meaning": "低角度",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：low angle = 低角度。",
    "example": "Use low angle when working with AI image generation.",
    "exampleZh": "低角度",
    "options": [
      "低角度",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "high angle",
    "meaning": "高角度",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：high angle = 高角度。",
    "example": "Use high angle when working with AI image generation.",
    "exampleZh": "高角度",
    "options": [
      "高角度",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "bird’s-eye view",
    "meaning": "俯視角",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：bird’s-eye view = 俯視角。",
    "example": "Use bird’s-eye view when working with AI image generation.",
    "exampleZh": "俯視角",
    "options": [
      "俯視角",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "worm’s-eye view",
    "meaning": "仰視角",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：worm’s-eye view = 仰視角。",
    "example": "Use worm’s-eye view when working with AI image generation.",
    "exampleZh": "仰視角",
    "options": [
      "仰視角",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "side view",
    "meaning": "側面視角",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：side view = 側面視角。",
    "example": "Use side view when working with AI image generation.",
    "exampleZh": "側面視角",
    "options": [
      "側面視角",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "front view",
    "meaning": "正面視角",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：front view = 正面視角。",
    "example": "Use front view when working with AI image generation.",
    "exampleZh": "正面視角",
    "options": [
      "正面視角",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "back view",
    "meaning": "背面視角",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：back view = 背面視角。",
    "example": "Use back view when working with AI image generation.",
    "exampleZh": "背面視角",
    "options": [
      "背面視角",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "three-quarter view",
    "meaning": "四分之三視角",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：three-quarter view = 四分之三視角。",
    "example": "Use three-quarter view when working with AI image generation.",
    "exampleZh": "四分之三視角",
    "options": [
      "四分之三視角",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "camera angle",
    "meaning": "鏡頭角度",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：camera angle = 鏡頭角度。",
    "example": "Use camera angle when working with AI image generation.",
    "exampleZh": "鏡頭角度",
    "options": [
      "鏡頭角度",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "focal length",
    "meaning": "焦距",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：focal length = 焦距。",
    "example": "Use focal length when working with AI image generation.",
    "exampleZh": "焦距",
    "options": [
      "焦距",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "wide-angle lens",
    "meaning": "廣角鏡頭",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：wide-angle lens = 廣角鏡頭。",
    "example": "Use wide-angle lens when working with AI image generation.",
    "exampleZh": "廣角鏡頭",
    "options": [
      "廣角鏡頭",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "telephoto lens",
    "meaning": "望遠鏡頭",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：telephoto lens = 望遠鏡頭。",
    "example": "Use telephoto lens when working with AI image generation.",
    "exampleZh": "望遠鏡頭",
    "options": [
      "望遠鏡頭",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "macro lens",
    "meaning": "微距鏡頭",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：macro lens = 微距鏡頭。",
    "example": "Use macro lens when working with AI image generation.",
    "exampleZh": "微距鏡頭",
    "options": [
      "微距鏡頭",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "cinematic shot",
    "meaning": "電影感鏡頭",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "📸",
    "memory": "AI 生圖詞彙：cinematic shot = 電影感鏡頭。",
    "example": "Use cinematic shot when working with AI image generation.",
    "exampleZh": "電影感鏡頭",
    "options": [
      "電影感鏡頭",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "lighting",
    "meaning": "光線",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：lighting = 光線。",
    "example": "Use lighting when working with AI image generation.",
    "exampleZh": "光線",
    "options": [
      "光線",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "soft lighting",
    "meaning": "柔光",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：soft lighting = 柔光。",
    "example": "Use soft lighting when working with AI image generation.",
    "exampleZh": "柔光",
    "options": [
      "柔光",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "hard lighting",
    "meaning": "硬光",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：hard lighting = 硬光。",
    "example": "Use hard lighting when working with AI image generation.",
    "exampleZh": "硬光",
    "options": [
      "硬光",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "backlight",
    "meaning": "背光",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：backlight = 背光。",
    "example": "Use backlight when working with AI image generation.",
    "exampleZh": "背光",
    "options": [
      "背光",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "rim light",
    "meaning": "輪廓光",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：rim light = 輪廓光。",
    "example": "Use rim light when working with AI image generation.",
    "exampleZh": "輪廓光",
    "options": [
      "輪廓光",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "side lighting",
    "meaning": "側光",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：side lighting = 側光。",
    "example": "Use side lighting when working with AI image generation.",
    "exampleZh": "側光",
    "options": [
      "側光",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "studio lighting",
    "meaning": "棚拍燈光",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：studio lighting = 棚拍燈光。",
    "example": "Use studio lighting when working with AI image generation.",
    "exampleZh": "棚拍燈光",
    "options": [
      "棚拍燈光",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "natural light",
    "meaning": "自然光",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：natural light = 自然光。",
    "example": "Use natural light when working with AI image generation.",
    "exampleZh": "自然光",
    "options": [
      "自然光",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "golden hour",
    "meaning": "黃金時刻光線",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：golden hour = 黃金時刻光線。",
    "example": "Use golden hour when working with AI image generation.",
    "exampleZh": "黃金時刻光線",
    "options": [
      "黃金時刻光線",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "volumetric lighting",
    "meaning": "體積光",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：volumetric lighting = 體積光。",
    "example": "Use volumetric lighting when working with AI image generation.",
    "exampleZh": "體積光",
    "options": [
      "體積光",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "dramatic lighting",
    "meaning": "戲劇化光線",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：dramatic lighting = 戲劇化光線。",
    "example": "Use dramatic lighting when working with AI image generation.",
    "exampleZh": "戲劇化光線",
    "options": [
      "戲劇化光線",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "cinematic lighting",
    "meaning": "電影感光線",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：cinematic lighting = 電影感光線。",
    "example": "Use cinematic lighting when working with AI image generation.",
    "exampleZh": "電影感光線",
    "options": [
      "電影感光線",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "color grading",
    "meaning": "調色",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：color grading = 調色。",
    "example": "Use color grading when working with AI image generation.",
    "exampleZh": "調色",
    "options": [
      "調色",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "warm tone",
    "meaning": "暖色調",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：warm tone = 暖色調。",
    "example": "Use warm tone when working with AI image generation.",
    "exampleZh": "暖色調",
    "options": [
      "暖色調",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "cool tone",
    "meaning": "冷色調",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：cool tone = 冷色調。",
    "example": "Use cool tone when working with AI image generation.",
    "exampleZh": "冷色調",
    "options": [
      "冷色調",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "contrast",
    "meaning": "對比",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：contrast = 對比。",
    "example": "Use contrast when working with AI image generation.",
    "exampleZh": "對比",
    "options": [
      "對比",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "high contrast",
    "meaning": "高對比",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：high contrast = 高對比。",
    "example": "Use high contrast when working with AI image generation.",
    "exampleZh": "高對比",
    "options": [
      "高對比",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "low contrast",
    "meaning": "低對比",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：low contrast = 低對比。",
    "example": "Use low contrast when working with AI image generation.",
    "exampleZh": "低對比",
    "options": [
      "低對比",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "saturation",
    "meaning": "飽和度",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：saturation = 飽和度。",
    "example": "Use saturation when working with AI image generation.",
    "exampleZh": "飽和度",
    "options": [
      "飽和度",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "vibrant colors",
    "meaning": "鮮豔色彩",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：vibrant colors = 鮮豔色彩。",
    "example": "Use vibrant colors when working with AI image generation.",
    "exampleZh": "鮮豔色彩",
    "options": [
      "鮮豔色彩",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "monochrome",
    "meaning": "單色",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：monochrome = 單色。",
    "example": "Use monochrome when working with AI image generation.",
    "exampleZh": "單色",
    "options": [
      "單色",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "black and white",
    "meaning": "黑白",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：black and white = 黑白。",
    "example": "Use black and white when working with AI image generation.",
    "exampleZh": "黑白",
    "options": [
      "黑白",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "photorealistic",
    "meaning": "照片寫實",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：photorealistic = 照片寫實。",
    "example": "Use photorealistic when working with AI image generation.",
    "exampleZh": "照片寫實",
    "options": [
      "照片寫實",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "realistic",
    "meaning": "寫實",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：realistic = 寫實。",
    "example": "Use realistic when working with AI image generation.",
    "exampleZh": "寫實",
    "options": [
      "寫實",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "anime style",
    "meaning": "動漫風格",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：anime style = 動漫風格。",
    "example": "Use anime style when working with AI image generation.",
    "exampleZh": "動漫風格",
    "options": [
      "動漫風格",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "manga style",
    "meaning": "漫畫風格",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：manga style = 漫畫風格。",
    "example": "Use manga style when working with AI image generation.",
    "exampleZh": "漫畫風格",
    "options": [
      "漫畫風格",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "3D render",
    "meaning": "3D 渲染",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：3D render = 3D 渲染。",
    "example": "Use 3D render when working with AI image generation.",
    "exampleZh": "3D 渲染",
    "options": [
      "3D 渲染",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "CGI",
    "meaning": "電腦動畫感",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：CGI = 電腦動畫感。",
    "example": "Use CGI when working with AI image generation.",
    "exampleZh": "電腦動畫感",
    "options": [
      "電腦動畫感",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "oil painting",
    "meaning": "油畫",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：oil painting = 油畫。",
    "example": "Use oil painting when working with AI image generation.",
    "exampleZh": "油畫",
    "options": [
      "油畫",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "watercolor",
    "meaning": "水彩",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：watercolor = 水彩。",
    "example": "Use watercolor when working with AI image generation.",
    "exampleZh": "水彩",
    "options": [
      "水彩",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "sketch style",
    "meaning": "素描風格",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：sketch style = 素描風格。",
    "example": "Use sketch style when working with AI image generation.",
    "exampleZh": "素描風格",
    "options": [
      "素描風格",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "pixel art",
    "meaning": "像素風",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：pixel art = 像素風。",
    "example": "Use pixel art when working with AI image generation.",
    "exampleZh": "像素風",
    "options": [
      "像素風",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "cyberpunk",
    "meaning": "賽博龐克",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：cyberpunk = 賽博龐克。",
    "example": "Use cyberpunk when working with AI image generation.",
    "exampleZh": "賽博龐克",
    "options": [
      "賽博龐克",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "fantasy art",
    "meaning": "奇幻風格",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：fantasy art = 奇幻風格。",
    "example": "Use fantasy art when working with AI image generation.",
    "exampleZh": "奇幻風格",
    "options": [
      "奇幻風格",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "minimalist",
    "meaning": "極簡風格",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "💡",
    "memory": "AI 生圖詞彙：minimalist = 極簡風格。",
    "example": "Use minimalist when working with AI image generation.",
    "exampleZh": "極簡風格",
    "options": [
      "極簡風格",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "character",
    "meaning": "角色",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：character = 角色。",
    "example": "Use character when working with AI image generation.",
    "exampleZh": "角色",
    "options": [
      "角色",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "subject",
    "meaning": "主體",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：subject = 主體。",
    "example": "Use subject when working with AI image generation.",
    "exampleZh": "主體",
    "options": [
      "主體",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "face",
    "meaning": "臉",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：face = 臉。",
    "example": "Use face when working with AI image generation.",
    "exampleZh": "臉",
    "options": [
      "臉",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "eyes",
    "meaning": "眼睛",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：eyes = 眼睛。",
    "example": "Use eyes when working with AI image generation.",
    "exampleZh": "眼睛",
    "options": [
      "眼睛",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "hair",
    "meaning": "頭髮",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：hair = 頭髮。",
    "example": "Use hair when working with AI image generation.",
    "exampleZh": "頭髮",
    "options": [
      "頭髮",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "hairstyle",
    "meaning": "髮型",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：hairstyle = 髮型。",
    "example": "Use hairstyle when working with AI image generation.",
    "exampleZh": "髮型",
    "options": [
      "髮型",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "bangs",
    "meaning": "瀏海",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：bangs = 瀏海。",
    "example": "Use bangs when working with AI image generation.",
    "exampleZh": "瀏海",
    "options": [
      "瀏海",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "skin",
    "meaning": "皮膚",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：skin = 皮膚。",
    "example": "Use skin when working with AI image generation.",
    "exampleZh": "皮膚",
    "options": [
      "皮膚",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "skin texture",
    "meaning": "皮膚紋理",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：skin texture = 皮膚紋理。",
    "example": "Use skin texture when working with AI image generation.",
    "exampleZh": "皮膚紋理",
    "options": [
      "皮膚紋理",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "expression",
    "meaning": "表情",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：expression = 表情。",
    "example": "Use expression when working with AI image generation.",
    "exampleZh": "表情",
    "options": [
      "表情",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "smile",
    "meaning": "微笑",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：smile = 微笑。",
    "example": "Use smile when working with AI image generation.",
    "exampleZh": "微笑",
    "options": [
      "微笑",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "serious expression",
    "meaning": "嚴肅表情",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：serious expression = 嚴肅表情。",
    "example": "Use serious expression when working with AI image generation.",
    "exampleZh": "嚴肅表情",
    "options": [
      "嚴肅表情",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "looking at viewer",
    "meaning": "看向觀眾",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：looking at viewer = 看向觀眾。",
    "example": "Use looking at viewer when working with AI image generation.",
    "exampleZh": "看向觀眾",
    "options": [
      "看向觀眾",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "looking away",
    "meaning": "看向別處",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：looking away = 看向別處。",
    "example": "Use looking away when working with AI image generation.",
    "exampleZh": "看向別處",
    "options": [
      "看向別處",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "side profile",
    "meaning": "側臉",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：side profile = 側臉。",
    "example": "Use side profile when working with AI image generation.",
    "exampleZh": "側臉",
    "options": [
      "側臉",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "head tilt",
    "meaning": "歪頭",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：head tilt = 歪頭。",
    "example": "Use head tilt when working with AI image generation.",
    "exampleZh": "歪頭",
    "options": [
      "歪頭",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "makeup",
    "meaning": "妝容",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：makeup = 妝容。",
    "example": "Use makeup when working with AI image generation.",
    "exampleZh": "妝容",
    "options": [
      "妝容",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "outfit",
    "meaning": "服裝",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：outfit = 服裝。",
    "example": "Use outfit when working with AI image generation.",
    "exampleZh": "服裝",
    "options": [
      "服裝",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "dress",
    "meaning": "洋裝",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：dress = 洋裝。",
    "example": "Use dress when working with AI image generation.",
    "exampleZh": "洋裝",
    "options": [
      "洋裝",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "jacket",
    "meaning": "外套",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：jacket = 外套。",
    "example": "Use jacket when working with AI image generation.",
    "exampleZh": "外套",
    "options": [
      "外套",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "uniform",
    "meaning": "制服",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：uniform = 制服。",
    "example": "Use uniform when working with AI image generation.",
    "exampleZh": "制服",
    "options": [
      "制服",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "armor",
    "meaning": "盔甲",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：armor = 盔甲。",
    "example": "Use armor when working with AI image generation.",
    "exampleZh": "盔甲",
    "options": [
      "盔甲",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "accessories",
    "meaning": "配件",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：accessories = 配件。",
    "example": "Use accessories when working with AI image generation.",
    "exampleZh": "配件",
    "options": [
      "配件",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "glasses",
    "meaning": "眼鏡",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：glasses = 眼鏡。",
    "example": "Use glasses when working with AI image generation.",
    "exampleZh": "眼鏡",
    "options": [
      "眼鏡",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "hands",
    "meaning": "手",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：hands = 手。",
    "example": "Use hands when working with AI image generation.",
    "exampleZh": "手",
    "options": [
      "手",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "hand pose",
    "meaning": "手部姿勢",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：hand pose = 手部姿勢。",
    "example": "Use hand pose when working with AI image generation.",
    "exampleZh": "手部姿勢",
    "options": [
      "手部姿勢",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "standing",
    "meaning": "站著",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：standing = 站著。",
    "example": "Use standing when working with AI image generation.",
    "exampleZh": "站著",
    "options": [
      "站著",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "sitting",
    "meaning": "坐著",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：sitting = 坐著。",
    "example": "Use sitting when working with AI image generation.",
    "exampleZh": "坐著",
    "options": [
      "坐著",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "walking",
    "meaning": "走路",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：walking = 走路。",
    "example": "Use walking when working with AI image generation.",
    "exampleZh": "走路",
    "options": [
      "走路",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "dynamic pose",
    "meaning": "動態姿勢",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：dynamic pose = 動態姿勢。",
    "example": "Use dynamic pose when working with AI image generation.",
    "exampleZh": "動態姿勢",
    "options": [
      "動態姿勢",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "original character",
    "meaning": "原創角色",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：original character = 原創角色。",
    "example": "Use original character when working with AI image generation.",
    "exampleZh": "原創角色",
    "options": [
      "原創角色",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "character sheet",
    "meaning": "角色設定圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🙂",
    "memory": "AI 生圖詞彙：character sheet = 角色設定圖。",
    "example": "Use character sheet when working with AI image generation.",
    "exampleZh": "角色設定圖",
    "options": [
      "角色設定圖",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "bad anatomy",
    "meaning": "錯誤人體結構",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：bad anatomy = 錯誤人體結構。",
    "example": "Use bad anatomy when working with AI image generation.",
    "exampleZh": "錯誤人體結構",
    "options": [
      "錯誤人體結構",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "bad hands",
    "meaning": "手畫壞",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：bad hands = 手畫壞。",
    "example": "Use bad hands when working with AI image generation.",
    "exampleZh": "手畫壞",
    "options": [
      "手畫壞",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "extra fingers",
    "meaning": "多手指",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：extra fingers = 多手指。",
    "example": "Use extra fingers when working with AI image generation.",
    "exampleZh": "多手指",
    "options": [
      "多手指",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "missing fingers",
    "meaning": "少手指",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：missing fingers = 少手指。",
    "example": "Use missing fingers when working with AI image generation.",
    "exampleZh": "少手指",
    "options": [
      "少手指",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "fused fingers",
    "meaning": "手指黏在一起",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：fused fingers = 手指黏在一起。",
    "example": "Use fused fingers when working with AI image generation.",
    "exampleZh": "手指黏在一起",
    "options": [
      "手指黏在一起",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "deformed",
    "meaning": "變形",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：deformed = 變形。",
    "example": "Use deformed when working with AI image generation.",
    "exampleZh": "變形",
    "options": [
      "變形",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "mutated",
    "meaning": "突變畸形",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：mutated = 突變畸形。",
    "example": "Use mutated when working with AI image generation.",
    "exampleZh": "突變畸形",
    "options": [
      "突變畸形",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "duplicate",
    "meaning": "重複人物或物件",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：duplicate = 重複人物或物件。",
    "example": "Use duplicate when working with AI image generation.",
    "exampleZh": "重複人物或物件",
    "options": [
      "重複人物或物件",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "blurry",
    "meaning": "模糊",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：blurry = 模糊。",
    "example": "Use blurry when working with AI image generation.",
    "exampleZh": "模糊",
    "options": [
      "模糊",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "out of focus",
    "meaning": "失焦",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：out of focus = 失焦。",
    "example": "Use out of focus when working with AI image generation.",
    "exampleZh": "失焦",
    "options": [
      "失焦",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "low quality",
    "meaning": "低品質",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：low quality = 低品質。",
    "example": "Use low quality when working with AI image generation.",
    "exampleZh": "低品質",
    "options": [
      "低品質",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "worst quality",
    "meaning": "最差品質",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：worst quality = 最差品質。",
    "example": "Use worst quality when working with AI image generation.",
    "exampleZh": "最差品質",
    "options": [
      "最差品質",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "jpeg artifacts",
    "meaning": "JPEG 壓縮雜訊",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：jpeg artifacts = JPEG 壓縮雜訊。",
    "example": "Use jpeg artifacts when working with AI image generation.",
    "exampleZh": "JPEG 壓縮雜訊",
    "options": [
      "JPEG 壓縮雜訊",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "noise artifacts",
    "meaning": "雜訊瑕疵",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：noise artifacts = 雜訊瑕疵。",
    "example": "Use noise artifacts when working with AI image generation.",
    "exampleZh": "雜訊瑕疵",
    "options": [
      "雜訊瑕疵",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "watermark",
    "meaning": "浮水印",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：watermark = 浮水印。",
    "example": "Use watermark when working with AI image generation.",
    "exampleZh": "浮水印",
    "options": [
      "浮水印",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "signature",
    "meaning": "簽名",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：signature = 簽名。",
    "example": "Use signature when working with AI image generation.",
    "exampleZh": "簽名",
    "options": [
      "簽名",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "text",
    "meaning": "文字",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：text = 文字。",
    "example": "Use text when working with AI image generation.",
    "exampleZh": "文字",
    "options": [
      "文字",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "logo",
    "meaning": "商標",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：logo = 商標。",
    "example": "Use logo when working with AI image generation.",
    "exampleZh": "商標",
    "options": [
      "商標",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "cropped",
    "meaning": "被裁切",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：cropped = 被裁切。",
    "example": "Use cropped when working with AI image generation.",
    "exampleZh": "被裁切",
    "options": [
      "被裁切",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "out of frame",
    "meaning": "超出畫面",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：out of frame = 超出畫面。",
    "example": "Use out of frame when working with AI image generation.",
    "exampleZh": "超出畫面",
    "options": [
      "超出畫面",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "overexposed",
    "meaning": "過曝",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：overexposed = 過曝。",
    "example": "Use overexposed when working with AI image generation.",
    "exampleZh": "過曝",
    "options": [
      "過曝",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "underexposed",
    "meaning": "曝光不足",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：underexposed = 曝光不足。",
    "example": "Use underexposed when working with AI image generation.",
    "exampleZh": "曝光不足",
    "options": [
      "曝光不足",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "color banding",
    "meaning": "色帶",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：color banding = 色帶。",
    "example": "Use color banding when working with AI image generation.",
    "exampleZh": "色帶",
    "options": [
      "色帶",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "fix",
    "meaning": "修正",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：fix = 修正。",
    "example": "Use fix when working with AI image generation.",
    "exampleZh": "修正",
    "options": [
      "修正",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "retouch",
    "meaning": "修圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：retouch = 修圖。",
    "example": "Use retouch when working with AI image generation.",
    "exampleZh": "修圖",
    "options": [
      "修圖",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "cleanup",
    "meaning": "清理瑕疵",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：cleanup = 清理瑕疵。",
    "example": "Use cleanup when working with AI image generation.",
    "exampleZh": "清理瑕疵",
    "options": [
      "清理瑕疵",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "redraw",
    "meaning": "重畫",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：redraw = 重畫。",
    "example": "Use redraw when working with AI image generation.",
    "exampleZh": "重畫",
    "options": [
      "重畫",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "regenerate",
    "meaning": "重新生成",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：regenerate = 重新生成。",
    "example": "Use regenerate when working with AI image generation.",
    "exampleZh": "重新生成",
    "options": [
      "重新生成",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "variation",
    "meaning": "變體",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：variation = 變體。",
    "example": "Use variation when working with AI image generation.",
    "exampleZh": "變體",
    "options": [
      "變體",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "artifact",
    "meaning": "瑕疵；生成錯誤",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🧯",
    "memory": "AI 生圖詞彙：artifact = 瑕疵；生成錯誤。",
    "example": "Use artifact when working with AI image generation.",
    "exampleZh": "瑕疵；生成錯誤",
    "options": [
      "瑕疵；生成錯誤",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "WebUI",
    "meaning": "網頁介面；常指 Stable Diffusion WebUI",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：WebUI = 網頁介面；常指 Stable Diffusion WebUI。",
    "example": "Use WebUI when working with AI image generation.",
    "exampleZh": "網頁介面；常指 Stable Diffusion WebUI",
    "options": [
      "網頁介面；常指 Stable Diffusion WebUI",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "AUTOMATIC1111",
    "meaning": "常見 Stable Diffusion WebUI 專案",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：AUTOMATIC1111 = 常見 Stable Diffusion WebUI 專案。",
    "example": "Use AUTOMATIC1111 when working with AI image generation.",
    "exampleZh": "常見 Stable Diffusion WebUI 專案",
    "options": [
      "常見 Stable Diffusion WebUI 專案",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "Forge",
    "meaning": "Stable Diffusion WebUI 分支之一",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：Forge = Stable Diffusion WebUI 分支之一。",
    "example": "Use Forge when working with AI image generation.",
    "exampleZh": "Stable Diffusion WebUI 分支之一",
    "options": [
      "Stable Diffusion WebUI 分支之一",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "ComfyUI",
    "meaning": "節點式 AI 生圖軟體",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：ComfyUI = 節點式 AI 生圖軟體。",
    "example": "Use ComfyUI when working with AI image generation.",
    "exampleZh": "節點式 AI 生圖軟體",
    "options": [
      "節點式 AI 生圖軟體",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "Fooocus",
    "meaning": "簡化版 AI 生圖介面",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：Fooocus = 簡化版 AI 生圖介面。",
    "example": "Use Fooocus when working with AI image generation.",
    "exampleZh": "簡化版 AI 生圖介面",
    "options": [
      "簡化版 AI 生圖介面",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "node",
    "meaning": "節點；ComfyUI 的功能方塊",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：node = 節點；ComfyUI 的功能方塊。",
    "example": "Use node when working with AI image generation.",
    "exampleZh": "節點；ComfyUI 的功能方塊",
    "options": [
      "節點；ComfyUI 的功能方塊",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "workflow",
    "meaning": "工作流",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：workflow = 工作流。",
    "example": "Use workflow when working with AI image generation.",
    "exampleZh": "工作流",
    "options": [
      "工作流",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "graph",
    "meaning": "節點圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：graph = 節點圖。",
    "example": "Use graph when working with AI image generation.",
    "exampleZh": "節點圖",
    "options": [
      "節點圖",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "queue prompt",
    "meaning": "排隊執行提示詞",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：queue prompt = 排隊執行提示詞。",
    "example": "Use queue prompt when working with AI image generation.",
    "exampleZh": "排隊執行提示詞",
    "options": [
      "排隊執行提示詞",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "generate button",
    "meaning": "生成按鈕",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：generate button = 生成按鈕。",
    "example": "Use generate button when working with AI image generation.",
    "exampleZh": "生成按鈕",
    "options": [
      "生成按鈕",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "progress bar",
    "meaning": "進度條",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：progress bar = 進度條。",
    "example": "Use progress bar when working with AI image generation.",
    "exampleZh": "進度條",
    "options": [
      "進度條",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "output folder",
    "meaning": "輸出資料夾",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：output folder = 輸出資料夾。",
    "example": "Use output folder when working with AI image generation.",
    "exampleZh": "輸出資料夾",
    "options": [
      "輸出資料夾",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "history",
    "meaning": "歷史紀錄",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：history = 歷史紀錄。",
    "example": "Use history when working with AI image generation.",
    "exampleZh": "歷史紀錄",
    "options": [
      "歷史紀錄",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "extension",
    "meaning": "擴充套件",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：extension = 擴充套件。",
    "example": "Use extension when working with AI image generation.",
    "exampleZh": "擴充套件",
    "options": [
      "擴充套件",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "plugin",
    "meaning": "外掛",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：plugin = 外掛。",
    "example": "Use plugin when working with AI image generation.",
    "exampleZh": "外掛",
    "options": [
      "外掛",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "script",
    "meaning": "腳本",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：script = 腳本。",
    "example": "Use script when working with AI image generation.",
    "exampleZh": "腳本",
    "options": [
      "腳本",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "settings",
    "meaning": "設定",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：settings = 設定。",
    "example": "Use settings when working with AI image generation.",
    "exampleZh": "設定",
    "options": [
      "設定",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "parameters",
    "meaning": "參數",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：parameters = 參數。",
    "example": "Use parameters when working with AI image generation.",
    "exampleZh": "參數",
    "options": [
      "參數",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "metadata",
    "meaning": "中繼資料；圖片內含生成資訊",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：metadata = 中繼資料；圖片內含生成資訊。",
    "example": "Use metadata when working with AI image generation.",
    "exampleZh": "中繼資料；圖片內含生成資訊",
    "options": [
      "中繼資料；圖片內含生成資訊",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "model browser",
    "meaning": "模型瀏覽器",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：model browser = 模型瀏覽器。",
    "example": "Use model browser when working with AI image generation.",
    "exampleZh": "模型瀏覽器",
    "options": [
      "模型瀏覽器",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "LoRA browser",
    "meaning": "LoRA 瀏覽器",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：LoRA browser = LoRA 瀏覽器。",
    "example": "Use LoRA browser when working with AI image generation.",
    "exampleZh": "LoRA 瀏覽器",
    "options": [
      "LoRA 瀏覽器",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "preview image",
    "meaning": "預覽圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：preview image = 預覽圖。",
    "example": "Use preview image when working with AI image generation.",
    "exampleZh": "預覽圖",
    "options": [
      "預覽圖",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "thumbnail",
    "meaning": "縮圖",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：thumbnail = 縮圖。",
    "example": "Use thumbnail when working with AI image generation.",
    "exampleZh": "縮圖",
    "options": [
      "縮圖",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "download",
    "meaning": "下載",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：download = 下載。",
    "example": "Use download when working with AI image generation.",
    "exampleZh": "下載",
    "options": [
      "下載",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "install",
    "meaning": "安裝",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：install = 安裝。",
    "example": "Use install when working with AI image generation.",
    "exampleZh": "安裝",
    "options": [
      "安裝",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "update",
    "meaning": "更新",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：update = 更新。",
    "example": "Use update when working with AI image generation.",
    "exampleZh": "更新",
    "options": [
      "更新",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "dependency",
    "meaning": "相依套件",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：dependency = 相依套件。",
    "example": "Use dependency when working with AI image generation.",
    "exampleZh": "相依套件",
    "options": [
      "相依套件",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "Python environment",
    "meaning": "Python 環境",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：Python environment = Python 環境。",
    "example": "Use Python environment when working with AI image generation.",
    "exampleZh": "Python 環境",
    "options": [
      "Python 環境",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "CUDA",
    "meaning": "NVIDIA 顯卡運算平台",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：CUDA = NVIDIA 顯卡運算平台。",
    "example": "Use CUDA when working with AI image generation.",
    "exampleZh": "NVIDIA 顯卡運算平台",
    "options": [
      "NVIDIA 顯卡運算平台",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "driver",
    "meaning": "驅動程式",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：driver = 驅動程式。",
    "example": "Use driver when working with AI image generation.",
    "exampleZh": "驅動程式",
    "options": [
      "驅動程式",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "command line",
    "meaning": "命令列",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：command line = 命令列。",
    "example": "Use command line when working with AI image generation.",
    "exampleZh": "命令列",
    "options": [
      "命令列",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  },
  {
    "word": "launch arguments",
    "meaning": "啟動參數",
    "phonetic": "",
    "level": "AI",
    "category": "AI 圖像生成",
    "picture": "🛠️",
    "memory": "AI 生圖詞彙：launch arguments = 啟動參數。",
    "example": "Use launch arguments when working with AI image generation.",
    "exampleZh": "啟動參數",
    "options": [
      "啟動參數",
      "提示詞",
      "模型參數",
      "生成軟體"
    ]
  }
];
starterWords.push(...imageGenStarterWords);

const imageGenPhraseBank = [
  {
    "en": "I want to generate an image from text.",
    "zh": "我想用文字生成一張圖片。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Write a clear prompt for the subject, style, and lighting.",
    "zh": "把主體、風格、光線寫清楚。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Put unwanted problems in the negative prompt.",
    "zh": "把不想要的問題放在反向提示詞。",
    "tag": "AI圖像生成"
  },
  {
    "en": "This LoRA needs a trigger word.",
    "zh": "這個 LoRA 需要觸發詞。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Lower the LoRA weight if the image looks too strong.",
    "zh": "如果畫面效果太重，就降低 LoRA 權重。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Try a different checkpoint for a different style.",
    "zh": "換不同主模型試試不同風格。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Use a fixed seed to reproduce the result.",
    "zh": "使用固定種子碼來重現結果。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Increase the steps for more detail, but it will be slower.",
    "zh": "增加步數可以更細，但會更慢。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Lower the CFG scale if the image looks overcooked.",
    "zh": "如果圖看起來太硬，就降低 CFG。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Change the aspect ratio for portrait or landscape images.",
    "zh": "改長寬比來做直幅或橫幅圖片。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Use txt2img for a new image.",
    "zh": "用文生圖做新圖片。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Use img2img to keep the original composition.",
    "zh": "用圖生圖保留原本構圖。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Use inpainting to fix only the selected area.",
    "zh": "用局部重繪只修選取區域。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Use outpainting to extend the image.",
    "zh": "用向外補圖擴張畫面。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Turn on Hires fix for a sharper final image.",
    "zh": "開啟高解析修復讓成圖更清楚。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Use ControlNet to control the pose.",
    "zh": "用 ControlNet 控制姿勢。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Use a depth map to keep the 3D structure.",
    "zh": "用深度圖保留立體結構。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Use a reference image for the character face.",
    "zh": "用參考圖固定角色臉。",
    "tag": "AI圖像生成"
  },
  {
    "en": "The mask should cover the area you want to repaint.",
    "zh": "遮罩要蓋住你想重繪的區域。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Make it a close-up portrait with soft lighting.",
    "zh": "做成柔光近距離人像。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Use a low angle to make the character look powerful.",
    "zh": "用低角度讓角色看起來更有氣勢。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Add depth of field and bokeh in the background.",
    "zh": "加入景深和背景散景。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Use cinematic lighting and warm color grading.",
    "zh": "使用電影感光線和暖色調。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Make it photorealistic, not anime style.",
    "zh": "做成照片寫實，不要動漫風。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Try watercolor style for a softer look.",
    "zh": "試試水彩風格，畫面會更柔和。",
    "tag": "AI圖像生成"
  },
  {
    "en": "The hands need to be fixed.",
    "zh": "手需要修正。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Make the character look at the viewer.",
    "zh": "讓角色看向觀眾。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Change the outfit but keep the same face.",
    "zh": "換服裝，但保留同一張臉。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Add bad hands and extra fingers to the negative prompt.",
    "zh": "把爛手和多手指加進反向提示詞。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Remove the watermark and text from the image.",
    "zh": "移除圖片中的浮水印和文字。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Regenerate it with a different seed.",
    "zh": "換一個種子碼重新生成。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Open the PNG info to check the original parameters.",
    "zh": "打開 PNG 資訊查看原始參數。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Queue the prompt in ComfyUI.",
    "zh": "在 ComfyUI 裡把提示詞加入佇列。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Install the extension and restart the WebUI.",
    "zh": "安裝擴充套件後重啟 WebUI。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Your VRAM is not enough for this resolution.",
    "zh": "你的顯示卡記憶體不夠跑這個解析度。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Save the workflow so you can reuse it later.",
    "zh": "儲存工作流，以後可以重複使用。",
    "tag": "AI圖像生成"
  },
  {
    "en": "The image is blurry, so increase sharpness or use an upscaler.",
    "zh": "圖片太模糊，可以增加銳利度或使用放大器。",
    "tag": "AI圖像生成"
  },
  {
    "en": "Use the same seed and change only the prompt.",
    "zh": "使用同一個種子碼，只改提示詞。",
    "tag": "AI圖像生成"
  },
  {
    "en": "The model does not understand this prompt well.",
    "zh": "模型不太理解這個提示詞。",
    "tag": "AI圖像生成"
  },
  {
    "en": "This style preset makes the image more cinematic.",
    "zh": "這個風格預設會讓圖片更有電影感。",
    "tag": "AI圖像生成"
  }
];
phraseBank.push(...imageGenPhraseBank);

let state = loadState();
let activeView = "cards";
let cardIndex = 0;
let quizWord = null;
let quizAnswered = false;

const els = {
  tabs: document.querySelectorAll(".tab"),
  views: {
    cards: document.getElementById("viewCards"),
    quiz: document.getElementById("viewQuiz"),
    wrong: document.getElementById("viewWrong"),
    phrases: document.getElementById("viewPhrases"),
    custom: document.getElementById("viewCustom")
  },
  search: document.getElementById("searchInput"),
  category: document.getElementById("categorySelect"),
  level: document.getElementById("levelSelect"),
  todayCount: document.getElementById("todayCount"),
  wordCategory: document.getElementById("wordCategory"),
  wordLevel: document.getElementById("wordLevel"),
  favoriteBtn: document.getElementById("favoriteBtn"),
  wordPicture: document.getElementById("wordPicture"),
  wordText: document.getElementById("wordText"),
  wordPhonetic: document.getElementById("wordPhonetic"),
  wordMeaning: document.getElementById("wordMeaning"),
  wordMemory: document.getElementById("wordMemory"),
  wordExample: document.getElementById("wordExample"),
  wordExampleZh: document.getElementById("wordExampleZh"),
  speakWord: document.getElementById("speakWordBtn"),
  speakSentence: document.getElementById("speakSentenceBtn"),
  prev: document.getElementById("prevBtn"),
  next: document.getElementById("nextBtn"),
  counter: document.getElementById("cardCounter"),
  wordGrid: document.getElementById("wordGrid"),
  quizPicture: document.getElementById("quizPicture"),
  quizWord: document.getElementById("quizWord"),
  quizHint: document.getElementById("quizHint"),
  quizOptions: document.getElementById("quizOptions"),
  quizResult: document.getElementById("quizResult"),
  nextQuiz: document.getElementById("nextQuizBtn"),
  wrongList: document.getElementById("wrongList"),
  clearWrong: document.getElementById("clearWrongBtn"),
  phraseList: document.getElementById("phraseList"),
  customForm: document.getElementById("customForm"),
  exportBtn: document.getElementById("exportBtn"),
  importInput: document.getElementById("importInput")
};

function makeId(word) {
  return word.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Math.random().toString(36).slice(2, 8);
}

function normalizeWord(item) {
  return {
    id: item.id || makeId(item.word || "word"),
    word: item.word || "",
    meaning: item.meaning || "",
    phonetic: item.phonetic || "",
    level: item.level || "A1",
    category: item.category || "生活",
    picture: item.picture || "🔤",
    memory: item.memory || `看到 ${item.picture || "🔤"} 就想 ${item.word || "word"}。`,
    example: item.example || `I use the word ${item.word || "word"}.`,
    exampleZh: item.exampleZh || "我會使用這個單字。",
    options: item.options && item.options.length >= 4 ? item.options : buildOptions(item.meaning)
  };
}

function buildOptions(correct) {
  const pool = ["咖啡", "水", "車站", "收據", "地址", "折扣", "幫忙", "雨傘", "晚餐", "醫生", "忙碌的", "迷路的"].filter(x => x !== correct);
  return shuffle([correct, ...shuffle(pool).slice(0, 3)]);
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (saved && Array.isArray(saved.words)) {
      return {
        words: saved.words.map(normalizeWord),
        favorites: saved.favorites || {},
        wrong: saved.wrong || {},
        studyLog: saved.studyLog || {},
        quizHistory: saved.quizHistory || []
      };
    }
  } catch (_) {}
  return {
    words: starterWords.map(normalizeWord),
    favorites: {},
    wrong: {},
    studyLog: {},
    quizHistory: []
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateTodayCount();
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function updateTodayCount() {
  els.todayCount.textContent = state.studyLog[todayKey()] || 0;
}

function markStudied() {
  const key = todayKey();
  state.studyLog[key] = (state.studyLog[key] || 0) + 1;
  saveState();
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function filteredWords() {
  const q = els.search.value.trim().toLowerCase();
  const cat = els.category.value;
  const lvl = els.level.value;
  return state.words.filter(w => {
    const matchQ = !q || [w.word, w.meaning, w.category, w.example, w.exampleZh].join(" ").toLowerCase().includes(q);
    const matchC = cat === "全部" || w.category === cat;
    const matchL = lvl === "全部" || w.level === lvl;
    return matchQ && matchC && matchL;
  });
}

function refreshCategories() {
  const current = els.category.value || "全部";
  const categories = ["全部", ...Array.from(new Set(state.words.map(w => w.category))).sort()];
  els.category.innerHTML = categories.map(c => `<option>${escapeHtml(c)}</option>`).join("");
  if (categories.includes(current)) els.category.value = current;
}

function getCurrentWord() {
  const words = filteredWords();
  if (cardIndex >= words.length) cardIndex = Math.max(0, words.length - 1);
  return words[cardIndex] || null;
}

function renderCard() {
  const words = filteredWords();
  const w = getCurrentWord();
  els.wordGrid.innerHTML = "";
  if (!w) {
    els.wordText.textContent = "找不到單字";
    els.wordMeaning.textContent = "換個關鍵字或分類看看";
    els.counter.textContent = "0 / 0";
    return;
  }
  els.wordCategory.textContent = w.category;
  els.wordLevel.textContent = w.level;
  els.favoriteBtn.textContent = state.favorites[w.id] ? "★" : "☆";
  els.wordPicture.textContent = w.picture;
  els.wordText.textContent = w.word;
  els.wordPhonetic.textContent = w.phonetic || "";
  els.wordMeaning.textContent = w.meaning;
  els.wordMemory.textContent = w.memory;
  els.wordExample.textContent = w.example;
  els.wordExampleZh.textContent = w.exampleZh;
  els.counter.textContent = `${cardIndex + 1} / ${words.length}`;

  words.slice(0, 60).forEach((word, index) => {
    const btn = document.createElement("button");
    btn.className = "word-chip";
    btn.innerHTML = `<span>${escapeHtml(word.picture)}</span><strong>${escapeHtml(word.word)}</strong><small>${escapeHtml(word.meaning)}</small>`;
    btn.addEventListener("click", () => {
      cardIndex = index;
      renderCard();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    els.wordGrid.appendChild(btn);
  });
}

function renderWrong() {
  const wrongIds = Object.keys(state.wrong).filter(id => state.wrong[id] > 0);
  const wrongWords = wrongIds.map(id => state.words.find(w => w.id === id)).filter(Boolean);
  if (!wrongWords.length) {
    els.wrongList.innerHTML = `<div class="list-item"><span class="emoji">✅</span><div><strong>目前沒有錯題</strong><small>測驗答錯後會出現在這裡。</small></div></div>`;
    return;
  }
  els.wrongList.innerHTML = "";
  wrongWords.sort((a,b)=>(state.wrong[b.id]||0)-(state.wrong[a.id]||0)).forEach(w => {
    const item = document.createElement("div");
    item.className = "list-item";
    item.innerHTML = `<span class="emoji">${escapeHtml(w.picture)}</span><div><strong>${escapeHtml(w.word)}｜${escapeHtml(w.meaning)}</strong><small>${escapeHtml(w.example)}<br>${escapeHtml(w.exampleZh)}｜錯 ${state.wrong[w.id]} 次</small></div>`;
    const btn = document.createElement("button");
    btn.textContent = "複習";
    btn.className = "secondary";
    btn.addEventListener("click", () => {
      switchView("cards");
      const words = filteredWords();
      const idx = words.findIndex(x => x.id === w.id);
      cardIndex = Math.max(0, idx);
      renderCard();
    });
    item.appendChild(btn);
    els.wrongList.appendChild(item);
  });
}

function renderPhrases() {
  els.phraseList.innerHTML = "";
  phraseBank.forEach(p => {
    const card = document.createElement("div");
    card.className = "phrase-card";
    card.innerHTML = `<strong>${escapeHtml(p.en)}</strong><small>${escapeHtml(p.zh)}</small><br><span class="tag">${escapeHtml(p.tag)}</span>`;
    card.addEventListener("click", () => speak(p.en));
    els.phraseList.appendChild(card);
  });
}

function newQuiz() {
  const candidates = filteredWords();
  const words = candidates.length >= 4 ? candidates : state.words;
  quizWord = shuffle(words)[0];
  quizAnswered = false;
  els.quizPicture.textContent = quizWord.picture;
  els.quizWord.textContent = quizWord.word;
  els.quizHint.textContent = quizWord.memory;
  els.quizResult.textContent = "";
  const wrongMeanings = shuffle(state.words.filter(w => w.id !== quizWord.id).map(w => w.meaning));
  const options = shuffle([quizWord.meaning, ...wrongMeanings.slice(0, 3)]);
  els.quizOptions.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.addEventListener("click", () => answerQuiz(btn, opt));
    els.quizOptions.appendChild(btn);
  });
  speak(quizWord.word);
}

function answerQuiz(button, option) {
  if (quizAnswered || !quizWord) return;
  quizAnswered = true;
  const correct = option === quizWord.meaning;
  Array.from(els.quizOptions.children).forEach(btn => {
    if (btn.textContent === quizWord.meaning) btn.classList.add("correct");
  });
  if (correct) {
    button.classList.add("correct");
    els.quizResult.textContent = "✅ 答對了！";
    if (state.wrong[quizWord.id]) state.wrong[quizWord.id] = Math.max(0, state.wrong[quizWord.id] - 1);
  } else {
    button.classList.add("wrong");
    els.quizResult.textContent = `❌ 正確答案：${quizWord.meaning}`;
    state.wrong[quizWord.id] = (state.wrong[quizWord.id] || 0) + 1;
  }
  state.quizHistory.push({ id: quizWord.id, correct, time: Date.now() });
  markStudied();
  saveState();
  renderWrong();
}

function speak(text) {
  if (!window.speechSynthesis || !text) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.86;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function switchView(view) {
  activeView = view;
  els.tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.view === view));
  Object.entries(els.views).forEach(([key, el]) => el.classList.toggle("active-view", key === view));
  if (view === "quiz") newQuiz();
  if (view === "wrong") renderWrong();
  if (view === "phrases") renderPhrases();
}

function escapeHtml(str) {
  return String(str || "").replace(/[&<>'"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[ch]));
}

function bindEvents() {
  els.tabs.forEach(tab => tab.addEventListener("click", () => switchView(tab.dataset.view)));
  [els.search, els.category, els.level].forEach(el => el.addEventListener("input", () => { cardIndex = 0; renderCard(); }));
  els.prev.addEventListener("click", () => {
    const words = filteredWords();
    cardIndex = (cardIndex - 1 + words.length) % Math.max(1, words.length);
    renderCard();
  });
  els.next.addEventListener("click", () => {
    const words = filteredWords();
    cardIndex = (cardIndex + 1) % Math.max(1, words.length);
    markStudied();
    renderCard();
  });
  els.speakWord.addEventListener("click", () => speak(getCurrentWord()?.word));
  els.speakSentence.addEventListener("click", () => speak(getCurrentWord()?.example));
  els.favoriteBtn.addEventListener("click", () => {
    const w = getCurrentWord();
    if (!w) return;
    state.favorites[w.id] = !state.favorites[w.id];
    saveState();
    renderCard();
  });
  els.nextQuiz.addEventListener("click", newQuiz);
  els.clearWrong.addEventListener("click", () => {
    if (!confirm("確定清空錯題嗎？")) return;
    state.wrong = {};
    saveState();
    renderWrong();
  });
  els.customForm.addEventListener("submit", event => {
    event.preventDefault();
    const word = document.getElementById("customWord").value.trim();
    const meaning = document.getElementById("customMeaning").value.trim();
    if (!word || !meaning) return;
    const picture = document.getElementById("customPicture").value.trim() || "🔤";
    const item = normalizeWord({
      word,
      meaning,
      category: document.getElementById("customCategory").value.trim() || "我的單字",
      picture,
      level: "A1",
      example: document.getElementById("customExample").value.trim() || `I use ${word} every day.`,
      exampleZh: document.getElementById("customExampleZh").value.trim() || "我每天使用這個單字。",
      memory: `看到 ${picture} 就想 ${word}。`
    });
    state.words.unshift(item);
    saveState();
    refreshCategories();
    els.customForm.reset();
    cardIndex = 0;
    renderCard();
    switchView("cards");
  });
  els.exportBtn.addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], {type:"application/json"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `english-learning-backup-${todayKey()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  });
  els.importInput.addEventListener("change", async event => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      const json = JSON.parse(await file.text());
      if (!Array.isArray(json.words)) throw new Error("格式不正確");
      state = {
        words: json.words.map(normalizeWord),
        favorites: json.favorites || {},
        wrong: json.wrong || {},
        studyLog: json.studyLog || {},
        quizHistory: json.quizHistory || []
      };
      saveState();
      refreshCategories();
      renderCard();
      renderWrong();
      alert("匯入完成");
    } catch (err) {
      alert("匯入失敗：檔案格式不正確");
    } finally {
      event.target.value = "";
    }
  });
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  }
}

function init() {
  refreshCategories();
  updateTodayCount();
  renderCard();
  renderWrong();
  renderPhrases();
  bindEvents();
  registerServiceWorker();
}

init();
