import {defineField} from "sanity";
import {LinkIcon} from '@sanity/icons'
import {PAGE_REFERENCES} from "../../constants";

export default defineField({
    name: 'annotationLinkInternal',
    title: 'Interne link',
    type: 'object',
    icon: LinkIcon,
    fields: [
        {
            name: 'title',
            title: 'Title',
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
    ]
})