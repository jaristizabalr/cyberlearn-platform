/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber_bg: "#0A1A2F",
        cyber_card: "#112A45",
        cyber_accent: "#00C8FF",
        cyber_accent2: "#4EFFA1",
        cyber_text: "#FFFFFF",
        cyber_muted: "#AAB7C4",
        cyber_border: "#1F3C57"
      },
      borderRadius: {
        lgc: "10px"
      },
      boxShadow: {
        cyber: "0 4px 12px rgba(0,0,0,0.25)"
      }
    }
  },
  plugins: []
}
