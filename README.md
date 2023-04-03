# Touchbar for Elm

What year is it? Touchbars in 2023? Elm in 2023!?

Anyway, I have a Mac with a Touchbar and I use VSCode to develop in so why not hack together something using the touchbar?

I figured it would be nice to use the touchbar for something useful, so I made this extension that enables 6 new buttons for faster development of elm apps. ⏩

## Features

The extension adds brackets, pizzas and let-in as quick to access icons on the touchbar.

![screenshot showing the expected layout](./vscode-touchbar-elm.png)

- `|>` and `<|` are straight forward, and replaces the keystrokes to insert pizzas 🍕.
- `{..}` adds braces around selection. If the selection is a single word that could be a token this will assume you want to mutate it and inserts `{ model | x }`.
- `[..]` inserts braces around the selected text, and places cursor at the end.
- `→ƒ Ref` opens all references to the selected token.

## Requirements

The addon requires a Touch Bar.

## Contributing

Contributions are welcome, please create an issue to discuss before starting major work. I'll probably be able to publish any new stuff, and PRs are welcome.

## Extension Settings

N/A

## Known Issues

N/A

## Release Notes

See CHANGELOG.md
