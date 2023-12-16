import {defineField} from 'sanity'

export default defineField({
    name: 'notFoundPage',
    title: '404 pagina',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Titel',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'body',
            title: 'Inhoud',
            type: 'text',
            rows: 2,
        }
    ],
})