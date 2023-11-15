/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bwld-folly": "#FE0159",
        "bwld-deep-champagne": "#FFD4A2",
        "bwld-moss-green": "#384104",
        "bwld-picton-blue": "#4ABCFC",
        "bwld-patriarch": "#6e0380",
        "bwld-heliotrope": "#c06fff",
        "bwld-max-yellow": "#fff73e",
        "bwld-medium-blue": "#0A15DB",
        "bwld-cetacean-blue": "#081548",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
