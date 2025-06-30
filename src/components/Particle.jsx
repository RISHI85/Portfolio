// // Particle.jsx
// import React, { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import './Home.css';

// function Particle() {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine); // Load all tsparticles features
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: false },
//         particles: {
//           number: {
//             value: 60,
//             density: {
//               enable: true,
//               area: 800,
//             },
//           },
//           color: {
//             value: "#ffffff",
//           },
//           shape: {
//             type: "circle",
//           },
//           opacity: {
//             value: 0.5,
//           },
//           size: {
//             value: { min: 1, max: 3 },
//           },
//           move: {
//             enable: true,
//             speed: 1,
//             direction: "none",
//             outModes: {
//               default: "bounce",
//             },
//           },
//         },
//       }}
//     />
//   );
// }

// export default Particle;
