# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 112`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 39
			index: 39
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: Object {
					filename: "input.js"
					identifierName: "A"
					end: Object {
						column: 7
						index: 7
						line: 1
					}
					start: Object {
						column: 6
						index: 6
						line: 1
					}
				}
			}
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 39
					index: 39
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			meta: JSClassHead {
				body: Array []
				implements: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 39
						index: 39
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				superClass: JSClassExpression {
					id: JSBindingIdentifier {
						name: "B"
						loc: Object {
							filename: "input.js"
							identifierName: "B"
							end: Object {
								column: 23
								index: 23
								line: 1
							}
							start: Object {
								column: 22
								index: 22
								line: 1
							}
						}
					}
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 36
							index: 36
							line: 1
						}
						start: Object {
							column: 16
							index: 16
							line: 1
						}
					}
					meta: JSClassHead {
						body: Array []
						implements: undefined
						superTypeParameters: undefined
						typeParameters: undefined
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 36
								index: 36
								line: 1
							}
							start: Object {
								column: 16
								index: 16
								line: 1
							}
						}
						superClass: JSReferenceIdentifier {
							name: "C"
							loc: Object {
								filename: "input.js"
								identifierName: "C"
								end: Object {
									column: 33
									index: 33
									line: 1
								}
								start: Object {
									column: 32
									index: 32
									line: 1
								}
							}
						}
					}
				}
			}
		}
	]
}
```
