# Todo List

- [x] Implement contact form with
  - [x] https://www.emailjs.com/docs
  - [x] https://www.react-hook-form.com/get-started
- [ ] Add floating logo (::after) in all of the thumbnail cards for Jobs.
- [ ] Use Local fonts instead of using Fontshare CMS
- [ ] Add SeeMore technologies that I use in the homepage and maybe make a more detailed section about it in the Work, Services and About page.
- [ ] Modify getMediaqueryValue so instead returns the whole breakpoint rule (ex. returns => 'min-with: 768px', returns => 'max-with: 769px'). This way so I can use both min & max with different values
  - [ ] After, turn all of the style-props into mediaquery-based props { all: ..., xxsm: ...} so they work with the getCSSFromMediaQuery
- [x] Fix ScrollRestoration in nested pages not smooth
- [ ] 
- [ ] Make exhaustive list of all URLs of websites i worked in, and add a section in the bottom of Work that says
  - [ ] List all non-confidential projects
    - [ ] this should be an accordion that has a LogoGrid with all of the websites I worked in (with url on click)
- [ ] add height prop to divider component and fix services dividers
- [x] only use useMediaQuery state globally to improve performance and grab it from context.
- [x] use crypto.randomUUID() for all $keyId throught the app
- [ ] rework Button comp so the clickable/actionnable area is not misleading with the padding of the top-wrapper, basically, make the entire button action on click, not just the center
- [ ] rework HomeServices to use services.data instead of hardcoded data.
- [ ] rework Page CTAs to use a sharedCTA like sharedContact that changes the links, bgshape and the text, but keeps the style
- [x] create more import aliases and update all imports
- [x] Remove styled icons fluent-regular if its not needed, as I am using just fluent-filled icons.
- [ ] Create webp version of all image assets and create optimized fallbacks for browsers that don't support webp.
- [ ] Pass Section paddingTop and Bottom a standard number declared elsewhere to have similar distancing across all sections
- [ ] BG Shape
  - [ ] Fix BackgroundShape in Split content to no be direct child of Section, but instead be contained within the content
  - [ ] Give it a size prop, to use breakpoint sizes instead of fixed width %.
  - [ ] Standarize all abstract SVGs to have the same viewbox
- [ ] Refactor ImageMasked to use ImageResponsive as dependency 
- [x] Add Logo to Nav to make spacing for hamburger icon
- [x] Replace defaultProps for default Attributtes for optional props on all components
- [ ] Use better timing functions for transitions and animations that are just using ease
- [x] Footer
  - [x] Menu Lists
  - [x] privacy, terms and copyright
  - [ ] Footer Newsletter
- [ ] Try this for all shared components https://www.youtube.com/watch?v=eXRlVpw1SIQ&ab_channel=Joshtriedcoding
- [ ] Customize via props:
  - [ ] Add customStyles prop to all section components
  - [x] SplitContent Background shape rotation vs scroll
- [ ] Finish ImageResponsive Compontent to accept srcset and different versions of the image, and alt and more accessible attributes
- [ ] Make border in Card Component optional via props
- [ ] ...MoreJobs improvements
  - [ ] Abstract GenerateJobCardProps function and reuse it where its needed
  - [ ] Services and Job moreJobs cards are currently done differently within each of those Page components, make them have the same workflow
  - [ ] When the card's title (bottom) goes into two lines it doesn't match the layout of another card that has a one-line title.
- [ ] Playground layout (with more than one tool, not just component explorer)
- [ ] Input and Select Field with "\<label>"
- [ ] Blockquote with "\<blockquote>" or "\<q>" and "\<cite>"
- [ ] Add loading state before images and fonts load
- [ ] Look into lazy loading react router routes with route.lazy
- [ ] Animations
  - [ ] Add animation for route change
  - [ ] Logo hover animation
  - [ ] Reveal pages animation
  - [ ] Nav reveal animation
  - [ ] Heading each letter animation
    - [ ] recursion maybe? https://adueck.github.io/blog/recursively-modify-text-jsx-react/
- [ ] Embed calendly form instead of linking out of my porfolio
- [x] Change types of css values from 'string' to a more complex type that accepts `${number}${unit}` with template literals.
- [ ] Verify all uses of components with empty/partial props (even while typescript erros) to verify is being well protected for production.
- [x] Use this breakpoint system inspired in Tailwind and MiUI **(I did this with the getMediaQueryValue Util)**
  ```javascript
  {
    'xsm': '426px',
    // => @media (min-width: 426px) { ... }

    'sm': '601px',
    // => @media (min-width: 640px) { ... }

    'md': '769px',
    // => @media (min-width: 768px) { ... }

    'lg': '1025px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1281px',
    // => @media (min-width: 1280px) { ... }

    'xxl': '1537px',
    // => @media (min-width: 1536px) { ... }
  }
  ```