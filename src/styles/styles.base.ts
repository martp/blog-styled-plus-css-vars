export const base = {
    media: {
        colorScheme: {
            dark: `(prefers-color-scheme: dark)`,
            light: `(prefers-color-scheme: light)`
        }
    },
    position: {
        fill: `
            width: 100vw;
            height: 100vh;
        `,  
        center: `
            display: flex;
            align-items: center;
            justify-content: center;
            > * {
                text-align: center;
            }
        `,  
    },
    spacing: {
        xs: `5px`,
        sm: `10px`,
        md: `15px`,
        lg: `30px`,
        xl: `45px`
    },
    borders: {
        radius: '10px'
    }
};