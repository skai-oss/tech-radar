import RingDetails from "./RingDetails";

const Entries = ({ data, onClick }) => {
  return (
    <>
      <h2
        id="rings-title"
        className="text-lg font-light text-gray-700 flex justify-between"
      >
        Rings
      </h2>
      <div className="flow-root">
        <div className="w-full mx-auto bg-white rounded-2xl flex flex-col gap-4 mt-4">
          <RingDetails
            data={data}
            filter={"Adopt"}
            defaultOpen={true}
            onClick={onClick}
          />
          <RingDetails data={data} filter={"Trial"} onClick={onClick} />
          <RingDetails data={data} filter={"Assess"} onClick={onClick} />
          <RingDetails data={data} filter={"Hold"} onClick={onClick} />
        </div>
      </div>
    </>
  );
};

export default Entries;
