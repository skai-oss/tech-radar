import { fetchList } from "../fetchData";
import { FilterBy } from "./FilterBy";

const List = async ({ params }) => {
  const data = await fetchList(params.edition);
  return (
    <div className="container mx-auto -mt-20">
      <FilterBy data={data} edition={params.edition} />
    </div>
  );
};

export default List;
