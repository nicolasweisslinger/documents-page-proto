import {useMutation, MutationHookOptions} from '@apollo/react-hooks';

import {
  createDocument as CreateDocumentMutationData,
  createDocumentVariables as CreateDocumentMutationVariables,
} from './createDocument';

import createDocumentMutation from './createDocument.gql';

export const useCreateDocumentMutation = (
  options?: Omit<
    MutationHookOptions<
      CreateDocumentMutationData,
      CreateDocumentMutationVariables
    >,
    'variables'
  >,
) => {
  const [createDocument, data] = useMutation<
    CreateDocumentMutationData,
    CreateDocumentMutationVariables
  >(createDocumentMutation, options);

  return [createDocument, data] as const;
};
