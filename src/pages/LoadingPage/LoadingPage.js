export const LoadingPage = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes blink {
            0%, 20% { opacity: 1; }
            25%, 75% { opacity: 0; }
            80%, 100% { opacity: 1; }
          }
          .spinner {
            border: 8px solid #f3f3f3;
            border-top: 8px solid #60a5fa;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            animation: spin 2s linear infinite;
          }
          .dot1 {
            animation: blink 1.4s infinite 0s;
          }
          .dot2 {
            animation: blink 1.4s infinite 0.2s;
          }
          .dot3 {
            animation: blink 1.4s infinite 0.4s;
          }
        `}
      </style>
      <div className="text-center">
        <div className="spinner mx-auto mb-4"></div>
        <div className="text-4xl text-blue-400 font-semibold">
          Loading<span className="dot1">.</span><span className="dot2">.</span><span className="dot3">.</span>
        </div>
      </div>
    </div>
  )
};


    
