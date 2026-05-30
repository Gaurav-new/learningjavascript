let duration = 0.5;  // test duration in seconds

switch (true) {
    case duration < 1:
        console.log("⚡ Very fast test");
        break;
    case duration < 3:
        console.log("✅ Fast test");
        break;
    case duration < 6:
        console.log("⚠️ Acceptable — consider optimising");
        break;
    default:
        console.log("🐢 Slow test — needs attention");
}