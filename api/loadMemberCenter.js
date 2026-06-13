export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    // গেমের তালিকা এবং আপনার দেওয়া থাম্বনেইল ইমেজ লিঙ্ক এখানে আপডেট করা হয়েছে
    res.status(200).json({
        games: [
            { id: "1", name: "ক্রেজি স্লটস (Slots)", image: "https://i.ibb.co.com/TB0dCbY3/file-00000000b038720794f86c010a439e4c.png" },
            { id: "2", name: "লাইভ রুলেট (Casino)", image: "https://i.ibb.co.com/TB0dCbY3/file-00000000b038720794f86c010a439e4c.png" },
            { id: "3", name: "এভিয়েটর ক্র্যাশ (Crash)", image: "https://i.ibb.co.com/TB0dCbY3/file-00000000b038720794f86c010a439e4c.png" },
            { id: "4", name: "ফিশিং কিং (Fishing)", image: "https://i.ibb.co.com/TB0dCbY3/file-00000000b038720794f86c010a439e4c.png" },
            { id: "5", name: "স্পোর্টস বুক (Sports)", image: "https://i.ibb.co.com/TB0dCbY3/file-00000000b038720794f86c010a439e4c.png" },
            { id: "6", name: "মেগা লটারি (Lottery)", image: "https://i.ibb.co.com/TB0dCbY3/file-00000000b038720794f86c010a439e4c.png" }
        ]
    });
}
