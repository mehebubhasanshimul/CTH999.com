export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    // স্ক্রিনশটের ক্যাটাগরি ডাটা আর্কিটেকচার
    res.status(200).json({
        categories: [
            {
                title: "🔥 Hot Games",
                list: [
                    { name: "Super Ace", image: "https://i.ibb.co.com/TB0dCbY3/file-00000000b038720794f86c010a439e4c.png" },
                    { name: "Crazy Worm", image: "https://i.ibb.co.com/TB0dCbY3/file-00000000b038720794f86c010a439e4c.png" },
                    { name: "FlyX Slot", image: "https://i.ibb.co.com/TB0dCbY3/file-00000000b038720794f86c010a439e4c.png" }
                ]
            },
            {
                title: "⚽ Sports Betting",
                list: [
                    { name: "9Wickets Sports", image: "https://i.ibb.co.com/TB0dCbY3/file-00000000b038720794f86c010a439e4c.png" },
                    { name: "Lucky Sports", image: "https://i.ibb.co.com/TB0dCbY3/file-00000000b038720794f86c010a439e4c.png" },
                    { name: "BTI Sports", image: "https://i.ibb.co.com/TB0dCbY3/file-00000000b038720794f86c010a439e4c.png" }
                ]
            },
            {
                title: "🃏 Live Casino",
                list: [
                    { name: "Evolution Gaming", image: "https://i.ibb.co.com/TB0dCbY3/file-00000000b038720794f86c010a439e4c.png" },
                    { name: "Pragmatic Play", image: "https://i.ibb.co.com/TB0dCbY3/file-00000000b038720794f86c010a439e4c.png" },
                    { name: "Micro Gaming", image: "https://i.ibb.co.com/TB0dCbY3/file-00000000b038720794f86c010a439e4c.png" }
                ]
            },
            {
                title: "🐠 Fishing & Fish",
                list: [
                    { name: "Happy Fishing", image: "https://i.ibb.co.com/TB0dCbY3/file-00000000b038720794f86c010a439e4c.png" },
                    { name: "Fortune King", image: "https://i.ibb.co.com/TB0dCbY3/file-00000000b038720794f86c010a439e4c.png" },
                    { name: "Mega Fishing", image: "https://i.ibb.co.com/TB0dCbY3/file-00000000b038720794f86c010a439e4c.png" }
                ]
            }
        ]
    });
}
