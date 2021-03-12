# Dynamic Dark Mode Support 
## Using CSS Variables + styled-components

A quick demo of how to combine CSS Variables + styled-component Themes to achieve an automatic light/dark mode that mirrors the host OS.

Live Demo: [here](http://martp.github.io/blog-styled-plus-css-vars)

* [styled-components](https://styled-components.com)
* [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

## Get Started


```
npm i
npm start
```

## The Main Gist 

### 1. Define some CSS Variables in GlobalStyles

```ts
export const GlobalStyles = createGlobalStyle`

    :root {
        --color-primary: #0b7bff;
        --color-light: #ffffff;
        --color-light-secondary: #f2f2f2;
        ...
        --background-color: var(--color-light);
        --background-color--secondary: var(--color-light-secondary);
        ...
        @media ${base.media.colorScheme.dark} {
            :root {
                --background-color: var(--color-dark);
                --background-color--secondary: var(--color-dark-secondary);
                ...
            }
        }
    }
    ...
`;

```

###  2. Use these CSS variables in our styled-components theme

```ts
export const themes = {
    auto: {
        colors: {
            ...
            background: 'var(--background-color)',
            backgroundSecondary: 'var(--background-color--secondary)',
            font: 'var(--font-color)',
            fontSecondary: `var(--font-color--secondary)`
        }  
    } as DefaultTheme,
    ...
};
```

### 3. Use these theme variables globally and throughout our app

```ts
export const GlobalStyles = createGlobalStyle`
    ...
    body {
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.font};
    }
`;
```