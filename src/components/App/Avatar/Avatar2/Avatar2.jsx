import CodeBox from '../../../../Shared/CodeBox/CodeBox';


const Avatar2 = () => {
  // const count = 7
  // const avatars = Array.from({ length: count }, (_, index) => index + 1);

  return (
    <CodeBox 
    text={"Avatar group with counter"}
    stringCode={`<div className="flex justify-center">
    <img className="border-2 border-white rounded-full w-10 h-10 md:w-16 md:h-16 -mr-6" src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt />
    <img className="border-2 border-white rounded-full w-10 h-10 md:w-16 md:h-16 -mr-6" src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt />
    <img className="border-2 border-white rounded-full w-10 h-10 md:w-16 md:h-16 -mr-6" src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt />
    <img className="border-2 border-white rounded-full w-10 h-10 md:w-16 md:h-16 -mr-6" src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt />
    <img className="border-2 border-white rounded-full w-10 h-10 md:w-16 md:h-16 -mr-6" src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt />
    <img className="border-2 border-white rounded-full w-10 h-10 md:w-16 md:h-16 -mr-6" src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt />
    <span className="flex items-center justify-center bg-white text-sm text-gray-800 font-semibold border-2 border-gray-200 rounded-full w-10 h-10 md:w-16 md:h-16">+999</span>
  </div>`}>
      <div className="flex justify-center">
        <img className="border-2 border-white rounded-full w-10 h-10 md:w-16 md:h-16 -mr-6" src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt />
        <img className="border-2 border-white rounded-full w-10 h-10 md:w-16 md:h-16 -mr-6" src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt />
        <img className="border-2 border-white rounded-full w-10 h-10 md:w-16 md:h-16 -mr-6" src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt />
        <img className="border-2 border-white rounded-full w-10 h-10 md:w-16 md:h-16 -mr-6" src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt />
        <img className="border-2 border-white rounded-full w-10 h-10 md:w-16 md:h-16 -mr-6" src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt />
        <img className="border-2 border-white rounded-full w-10 h-10 md:w-16 md:h-16 -mr-6" src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt />
        <span className="flex items-center justify-center bg-white text-sm text-gray-800 font-semibold border-2 border-gray-200 rounded-full w-10 h-10 md:w-16 md:h-16">+999</span>
      </div>
    </CodeBox>
  );
};
export default Avatar2;
// <div className="flex justify-center -space-x-6 rtl:space-x-reverse relative">
//       {avatars.map((index) => (
//         <div key={index} className="w-12">
//           <img className="rounded-full" src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt={`Avatar ${index}`} />
//         </div>
//       ))}
//       {count > 5 && (
//         <div className="absolute bottom-0 right-1/2 bg-blue-900 text-white text-xs rounded-full w-12 h-12 flex items-center justify-center border border-gray-300">
//           +{count - 5}
//         </div>
//       )}
//     </div>