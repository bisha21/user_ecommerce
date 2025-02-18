export default function CarpuselItem({ imageSrc }) {
  return (
    <div className=" w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative ">
      <img className="object-fit w-full h-full" src={imageSrc} />
    </div>
  );
}
