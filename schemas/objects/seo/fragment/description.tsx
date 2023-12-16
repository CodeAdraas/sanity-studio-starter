import {defineField} from 'sanity'

export default defineField({
    name: 'seo.fragment.description',
    title: 'Omschrijving',
    type: 'text',
    rows: 3,
    validation: R => R.max(150).warning('Een langere omschrijving wordt mogelijk verkort door zoekmachines.'),
})