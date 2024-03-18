module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix --config ./.eslintrc.staged.js',
  ],
  '**/*.{ts,tsx}': [
    'tsc-files --noEmit src/shared/lib/types/images.d.ts'
  ],
  '*.{md,json}': ['prettier --write'],
};