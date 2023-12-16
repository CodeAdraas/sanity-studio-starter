import {DocumentIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export const TITLE = 'Pagina\'s'

export default defineType({
    name: 'page',
    title: TITLE,
    type: 'document',
    icon: DocumentIcon,
    groups: [
        {name: 'editorial', title: 'Content', default: true},
        {name: 'seo', title: 'SEO'},
    ],
    fields: [
        {
            name: 'title',
            title: 'Titel',
            type: 'string',
            validation: (Rule) => Rule.required(),
            group: 'editorial'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'title'},
            group: 'editorial'
        },
        {
            name: 'sections',
            title: 'Secties',
            type: 'array',
            of: [{type: 'pageSection'}],
            group: 'editorial',
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo.page',
            group: 'seo',
        }
    ],
    preview: {
        select: {
        active: 'active',
        seoImage: 'seo.image',
        title: 'title',
        },
        prepare(selection) {
            const {seoImage, title} = selection

            return {
                media: seoImage,
                title,
            }
        },
    },
})