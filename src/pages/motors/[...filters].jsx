import MainMotorsLayout from "@/components/motors/MainMotorsLayout";

const FiltersCars = ({ result }) => {
  return (
    <div className="md:container md:mx-auto mx-[20px] ">
      <MainMotorsLayout result={result} />;
    </div>
  );
};
export default FiltersCars;
export async function getServerSideProps() {
  // console.log("context::>>>>", context);
  // console.log("query::>>>>", context.query);
  /**
   * query::>>>> {
  '222': '111',
  filters: [ 'sdsd', 'sdsdsd', 'serch' ],
  sdsdsd: 'sdsdsd'
}
   */
  // console.log("resolvedUrl::>>>>", context.resolvedUrl);
  /**
   * resolvedUrl::>>>> /motors/sdsd/sdsdsd/serch?222=111&sdsdsd=sdsdsd
   */
  // console.log("params:::>>>>", context.params);
  /**
   * params:::>>>> { filters: [ 'sdsd', 'sdsdsd', 'serch' ] }
   */
  return {
    props: {
      result: "server side",
    },
  };
}
