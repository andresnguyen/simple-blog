# A simple blog website

# structure of HTML

-   div.header-wrapper
    -   header.header
        -   ul.navlink
            -   li.navlink\_\_item\*5
                -   a
        -   div.logo
            -   img.logo\_\_img
-   section.section-banner
    -   div.text-box
        -   span.text-box\_\_label
        -   h1.text-box\_\_title
        -   div.text-box\_\_footer
            -   span\*3 > span (nth(2))
-   section.section-main

    -   div.blog-container

        -   div.blog
            -   blog\_\_img
            -   blog\_\_label
            -   blog\_\_title
            -   blog\_\_footer
                -   span\*2
        -   div.blog.blog--fluid
            -   blog\_\_img
            -   blog\_\_label
            -   blog\_\_title
            -   blog\_\_footer
                -   span\*2
            -   blog\_\_desc
        -   pagination
            -   pagination\_\_item--active
            -   pagination\_\_item--disable

    -   div.sidebar

        -   div.author
        -   div.featured-posts
        -   div.category
            -   .category\_\_header
            -   .category-list
                -   .category-list\_\_item\*5
        -   div.social-media

            -   .social-media\_\_header
            -   .socical-media-list
                -   .socical-media-list\_\_item
                    -   i
                    -   p
                    -   p

        -   div.tags
            .tags**header
            .tags-list
            .tags-list**item

-   section.section-ins

    -   section-ins\_\_title
    -   image-list
        -   image-list\_\_item

-   div.footer-wrapper
    -   footer.footer
        -   footer\_\_title
        -   footer\_\_nav
        -   footer-icons
        -   p

# Power Of SCSS

1. Variables
2. Nested code
    - Should nested 2 level
3. Mixin
    - declare: @mixin minxinName() {}
    - how to use: @include mixinName()
    - use if-else
    - default value
4. import
    - \_variables.scss
    - \_mixins.scss
    - @import "path"
5. responsive
6. function
7. loop

# BEM: Block\_\_Element--Modifier

-   Man is Block
-   Elements of Man: man\_\_ear, man\_\_noise, man\_\_eyes, man\*\*leg
-   Modifier of Man: man--tall, man--short, man--fat, man--thin
-   Modifier of Man's elements: man\_\_leg--tall, man\_\_leg--short
-   Note
    -   block is general (common) css
    -   modifier is individual css
    -   Example:
        -   all people have brain, heart is block
        -   we have short people, smart people is modifier
-   How do you deal with name of many nested block

    -   cart\_\_banner\_\_title ==> cart-banner\_\_title

-   block: noun
-   modifier: adjective

# general CSS selector

-   tag name
-   id name (for JavaScript)
-   class name (recommended)
-   group (.title, .name)
-   all (\*)
-   descendant (spacing)
-   children (>)
-   adjacent sibling (+)
-   general siblings (~)
-   attribute (a[href = ""])
-   pseudo classes

    -   :first-child
    -   :last-child
    -   :nth-child()
    -   :nth-last-child()
    -   :first-of-type
    -   :last-of-type
    -   :nth-of-type()
    -   :nth-last-of-type()

    -   :not

-   pseudo elements
    -   ::before
    -   ::after

# Remember read CSS from left to right

# Some vocabulary class name

-   container
-   wrapper
-   product
-   card
-   header
-   footer
-   main
-   section-name
-   img
-   title
-   content
-   desc
-   primary
-   secondary
-   spacing
-   banner
-   navbar
-   slider
-   sticky-menu
-   name
-   info
-   warning
-   thumbnail
-   item
-   price
-   price-discount
-   price-sale
-   rating
-   review
-   view-more
-   breadcrumb
-   brand
-   tag
-   coupon
-   label
-   btn
-   quantity
-   profile
-   shopping-card
-   search
-   category
-   alert
-   carousel
-   dropdown
-   modal
-   progress
-   spinner
-   toast
-   pagination
-   tooltip
-   devider
-   timeline
-   message
-   skeleton
-   pop-confirm
-   drawer
-   collapse
-   calender
-   avatar
-   upload
