module.exports = {
    important: false,
    theme: {
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },

        fontSize: {
            xxs: '0.625rem',
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem'
        },

        spacing: {
            '0': '0',
            1: '0.125rem',
            2: '0.25rem',
            3: '0.5rem',
            4: '0.75rem',
            5: '1rem',
            6: '1.5rem',
            7: '2rem',
            8: '2.5rem',
            9: '3rem',
            10: '4rem',
            11: '5rem',
            12: '6rem',
            13: '8rem'
        },

        screens: {
            'xs': '360px',
            'sm': '768px',
            'md': '1024px',
            'lg': '1280px',
            'xl': '1440px'
        },

        colors: {
            transparent: 'transparent',
            current: 'currentColor',

            primary: {
                100: '#3F859E',
                200: '#397990',
                300: '#346E83',
                400: '#2F6477',
                500: '#2B5B6C',
                600: '#275261',
                700: '#234A57',
                800: '#20434E',
                900: '#1D3C46'
            },
            secondary: {
                50: '#E0EBE4',
                100: '#537C61',
                200: '#4B7158',
                300: '#446750',
                400: '#3E5E49',
                500: '#385542',
                600: '#324D3B',
                700: '#2D4535',
                800: '#293E30',
                900: '#25382B'
            },
            gray: {
                100: '#FBFBF9',
                200: '#F6F6F3',
                300: '#EBEBE3',
                400: '#DEDED0',
                500: '#D2D2BE',
                600: '#C7C7AD',
                700: '#BCBC9E',
                800: '#B2B290',
                900: '#A7A781'
            },
            success: {
                50: '#E6F5F0',
                100: '#CDECE2',
                200: '#ADE0CF',
                300: '#90D5BE',
                400: '#76CBAF',
                500: '#008761',
                600: '#007051',
                700: '#005D43',
                800: '#004D38',
                900: '#00402E'
            },
            warning: {
                50: '#FDF8F1',
                100: '#F8E5C9',
                200: '#F3D2A1',
                300: '#EEC17D',
                400: '#EAB25D',
                500: '#E8A74A',
                600: '#E1901D',
                700: '#BB7818',
                800: '#9B6414',
                900: '#815311'
            },
            danger: {
                50: '#FAEDEF',
                100: '#EFC7CD',
                200: '#E5A5AF',
                300: '#DC8694',
                400: '#D46B7C',
                500: '#CD465E',
                600: '#B43148',
                700: '#95293C',
                800: '#7C2232',
                900: '#671C2A'
            },
            info: {
                50: '#DEEFF5',
                100: '#BEDFEC',
                200: '#9DCFE2',
                300: '#7FC1D9',
                400: '#64B4D1',
                500: '#0047BA',
                600: '#003B9A',
                700: '#003180',
                800: '#00296A',
                900: '#002258'
            },
            black: '#000',
            white: '#fff'
        },

        opacity: {
            15: '.15',
            25: '.25',
            50: '.50',
            80: '.80',
        },
        
        lineHeight: {
            xxs: '1rem',
            xs: '1rem',
            sm: '1.5rem',
            base: '1.5rem',
            lg: '1.5rem',
            xl: '1.75rem',
            '2xl': '2rem',
            normal: 'normal'
        },
        aspectRatio: {
            '4/3': '4 / 3',
            'square': '1 / 1'
        }
    },
    mode: 'jit',
    content: ['./src/**/*.{html,ts,vue}'],
}