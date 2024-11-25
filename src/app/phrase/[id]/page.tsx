
export default function Phrase() {
  return (
    <div className="h-[100dvh] flex flex-col">
      <div className="h-1/2">
        <textarea className="w-full h-full resize-none outline-none p-4 bg-transparent" />
      </div>
      <div className="h-1/2 border-t">
        <textarea className="w-full h-full resize-none outline-none p-4 bg-transparent" />
      </div>
    </div>
  );
}
