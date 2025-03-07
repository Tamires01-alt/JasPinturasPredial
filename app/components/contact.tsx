'use client';


export default function Contact() {
  return (
    <div className="bg-[#fff] h-50 flex  flex-col items-center p-8">
      <div className=" flex flex-col w-full md:w-[800px]  text-center gap-3  ">
        <p className="text-[#1F4569]  text-2xl font-bold  " >What is Lorem Ipsum?</p>
        <p className="text-[#EE252C] font-semibold">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'</p>
        <div className="text-xs">standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</div>
        <div className="flex justify-center items-center bg-[#EE252C] h-8 p-2 rounded-lg w-fit mx-auto text-white font-medium  cursor-pointer"> Contato: 11 985833004</div>
      </div>
    </div>
  );
}
