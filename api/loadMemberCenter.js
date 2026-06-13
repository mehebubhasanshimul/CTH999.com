export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    res.status(200).json({
        categories: [
            {
                title: "🔥 HOT GAMES",
                list: [
                    { name: "Super Ace", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&q=80" },
                    { name: "Crazy Worm", image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=300&q=80" },
                    { name: "FlyX", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&q=80" }
                ]
            },
            {
                title: "⚽ SPORTS Betting",
                list: [
                    { name: "9Wickets", image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=300&q=80" },
                    { name: "Lucky Sports", image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=300&q=80" },
                    { name: "BTI Sports", image: "https://images.unsplash.com/photo-1516731415730-0c641e04de1e?w=300&q=80" }
                ]
            },
            {
                title: "🐠 FISH Games",
                list: [
                    { name: "Happy Fishing", image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=300&q=80" },
                    { name: "Fortune King", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&q=80" },
                    { name: "Mega Fishing", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&q=80" }
                ]
            }
        ],
        // মেম্বার প্রোফাইল ড্যাশবোর্ডের গ্রিড মেনু আইটেমসমূহ (7131.jpg)
        memberMenu: [
            { name: "Reward Center", icon: "🏆" },
            { name: "Betting Record", icon: "📊" },
            { name: "Profit & Loss", icon: "📈" },
            { name: "Deposit Record", icon: "💳" },
            { name: "Withdrawal", icon: "🏧" },
            { name: "My Account", icon: "⚙️" },
            { name: "Security Center", icon: "🛡️" },
            { name: "Customer Service", icon: "🎧" }
        ]
    });
}
