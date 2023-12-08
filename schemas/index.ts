import annotationLinkExternal from './annotations/linkExternal'
import annotationLinkInternal from './annotations/linkInternal'
import annotationLinkAnchor from './annotations/linkAnchor'
const annotations = [
    annotationLinkAnchor,
    annotationLinkExternal,
    annotationLinkInternal
]

import page from "./documents/page"
const documents = [page]

import home from "./singletons/home"
import settings from "./singletons/settings"
const singletons = [home, settings]

import body from './blocks/body'
const blocks = [body]

import accordionGroup from './objects/accordionGroup'
import accordionBody from './objects/accordionBody'
import linkAnchor from './objects/global/linkAnchor'
import linkCta from './objects/global/linkCta'
import linkExternal from './objects/global/linkExternal'
import linkInternal from './objects/global/linkInternal'
import links from './objects/global/links'
import menu from './objects/global/menu'
import moduleAccordion from './objects/module/accordion'
import notFoundPage from './objects/global/notFoundPage'
import pageSection from './objects/pageSection'
import seo from './objects/seo/seo'
import seoHome from './objects/seo/home'
import seoPage from './objects/seo/page'
import seoTitle from './objects/seo/title'
import seoDescription from './objects/seo/description'
const objects = [
    accordionGroup,
    accordionBody,
    linkAnchor,
    linkCta,
    linkExternal,
    linkInternal,
    links,
    menu,
    notFoundPage,
    pageSection,
    moduleAccordion,
    seo,
    seoHome,
    seoPage,
    seoTitle,
    seoDescription
]

export const schemaTypes = [...annotations, ...singletons, ...objects, ...blocks, ...documents]