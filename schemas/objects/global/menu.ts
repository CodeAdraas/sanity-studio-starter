import {defineField} from 'sanity'

export default defineField({
    name: 'menu',
    title: 'Menu',
    type: 'object',
    fields: [
        {
            name: 'links',
            title: 'Links',
            type: 'menuLinks',
        }
    ],
})