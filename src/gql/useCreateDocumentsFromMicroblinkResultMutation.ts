import {useMutation, MutationHookOptions} from '@apollo/react-hooks';

import {
  createDocumentsFromMicroblinkResult as CreateDocumentsFromMicroblinkResultMutationData,
  createDocumentsFromMicroblinkResultVariables as CreateDocumentsFromMicroblinkResultMutationVariables,
} from './createDocumentsFromMicroblinkResult';

import createDocumentsFromMicroblinkResultMutation from './createDocumentsFromMicroblinkResult.gql';

export const useCreateDocumentsFromMicroblinkResultMutation = (
  options?: Omit<
    MutationHookOptions<
      CreateDocumentsFromMicroblinkResultMutationData,
      CreateDocumentsFromMicroblinkResultMutationVariables
    >,
    'variables'
  >,
) => {
  const [createDocumentsFromMicroblinkResult, data] = useMutation<
    CreateDocumentsFromMicroblinkResultMutationData,
    CreateDocumentsFromMicroblinkResultMutationVariables
  >(createDocumentsFromMicroblinkResultMutation, options);

  return [createDocumentsFromMicroblinkResult, data] as const;
};
