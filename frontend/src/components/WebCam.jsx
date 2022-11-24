import React from "react";

export default function WebCam() {
  return (
    <div>
      <embed
        type="video/webm"
        src="https://webcams.windy.com/webcams/stream/1181820895"
        width={700}
        height={800}
      />
    </div>
  );
}
