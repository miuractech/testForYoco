import { MultiSelect } from '@mantine/core';

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' },
];

export function Demo() {
  return (
    <MultiSelect
      data={data}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
    />
  );
}