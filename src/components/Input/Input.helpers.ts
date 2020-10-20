export const handleStringChange = (handler: (value: string) => void) => {
  return (event: React.FormEvent<HTMLElement>): void => {
    handler((event.target as HTMLInputElement).value);
  };
}

export const handleEnterPress = (handler: () => void) => {
  return (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handler();
    }
  };
}