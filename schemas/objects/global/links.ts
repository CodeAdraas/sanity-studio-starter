import {defineField} from 'sanity'

export default defineField({
    name: 'menuLinks',
    title: 'Menu links',
    type: 'array',
    of: [
        {type: 'linkAnchor'},
        {type: 'linkCta'},
        {type: 'linkInternal'},
        {type: 'linkExternal'},
    ],
})