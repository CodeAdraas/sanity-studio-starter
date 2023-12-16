import {defineField} from 'sanity'

export default defineField({
    name: 'module.fragment.accordionGroup',
    type: 'object',
    title: 'Accordion groep',
    fields: [
        {
            name: 'title',
            title: 'Titel',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'body',
            title: 'Inhoud',
            type: 'module.fragment.accordionBody',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'darkIcon',
            title: 'Donker icoontje?',
            type: 'boolean',
            initialValue: false
        }
    ]
})