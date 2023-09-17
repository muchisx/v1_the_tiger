export type KeyId = { $keyId: string | number };

export type NeutralColorCSSVar =
  | 'var(--neutral-color)'
  | 'var(--neutral-color-secondary)'
  | 'var(--neutral-color-tertiary)'
  | 'var(--neutral-color-quaternary)';

export type AvailableCSSFontVar = 'var(--text-family)' | 'var(--heading-family)';

export type TextColorCSSVar =
  | 'var(--text-primary)'
  | 'var(--text-secondary)'
  | 'var(--text-tertiary)'
  | 'var(--body-text-primary)'
  | 'var(--body-text-secondary)'
  | 'var(--body-text-tertiary)'
  | 'var(--text-highlight-primary)'
  | 'var(--text-highlight-secondary)'
  | 'var(--text-highlight-tertiary)'
  | 'var(--text-highlight-quaternary)';
