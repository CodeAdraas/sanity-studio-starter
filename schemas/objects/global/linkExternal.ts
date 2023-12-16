import {EarthGlobeIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
    title: 'Externe link',
    name: 'linkExternal',
    icon: EarthGlobeIcon,
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
        },
        {
            name: 'targetBlank',
            title: 'Open in nieuw tabblad?',
            type: 'boolean',
            initialValue: true,
        },
    ],
    preview: {
        select: {
            title: 'title',
            url: 'url',
        },
        prepare({title, url}) {
            let subtitle = []
            if (url) {
                subtitle.push(`→ ${url}`)
            }

            return {
                // media: image,
                subtitle: subtitle.join(' '),
                title,
            }
        },
    },
})
