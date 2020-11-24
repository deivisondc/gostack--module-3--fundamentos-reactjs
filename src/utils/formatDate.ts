const formatDate = (stringDate: Date): string => {
  const date = new Date(stringDate);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export default formatDate;
