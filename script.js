const htmlTricks = [
  {
    id: 1,
    title: "Auto-Focus an Input",
    description:
      "Use the autofocus attribute to focus an input field automatically on page load.",
    code: '<input type="text" name="username" autofocus />',
    demoHtml: '<input type="text" name="username" autofocus />',
  },
  {
    id: 2,
    title: "Email Input Validation",
    description:
      "HTML5 provides built-in validation using the type='email' attribute.",
    code: '<input type="email" required />',
    demoHtml: '<input type="email" required />',
  },
  {
    id: 3,
    title: "Textarea Placeholder",
    description:
      "Use the placeholder attribute inside a for default guidance text.",
    code: '<textarea placeholder="Type your message here..."></textarea>',
    demoHtml: '<textarea placeholder="Type your message here..."></textarea>',
  },
  {
    id: 4,
    title: "Disabled Input Field",
    description: "Prevent user interaction by disabling a form field.",
    code: '<input type="text" value="Disabled" disabled />',
    demoHtml: '<input type="text" value="Disabled" disabled />',
  },
  {
    id: 5,
    title: "Pre-filled Input Value",
    description: "Set a default value for a form input.",
    code: '<input type="text" value="John Doe" />',
    demoHtml: '<input type="text" value="John Doe" />',
  },
  {
    id: 6,
    title: "Input with Maxlength",
    description: "Limit the number of characters allowed in an input field.",
    code: '<input type="text" maxlength="10" />',
    demoHtml: '<input type="text" maxlength="10" />',
  },
  {
    id: 7,
    title: "Readonly Input Field",
    description: "Make the input uneditable while allowing selection.",
    code: '<input type="text" value="Read-only" readonly />',
    demoHtml: '<input type="text" value="Read-only" readonly />',
  },
  {
    id: 8,
    title: "Required Field",
    description: "Make sure a form field is filled before submission.",
    code: '<input type="text" required />',
    demoHtml: '<input type="text" required />',
  },
  {
    id: 9,
    title: "Checkbox Group",
    description: "Allow multiple selections using checkboxes.",
    code: '<input type="checkbox" name="fruit" value="apple" /> Apple\n<input type="checkbox" name="fruit" value="banana" /> Banana',
    demoHtml:
      '<input type="checkbox" name="fruit" value="apple" /> Apple<br><input type="checkbox" name="fruit" value="banana" /> Banana',
  },
  {
    id: 10,
    title: "Radio Button Group",
    description: "Allow a single selection from a group using radio buttons.",
    code: '<input type="radio" name="gender" value="male" /> Male\n<input type="radio" name="gender" value="female" /> Female',
    demoHtml:
      '<input type="radio" name="gender" value="male" /> Male<br><input type="radio" name="gender" value="female" /> Female',
  },
  {
    id: 11,
    title: "Basic HTML Structure",
    description:
      "The fundamental boilerplate for any HTML page, including doctype, html, head, and body tags.",
    code: `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Document</title>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n</body>\n</html>`,
    demoHtml: "<h1>Hello, World!</h1>",
  },
  {
    id: 12,
    title: "Image with Alt Text",
    description:
      "Display an image on a webpage, providing essential `alt` text for accessibility and fallback.",
    code: '<img src="https://placehold.co/150x100/ADD8E6/000000?text=Placeholder" alt="A simple placeholder image" style="max-width:100%; height:auto;">',
    demoHtml:
      '<img src="https://placehold.co/150x100/ADD8E6/000000?text=Placeholder" alt="A simple placeholder image" style="max-width:100%; height:auto;">',
  },
  {
    id: 13,
    title: "Hyperlink (Anchor Tag)",
    description:
      "Create a clickable link to navigate to another webpage or a different section within the same page.",
    code: '<a href="https://www.google.com" target="_blank">Visit Google</a>',
    demoHtml:
      '<a href="https://www.google.com" target="_blank">Visit Google</a>',
  },
  {
    id: 14,
    title: "Input Field with Label",
    description:
      "Create a text input field for user entry, properly associated with a label for accessibility.",
    code: '<label for="username">Username:</label>\n<input type="text" id="username" name="username" placeholder="Enter your username">',
    demoHtml:
      '<label for="demo-username">Username:</label><input type="text" id="demo-username" name="demo-username" placeholder="Enter your username">',
  },
  {
    id: 15,
    title: "Simple Button",
    description:
      "Create a clickable button for user interaction, capable of triggering JavaScript functions or form submissions.",
    code: '<button type="button" onclick="alert(\'Button Clicked!\')">Click Me</button>',
    demoHtml:
      '<button type="button" onclick="alert(\'Button Clicked!\')">Click Me</button>',
  },
  {
    id: 16,
    title: "Ordered List",
    description:
      "Create a numbered list of items using the <ol> tag and <li> for list items.",
    code: "<ol>\n  <li>First item</li>\n  <li>Second item</li>\n  <li>Third item</li>\n</ol>",
    demoHtml:
      "<ol><li>First item</li><li>Second item</li><li>Third item</li></ol>",
  },
  {
    id: 17,
    title: "Unordered List",
    description:
      "Create a bulleted list of items using the <ul> tag and <li> for list items.",
    code: "<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n  <li>Cherry</li>\n</ul>",
    demoHtml: "<ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>",
  },
  {
    id: 18,
    title: "Definition List",
    description:
      "Present a list of terms and their corresponding descriptions using <dl>, <dt>, and <dd> tags.",
    code: "<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets</dd>\n</dl>",
    demoHtml:
      "<dl><dt>HTML</dt><dd>HyperText Markup Language</dd><dt>CSS</dt><dd>Cascading Style Sheets</dd></dl>",
  },
  {
    id: 19,
    title: "Basic Table",
    description: "Structure tabular data with rows and columns using ",
    code: '<table style="width:100%; border-collapse: collapse;">\n<thead>\n  <tr style="background-color:#f2f2f2;">\n    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Header 1</th>\n    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Header 2</th>\n  </tr>\n</thead>\n<tbody>\n  <tr>\n    <td style="padding: 8px; border: 1px solid #ddd;">Data 1A</td>\n    <td style="padding: 8px; border: 1px solid #ddd;">Data 1B</td>\n  </tr>\n  <tr>\n    <td style="padding: 8px; border: 1px solid #ddd;">Data 2A</td>\n    <td style="padding: 8px; border: 1px solid #ddd;">Data 2B</td>\n  </tr>\n</tbody>\n</table>',
    demoHtml:
      '<table style="width:100%; border-collapse: collapse;"><thead><tr style="background-color:#f2f2f2;"><th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Header 1</th><th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Header 2</th></tr></thead><tbody><tr><td style="padding: 8px; border: 1px solid #ddd;">Data 1A</td><td style="padding: 8px; border: 1px solid #ddd;">Data 1B</td></tr><tr><td style="padding: 8px; border: 1px solid #ddd;">Data 2A</td><td style="padding: 8px; border: 1px solid #ddd;">Data 2B</td></tr></tbody></table>',
  },
  {
    id: 20,
    title: "Basic Form Structure",
    description:
      "Create a simple HTML form for user input, including a submit button.",
    code: '<form action="/submit-form" method="post" style="display: flex; flex-direction: column; gap: 10px; max-width: 300px;">\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name" required>\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email" required>\n  <button type="submit">Submit</button>\n</form>',
    demoHtml:
      '<form action="/submit-form" method="post" style="display: flex; flex-direction: column; gap: 10px; max-width: 300px;"><label for="demo-name">Name:</label><input type="text" id="demo-name" name="name" required><label for="demo-email">Email:</label><input type="email" id="demo-email" name="email" required><button type="submit">Submit</button></form>',
  },
  {
    id: 21,
    title: "Text Area",
    description:
      "Create a multi-line text input field using the tag for longer user comments or messages.",
    code: '<label for="comments">Comments:</label><br>\n<textarea id="comments" name="comments" rows="4" cols="30" placeholder="Enter your comments here..." style="resize: vertical;"></textarea>',
    demoHtml:
      '<label for="demo-comments">Comments:</label><br><textarea id="demo-comments" name="comments" rows="4" cols="30" placeholder="Enter your comments here..." style="resize: vertical;"></textarea>',
  },
  {
    id: 22,
    title: "Dropdown (Select)",
    description: "Create a single-selection dropdown menu using the ",
    code: '<label for="fruits">Choose a fruit:</label>\n<select id="fruits" name="fruits">\n  <option value="apple">Apple</option>\n  <option value="banana">Banana</option>\n  <option value="orange">Orange</option>\n</select>',
    demoHtml:
      '<label for="demo-fruits">Choose a fruit:</label><select id="demo-fruits" name="fruits"><option value="apple">Apple</option><option value="banana">Banana</option><option value="orange">Orange</option></select>',
  },
  {
    id: 23,
    title: "Radio Buttons",
    description:
      "Allow users to select only one option from a group using radio buttons with the same name attribute.",
    code: '<p>Choose your favorite color:</p>\n<input type="radio" id="red" name="color" value="red">\n<label for="red">Red</label><br>\n<input type="radio" id="blue" name="color" value="blue">\n<label for="blue">Blue</label><br>\n<input type="radio" id="green" name="color" value="green">\n<label for="green">Green</label>',
    demoHtml:
      '<p>Choose your favorite color:</p><input type="radio" id="demo-red" name="demo-color" value="red"><label for="demo-red">Red</label><br><input type="radio" id="demo-blue" name="demo-color" value="blue"><label for="demo-blue">Blue</label><br><input type="radio" id="demo-green" name="demo-color" value="green"><label for="demo-green">Green</label>',
  },
  {
    id: 24,
    title: "Image Map",
    description:
      "Define clickable areas within an image using <map> and <area> tags, linking different parts of an image to different URLs.",
    code: '<img src="image.png" alt="Clickable regions" usemap="#imagemap">\n<map name="imagemap">\n  <area shape="rect" coords="0,0,100,100" href="#" alt="Top Left">\n  <area shape="circle" coords="150,150,40" href="#" alt="Bottom Right Circle">\n</map>',
    demoHtml:
      '<img src="https://placehold.co/200x200/90CAF9/000000?text=Clickable+Image" alt="Clickable regions" usemap="#demo-imagemap" style="max-width:100%; height:auto;">\n<map name="demo-imagemap">\n  <area shape="rect" coords="0,0,100,100" href="#" alt="Top Left" onclick="alert(\'Clicked Top Left!\')">\n  <area shape="circle" coords="150,150,40" href="#" alt="Bottom Right Circle" onclick="alert(\'Clicked Circle!\')">\n</map>',
  },
  {
    id: 25,
    title: "Embedding Content (Iframe)",
    description:
      "Embed content from another source (like a video or another webpage) directly into your document using the tag.",
    code: '<iframe src="https://css.itdata.ge" title="Example Website" width="300" height="200" style="border:1px solid #ccc;"></iframe>',
    demoHtml:
      '<iframe src="https://css.itdata.ge" title="Example Website" width="300" height="200" style="border:1px solid #ccc;"></iframe>',
  },
  {
    id: 26,
    title: "Progress Bar",
    description: "Show the progress of a task using the <progress> element.",
    code: '<progress value="70" max="100"></progress>',
    demoHtml: '<progress value="70" max="100"></progress>',
  },
  {
    id: 27,
    title: "Meter Element",
    description:
      "Display a scalar measurement within a known range using the <meter> tag.",
    code: '<meter value="0.6">60%</meter>',
    demoHtml: '<meter value="0.6">60%</meter>',
  },
  {
    id: 28,
    title: "Details and Summary",
    description: "Toggle content visibility using the tags.",
    code: "<details>\n  <summary>Click to expand</summary>\n  <p>Hidden content shown when expanded.</p>\n</details>",
    demoHtml:
      "<details><summary>Click to expand</summary><p>Hidden content shown when expanded.</p></details>",
  },
  {
    id: 29,
    title: "Figure and Figcaption",
    description: "Use to group images with captions.",
    code: '<figure>\n  <img src="image.jpg" alt="Sample Image">\n  <figcaption>Figure 1: A sample image.</figcaption>\n</figure>',
    demoHtml:
      '<figure><img src="https://placehold.co/200x100/CCC/000?text=Figure"><figcaption>Figure 1: A sample image.</figcaption></figure>',
  },
  {
    id: 30,
    title: "Keyboard Input",
    description: "Use <kbd> to show user input such as keyboard shortcuts.",
    code: "Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.",
    demoHtml: "Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.",
  },
  // More from 31 to 40 below...
  {
    id: 31,
    title: "Mark Highlight",
    description: "Use the <mark> element to highlight text.",
    code: "The <mark>HTML</mark> language is awesome!",
    demoHtml: "The <mark>HTML</mark> language is awesome!",
  },
  {
    id: 32,
    title: "Abbreviation Tag",
    description: "Explain abbreviations with the <abbr> tag.",
    code: '<abbr title="World Health Organization">WHO</abbr>',
    demoHtml: '<abbr title="World Health Organization">WHO</abbr>',
  },
  {
    id: 33,
    title: "Time Element",
    description: "Represent a specific time using the <time> tag.",
    code: '<time datetime="2025-06-14">June 14, 2025</time>',
    demoHtml: '<time datetime="2025-06-14">June 14, 2025</time>',
  },
  {
    id: 34,
    title: "Code Element",
    description: "Display inline code snippets using the <code> tag.",
    code: "Use <code>console.log()</code> to print messages.",
    demoHtml: "Use <code>console.log()</code> to print messages.",
  },
  {
    id: 35,
    title: "Preformatted Text",
    description: "Preserve formatting using the tag.",
    code: '<pre>\nfunction hello() {\n  return "Hi";\n}\n</pre>',
    demoHtml: '<pre>\nfunction hello() {\n  return "Hi";\n}\n</pre>',
  },
  {
    id: 36,
    title: "Blockquote",
    description: "Use to indicate a quotation.",
    code: '<blockquote cite="https://css.itdata.ge">This is a quoted text.</blockquote>',
    demoHtml:
      '<blockquote cite="https://css.itdata.ge">This is a quoted text.</blockquote>',
  },
  {
    id: 37,
    title: "Address Tag",
    description: "Use the tag for contact information.",
    code: '<address>\n  Contact us at: <a href="mailto:info@example.com">info@example.com</a>\n</address>',
    demoHtml:
      '<address>Contact us at: <a href="mailto:info@example.com">info@example.com</a></address>',
  },
  {
    id: 38,
    title: "Hidden Attribute",
    description: "Hide an element using the hidden attribute.",
    code: "<p hidden>This text is hidden.</p>",
    demoHtml: "<p hidden>This text is hidden.</p>",
  },
  {
    id: 39,
    title: "Superscript and Subscript",
    description: "Use <sup> and <sub> for superscripts and subscripts.",
    code: "x<sup>2</sup> and H<sub>2</sub>O",
    demoHtml: "x<sup>2</sup> and H<sub>2</sub>O",
  },
  {
    id: 40,
    title: "Disabled Button",
    description: "Prevent user interaction by disabling a button.",
    code: "<button disabled>Submit</button>",
    demoHtml: "<button disabled>Submit</button>",
  },
  {
    id: 41,
    title: "Button with Title Tooltip",
    description: "Add a tooltip to a button using the title attribute.",
    code: '<button title="Click to submit the form">Submit</button>',
    demoHtml: '<button title="Click to submit the form">Submit</button>',
  },
  {
    id: 42,
    title: "Input Pattern Validation",
    description: "Validate input with a regular expression pattern.",
    code: '<input type="text" pattern="[A-Za-z]{3,}" title="At least 3 letters" required>',
    demoHtml:
      '<input type="text" pattern="[A-Za-z]{3,}" title="At least 3 letters" required>',
  },
  {
    id: 43,
    title: "File Input",
    description: "Allow users to select files from their device.",
    code: '<input type="file">',
    demoHtml: '<input type="file">',
  },
  {
    id: 44,
    title: "Color Picker",
    description: "Let users select a color using the color input type.",
    code: '<input type="color">',
    demoHtml: '<input type="color">',
  },
  {
    id: 45,
    title: "Date Picker",
    description: "Allow date selection using the date input type.",
    code: '<input type="date">',
    demoHtml: '<input type="date">',
  },
  {
    id: 46,
    title: "Range Slider",
    description: "Allow users to select a numeric range value.",
    code: '<input type="range" min="0" max="100">',
    demoHtml: '<input type="range" min="0" max="100">',
  },
  {
    id: 47,
    title: "Search Field",
    description: "Provide a dedicated search input field.",
    code: '<input type="search" placeholder="Search...">',
    demoHtml: '<input type="search" placeholder="Search...">',
  },
  {
    id: 48,
    title: "Tel Input",
    description: "Let users input a telephone number.",
    code: '<input type="tel" placeholder="+995 123 456 789">',
    demoHtml: '<input type="tel" placeholder="+995 123 456 789">',
  },
  {
    id: 49,
    title: "Hidden Input",
    description: "Include hidden data that gets submitted with a form.",
    code: '<input type="hidden" name="userId" value="12345">',
    demoHtml: '<input type="hidden" name="userId" value="12345">',
  },
  {
    id: 50,
    title: "Autocapitalize Field",
    description: "Automatically capitalize input content.",
    code: '<input type="text" autocapitalize="words">',
    demoHtml: '<input type="text" autocapitalize="words">',
  },
  {
    id: 51,
    title: "Spellcheck Attribute",
    description: "Enable or disable spellchecking for text inputs.",
    code: '<textarea spellcheck="true"></textarea>',
    demoHtml: '<textarea spellcheck="true"></textarea>',
  },
  {
    id: 52,
    title: "Datalist Suggestions",
    description: "Provide input suggestions with the <datalist> element.",
    code: '<input list="browsers" name="browser">\n<datalist id="browsers">\n  <option value="Chrome">\n  <option value="Firefox">\n  <option value="Safari">\n</datalist>',
    demoHtml:
      '<input list="demo-browsers" name="browser"><datalist id="demo-browsers"><option value="Chrome"><option value="Firefox"><option value="Safari"></datalist>',
  },
  {
    id: 53,
    title: "Disabled Fieldset",
    description: "Disable a group of related inputs using.",
    code: '<fieldset disabled>\n  <label>Name: <input type="text"></label>\n  <button>Submit</button>\n</fieldset>',
    demoHtml:
      '<fieldset disabled><label>Name: <input type="text"></label><button>Submit</button></fieldset>',
  },
  {
    id: 54,
    title: "Legend in Fieldset",
    description: "Add a title to a fieldset using the <legend> tag.",
    code: '<fieldset>\n  <legend>Personal Info</legend>\n  <input type="text" placeholder="Name">\n</fieldset>',
    demoHtml:
      '<fieldset><legend>Personal Info</legend><input type="text" placeholder="Name"></fieldset>',
  },
  {
    id: 55,
    title: "Text Direction (RTL)",
    description: "Set text direction to right-to-left using dir attribute.",
    code: '<p dir="rtl">This text goes from right to left.</p>',
    demoHtml: '<p dir="rtl">This text goes from right to left.</p>',
  },
  {
    id: 56,
    title: "Draggable Element",
    description: "Make any element draggable using the draggable attribute.",
    code: '<div draggable="true" style="padding: 10px; background: #ccc;">Drag me</div>',
    demoHtml:
      '<div draggable="true" style="padding: 10px; background: #ccc;">Drag me</div>',
  },
  {
    id: 57,
    title: "Contenteditable Element",
    description: "Allow the user to edit the content of an element.",
    code: '<p contenteditable="true">Edit this text</p>',
    demoHtml: '<p contenteditable="true">Edit this text</p>',
  },
  {
    id: 58,
    title: "Translate Attribute",
    description:
      "Control whether the content of an element should be translated.",
    code: '<p translate="no">Do not translate this text.</p>',
    demoHtml: '<p translate="no">Do not translate this text.</p>',
  },
  {
    id: 59,
    title: "Noresize Textarea",
    description: "Prevent the user from resizing a.",
    code: '<textarea style="resize: none;"></textarea>',
    demoHtml: '<textarea style="resize: none;"></textarea>',
  },
  {
    id: 60,
    title: "Multiple File Upload",
    description: "Allow users to select multiple files at once.",
    code: '<input type="file" multiple>',
    demoHtml: '<input type="file" multiple>',
  },

  {
    id: 61,
    title: "Accept Specific File Types",
    description: "Restrict file upload to specific types like images only.",
    code: '<input type="file" accept="image/*">',
    demoHtml: '<input type="file" accept="image/*">',
  },
  {
    id: 62,
    title: "Capture Camera Image",
    description: "Direct camera capture for mobile devices.",
    code: '<input type="file" accept="image/*" capture="camera">',
    demoHtml: '<input type="file" accept="image/*" capture="camera">',
  },
  {
    id: 63,
    title: "Auto-focus Input",
    description: "Automatically focus on an input when page loads.",
    code: '<input type="text" autofocus placeholder="I am focused!">',
    demoHtml: '<input type="text" autofocus placeholder="I am focused!">',
  },
  {
    id: 64,
    title: "Spell Check Control",
    description: "Enable or disable spell checking on text inputs.",
    code: '<textarea spellcheck="false" placeholder="No spell check here"></textarea>',
    demoHtml:
      '<textarea spellcheck="false" placeholder="No spell check here"></textarea>',
  },
  {
    id: 65,
    title: "Content Editable Div",
    description: "Make any div element editable like a text input.",
    code: '<div contenteditable="true" style="border:1px solid #ccc; padding:10px;">Edit me!</div>',
    demoHtml:
      '<div contenteditable="true" style="border:1px solid #ccc; padding:10px;">Edit me!</div>',
  },
  {
    id: 66,
    title: "Draggable Elements",
    description: "Make elements draggable with native HTML5 drag and drop.",
    code: '<div draggable="true" style="background:#f0f0f0; padding:20px; cursor:move;">Drag me!</div>',
    demoHtml:
      '<div draggable="true" style="background:#f0f0f0; padding:20px; cursor:move;">Drag me!</div>',
  },
  {
    id: 67,
    title: "Auto-complete Input",
    description: "Provide suggestions for input fields.",
    code: '<input list="browsers" placeholder="Choose a browser"><datalist id="browsers"><option value="Chrome"><option value="Firefox"><option value="Safari"></datalist>',
    demoHtml:
      '<input list="browsers" placeholder="Choose a browser"><datalist id="browsers"><option value="Chrome"><option value="Firefox"><option value="Safari"></datalist>',
  },
  {
    id: 68,
    title: "Progress Bar",
    description: "Display progress with HTML5 progress element.",
    code: '<progress value="70" max="100">70%</progress>',
    demoHtml: '<progress value="70" max="100">70%</progress>',
  },
  {
    id: 69,
    title: "Meter Element",
    description: "Display scalar measurements or fractional values.",
    code: '<meter value="6" min="0" max="10">6 out of 10</meter>',
    demoHtml: '<meter value="6" min="0" max="10">6 out of 10</meter>',
  },
  {
    id: 70,
    title: "Details/Summary Accordion",
    description: "Create collapsible content without JavaScript.",
    code: "<details><summary>Click to expand</summary><p>Hidden content goes here!</p></details>",
    demoHtml:
      "<details><summary>Click to expand</summary><p>Hidden content goes here!</p></details>",
  },
  {
    id: 71,
    title: "Dialog Modal",
    description: "Native HTML dialog element for modals.",
    code: '<dialog id="myDialog"><p>This is a modal dialog</p><button onclick="document.getElementById(\'myDialog\').close()">Close</button></dialog><button onclick="document.getElementById(\'myDialog\').showModal()">Open Dialog</button>',
    demoHtml:
      '<dialog id="myDialog"><p>This is a modal dialog</p><button onclick="document.getElementById(\'myDialog\').close()">Close</button></dialog><button onclick="document.getElementById(\'myDialog\').showModal()">Open Dialog</button>',
  },
  {
    id: 72,
    title: "Picture Element",
    description: "Responsive images with multiple sources.",
    code: '<picture><source media="(max-width: 600px)" srcset="small.jpg"><img src="large.jpg" alt="Responsive image"></picture>',
    demoHtml:
      '<picture><source media="(max-width: 600px)" srcset="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzAwZiIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U21hbGw8L3RleHQ+PC9zdmc+"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzBmMCIvPjx0ZXh0IHg9IjEwMCIgeT0iNTUiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkxhcmdlPC90ZXh0Pjwvc3ZnPg==" alt="Responsive image"></picture>',
  },
  {
    id: 73,
    title: "Color Input",
    description: "Native color picker input.",
    code: '<input type="color" value="#ff0000">',
    demoHtml: '<input type="color" value="#ff0000">',
  },
  {
    id: 74,
    title: "Range Slider",
    description: "Slider input for selecting values within a range.",
    code: '<input type="range" min="0" max="100" value="50">',
    demoHtml: '<input type="range" min="0" max="100" value="50">',
  },
  {
    id: 75,
    title: "Date Input",
    description: "Native date picker input.",
    code: '<input type="date" value="2024-01-15">',
    demoHtml: '<input type="date" value="2024-01-15">',
  },
  {
    id: 76,
    title: "Time Input",
    description: "Native time picker input.",
    code: '<input type="time" value="14:30">',
    demoHtml: '<input type="time" value="14:30">',
  },
  {
    id: 77,
    title: "Datetime-local Input",
    description: "Combined date and time picker.",
    code: '<input type="datetime-local" value="2024-01-15T14:30">',
    demoHtml: '<input type="datetime-local" value="2024-01-15T14:30">',
  },
  {
    id: 78,
    title: "Week Input",
    description: "Week picker input.",
    code: '<input type="week" value="2024-W03">',
    demoHtml: '<input type="week" value="2024-W03">',
  },
  {
    id: 79,
    title: "Month Input",
    description: "Month and year picker.",
    code: '<input type="month" value="2024-01">',
    demoHtml: '<input type="month" value="2024-01">',
  },
  {
    id: 80,
    title: "Search Input",
    description: "Specialized input for search with clear button.",
    code: '<input type="search" placeholder="Search...">',
    demoHtml: '<input type="search" placeholder="Search...">',
  },
  {
    id: 81,
    title: "Tel Input",
    description: "Telephone number input with mobile keyboard optimization.",
    code: '<input type="tel" placeholder="(123) 456-7890">',
    demoHtml: '<input type="tel" placeholder="(123) 456-7890">',
  },
  {
    id: 82,
    title: "URL Input",
    description: "URL input with validation.",
    code: '<input type="url" placeholder="https://example.com">',
    demoHtml: '<input type="url" placeholder="https://example.com">',
  },
  {
    id: 83,
    title: "Email Input",
    description: "Email input with validation and mobile keyboard.",
    code: '<input type="email" placeholder="user@example.com">',
    demoHtml: '<input type="email" placeholder="user@example.com">',
  },
  {
    id: 84,
    title: "Number Input",
    description: "Numeric input with step controls.",
    code: '<input type="number" min="0" max="100" step="5" value="25">',
    demoHtml: '<input type="number" min="0" max="100" step="5" value="25">',
  },
  {
    id: 85,
    title: "Password Input",
    description: "Hidden password input field.",
    code: '<input type="password" placeholder="Enter password">',
    demoHtml: '<input type="password" placeholder="Enter password">',
  },
  {
    id: 86,
    title: "Hidden Input",
    description: "Hidden form field for storing data.",
    code: '<input type="hidden" name="userId" value="12345">',
    demoHtml:
      '<input type="hidden" name="userId" value="12345"><p>Hidden input with value: 12345</p>',
  },
  {
    id: 87,
    title: "Checkbox Input",
    description: "Checkbox for boolean selections.",
    code: '<input type="checkbox" id="agree" checked><label for="agree">I agree</label>',
    demoHtml:
      '<input type="checkbox" id="agree" checked><label for="agree">I agree</label>',
  },
  {
    id: 88,
    title: "Radio Button",
    description: "Radio buttons for single selection from group.",
    code: '<input type="radio" name="size" value="small" id="small"><label for="small">Small</label><input type="radio" name="size" value="large" id="large"><label for="large">Large</label>',
    demoHtml:
      '<input type="radio" name="size" value="small" id="small"><label for="small">Small</label><br><input type="radio" name="size" value="large" id="large"><label for="large">Large</label>',
  },
  {
    id: 89,
    title: "Submit Button",
    description: "Form submission button.",
    code: '<input type="submit" value="Submit Form">',
    demoHtml: '<input type="submit" value="Submit Form">',
  },
  {
    id: 90,
    title: "Reset Button",
    description: "Button to reset form fields.",
    code: '<input type="reset" value="Reset Form">',
    demoHtml: '<input type="reset" value="Reset Form">',
  },
  {
    id: 91,
    title: "Button Input",
    description: "Generic button input.",
    code: '<input type="button" value="Click Me" onclick="alert(\'Clicked!\')">',
    demoHtml:
      '<input type="button" value="Click Me" onclick="alert(\'Clicked!\')">',
  },
  {
    id: 92,
    title: "Image Input",
    description: "Image as a submit button.",
    code: '<input type="image" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMDA3Y2ZmIi8+PHRleHQgeD0iMjUiIHk9IjIwIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEycHgiPlN1Ym1pdDwvdGV4dD48L3N2Zz4=" alt="Submit">',
    demoHtml:
      '<input type="image" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMDA3Y2ZmIi8+PHRleHQgeD0iMjUiIHk9IjIwIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEycHgiPlN1Ym1pdDwvdGV4dD48L3N2Zz4=" alt="Submit">',
  },
  {
    id: 93,
    title: "Textarea Element",
    description: "Multi-line text input area.",
    code: '<textarea rows="4" cols="50" placeholder="Enter your message..."></textarea>',
    demoHtml:
      '<textarea rows="4" cols="50" placeholder="Enter your message..."></textarea>',
  },
  {
    id: 94,
    title: "Select Dropdown",
    description: "Dropdown selection list.",
    code: '<select><option value="">Choose option</option><option value="1">Option 1</option><option value="2">Option 2</option></select>',
    demoHtml:
      '<select><option value="">Choose option</option><option value="1">Option 1</option><option value="2">Option 2</option></select>',
  },
  {
    id: 95,
    title: "Multiple Select",
    description: "Multiple selection dropdown (hold Ctrl/Cmd).",
    code: '<select multiple size="3"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>',
    demoHtml:
      '<select multiple size="3"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>',
  },
  {
    id: 96,
    title: "Optgroup Select",
    description: "Grouped options in select dropdown.",
    code: '<select><optgroup label="Fruits"><option value="apple">Apple</option><option value="banana">Banana</option></optgroup><optgroup label="Vegetables"><option value="carrot">Carrot</option></optgroup></select>',
    demoHtml:
      '<select><optgroup label="Fruits"><option value="apple">Apple</option><option value="banana">Banana</option></optgroup><optgroup label="Vegetables"><option value="carrot">Carrot</option></optgroup></select>',
  },
  {
    id: 97,
    title: "Fieldset and Legend",
    description: "Group related form elements with a caption.",
    code: '<fieldset><legend>Personal Information</legend><input type="text" placeholder="Name"><input type="email" placeholder="Email"></fieldset>',
    demoHtml:
      '<fieldset><legend>Personal Information</legend><input type="text" placeholder="Name"><br><br><input type="email" placeholder="Email"></fieldset>',
  },
  {
    id: 98,
    title: "Output Element",
    description: "Display the result of a calculation.",
    code: '<form oninput="result.value=parseInt(a.value)+parseInt(b.value)"><input type="number" id="a" value="0"> + <input type="number" id="b" value="0"> = <output name="result" for="a b">0</output></form>',
    demoHtml:
      '<form oninput="result.value=parseInt(a.value)+parseInt(b.value)"><input type="number" id="a" value="0"> + <input type="number" id="b" value="0"> = <output name="result" for="a b">0</output></form>',
  },
  {
    id: 99,
    title: "Mark Element",
    description: "Highlight text for reference or relevance.",
    code: "<p>The <mark>highlighted text</mark> stands out from the rest.</p>",
    demoHtml:
      "<p>The <mark>highlighted text</mark> stands out from the rest.</p>",
  },
  {
    id: 100,
    title: "Kbd Element",
    description: "Represent keyboard input or keystrokes.",
    code: "<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>",
    demoHtml: "<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>",
  },
  {
    id: 101,
    title: "Abbr Element with Tooltip",
    description: "Show abbreviation definitions on hover.",
    code: '<abbr title="HyperText Markup Language">HTML</abbr>',
    demoHtml:
      '<abbr title="HyperText Markup Language">HTML</abbr> is the standard markup language.',
  },
  {
    id: 102,
    title: "Time Element",
    description: "Semantic time representation with machine-readable datetime.",
    code: '<time datetime="2024-01-15T10:30">January 15, 2024 at 10:30 AM</time>',
    demoHtml:
      '<time datetime="2024-01-15T10:30">January 15, 2024 at 10:30 AM</time>',
  },
  {
    id: 103,
    title: "Small Element",
    description: "Represent side comments and small print.",
    code: "<p>Regular text <small>(This is fine print)</small></p>",
    demoHtml: "<p>Regular text <small>(This is fine print)</small></p>",
  },
  {
    id: 104,
    title: "Sub and Sup Elements",
    description: "Subscript and superscript text formatting.",
    code: "<p>H<sub>2</sub>O and E=mc<sup>2</sup></p>",
    demoHtml: "<p>H<sub>2</sub>O and E=mc<sup>2</sup></p>",
  },
  {
    id: 105,
    title: "Del and Ins Elements",
    description: "Show deleted and inserted text with timestamps.",
    code: '<p><del datetime="2024-01-01">Old text</del> <ins datetime="2024-01-15">New text</ins></p>',
    demoHtml:
      '<p><del datetime="2024-01-01">Old text</del> <ins datetime="2024-01-15">New text</ins></p>',
  },
  {
    id: 106,
    title: "Cite Element",
    description: "Reference the title of creative works.",
    code: "<p>My favorite book is <cite>The Great Gatsby</cite>.</p>",
    demoHtml: "<p>My favorite book is <cite>The Great Gatsby</cite>.</p>",
  },
  {
    id: 107,
    title: "Q Element with Citation",
    description: "Inline quotations with cite attribute.",
    code: '<p>He said <q cite="https://example.com">Hello World</q>.</p>',
    demoHtml: '<p>He said <q cite="https://example.com">Hello World</q>.</p>',
  },
  {
    id: 108,
    title: "Blockquote with Citation",
    description: "Block-level quotations with source attribution.",
    code: '<blockquote cite="https://example.com"><p>This is a longer quote that spans multiple lines.</p><footer>— <cite>Author Name</cite></footer></blockquote>',
    demoHtml:
      '<blockquote cite="https://example.com"><p>This is a longer quote that spans multiple lines.</p><footer>— <cite>Author Name</cite></footer></blockquote>',
  },
  {
    id: 109,
    title: "Code Element",
    description: "Display inline code snippets.",
    code: "<p>Use the <code>console.log()</code> function to debug.</p>",
    demoHtml: "<p>Use the <code>console.log()</code> function to debug.</p>",
  },
  {
    id: 110,
    title: "Pre Element",
    description: "Preserve formatting and whitespace.",
    code: '<pre>function hello() {\n    console.log("Hello World!");\n}</pre>',
    demoHtml:
      '<pre>function hello() {\n    console.log("Hello World!");\n}</pre>',
  },
  {
    id: 111,
    title: "Samp Element",
    description: "Display sample output from computer programs.",
    code: "<p>The program output was: <samp>Error 404: Not Found</samp></p>",
    demoHtml:
      "<p>The program output was: <samp>Error 404: Not Found</samp></p>",
  },
  {
    id: 112,
    title: "Var Element",
    description: "Represent variables in mathematical expressions or code.",
    code: "<p>The formula is <var>y</var> = <var>mx</var> + <var>b</var></p>",
    demoHtml:
      "<p>The formula is <var>y</var> = <var>mx</var> + <var>b</var></p>",
  },
  {
    id: 113,
    title: "Address Element",
    description: "Contact information for the document or article author.",
    code: '<address>Written by <a href="mailto:john@example.com">John Doe</a><br>123 Main St, City, State</address>',
    demoHtml:
      '<address>Written by <a href="mailto:john@example.com">John Doe</a><br>123 Main St, City, State</address>',
  },
  {
    id: 114,
    title: "Ruby Annotation",
    description: "Pronunciation guide for East Asian typography.",
    code: "<ruby>漢<rt>kan</rt>字<rt>ji</rt></ruby>",
    demoHtml: "<ruby>漢<rt>kan</rt>字<rt>ji</rt></ruby>",
  },
  {
    id: 115,
    title: "BDI Element",
    description: "Isolate bidirectional text formatting.",
    code: "<p>User <bdi>إيان</bdi> scored 90 points.</p>",
    demoHtml: "<p>User <bdi>إيان</bdi> scored 90 points.</p>",
  },
  {
    id: 116,
    title: "BDO Element",
    description: "Override bidirectional text direction.",
    code: '<p><bdo dir="rtl">This text flows right to left</bdo></p>',
    demoHtml: '<p><bdo dir="rtl">This text flows right to left</bdo></p>',
  },
  {
    id: 117,
    title: "WBR Element",
    description: "Suggest line break opportunities for long words.",
    code: "<p>Super<wbr>cali<wbr>fragi<wbr>listic<wbr>expiali<wbr>docious</p>",
    demoHtml:
      "<p>Super<wbr>cali<wbr>fragi<wbr>listic<wbr>expiali<wbr>docious</p>",
  },
  {
    id: 118,
    title: "Data Element",
    description: "Link content with machine-readable data.",
    code: '<data value="12345">Product XYZ</data>',
    demoHtml: '<data value="12345">Product XYZ</data>',
  },
  {
    id: 119,
    title: "Map and Area Elements",
    description: "Create clickable image maps.",
    code: '<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzAwZiIvPjxyZWN0IHg9IjEwMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmMDAiLz48L3N2Zz4=" usemap="#colormap"><map name="colormap"><area shape="rect" coords="0,0,100,100" alt="Blue" onclick="alert(\'Blue area clicked!\')"><area shape="rect" coords="100,0,200,100" alt="Red" onclick="alert(\'Red area clicked!\')"></map>',
    demoHtml:
      '<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzAwZiIvPjxyZWN0IHg9IjEwMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmMDAiLz48L3N2Zz4=" usemap="#colormap"><map name="colormap"><area shape="rect" coords="0,0,100,100" alt="Blue" onclick="alert(\'Blue area clicked!\')"><area shape="rect" coords="100,0,200,100" alt="Red" onclick="alert(\'Red area clicked!\')"></map>',
  },
  {
    id: 120,
    title: "Figure and Figcaption",
    description: "Self-contained content with optional caption.",
    code: '<figure><img src="image.jpg" alt="Description"><figcaption>Image caption goes here</figcaption></figure>',
    demoHtml:
      '<figure><div style="width:200px;height:100px;background:#ddd;display:flex;align-items:center;justify-content:center;border:1px solid #ccc;">Image Placeholder</div><figcaption>Image caption goes here</figcaption></figure>',
  },
  {
    id: 121,
    title: "Audio Element",
    description: "Embed audio content with controls.",
    code: '<audio controls><source src="audio.mp3" type="audio/mpeg">Your browser does not support audio.</audio>',
    demoHtml:
      '<audio controls><source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQYG" type="audio/wav">Your browser does not support audio.</audio>',
  },
  {
    id: 122,
    title: "Video Element",
    description: "Embed video content with controls and poster.",
    code: '<video controls width="320" poster="poster.jpg"><source src="video.mp4" type="video/mp4">Your browser does not support video.</video>',
    demoHtml:
      '<video controls width="320" poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI0MCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjE2MCIgeT0iMTMwIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE4cHgiPlZpZGVvIFBsYWNlaG9sZGVyPC90ZXh0Pjwvc3ZnPg=="><source src="#" type="video/mp4">Your browser does not support video.</video>',
  },
  {
    id: 123,
    title: "Track Element",
    description: "Add subtitles, captions, or chapters to video/audio.",
    code: '<video controls><source src="video.mp4"><track kind="subtitles" src="subtitles.vtt" srclang="en" label="English"></video>',
    demoHtml:
      '<video controls width="300"><source src="#"><track kind="subtitles" src="#" srclang="en" label="English">Your browser does not support video.</video>',
  },
  {
    id: 124,
    title: "SVG Inline Graphics",
    description: "Scalable vector graphics embedded directly in HTML.",
    code: '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>',
    demoHtml:
      '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>',
  },
];

