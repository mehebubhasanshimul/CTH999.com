export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    // 🕹️ আসল গেমিং প্রোভাইডারদের ওপেন সোর্স আইফ্রেম ডেমো ইউআরএল ডাটাবেজ
    res.status(200).json({
        categories: [
            {
                title: "🔥 HOT GAMES",
                list: [
                    { 
                        name: "Super Ace", 
                        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&q=80",
                        gameUrl: "https://demo.jilicaco.com/slot/super-ace" 
                    },
                    { 
                        name: "Aviator", 
                        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&q=80",
                        gameUrl: "https://spribe.co/games/aviator" 
                    },
                    { 
                        name: "Crazy Worm", 
                        image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=300&q=80",
                        gameUrl: "https://pascalgaming.com/games/crazy-worm"
                    }
                ]
            },
            {
                title: "🎰 SLOTS POPULAR",
                list: [
                    { 
                        name: "Magic Ace", 
                        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&q=80",
                        gameUrl: "https://softswiss.com/" 
                    },
                    { 
                        name: "Fortune Gems", 
                        image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=300&q=80",
                        gameUrl: "https://demo.jilicaco.com/slot/fortune-gems-3"
                    }
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
