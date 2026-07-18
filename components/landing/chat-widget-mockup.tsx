// TODO: This is a static visual mockup standing in for the real product UI.
// Once the actual chatbot is built, replace <ChatWidgetMockup /> below with
// either a live embed of the real widget or a screenshot of it in action.
export function ChatWidgetMockup() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
        <div className="w-8 h-8 rounded-full bg-[#eca8d6]/20 flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-[#eca8d6]" />
        </div>
        <div>
          <p className="text-sm font-medium text-white">Ask us anything</p>
          <p className="text-xs text-white/40">Usually replies instantly</p>
        </div>
      </div>

      {/* Messages */}
      <div className="px-5 py-6 space-y-4">
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-white/10 px-4 py-2.5 text-sm text-white">
            Do you offer refunds?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-[#eca8d6]/15 px-4 py-2.5 text-sm text-white/90">
            Yes — full refunds within 30 days of purchase, no questions asked. Want me to start one for you?
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="px-5 pb-5">
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/30">
          Type your question...
        </div>
      </div>
    </div>
  );
}
