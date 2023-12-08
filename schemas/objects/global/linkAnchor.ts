import {defineField} from 'sanity'
import {EnterRightIcon} from '@sanity/icons'

export default defineField({
    name: 'linkAnchor',
    title: 'Haak link',
    type: 'object',
    icon: EnterRightIcon,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'anchorId',
            type: 'string',
            title: 'Haak ID',
        },
    ],
    preview: {
        select: {
            title: 'title',
            anchorId: 'url',
        },
        prepare(selection) {
            const {title, anchorId} = selection

            let subtitle = []
            if (anchorId) {
                subtitle.push(`→ ${anchorId}`)
            }

            return {
                // media: image,
                subtitle: subtitle.join(' '),
                title,
            }
        },
    },
})