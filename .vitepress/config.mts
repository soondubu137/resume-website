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
                text: 'About me', link: '/markdown-examples'
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
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/soondubu137' },
            { icon: 'linkedin', link: 'https://github.com/soondubu137' }
        ],

        footer: {
            copyright: "Copyright&copy; 2024 Yinfeng Lu"
        }
    }
})
