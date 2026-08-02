interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button({text, onClick}: ButtonProps){

return(
<button
onClick={onClick}
className="w-full bg-blue-600 text-white p-3 rounded-lg"
>
{text}
</button>
)

}
