import {HomeIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export const TITLE = 'Home'

export default defineType({
    name: 'home',
    title: TITLE,
    type: 'document',
    icon: HomeIcon,
    groups: [
        {
            default: true,
            name: 'editorial',
            title: 'Editorial',
        },
        {
            name: 'seo',
            title: 'SEO',
        },
    ],
    fields: [
        {
            name: 'sections',
            title: 'Secties',
            type: 'array',
            of: [{type: 'pageSection'}],
            group: 'editorial',
        },
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo.home',
            group: 'seo',
        }),
    ],
    preview: {
        prepare() {
            return {
                subtitle: 'Index',
                title: TITLE,
            }
        },
    },
})