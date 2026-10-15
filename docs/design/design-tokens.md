# AdamsBrain design tokens

Final, 15 Oct 2026. Port into the Tailwind config in Session 8.
Every contrast ratio below was calculated with the WCAG formula, not estimated.
The screens in [screens/](screens/) use exactly these values.

## Font

Inter for everything, including maths (`3x + 12 = 20`).

## Type scale (ratio 1.25, base 16)

| Token | px | line-height | Use |
|---|---|---|---|
| sm | 14 | 20 | labels, NYSED attribution |
| base | 16 | 24 | body, step instructions |
| lg | 20 | 28 | maths working, answer input, subheads |
| xl | 25 | 32 | card titles |
| 2xl | 31 | 38 | topic header, question |
| 3xl | 39 | 46 | summary numbers |

## Spacing and shape

- Spacing on a 4px grid: 4, 8, 12, 16, 24, 32, 48, 64.
- Minimum tap target 44 x 44px.
- Corner radius 8px for cards, panels, inputs and buttons. Fully rounded only for chips and the scaffold badge.

## Neutrals

| Role | Hex | Contrast |
|---|---|---|
| page | #FFFFFF | |
| card | #F4F5F7 | |
| question panel | #EBEDF0 | |
| border | #DDE0E5 | decorative only |
| text | #1A1C1E | 15.7 : 1 on card |
| text-muted | #575C63 | 6.7 : 1 on white |
| input border | #868C94 | 3.4 : 1 on white (UI boundary minimum is 3 : 1) |

## Brand (teal)

One brand colour for buttons, links, progress, focus ring and all three scaffold levels.

| State | Hex | White text contrast |
|---|---|---|
| default | #1D5C5A | 7.7 : 1 |
| hover | #174A48 | 10.0 : 1 |
| pressed | #113937 | 12.6 : 1 |
| disabled | #E4E6EA fill, #575C63 text | 5.4 : 1 |
| tint (level-change pill) | #EAF2F1 | teal text on it 6.8 : 1 |

Scaffold levels are told apart by dots plus the word, never by colour:
FULL ●●●   HALF ●●○   NONE ○○○

## Feedback

| Role | Text / border | Fill | Contrast |
|---|---|---|---|
| correct | #2F6F2F | #EEF5F0 | 5.5 : 1 on its fill |
| incorrect | #A33A2A | #FBEFEC | 5.8 : 1 on its fill |

Each always carries an icon and a word ("Correct", "Not this time"), so meaning never depends on colour alone.

## Inputs

| State | Border | Fill |
|---|---|---|
| default | 1px #868C94 | #FFFFFF |
| focus | 2px #1D5C5A ring, 2px offset | #FFFFFF |
| filled | 1px #575C63 | #FFFFFF |
| error | 1.5px #A33A2A + icon + message | #FBEFEC |

## Why these colours

- Tailwind's default palette (bright blue, purple, slate) was dropped because it is what most generated interfaces use.
- Purple (HALF) and teal (level change) were dropped: one brand colour plus the dots is calmer and carries the same meaning.
- Compared on a Chromebook-sized mockup: beige, cream, white with warm cards, and white with grey cards, each with olive, teal and navy. White page, grey cards, teal buttons was chosen.
