import {defineField} from 'sanity'

export default defineField({
    name: 'seo.fragment.title',
    title: 'Titel',
    type: 'string',
    validation: R => R.max(50).warning('Een langere titel wordt mogelijk verkort door zoekmachines.'),
})