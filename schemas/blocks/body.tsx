import { defineField } from "sanity";

export default defineField({
    name: 'body',
    title: 'Body',
    type: 'array',
    of: [
        {
            lists: [
                {title: 'Bullet', value: 'bullet'},
                {title: 'Numbered', value: 'number'},
            ],
            marks: {
                decorators: [
                    {title: 'Italic', value: 'em'},
                    {title: 'Strong', value: 'strong'},
                ],
                annotations: [
                    {
                        name: 'annotationLinkInternal',
                        type: 'annotationLinkInternal',
                    },
                    {
                        name: 'annotationLinkExternal',
                        type: 'annotationLinkExternal',
                    },
                    {
                        name: 'annotationLinkAnchor',
                        type: 'annotationLinkAnchor',
                    }
                ],
            },
            type: 'block'
        },
        {type: 'module.accordion'}
    ]
})