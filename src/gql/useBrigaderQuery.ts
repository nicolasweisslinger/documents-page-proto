import {useQuery, QueryHookOptions} from '@apollo/react-hooks';

import {
  brigader as BrigaderQueryData,
  brigaderVariables as BrigaderQueryVariables,
  brigader_Brigader_CompletedBrigader as CompletedBrigader,
} from './brigader';

import brigaderQuery from './brigader.gql';

export const useBrigaderQuery = (
  options?: QueryHookOptions<BrigaderQueryData, BrigaderQueryVariables>,
) => {
  const {data, ...otherValues} = useQuery<
    BrigaderQueryData,
    BrigaderQueryVariables
  >(brigaderQuery, options);

  return {
    ...otherValues,
    brigader: data?.Brigader ?? null,
  };
};

export {
  brigaderQuery,
  BrigaderQueryData,
  BrigaderQueryVariables,
  CompletedBrigader,
};
