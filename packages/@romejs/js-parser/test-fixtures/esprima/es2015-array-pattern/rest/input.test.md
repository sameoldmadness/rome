# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-array-pattern > rest`

```javascript
Program {
  comments: Array []
  corrupt: false
  diagnostics: Array []
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'script'
  syntax: Array []
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 0
      index: 16
      line: 2
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  body: Array [
    VariableDeclarationStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 15
          index: 15
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      declaration: VariableDeclaration {
        kind: 'let'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 15
            index: 15
            line: 1
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        declarations: Array [
          VariableDeclarator {
            id: BindingArrayPattern {
              elements: Array []
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 10
                  index: 10
                  line: 1
                }
                start: Object {
                  column: 4
                  index: 4
                  line: 1
                }
              }
              rest: BindingIdentifier {
                name: 'a'
                loc: Object {
                  filename: 'input.js'
                  end: Object {
                    column: 9
                    index: 9
                    line: 1
                  }
                  start: Object {
                    column: 8
                    index: 8
                    line: 1
                  }
                }
                meta: PatternMeta {
                  optional: undefined
                  typeAnnotation: undefined
                  loc: Object {
                    filename: 'input.js'
                    end: Object {
                      column: 9
                      index: 9
                      line: 1
                    }
                    start: Object {
                      column: 8
                      index: 8
                      line: 1
                    }
                  }
                }
              }
            }
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 14
                index: 14
                line: 1
              }
              start: Object {
                column: 4
                index: 4
                line: 1
              }
            }
            init: NumericLiteral {
              value: 0
              format: undefined
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 14
                  index: 14
                  line: 1
                }
                start: Object {
                  column: 13
                  index: 13
                  line: 1
                }
              }
            }
          }
        ]
      }
    }
  ]
}
```