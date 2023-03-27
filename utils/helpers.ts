export const getStatusLabel = (status: string) => {
  switch (status) {
    case 'new':
      return 'Новий';
    case 'in progress':
      return 'Переводиться';
    case 'output':
      return 'Вихід';
    case 'waiting':
      return 'Очікування глав';
  }
};
