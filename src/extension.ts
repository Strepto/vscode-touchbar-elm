// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { SnippetString } from 'vscode'

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Extension "vscode-touchbar-elm" is now active!')

  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    'vscode-touchbar-elm.pizza-right',
    () => {
      insertStringToActiveEditor('|>')
    },
  )

  context.subscriptions.push(disposable)

  let disposable2 = vscode.commands.registerCommand(
    'vscode-touchbar-elm.pizza-left',
    () => {
      insertStringToActiveEditor('<|')
    },
  )

  context.subscriptions.push(disposable2)

  let disposable3 = vscode.commands.registerCommand(
    'vscode-touchbar-elm.brackets',
    () => {
      insertStringToActiveEditor('[', ']')
    },
  )

  context.subscriptions.push(disposable3)

  let disposable4 = vscode.commands.registerCommand(
    'vscode-touchbar-elm.brackets-squigglies',
    () => {
      const editor = vscode.window.activeTextEditor
      if (editor) {
        const primarySelection = editor.selection
        const selectedText = editor.document.getText(primarySelection)

        // If just a single token is selected, try to insert a "edit" squiggly
        if (/^[a-z]+[\w\d\_].$/.test(selectedText)) {
          const snippet = new SnippetString('{ ' + selectedText + ' | $0 }')
          editor.insertSnippet(snippet)
          return
        }

        const snippet = new SnippetString('{' + selectedText + ' $0 }')
        editor.insertSnippet(snippet)
      }
    },
  )

  let disposable5 = vscode.commands.registerCommand(
    'vscode-touchbar-elm.letin',
    () => {
      insertStringToActiveEditor('let\n', '\nin')
    },
  )

  context.subscriptions.push(disposable5)

  context.subscriptions.push(disposable4)
}

function insertStringToActiveEditor(snippetStart: string, snippetEnd?: string) {
  const editor = vscode.window.activeTextEditor
  if (editor) {
    const selections = editor.selections
    selections.forEach((selection) => {
      const selectionText = editor.document.getText(selection)
      let snippet = new SnippetString(snippetStart)
      if (snippetEnd) {
        snippet = new SnippetString(
          snippetStart + selectionText + '$0' + snippetEnd,
        )
      }
      editor.insertSnippet(snippet)
    })
  }
}

// This method is called when your extension is deactivated
export function deactivate() {}
