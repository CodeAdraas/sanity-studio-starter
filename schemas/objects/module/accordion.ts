import {StackCompactIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
    name: 'module.accordion',
    title: 'Accordion module',
    type: 'object',
    icon: StackCompactIcon,
    fields: [
        {
            name: 'groups',
            title: 'Groepen',
            type: 'array',
            of: [{type: 'accordionGroup'}],
        },
    ],
    preview: {
        select: {
            groups: 'groups',
        },
        prepare({groups}) {
            let groupCount = groups?.length ?? 0
            return {
                title: 'Accordion module',
                subtitle: `${groupCount} groep${groupCount == 0 || groupCount > 1 ? 'en' : ''}`
            }
        }
    }
})