# Add download button for centy desktop app on landing page

Add a button to the Hero section of the landing page that allows users to download the centy desktop app from GitHub releases.

## Requirements
- Add download button in the Hero section (next to 'Get Started' and 'View on GitHub' buttons)
- Link to: https://github.com/centy-io/centy-desktop/releases/latest
- Follow existing button styling patterns from Hero.tsx
- Use secondary button style with a download icon
- Link should open in a new tab

## File to modify
- centy-landing/src/components/Hero.tsx

## Reference
Existing button pattern in Hero.tsx:
```tsx
<a
  href="https://github.com/centy-io"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3 text-base font-medium border border-[var(--secondary)] rounded-lg hover:bg-[var(--secondary)] transition-colors"
>
  View on GitHub
</a>
```
