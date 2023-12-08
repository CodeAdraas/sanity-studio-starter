import {CogIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export const TITLE = 'Instellingen'

export default defineType({
    name: 'settings',
    title: TITLE,
    type: 'document',
    icon: CogIcon,
    groups: [
        {
            default: true,
            name: 'navigation',
            title: 'Navigation',
        },
        {
            name: 'notFoundPage',
            title: '404 page',
        },
        {
            name: 'socials',
            title: 'Socials',
        },
        {
            name: 'seo',
            title: 'SEO',
        },
    ],
    fields: [
        // Menu
        defineField({
            name: 'menu',
            title: 'Menu',
            type: 'menuSettings',
            group: 'navigation',
        }),
        // Not found page
        defineField({
            name: 'notFoundPage',
            title: '404 page',
            type: 'notFoundPage',
            group: 'notFoundPage',
        }),
        // SEO
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo',
            group: 'seo',
        }),
    ],
    preview: {
        prepare() {
            return {
                title: TITLE,
            }
        },
    },
})