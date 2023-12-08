import {RocketIcon} from '@sanity/icons'
import {defineField} from 'sanity'
import {PAGE_REFERENCES} from '../../../constants'

export default defineField({
    title: 'CTA link',
    name: 'linkCta',
    type: 'object',
    icon: RocketIcon,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'reference',
            type: 'reference',
            weak: true,
            validation: (Rule) => Rule.required(),
            to: PAGE_REFERENCES,
        },
        {
            name: 'anchorId',
            type: 'string',
            title: 'Haak ID',
        },
    ],
    preview: {
        select: {
            reference: 'reference',
            referenceTitle: 'reference.title',
            anchorId: 'anchorId',
            title: 'title',
        },
        prepare(selection) {
            const {
                reference,
                referenceTitle,
                anchorId,
                title,
            } = selection

            let subtitle = []
            if (reference) {
                subtitle.push([`→ ${referenceTitle || reference?._id}`])
            } else if (anchorId) {
                subtitle.push(`→ ${anchorId}`)
            } else {
                subtitle.push('(Nonexistent document reference)')
            }

            return {
                // media: image,
                subtitle: subtitle.join(' '),
                title,
            }
        },
    },
})
