import {defineField} from 'sanity'

export default defineField({
    name: 'accordionGroup',
    type: 'object',
    title: 'Accordion groep',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titel',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'body',
            type: 'accordionBody',
            title: 'Inhoud',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'darkIcon',
            type: 'boolean',
            title: 'Donker icoontje?',
            initialValue: false
        }
    ]
})