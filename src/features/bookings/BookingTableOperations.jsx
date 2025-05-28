import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "Semua" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "Urutkan berdasarkan tanggal ⬆️" },
          { value: "startDate-asc", label: "Urutkan berdasarkan tanggal ⬇️" },
          {
            value: "totalPrice-desc",
            label: "Urutkan berdasarkan jumlah ⬆️",
          },
          { value: "totalPrice-asc", label: "Urutkan berdasarkan jumlah ⬇️" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
