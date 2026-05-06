const db = require("../config/db");
const getDistance = require("../utils/distance");

// ➤ Add School
exports.addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    // Validation
    if (!name || !address || latitude == null || longitude == null) {
        return res.status(400).json({ error: "All fields are required" });
    }

    if (isNaN(latitude) || isNaN(longitude)) {
        return res.status(400).json({ error: "Latitude/Longitude must be numbers" });
    }

    const query = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

    db.query(query, [name, address, latitude, longitude], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "School added successfully" });
    });
};

// ➤ List Schools (sorted by distance)
exports.listSchools = (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: "User latitude & longitude required" });
    }

    db.query("SELECT * FROM schools", (err, results) => {
        if (err) return res.status(500).json(err);

        const sorted = results.map(school => {
            const distance = getDistance(
                latitude,
                longitude,
                school.latitude,
                school.longitude
            );
            return { ...school, distance };
        }).sort((a, b) => a.distance - b.distance);

        res.json(sorted);
    });
};