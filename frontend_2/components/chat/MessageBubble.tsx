interface MessageProps{
 text:string;
 sender:"user"|"ai";
}


export default function MessageBubble({
text,
sender
}:MessageProps){


return(

<div
className={`p-3 rounded-lg max-w-xs mb-3 
${sender==="user"
?"bg-blue-600 text-white ml-auto"
:"bg-white text-black mr-auto"
}`}
>

{text}

</div>

)

}