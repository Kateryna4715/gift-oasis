import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            colors: {
                "mobile-nav": "rgba(255, 255, 255, 0.9)",
                "indigo-light": "#D0D5FF",
                "indigo-light-50": "rgba(208, 213, 255, 0.5)",
                "cream-light": "#FFEAC9",
                "cream-light-50": "rgba(255, 242, 221, 0.5)",
                cream: "#FFE0B1",
                golden: "#DEB471",
                "golden-light": "rgba(222, 180, 113, 0.3)",
                "dark-gray": "#464646",
                "light-gray": "#646464",
                "gr-cream": "#FFF2DD",
                "gr-yellow": "#F5B984",
                "gr-orange": "#E88963",
                "gr-pink": "#F08FBF",
                "gr-blue": "#B9DAEA",
                "gr-purple": "#B9C0FF",

                "btn-shadow": "rgba(52, 38, 207, 0.15)",
            },

            boxShadow: {
                "basic-sh": "0 0 20px 6px rgba(52, 38, 207, 0.2)",
                "main-shadow": "0 4px 6px -1px rgba(52, 100, 225, 0.15)",
                "best-shadow": "0 0 12px 4px rgba(53, 38, 207, 0.15)",
                "cream-sh": "0 0 8px 4px rgba(222, 180, 113, 0.3)",
            },
            fontSize: {
                "section-font": "28px",
            },
            width: {
                300: "300px",
                300: "350px",
                400: "400px",
                452: "452px",
            },
            height: {
                120: "120px",
                150: "150px",
                150: "175px",
                200: "200px",
                240: "240px",
                18: "72px",
            },
            maxWidth: {
                832: "52rem",
            },
            maxHeight: {
                136: "136px",
            },
            minHeight: {
                168: "168px",
                180: "180px",
                196: "196px",
                208: "208px",
                232: "232px",
                240: "240px",
                244: "244px",
                568: "568px",
                524: "524px",
                376: "376px",
            },
            scale: {
                185: "1.88",
            },
            screens: {
                phone: "350px",
                xsm: "495px",
            },
        },
    },

    plugins: [forms],
};
