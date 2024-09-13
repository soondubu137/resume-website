import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Yinfeng Lu",
    description: "programming resume job-search career",
    head: [["link", { rel: "icon", type: "image/png", href: "/favicons/maple-16.png" }]],
    srcDir: './src',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "icons/maple-60.png",
        nav: [
            {
                text: 'Home', link: '/'
            },
            {
                text: 'Profile',
                items: [
                    { text: 'About Me', link: '/profile/about' },
                    { text: 'Related Courses', link: '/profile/related-courses' },
                    { text: 'More', link: '/profile/' }
                ]
            },
            {
                text: 'Projects',
                items: [
                    { text: 'Review System', link: '/projects/go-review-system' },
                    { text: 'URL Shortener', link: '/projects/go-url-shortener' },
                    { text: 'Forum', link: '/projects/go-forum' },
                    {
                        text: 'School Projects',
                        items: [
                            { text: 'GAS', link: '/projects/gas' },
                            { text: 'Belay', link: '/projects/belay' },
                            { text: 'Integration', link: '/projects/integration' },
                            { text: 'Bear Map', link: '/projects/bearmap' }
                        ]
                    },
                    { text: 'Earlier Projects', link: '/projects/earlier' },
                    { text: 'More', link: '/projects/' }
                ]
            },
            {
                text: 'Contact', link: '/contact'
            }
        ],

        sidebar: [
            {
                text: "Profile",
                collapsed: true,
                items: [
                    { text: 'About Me', link: '/profile/about' },
                    { text: 'Related Courses', link: '/profile/related-courses' },
                ]
            },
            {
                text: 'Projects',
                collapsed: true,
                items: [
                    { text: 'Review System', link: '/projects/go-review-system' },
                    { text: 'URL Shortener', link: '/projects/go-url-shortener' },
                    { text: 'Forum', link: '/projects/go-forum' },
                    {
                        text: 'School Projects',
                        items: [
                            { text: 'GAS', link: '/projects/gas' },
                            { text: 'Belay', link: '/projects/belay' },
                            { text: 'Integration', link: '/projects/integration' },
                            { text: 'Bear Map', link: '/projects/bearmap' }
                        ]
                    },
                    { text: 'Earlier Projects', link: '/projects/earlier' }
                ]
            },
            {
                items: [
                    { text: 'Contact', link: '/contact' },
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/soondubu137' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/yinfeng-lu/' }
        ],

        footer: {
            copyright: "&copy; 2024 Yinfeng Lu."
        },
    }
})
