import { useEffect } from "react";

const CrispChat = () => {
  useEffect(() => {
    window.$crisp = [];
    // window.CRISP_WEBSITE_ID = "a3208190-4b75-4318-a5f2-bebafb099e65";
    window.CRISP_WEBSITE_ID = import.meta.env.VITE_crisp_id;

    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;

    document.head.appendChild(script);

    // Cleanup script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component does not render anything visible
};

export default CrispChat;
