const { plugins } = require("./postcss.config");

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        screens: {
            mb: "429px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        fontFamily: {
            awesome: "FontAwesome"
        },
        extend: {
            colors: {
                "color-primary": "#59342C",
                "color-second": "#6d4c41",
                "color-third": "##F27EBE",
                "dark-gray": "#5A5A5A",
                "gray-70": "#646E82",
                "red-error": "#ED3A3A",

                // FUNDO
                "Color-fundo":"#fdeaf2",

                //TEXTO
                "Color-text": "#59342C", "Color-marrom": "##634234","Color-rosa": "#E1306C",
                
                
            }
        }
    },
    plugins: [],
}