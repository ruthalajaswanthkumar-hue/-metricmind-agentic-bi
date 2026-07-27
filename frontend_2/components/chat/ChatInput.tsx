interface InputProps{
message:string;
setMessage:(value:string)=>void;
sendMessage:()=>void;
}


export default function ChatInput({
message,
setMessage,
sendMessage
}:InputProps){


return(

<div className="flex gap-3 mt-4">


<input

value={message}

onChange={(e)=>setMessage(e.target.value)}

placeholder="Ask your business question..."

className="flex-1 border p-3 rounded-lg text-black"

/>


<button

onClick={sendMessage}

className="bg-blue-600 text-white px-5 rounded-lg"

>

➤

</button>


</div>

)

}