const app = Vue.createApp({
    data() {
        return {
            name: "Charl Christopher M. Peñada",
            nickname: "Toph",
            specialization: "BS Computer Science | Cybersecurity & Forensics",
            message: "🎉 Happy New Year 2026!",
            goal: "To become financially stable and to live in a peaceful country.",
            interests: "Walking, Playing, Watching, Data Analytics & Project Management",
            education: [
                { name: "Asia Pacific College", year: "2024 - Present" },
                { name: "Arellano University - JAS", year: "2022 - 2024" },
                { name: "Pasay City East High School", year: "2018 - 2022" },
                { name: "Timoteo Paez Elementary", year: "2012 - 2018" }
            ],
            experience: [
                { title: "CLI-Based Sustainable Recycling App", year: "2025" },
                { title: "Botomatiko", year: "2023 - 2024" }
            ]
        }
    }
});

app.mount('#app');