import {LinkIcon} from '@sanity/icons'
import {defineField} from 'sanity'
import {PAGE_REFERENCES} from '../../../constants'

export default defineField({
    title: 'Interne link',
    name: 'linkInternal',
    type: 'object',
    icon: LinkIcon,
    fields: [
        {
            name: 'title',
            title: 'Titel',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'reference',
            title: 'Referentie',
            type: 'reference',
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
        prepare({
            reference,
            referenceProductTitle,
            referenceTitle,
            title,
        }) {
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
