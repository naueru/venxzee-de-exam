export const parsePost = (data) => {
  const { id, name, year, color, pantone_value } = data || {};
  return {
    avatar: color,
    name: `${id}-${name}`,
    title: name + pantone_value,
    description: pantone_value,
    date: year,
    id
  };
};
