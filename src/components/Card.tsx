export const Card = ({
  language,
  color = "base",
}: {
  language: string;
  color?: string;
}) => {
  return (
    <span className={`mr-3 rounded bg-${color} p-2 text-pine`}>{language}</span>
  );
};
