import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Yinfeng Lu",
    description: "programming resume job-search career",
    srcDir: './src',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {
                text: 'Home', link: '/'
            },
            // {
            //     text: 'Profile', link: '/profile/'
            // },
            {
                text: 'Profile',
                items: [
                    { text: 'About Me', link: '/profile/about' },
                    { text: 'Related Courses', link: '/profile/related-courses' },
                    { text: 'More', link: '/profile/' }
                ]
            },
            {
                text: 'Projects', link: '/projects/'
            },
            {
                text: 'Notes', link: '/markdown-examples'
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
                    { text: 'Genomics Annotation Service', link: '/projects/gas' },
                    { text: 'Belay', link: '/projects/belay' },
                    { text: 'Earlier Projects', link: '/projects/earlier' }
                ]
            },
            {
                text: 'Notes',
                collapsed: true,
                items: [
                    { text: 'Notes', link: '/markdown-examples' },
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
