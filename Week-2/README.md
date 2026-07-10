# Week 2 Notes: HTML and CSS Fundamentals (HTML5 and CSS3)

Code Link: [Github](https://github.com/avishekchy45/Spring-2026-IP/tree/main/Week-2)

## 1. HTML Document Structure [Code](index.htm)

- What is HTML?
  - HyperText Markup Language
  - Standard markup language used to create and structure the content of web pages
  - Acts as the skeleton or fundamental framework of almost every website on the internet

- HTML5 overview
  - Latest version of HTML
  - Introduced native multimedia support (without needing plugins like Adobe Flash), new input types(e.g., date, email, range), new attributes (e.g., placeholder, required), offline data storage capabilities, and semantic tags for clearer, more accessible web design

- HTML tags, elements, and attributes
  - Tags: Used to signal the start and end of a structural component.
  - Elements: Complete, functional unit consisting of the opening tag, the content inside, and the closing tag combined.
  - Attributes: Special properties placed inside an opening tag that provide extra information, settings, or styling to modify the behavior of the element.

- Types of HTML Elements
  - Block-level Elements: These automatically start on a new line and stretch to take up the full available width of the page. Examples: `<div>`, `<p>`, `<h1>` through `<h6>`, and `<form>`.
  - Inline-level Elements: These do not start on a new line and only take up as much width as their content requires. Examples: `<a>`, `<span>`, `<strong>`, and `<img>`.
  - Void (Self-Closing) Elements: Elements that only have a starting tag and do not wrap any text content or require a closing tag. Examples: `<br>`, `<hr>`, and `<img>` for images.

- Common HTML Attributes
  - Global Attributes: Attributes that can be legally attached to any HTML element. Examples: `id` (a unique identifier), `class` (assigns a CSS styling group), and `style` (inline CSS rules).
  - Element-Specific Attributes: Properties that only apply to certain tags. Examples: `href` attribute belongs primarily to the `<a>` tag to specify a destination link, `src` and `alt` attributes belong to the `<img>` tag to supply the image path and description.
  - Boolean Attributes: Attributes that do not require a value. Examples: `disabled` for `form inputs` or `autoplay` for `videos`.

- Difference between `<head>` and `<body>`
  - The `<head>` is the invisible, technical control center of your webpage. It holds metadata, page titles, and links to CSS or scripts.
  - The `<body>` is the visual canvas. It contains all the actual content (text, images, and videos) that users directly interact with on the screen.

- Importance of `<!DOCTYPE html>`
  - Forces the browser into **Standards** Mode, avoiding **Quirks** Mode
  - Process your HTML and CSS according to modern W3C specifications
  - Different browsers might interpret the exact same code differently if there is no DOCTYPE to unify their rendering engine
  - Ensures your page renders consistently, and avoids rendering bugs
  - Case-Insensitive

- Character encoding (`UTF-8`)
  - UTF-8 (Unicode Transformation Format—8-bit) is the world's most widely used character encoding
  - Allows the browser to show emojis, non-English scripts, and special characters

- Viewport meta tag
  - Tells mobile browsers how to control a webpage's dimensions and scaling
  - Without it, mobile browsers assume your site is made only for desktops

- Comments in HTML
  - Written using the syntax `<!-- Your comment here -->`

---

## 2. Semantic HTML5 Elements [Code](semantic.htm)

- What is Semantic HTML?
  - Uses tags that clearly define the purpose of a webpage's content both to the browser and the developer
  - Helps search engines understand and rank your site
  - Improves accessibility for screen readers

- Common semantic elements

  ```
  <header>
  <nav>
  <main>
  <section>
  <article>
  <aside>
  <footer>
  <figure>
  <figcaption>
  ```

- Semantic vs Non-semantic elements
  - Semantic Structure:
    ```html
    <header>
      <h1>Site Title</h1>
      <nav>Home</nav>
    </header>
    ```
  - Non-Semantic Structure:
    ```html
    <div id="header">
      <div class="logo">Site Title</div>
      <div class="nav-links">Home</div>
    </div>
    ```

Semantic HTML improves document meaning for browsers, search engines, and assistive technologies. Using native semantic elements correctly also improves accessibility. ([DevDoc][accessibility])

---

## 3. Text Formatting [Code](text_formatting.htm)

- Heading tags
- Paragraph
- Line break
- Horizontal rule
- Strong vs Bold
- Emphasis vs Italic
- Mark
- Small
- Superscript
- Subscript
- Blockquote
- Code
- Collapsible Section

---

## 4. Lists [Code](lists.htm)

- Ordered List
- Unordered List
- Description List
- Nested Lists

---

## 5. Tables [Code](tables.htm)

- Table structure
- Rows
- Columns
- Header
- Caption
- colspan
- rowspan

---

## 6. Images [Code](images.htm)

- Image formats
- Relative vs Absolute path
- Image optimization basics
- Importance of `alt`

---

## 7. Hyperlinks [Code](links.htm)

- Absolute URL
- Relative URL
- Internal links
- External links
- Email links
- Telephone links
- Opening links in new tabs

---

## 8. Forms [Code](forms.htm)

- Purpose of forms
- Form structure
- Common input types
- Labels
- Buttons
- GET vs POST
- Placeholder
- Required fields

HTML5 introduces semantic input types (such as `email`, `url`, `number`, and `date`) and built-in client-side validation, but server-side validation is still essential. ([SitePoint][forms])

---

## 9. Multimedia [Code](multimedia.htm)

- Audio
- Video
- Controls
- Multiple source files
- Browser compatibility

---

## 10. Accessibility Basics

- What is Web Accessibility?
- Why accessibility matters
- Screen readers
- Keyboard navigation
- Semantic HTML
- Alternative text (`alt`)
- Labels for forms
- Meaningful link text

Correct semantic HTML, descriptive `alt` text, and associated `<label>` elements are foundational accessibility practices. ([DevDoc][accessibility])

---

## 11. HTML Validation

- Why validate HTML
- Common HTML errors
- Browser error tolerance
- Benefits of validation

Official validator: [https://validator.w3.org](https://validator.w3.org)

HTML validation checks for structural and specification errors, such as missing required attributes or incorrect element usage, helping produce more robust markup. ([SitePoint][markup-validation])

---

## 12. CSS Introduction

- What is CSS?
  - Cascading Style Sheets
  - Standard stylesheet language used to design and format the visual presentation of web pages
  - One of the three core pillars of the web, working right alongside HTML and JavaScript.

- Why CSS is needed?
  - Separation of content and presentation

---

## 13. Inline vs Internal vs External CSS [Code](inline-internal-external-css.htm)

- Inline CSS
- Internal CSS
- External CSS
- Advantages and disadvantages
- Which approach is recommended?

---

## 14. CSS Selectors [Code](selectors.htm)

- Universal selector (`*`)
- Element selector
- ID selector
- Class selector
- Group selector
- Descendant selector
- Child selector
- Attribute selector
- Pseudo-class (`:hover`, `:focus`)

CSS selectors define which elements receive styling, and combinators describe relationships (such as descendant or child) between elements. ([MDN Web Docs][selectors])

---

## Recommended Exercises

By the end of Week 2, complete the following practical tasks:

1. Create a personal profile webpage using semantic HTML5 elements.
2. Design a university course registration form using HTML5 form controls and built-in validation (`required`, `type="email"`, etc.).
3. Create a class routine or student result table.
4. Build a webpage containing images, hyperlinks, lists, audio, and video.
5. Apply inline, internal, and external CSS to compare their effects.
6. Style the webpage using element, class, ID, descendant, and child selectors.
7. Validate the HTML document using the W3C HTML Validator and correct any reported errors.


[accessibility]: https://devdoc.net/web/developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML.html/ "HTML: A good basis for accessibility - Learn web development | MDN"
[forms]: https://www.sitepoint.com/html5-forms-markup/ "HTML5 Forms: The Markup — SitePoint"
[markup-validation]: https://www.sitepoint.com/validating-html5-documents/ "Validating HTML5 Documents - SitePoint"
[selectors]: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators "CSS selectors and combinators - CSS | MDN"
