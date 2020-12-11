import {useMutation, MutationHookOptions} from '@apollo/react-hooks';

import {
  loginWithPassword as LoginWithPasswordMutationData,
  loginWithPasswordVariables as LoginWithPasswordMutationVariables,
} from './loginWithPassword';

import loginWithPasswordMutation from './loginWithPassword.gql';

export const useLoginWithPasswordMutation = (
  options?: Omit<
    MutationHookOptions<
      LoginWithPasswordMutationData,
      LoginWithPasswordMutationVariables
    >,
    'variables'
  >,
) => {
  const [loginWithPassword, data] = useMutation<
    LoginWithPasswordMutationData,
    LoginWithPasswordMutationVariables
  >(loginWithPasswordMutation, options);

  return [loginWithPassword, data] as const;
};
