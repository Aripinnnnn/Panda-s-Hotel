import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "Semua" },
          { value: "no-discount", label: "Tanpa diskon" },
          { value: "with-discount", label: "Dengan diskon" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Urutkan berdasarkan nama (A-Z)" },
          { value: "name-desc", label: "Urutkan berdasarkan nama (Z-A)" },
          { value: "regularPrice-asc", label: "Urutkan berdasarkan harga ⬆️" },
          { value: "regularPrice-desc", label: "Urutkan berdasarkan harga ⬇️" },
          { value: "maxCapacity-asc", label: "Urutkan berdasarkan kapasitas ⬆️" },
          { value: "maxCapacity-desc", label: "Urutkan berdasarkan kapasitas ⬇️" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
