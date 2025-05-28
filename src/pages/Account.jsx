import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">Perbarui akunmu</Heading>

      <Row>
        <Heading as="h3">Perbarui data user</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Perbarui kata sandi</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
