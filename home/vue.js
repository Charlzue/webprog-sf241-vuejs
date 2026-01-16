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
            ],
            manyFoods: [
                'https://www.w3schools.com/vue/img_burrito.svg',
                'https://www.w3schools.com/vue/img_salad.svg',
                'https://www.w3schools.com/vue/img_cake.svg',
                'https://www.w3schools.com/vue/img_soup.svg',
                'https://www.w3schools.com/vue/img_fish.svg',
                'https://www.w3schools.com/vue/img_pizza.svg',
                'https://www.w3schools.com/vue/img_rice.svg'
              ]
        }
    },
    mounted() {
        // Sets the browser tab title once the app is loaded
        document.title = `WEBPROG SF241 | ${this.name}`;
    }
});

// Mount the app to the div with id="app"

app.mount('#app');
