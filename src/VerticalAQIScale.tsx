import React from "react";

const aqiLevels = [
  { label: "Good", color: "#009966", max: 50 },
  { label: "Moderate", color: "#FFDE33", max: 100 },
  { label: "Unhealthy for Sensitive Groups", color: "#FF9933", max: 150 },
  { label: "Unhealthy", color: "#CC0033", max: 200 },
  { label: "Very Unhealthy", color: "#660099", max: 300 },
  { label: "Hazardous", color: "#7E0023", max: 500 },
];

function VerticalAQIScale({ aqi }: { aqi: number }) {
  const scaleHeight = 300;
  const clampedAqi = Math.min(Math.max(aqi, 0), 500);
  const pointerPosition = (clampedAqi / 500) * scaleHeight;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      {/* Colored scale with labels inside */}
      <div
        style={{
          position: "relative",
          width: 140,
          height: scaleHeight,
          borderRadius: 10,
          overflow: "hidden",
          boxShadow: "0 0 5px rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "black",
          fontWeight: "bold",
          fontSize: 12,
        }}
      >
        {aqiLevels
          .slice()
          .reverse()
          .map(({ label, color, max }, i, arr) => {
            const segmentHeight = scaleHeight / aqiLevels.length;
            return (
              <div
                key={max}
                style={{
                  backgroundColor: color,
                  height: segmentHeight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 5px",
                  textAlign: "center",
                  color: "white",
                  borderTopLeftRadius: i === 0 ? 10 : 0,
                  borderTopRightRadius: i === 0 ? 10 : 0,
                  borderBottomLeftRadius: i === arr.length - 1 ? 10 : 0,
                  borderBottomRightRadius: i === arr.length - 1 ? 10 : 0,
                }}
              >
                {label}
              </div>
            );
          })}
      </div>

      {/* Pointer */}
      <div
        style={{
          position: "relative",
          width: 20,
          height: scaleHeight,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: pointerPosition - 8,
            width: 0,
            height: 0,
            borderTop: "8px solid transparent",
            borderBottom: "8px solid transparent",
            borderRight: "12px solid black",
          }}
        />
      </div>
    </div>
  );
}

export default VerticalAQIScale;
