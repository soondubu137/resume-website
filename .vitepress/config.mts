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
            {
                text: 'Profile', link: '/profile/'
            },
            {
                text: 'Projects', link: '/projects/'
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
                text: "Profile",
                collapsed: true,
                items: [
                    { text: 'About Me', link: '/profile/about' },
                    { text: 'Related Courses', link: '/profile/about' },
                ]
            },
            {
                text: 'Projects',
                collapsed: true,
                items: [
                    { text: 'project1', link: '/projects/test' },
                    { text: 'project2', link: '/projects/test' },
                    { text: 'project3', link: '/projects/test' },
                    { text: 'project4', link: '/projects/test' },
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
