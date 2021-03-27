interface TitleProps {
  value: string
}

export const Title: React.FC<TitleProps> = ({ value }) => {
  return <h2 className="text-3xl font-extrabold text-gray-900">{value}</h2>
}
