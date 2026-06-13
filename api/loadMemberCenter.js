export default function handler(req, res) {
    // সিপ্যানেল বা এপিআই সিকিউরিটি হেডার সেট করা
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    // স্ক্রিনশটের ক্যাটাগরি অনুযায়ী আসল গেমিং ইমেজের ডাইরেক্ট লিংক যুক্ত ডাটাবেজ
    res.status(200).json({
        categories: [
            {
                title: "🔥 Hot Games",
                list: [
                    { name: "Super Ace (JILI)", image: "https://pub-c563e46c986c4e16bb4b967963bc58b2.r2.dev/v8/slots-jili-super-ace.webp" },
                    { name: "Crazy Worm (Pascal)", image: "https://pub-c563e46c986c4e16bb4b967963bc58b2.r2.dev/v8/slots-pascal-crazy-worm.webp" },
                    { name: "Aviator (Spribe)", image: "https://pub-c563e46c986c4e16bb4b967963bc58b2.r2.dev/v8/crash-spribe-aviator.webp" }
                ]
            },
            {
                title: "⚽ Sports Betting",
                list: [
                    { name: "9Wickets Sports", image: "https://pub-c563e46c986c4e16bb4b967963bc58b2.r2.dev/v8/sports-9wickets.webp" },
                    { name: "Lucky Sports", image: "https://pub-c563e46c986c4e16bb4b967963bc58b2.r2.dev/v8/sports-lucky.webp" },
                    { name: "BTI Sports", image: "https://pub-c563e46c986c4e16bb4b967963bc58b2.r2.dev/v8/sports-bti.webp" }
                ]
            },
            {
                title: "🃏 Live Casino",
                list: [
                    { name: "Evolution Gaming", image: "https://pub-c563e46c986c4e16bb4b967963bc58b2.r2.dev/v8/casino-evolution.webp" },
                    { name: "Pragmatic Play", image: "https://pub-c563e46c986c4e16bb4b967963bc58b2.r2.dev/v8/casino-pragmatic.webp" },
                    { name: "Micro Gaming", image: "https://pub-c563e46c986c4e16bb4b967963bc58b2.r2.dev/v8/casino-microgaming.webp" }
                ]
            },
            {
                title: "🐠 Fishing & Fish",
                list: [
                    { name: "Happy Fishing (JILI)", image: "https://pub-c563e46c986c4e16bb4b967963bc58b2.r2.dev/v8/fish-jili-happy-fishing.webp" },
                    { name: "Fortune King (JILI)", image: "https://pub-c563e46c986c4e16bb4b967963bc58b2.r2.dev/v8/fish-jili-fortune-king.webp" },
                    { name: "Mega Fishing (JILI)", image: "https://pub-c563e46c986c4e16bb4b967963bc58b2.r2.dev/v8/fish-jili-mega-fishing.webp" }
                ]
            }
        ]
    });
}
