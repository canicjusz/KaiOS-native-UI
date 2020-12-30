# KaiOS-native-UI
Tool for creating native-like KaiOS UI.

![Screenshot](https://raw.githubusercontent.com/canicjusz/KaiOS-native-UI/main/KaiOS-native-UI.png)

Installation
--------

Include the css and js files into your project.

Usage
--------

### Basic template

```html
<body>
  <div id="app">
    <div id="header">header</div>
    <div id="content">
      <!-- add all content of the app in here -->
    </div>
    <div class="softkeys">
      <div class="softkey softkey-left">left key</div>
      <div class="softkey softkey-center">select</div>
      <div class="softkey softkey-right">right key</div>
    </div>
  </div>
</body>
```

### List items:

* List item with text only
```html
<div class="list-item focusable" tabindex="0">
  <p class="list-item__text">
    single line list item
  </p>
</div>

<div class="list-item focusable" tabindex="0">
  <p class="list-item__text">list item</p>
  <p class="list-item__subtext">secondary List</p>
</div>
```

* List item with indicator
```html
<div class="list-item-indicator focusable" tabindex="0">
  <p class="list-item-indicator__text">
    single line list item
  </p>
  <span class="list-item-indicator__indicator"></span>
</div>

<div class="list-item-indicator focusable" tabindex="0">
  <p class="list-item-indicator__text">
    two-lines list item
  </p>
  <p class="list-item-indicator__subtext">
    with next indicator
  </p>
  <span class="list-item-indicator__indicator"></span>
</div>
```

* List item with checkbox
```html
<div class="checkbox-container">
  <p class="checkbox-container__text">
    checkbox list item
  </p>
  <p class="checkbox-container__subtext">
    secondary List
  </p>
  <input type="checkbox" tabindex="0" class="checkbox-container__checkbox focusable">
</div>
```

* List item with radio button
```html
<div class="radio-container">
  <p class="radio-container__text">
    radio button list item
  </p>
  <p class="radio-container__subtext">
    secondary List
  </p>
  <input type="radio" tabindex="0" class="radio-container__radio focusable">
</div>
```

* List item with slider
```html
<div class="slider-container">
  <p class="slider-container__text">
    alarm
  </p>
  <p class="slider-container__subtext">
    5/15
  </p>
  <input type="range" tabindex="0" min="1" max="15" value="5" class="slider-container__slider focusable">
</div>
```

* List item with progress bar
```html
<div class="progress-container" tabindex="0">
  <label class="progress-container__label">
    downloading
  </label>
  <progress value="65" max="100" class="progress-container__progress focusable"></progress>
</div>
```

### Inputs and textareas:

* Input
```html
<div class="input-container">
  <label class="input-container__label">label text</label>
  <input type="text" tabindex="0" class="input-container__input focusable">
</div>
```

* Textarea
```html
<div class="textarea-container">
  <label class="textarea-container__label">label text</label>
  <textarea tabindex="0" class="textarea-container__textarea focusable"></textarea>
</div>
```

### Buttons
```html
<div class="button-container">
  <button tabindex="0" class="button-container__button focusable">
    sign in
  </button>
  <button tabindex="0" class="button-container__button focusable">
    register
  </button>
</div>
```

### Separator
```html
<div class="separator">
  separator
</div>
```

### Softkeys
* Softkey with text in the middle
```html
<div class="separator">
  <div class="softkeys">
    <div class="softkey softkey-left">left key</div>
    <div class="softkey softkey-center">select</div>
    <div class="softkey softkey-right">right key</div>
  </div>
</div>
```

* Softkey with icon in the middle
```html
<div class="separator">
  <div class="softkeys-icon">
    <div class="softkey softkey-left">left key</div>
    <div class="softkey softkey-center"><!-- icon --></div>
    <div class="softkey softkey-right">right key</div>
  </div>
</div>
```

### Color, textarea height, scroll, capitalization changing
Go to css file and edit values in ```:root```