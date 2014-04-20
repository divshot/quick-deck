# Quick Deck: Reveal.js Boilerplate

[Reveal.js](http://lab.hakim.se/reveal-js/) is a fantastic open source HTML slide
deck library. Quick Deck is a boilerplate and set of helpers to make it easier to
put a deck together quickly, using nothing but Markdown files and a few other
nice ideas.

## Getting Started

First, clone the Quick Deck repository so you can make it your own:

    git clone https://github.com/divshot/quick-deck.git
    
Next, you'll need to install [broccoli](https://github.com/joliss/broccoli)
as well as the bower and NPM modules used by Quick Deck:

    npm install -g broccoli-cli && npm install && bower install
    
Next you'll want to get the Broccoli server up and running so you can
preview your work:

    broccoli serve

Now you're ready to make your decks, and they'll be compiled automatically!

## Making a Deck

To create a deck, all you need to do is make a new markdown file in the
`decks` directory. Here's an example deck syntax:

```markdown
# Title Slide
## Author Name

===

# Sections Use "="
## To Divide

---

# Subsections Use "-"
## To Divide
```

## Publishing Your Decks

If you want to publish your deck to a static web host (might we humbly
suggest [Divshot](http://www.divshot.com/)?) you will need to build a
distribution. For convenience, you can do so into the `dist` directory
like so:

    npm run build
    
If you'd like to use a different directory, just use `broccoli build`:

    broccoli build [DEST_DIR]
    
Unfortunately at the moment Broccoli doesn't have a "watch" command, so
you'll have to manually trigger each build for publication.

## Roadmap

Right now this is all very, very basic. Soon you'll hopefully be able to:

1. Configure themes (or make your own)
2. Add classes or other HTML configuration to individual slides
3. Add plugins and other Reveal functionality
4. ???

## License

The MIT License (MIT)

Copyright (c) 2014 Divshot, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.