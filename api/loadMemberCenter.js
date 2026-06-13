export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    res.status(200).json({
        categories: [
            {
                title: "🔥 HOT GAMES",
                list: [
                    { name: "Super Ace", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&q=80" },
                    { name: "Aviator", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&q=80" },
                    { name: "Crazy Worm", image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=300&q=80" },
                    { name: "Wild Bounty", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=300&q=80" },
                    { name: "FlyX Slot", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&q=80" },
                    { name: "Mighty Trania", image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=300&q=80" }
                ]
            },
            {
                title: "🎰 SLOTS POPULAR",
                list: [
                    { name: "Magic Ace", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&q=80" },
                    { name: "Adventure Ost", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&q=80" },
                    { name: "Fortune Gems 3", image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=300&q=80" }
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
}
