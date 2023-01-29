import { useQuery, gql } from "@apollo/client";

const GET_SERVICES = gql`
  query GetService {
    service {
      id
      name
      type
      thumbnail
    }
  }
`;
const GetService = () =>{
    const { loading, error, data } = useQuery(GET_SERVICES);
    console.log(data);
    return { serviceLoading:loading, serviceError:error, serviceData:data }
}

export {GET_SERVICES,GetService}