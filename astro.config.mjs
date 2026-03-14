// @ts-check
import {defineConfig, fontProviders} from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://gazov.pro',
    output: 'static',
    redirects: {
        "/": "/work",
        "/404": "/work",
    },
    fonts: [{
        provider: fontProviders.local(),
        name: "SF-Pro",
        cssVariable: "--font-sf-pro",
        options: {
            variants: [{
                src: ['./src/assets/fonts/SF-Pro.woff2'],
                weight: '100 900',
                style: 'normal'
            }]
        }
    }]
});
