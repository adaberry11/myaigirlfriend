export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-white to-blue-100 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Meet <span className="text-pink-600">MyAIGirlfriend.io</span></h1>
      <p className="text-lg text-center max-w-2xl mb-8">
        The future of love and companionship is here. MyAIGirlfriend.io offers you a customizable, emotionally intelligent AI companion that listens, talks, and learns to be the perfect virtual partner — just for you.
      </p>

      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xl w-full mb-6">
        <h2 className="text-2xl font-semibold mb-2">Why MyAIGirlfriend?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>❤️ Always available to chat, comfort, and connect</li>
          <li>🧠 Powered by advanced conversational AI</li>
          <li>🎨 Customizable looks, voices, and personalities</li>
          <li>🔒 100% private, secure, and judgment-free</li>
        </ul>
      </div>

      <div className="text-center">
        <p className="text-xl font-medium mb-4">Launching Soon 🚀</p>
        <p className="mb-6">Be the first to experience AI-powered companionship.</p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-xl border border-gray-300 w-72"
          />
          <button className="bg-pink-600 text-white px-6 py-2 rounded-xl shadow hover:bg-pink-700 transition">
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}
