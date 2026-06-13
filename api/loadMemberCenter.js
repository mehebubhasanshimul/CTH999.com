export default async function handler(req, res) {
    // সিকিউরিটি এবং কোরস (CORS) হেডার সেটআপ
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    // আপনার স্ক্রিনশট (7181.jpg) থেকে নেওয়া আসল এপিআই ইউআরএল এবং কী (Key)
    const url = 'https://betfair-sports-casino-live-tv-result-odds.p.rapidapi.com/api/v1/posted-market-result?sportsid=4&gmid=778487673';
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b3ad11e41cmshb18121f061df58ep1b5c61jsnd7a63dda9d56',
            'x-rapidapi-host': 'betfair-sports-casino-live-tv-result-odds.p.rapidapi.com',
            'Content-Type': 'application/json'
        }
    };

    try {
        // রিয়েল-টাইম বেটফেয়ার এপিআই কল ইঞ্জিন
        const apiResponse = await fetch(url, options);
        const apiData = await apiResponse.json();

        // 💡 এপিআই থেকে লাইভ ডাটা আসার পর, আপনার CTH999 এর UI ডিজাইন অনুযায়ী রেসপন্স পাঠানো
        res.status(200).json({
            status: "success",
            liveData: apiData, // এখানে রিয়েল এপিআই এর সব ডাটা থাকবে
            categories: [
                {
                    title: "🔥 HOT GAMES",
                    list: [
                        { name: "Super Ace", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&q=80", gameUrl: "https://demo.jilicaco.com/slot/super-ace" },
                        { name: "Aviator", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&q=80", gameUrl: "https://spribe.co/games/aviator" },
                        { name: "Crazy Worm", image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=300&q=80", gameUrl: "https://pascalgaming.com/games/crazy-worm" }
                    ]
                },
                {
                    title: "⚽ SPORTS Betting (LIVE)",
                    list: [
                        { name: "Betfair Cricket", image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=300&q=80", gameUrl: "https://spribe.co/games/aviator" },
                        { name: "Lucky Sports", image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=300&q=80", gameUrl: "https://demo.jilicaco.com/slot/super-ace" }
                    ]
                }
            ],
            memberMenu: [
                { name: "Reward Center", icon: "🏆" },
                { name: "Betting Record", icon: "📊" },
                { name: "Profit & Loss", icon: "📈" },
                { name: "Deposit Record", icon: "💳" },
                { name: "Withdrawal List", icon: "🏧" },
                { name: "Account Record", icon: "📝" },
                { name: "Security Center", icon: "🛡️" },
                { name: "Customer Service", icon: "🎧" }
            ]
        });

    } catch (error) {
        console.error("RapidAPI Connection Error: ", error);
        // এপিআই সার্ভার ডাউন থাকলে যেন আপনার ফ্রন্টএন্ড ক্র্যাশ না করে, তার ব্যাকআপ রেসপন্স
        res.status(500).json({ status: "error", message: "Failed to fetch data from Betfair API" });
    }
}
