interface Props {}

export default function Card({}: Props) {
  return (
    <div className=" m-10 bg-white w-full object-fit-contain border-2  rounded-lg">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src="https://picsum.photos/600/600"
        alt=""
      />
      <div className=" ml-5 mr-5 mb-5 mt-2 bg bg-white font-bold">Name</div>
      <div className="m-5">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna{" "}
      </div>
    </div>
  );
}
