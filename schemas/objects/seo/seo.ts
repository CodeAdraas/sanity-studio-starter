import {defineField} from 'sanity'

export default defineField({
    name: 'seo',
    title: 'SEO',
    type: 'object',
    group: 'seo',
    description: 'Standaardinstellingen voor elke pagina',
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
    ],
    validation: (Rule) => Rule.required(),
})