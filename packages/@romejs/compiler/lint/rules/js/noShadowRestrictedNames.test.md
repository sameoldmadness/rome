# `noShadowRestrictedNames.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/compiler/lint/rules/js/noShadowRestrictedNames.test.ts --update-snapshots` to update.

## `no shadow restricted names`

### `0`

```

 unknown:1:9 lint/js/noShadowRestrictedNames ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not shadow the global NaN property.

    function NaN() {}
             ^^^

  ℹ Consider renaming this variable. It's easy to confuse the origin of variables when they're named
    after a known global.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
function NaN() {}

```

### `1`

```

 unknown:1:4 lint/js/noShadowRestrictedNames ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not shadow the global Set property.

    let Set;
        ^^^

  ℹ Consider renaming this variable. It's easy to confuse the origin of variables when they're named
    after a known global.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```
let Set;

```

### `2`

```

 unknown:1:15 lint/js/noShadowRestrictedNames ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not shadow the global Object property.

    try {  } catch(Object) {}
                   ^^^^^^

  ℹ Consider renaming this variable. It's easy to confuse the origin of variables when they're named
    after a known global.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```
try {
} catch (Object) {
}

```

### `3`

```

 unknown:1:10 lint/js/noShadowRestrictedNames ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not shadow the global Array property.

    !function Array() {}
              ^^^^^

  ℹ Consider renaming this variable. It's easy to confuse the origin of variables when they're named
    after a known global.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `3: formatted`

```
!function Array() {};

```

### `4`

```

 unknown:1:14 lint/js/noShadowRestrictedNames ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not shadow the global JSON property.

    function test(JSON) {console.log(JSON)}
                  ^^^^

  ℹ Consider renaming this variable. It's easy to confuse the origin of variables when they're named
    after a known global.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `4: formatted`

```
function test(JSON) {
	console.log(JSON);
}

```
