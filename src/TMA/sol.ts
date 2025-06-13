// Simple Target and Ownship TMA Simulation

const toRadians = (deg: number) => deg * (Math.PI / 180);
const toDegrees = (rad: number) => rad * (180 / Math.PI);

// Target moving at constant position (for simplicity)
const target = { x: 500, y: 1000 };

// Ownship initial position and speed
let ownship = { x: 0, y: 0, heading: 0, speed: 10 };

// Store bearing measurements
const measurements = [];

// Simulate 5 time steps
for (let t = 0; t < 5; t++) {
    // Move ownship
    ownship.x += ownship.speed * Math.cos(toRadians(ownship.heading));
    ownship.y += ownship.speed * Math.sin(toRadians(ownship.heading));

    // Calculate bearing to target
    const dx = target.x - ownship.x;
    const dy = target.y - ownship.y;
    const bearing = toDegrees(Math.atan2(dy, dx));  // angle to target

    measurements.push({
        time: t,
        position: { x: ownship.x, y: ownship.y },
        bearing: (bearing + 360) % 360  // Normalize bearing
    });
}

// Print measurements
console.log("\nBearing Measurements:");
console.table(measurements);

// Now, try to estimate the target position
// For simplicity, we'll just use the last measurement
const last = measurements[measurements.length - 1];
const estimatedDistance = 1000; // assume 1000m (guesswork, because no range info)

const estimatedTarget = {
    x: last.position.x + estimatedDistance * Math.cos(toRadians(last.bearing)),
    y: last.position.y + estimatedDistance * Math.sin(toRadians(last.bearing))
};

console.log("\nEstimated Target Position:");
console.log(estimatedTarget);

console.log("\nReal Target Position:");
console.log(target);
