import {LinkIcon} from '@sanity/icons'
import {defineField} from 'sanity'
import {PAGE_REFERENCES} from '../../../constants'

export default defineField({
    title: 'Interne link',
    name: 'linkInternal',
    type: 'object',
    icon: LinkIcon,
    fields: [
        // Title
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        // Reference
        {
            name: 'reference',
            type: 'reference',
            title: 'Referentie',
            weak: true,
            validation: (Rule) => Rule.required(),
            to: PAGE_REFERENCES,
        },
    ],
    preview: {
        select: {
            reference: 'reference',
            referenceProductTitle: 'reference.store.title',
            referenceTitle: 'reference.title',
            title: 'title',
        },
        prepare(selection) {
            const {
                reference,
                referenceProductTitle,
                referenceTitle,
                title,
            } = selection

            let subtitle = []
            if (reference) {
                subtitle.push([`→ ${referenceTitle || referenceProductTitle || reference?._id}`])
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