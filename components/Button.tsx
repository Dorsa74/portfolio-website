interface ButtonProps {
  text: string;
  onClick: () => void;
  isActive?: boolean;
}

export default function Button({ text, onClick, isActive }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-md transition duration-200 
        ${isActive ? "bg-pink-700 scale-110" : "bg-pink-500 text-lg hover:bg-pink-600"}
      `}
    >
      {text}
    </button>
  );
}
