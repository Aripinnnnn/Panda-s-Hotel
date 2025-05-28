import styled from "styled-components";
import { Link } from "react-router-dom";

import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  // Cek apakah guests ada dan punya properti yang dibutuhkan
  const flagSrc = guests?.countryFlag || "/default-flag.png"; // fallback gambar bendera
  const countryAlt = guests?.country ? `Flag of ${guests.country}` : "No flag";
  const guestName = guests?.fullName || "Unknown Guest";

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Sampai</Tag>}
      {status === "checked-in" && <Tag type="blue">Pergi</Tag>}

      <Flag src={flagSrc} alt={countryAlt} />
      <Guest>{guestName}</Guest>
      <div>{numNights} malam</div>

      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
