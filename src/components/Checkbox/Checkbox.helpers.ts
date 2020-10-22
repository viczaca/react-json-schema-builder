export const handleChange = (handler: (value: boolean) => void) => {
  return (event: React.FormEvent<HTMLElement>): void => {
    handler((event.target as HTMLInputElement).checked);
  };
}