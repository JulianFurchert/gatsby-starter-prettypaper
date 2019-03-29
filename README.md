# PrettyPaper
Pretty Paper is a Gatsby Starter for creating documentation, style guides or design systems. With Pretty Paper, you can easily write your documentation using Markdown. It supports all basic Markdown features such as headings, paragraphs, block quotes or lists.  To quickly write design specifications the syntax has been extended with custom blocks for colors, fonts and text styles.

# Quick Start
Use the Gatsby CLI to create a new site, specifying the pretty paper starter.

```sh
# create a new Gatsby site using the Pretty Paper starter
gatsby new my-docs https://github.com/JulianFurchert/gatsby-starter-prettypaper

# Start developing.
cd my-docs/
gatsby develop

# Open the source code and start editing!
```

# Custom Blocks
Custom Blocks are an extension of standard Markdown syntax. All Blocks are written as tagged Markdown code blocks. [see all Custom Block in action](https://pretty-paper.netlify.com/Blocks/colors/)

## Color
The color block is useful to document a single color or color palettes like primaries or the main brand scheme.

**example with minium props**

````
```color
hex: #454CFF
hex: #E84374
hex: #FC7845
```
````

**example with all props**

````
```color
hex: #454CFF | name: blue | usage: Links and Buttons
hex: #E84374 | name: red | usage: Background Color
hex: #FC7845 | name: orange | usage: Background Color
```
````

## Font
The font block is useful to document the font stack of your design system. Most design systems include 1-3 fonts.

**example with minium props**

````
```font
family: Open Sans | weight: 300
family: Open Sans | weight: 400
family: Open Sans | weight: 700
```
````

**example with all props**

````
```font
family: Open Sans | weight: 400 | style: italic
```
````

## Textstyle
With the textstyle block, you can easily define a set of text styles for example for headings, paragraphs or captions.

**example with minium props**
````
```textstyle
name: Headline | family: Open Sans | weight: 700 | size: 32px
name: Paragraph | family: Open Sans |  weight: 400 | size: 16px
name: Caption | family: Open Sans |  weight: 400 | size: 14px
```
````

**example with all props**

````
```textstyle
name: Quote | family: Open Sans |  weight: 400 | style: italic | size: 16px | lineHeight: 1.4 | letterSpacing: 4px
```
````

## Gylphs
The glyphs block is useful to show the characters of a custom font.

**example with minium props**

````
```glyphs
family: Open Sans
weight: 400
```
````

**example with all props**
````
```glyphs
family: Open Sans
weight: 400
style: italic
characters: O,P,E,N
```
````

## Lottie
With the lottie block, you can quickly add a Lottie animation to your documentation. For example to show and define transitions.

**example with minium props**
````
```lottie
src: ../_assets/lottie/example_1200x800.json
```
````

**example with all props**

````
```lottie
src: ../_assets/lottie/example_1200x800.json
caption : example caption text
```
````

## Video
With the video block, you can quickly add a mp4 video to your documentation. For example to show and explain animations or videos.

**example with minium props**
````
```video
src: ../_assets/videos/blue_1200x800.mp4
```
````

**example with all props**
````
```video
src: ../_assets/videos/blue_1200x800.mp4
caption : example caption text
autoplay: true
```
````

## Image
With the image block, you can quickly add images to yor documentation. For example to show and define illustrations.

**example with minium props**

````
```image
src: ../_assets/img/image_large.jpg
```
````

**example with all props**

````
```image
alt: example alt text
src: ../_assets/img/image_large.jpg
caption: example caption text
```
````

## Gallery
With the gallery Block, you can quickly create a image gallery.

**example with minium props**

````
```gallery
src: ../_assets/img/image_medium.jpg
src: ../_assets/img/image_medium.jpg
src: ../_assets/img/image_medium.jpg
```
````

**example with all props and small as option**

````
```gallery | small
src: ../_assets/img/image_medium.jpg | alt: example alt text
src: ../_assets/img/image_medium.jpg | alt: example alt text
src: ../_assets/img/image_medium.jpg | alt: example alt text
src: ../_assets/img/image_medium.jpg | alt: eaxmple alt text
```
````

# Author
Julian Furchert [E-Mail](https://twitter.com/fschultz_) / [Website](https://stinkstudios.com)

