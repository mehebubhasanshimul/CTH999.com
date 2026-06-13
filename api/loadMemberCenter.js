export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    // আনব্লকড গ্লোবাল ইমেজ লিংক (Unsplash Gaming Assets)
    res.status(200).json({
        categories: [
            {
                title: "🔥 Hot Games",
                list: [
                    { name: "Super Ace (JILI)", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&q=80" },
                    { name: "Crazy Worm (Pascal)", image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&q=80" },
                    { name: "Aviator (Spribe)", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80" }
                ]
            },
            {
                title: "⚽ Sports Betting",
                list: [
                    { name: "9Wickets Sports", image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&q=80" },
                    { name: "Lucky Sports", image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=400&q=80" },
                    { name: "BTI Sports", image: "https://images.unsplash.com/photo-1516731415730-0c641e04de1e?w=400&q=80" }
                ]
            },
            {
                title: "🃏 Live Casino",
                list: [
                    { name: "Evolution Gaming", image: "https://images.unsplash.com/photo-1570304816841-906a17d7b067?w=400&q=80" },
                    { name: "Pragmatic Play", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&q=80" },
                    { name: "Micro Gaming", image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=400&q=80" }
                ]
            },
            {
                title: "🐠 Fishing & Fish",
                list: [
                    { name: "Happy Fishing (JILI)", image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400&q=80" },
                    { name: "Fortune King (JILI)", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80" },
                    { name: "Mega Fishing (JILI)", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80" }
                ]
            }
        ]
    });
}
