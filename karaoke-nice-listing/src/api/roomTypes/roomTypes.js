import { gql } from "@apollo/client";

const ROOM_TYPE_PAGINATION = gql`
  query GetRomTYpe(
    $condition: RoomTypeFilterInput
    $order: [RoomTypeSortInput!]
    $take: Int
    $skip: Int
  ) {
    roomTypesWithPagination(
      order: $order
      where: $condition
      take: $take
      skip: $skip
    ) {
      items {
        id
        name
        description
        gallery
        guests
        price
        services
        thumnail
        shortContent
        areas
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
  }
`;

export {ROOM_TYPE_PAGINATION}