import {defineField} from 'sanity'

export default defineField({
    name: 'seo.home',
    title: 'SEO',
    type: 'object',
    options: {
        collapsed: false,
        collapsible: true,
    },
    fields: [
        defineField({
            name: 'title',
            title: 'Titel',
            type: 'seo.title',
        }),
        defineField({
            name: 'description',
            title: 'Omschrijving',
            type: 'seo.description',
        }),
        defineField({
            name: 'image',
            title: 'Afbeelding',
            type: 'image',
        }),
    ],
    validation: (Rule) => Rule.required(),
})