import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Yinfeng Lu",
    description: "programming resume job-search career",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {
                text: 'Home', link: '/'
            },
            {
                text: 'About', link: '/markdown-examples'
            },
            {
                text: 'Projects', link: '/markdown-examples'
            },
            {
                text: 'Notes', link: '/markdown-examples'
            },
            {
                text: 'Contact', link: '/markdown-examples'
            }
        ],

        sidebar: [
            {
                // text: 'Examples',
                items: [
                    { text: 'About', link: '/markdown-examples' },
                    { text: 'Projects', link: '/api-examples' },
                    { text: 'Notes', link: '/api-examples' },
                    { text: 'Contact', link: '/api-examples' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/soondubu137' },
            { icon: 'linkedin', link: 'https://github.com/soondubu137' }
        ],

        footer: {
            copyright: "&copy; 2024 Yinfeng Lu."
        }
    }
})
