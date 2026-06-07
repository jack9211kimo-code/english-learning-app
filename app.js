
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
phraseBank.push(...adultPhraseBank);

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
