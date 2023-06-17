const logTime = () => {
    const d = new Date()

    const h = String(d.getHours()).padStart(2, "0");
    const hf = String(d.getHours() % 12 || 12).padStart(2, "0");
    const m = String(d.getMinutes()).padStart(2, "0");
    const s = String(d.getSeconds()).padStart(2, "0");

    console.log(`${h} : ${m} : ${s}`)
    console.log(`${hf} : ${m} : ${s} ${d.getHours() < 12 ? "AM" : "PM"}`)
}
setInterval(logTime, 1000);