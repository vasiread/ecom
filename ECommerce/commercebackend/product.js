const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        description: "Noise-cancelling over-ear headphones with 30-hour battery life.",
        price: 1479.99,
        image: "https://plus.unsplash.com/premium_photo-1710962439403-a35fbc684b15?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        name: "Smart Watch Series 5",
        description: "Fitness tracking smartwatch with heart rate and GPS support.",
        price: 1149.99,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        name: "Gaming Mechanical Keyboard",
        description: "RGB backlit mechanical keyboard with blue switches.",
        price: 4000.99,
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        name: "4K Ultra HD Smart TV",
        description: "55-inch smart television with built-in streaming apps.",
        price: 15000.99,
        image: "https://images.pexels.com/photos/5202957/pexels-photo-5202957.jpeg"
    },
    {
        id: 5,
        name: "Portable Bluetooth Speaker",
        description: "Waterproof speaker with deep bass and 12-hour battery life.",
        price: 2000.99,
        image: "https://images.unsplash.com/photo-1675319245480-215961c129f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 6,
        name: "DSLR Camera 24MP",
        description: "Professional DSLR camera with 24MP sensor and 4K recording.",
        price: 3000.99,
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        name: "Laptop Backpack",
        description: "Water-resistant backpack with laptop compartment and USB port.",
        price: 890.99,
        image: "https://images.unsplash.com/photo-1667411425122-8b6be5da1c48?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 8,
        name: "Ergonomic Office Chair",
        description: "Adjustable office chair with lumbar support and mesh back.",
        price: 890.99,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        name: "Robot Vacuum Cleaner",
        description: "Smart robot vacuum with app control and auto-charging.",
        price: 1000.99,
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 10,
        name: "Stainless Steel Water Bottle",
        description: "Insulated water bottle keeps drinks cold for 24 hours.",
        price: 580.99,
        image: "https://images.unsplash.com/photo-1664714628878-9d2aa898b9e3?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 11,
        name: "Wireless Gaming Mouse",
        description: "Lightweight mouse with customizable DPI and RGB lighting.",
        price: 1000.99,
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 12,
        name: "Smartphone Tripod Stand",
        description: "Adjustable tripod stand with Bluetooth remote for phones.",
        price: 1200.99,
        image: "https://images.unsplash.com/photo-1669255344178-d9d27cf7a3fe?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 13,
        name: "Noise Cancelling Earbuds",
        description: "True wireless earbuds with noise reduction and 20-hour battery.",
        price: 3000.99,
        image: "https://images.unsplash.com/photo-1711567008221-4a85cb7acc70?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 14,
        name: "Smart LED Light Bulb",
        description: "Wi-Fi enabled light bulb with Alexa and Google support.",
        price: 1450.99,
        image: "https://images.unsplash.com/photo-1532007271951-c487760934ae?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        id: 15,
        name: "Fitness Resistance Bands",
        description: "Set of 5 resistance bands for workout and yoga.",
        price: 560.99,
        image: "https://plus.unsplash.com/premium_photo-1664536968258-16a272d508b4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 16,
        name: "Electric Toothbrush",
        description: "Rechargeable toothbrush with multiple cleaning modes.",
        price: 1000.99,
        image: "https://images.unsplash.com/photo-1612181819081-950d35f4d826?q=80&w=743&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 17,
        name: "Camping Tent",
        description: "Waterproof 4-person tent for outdoor adventures.",
        price: 990.99,
        image: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?q=80&w=402&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 18,
        name: "Portable Charger 20000mAh",
        description: "High-capacity power bank with fast charging support.",
        price: 1000.99,
        image: "https://plus.unsplash.com/premium_photo-1673617835259-097e1221aa32?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 19,
        name: "Electric Kettle",
        description: "Stainless steel kettle with auto shut-off and boil dry protection.",
        price: 950.99,
        image: "https://images.unsplash.com/photo-1738520420652-0c47cea3922b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 20,
        name: "Running Shoes",
        description: "Lightweight breathable running shoes with cushioned sole.",
        price: 850.99,
        image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 21,
        name: "Smartphone Gimbal",
        description: "3-axis handheld stabilizer for smooth video recording.",
        price: 780.99,
        image: "https://images.unsplash.com/photo-1638243292863-3744d6a7e021?q=80&w=443&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 22,
        name: "Smart Home Security Camera",
        description: "1080p indoor camera with motion detection and night vision.",
        price: 1000.99,
        image: "https://images.unsplash.com/photo-1724343025504-3afb6d67566b?q=80&w=644&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 23,
        name: "Air Fryer",
        description: "Healthy air fryer with digital display and 5.8-quart capacity.",
        price: 4000.99,
        image: "https://images.unsplash.com/photo-1617775047746-5b36a40109f5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 24,
        name: "Portable Laptop Stand",
        description: "Adjustable aluminum laptop stand for better ergonomics.",
        price: 1200.99,
        image: "https://images.unsplash.com/photo-1615560226025-08cc084dcde8?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 25,
        name: "Electric Scooter",
        description: "Foldable electric scooter with 15-mile range and LED display.",
        price: 20000.99,
        image: "https://plus.unsplash.com/premium_photo-1716042992778-29f722300e71?q=80&w=393&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 26,
        name: "Leather Wallet",
        description: "Minimalist RFID-blocking leather wallet for men.",
        price: 350.99,
        image: "https://images.unsplash.com/photo-1612023395494-1c4050b68647?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 27,
        name: "Coffee Maker",
        description: "Programmable coffee maker with 12-cup capacity.",
        price: 14390.99,
        image: "https://plus.unsplash.com/premium_photo-1661722983090-11783531c332?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 28,
        name: "Desk Lamp",
        description: "LED desk lamp with adjustable brightness and USB charging.",
        price: 900.99,
        image: "https://plus.unsplash.com/premium_photo-1685287731216-a7a0fae7a41a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 29,
        name: "Wireless Charging Pad",
        description: "Fast wireless charger compatible with iPhone and Android.",
        price: 2000.99,
        image: "https://images.unsplash.com/photo-1633381638729-27f730955c23?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 30,
        name: "Noise Cancelling Headphones",
        description: "Over-ear headphones with hybrid ANC and deep bass.",
        price: 4000.99,
        image: "https://images.unsplash.com/photo-1689872072441-5aed6df99448?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 31,
        name: "Smartphone Car Mount",
        description: "Magnetic car phone holder with 360-degree rotation.",
        price: 1000.99,
        image: "https://images.unsplash.com/photo-1683151284539-d20a6d60d8cc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 32,
        name: "Travel Suitcase",
        description: "Hard shell carry-on suitcase with TSA-approved lock.",
        price: 1200.99,
        image: "https://images.unsplash.com/photo-1531938716357-224c16b5ace3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

];

module.exports =products;

