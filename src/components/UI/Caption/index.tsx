interface CaptionProps {
  value: string
}

export const Caption: React.FC<CaptionProps> = ({ value }) => {
  return <p className="text-lg text-gray-800 text-center">{value}</p>
}
