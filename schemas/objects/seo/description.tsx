import {defineField} from 'sanity'

export default defineField({
    name: 'seo.description',
    title: 'Omschrijving',
    type: 'text',
    rows: 3,
    validation: (Rule) =>
        // TODO: translation
        Rule.max(150).warning('Longer descriptions may be truncated by search engines'),
})