const tricksPerPage = 10;
let currentPage = 1;
let currentFilteredTricks = htmlTricks; // NEW: Keep track of currently displayed tricks

function renderTricksPage(tricksArray) {
  // MODIFIED: now accepts tricksArray
  const container = document.getElementById("trick-container");
  container.innerHTML = "";

  const startIndex = (currentPage - 1) * tricksPerPage;
  const endIndex = startIndex + tricksPerPage;
  const pageTricks = tricksArray.slice(startIndex, endIndex); // MODIFIED: use tricksArray

  pageTricks.forEach((trick) => {
    const trickEl = document.createElement("div");
    trickEl.className = "trick-card";
    trickEl.innerHTML = `
        <h2>${trick.id}. ${trick.title}</h2>
        <p>${trick.description}</p>
        <div class="code-block"><code>${trick.code
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")}</code></div>
        <button class="demo-button" onclick="toggleDemo('demo${
          trick.id
        }')">Show Demo</button>
        <div class="demo-output" id="demo${trick.id}">${trick.demoHtml}</div>
      `;
    container.appendChild(trickEl);
  });

  renderPagination(tricksArray.length); // MODIFIED: pass tricksArray.length
}

function renderPagination(totalTricks) {
  const totalPages = Math.ceil(totalTricks / tricksPerPage);
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = "demo-button";
    if (i === currentPage) btn.style.backgroundColor = "#ffcc80";
    btn.onclick = () => {
      currentPage = i;
      // MODIFIED: This now needs to render based on currentFilteredTricks
      renderTricksPage(currentFilteredTricks);
    };
    paginationContainer.appendChild(btn);
  }
}

function toggleDemo(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === "block" ? "none" : "block";
}

// NEW: Search functionality event listener
document.getElementById("searchBox").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  currentFilteredTricks = htmlTricks.filter(
    (trick) =>
      trick.title.toLowerCase().includes(searchTerm) ||
      trick.description.toLowerCase().includes(searchTerm) ||
      trick.code.toLowerCase().includes(searchTerm)
  );
  currentPage = 1; // Reset to the first page for new search results
  renderTricksPage(currentFilteredTricks); // Render with filtered tricks
});

// MODIFIED: Initial render now uses the new state variable
renderTricksPage(currentFilteredTricks);
