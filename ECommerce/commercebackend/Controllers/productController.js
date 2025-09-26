const products = require("../product")

 



exports.getProducts = (req, res) => {
    try {
        if (!products || products.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Server error while fetching products" });
    }
};

 
exports.placeOrders = (req, res) => {
    try {
        const { firstName, lastName, address } = req.body;

        if (!firstName || !lastName || !address) {
            return res.status(400).json({ message: "First name, last name, and address are required." });
        }

        console.log("Order Placed Successfully:");
        console.log({ firstName, lastName, address });

        return res.status(200).json({ message: "Order placed successfully!" });

    } catch (error) {
        console.error("Error placing order:", error);
        return res.status(500).json({ message: "Something went wrong while placing the order." });
    }
};
