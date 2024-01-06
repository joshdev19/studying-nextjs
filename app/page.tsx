import LinkComponent from "@/component/Link"
import { UserTypes } from "@/type/types";

const getDatas = async () => {

  const request = await fetch('http://localhost:3000/api/users');

  const response = await request.json();

  return response;

}

const Users = async () => {

  const { data } = await getDatas();

  return (
    <div className="wrapper">
      {
        data && data?.map( ( d : UserTypes ) => <LinkComponent key={ d?.id } { ...d } /> )
      }
    </div>
  )

}

export default Users