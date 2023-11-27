import {
  useGetLoggedUserLazyQuery, User, userConnected, useValidateTokenLazyQuery,
} from '../graphql';

export default function useAuthentication() {
  const [validateToken] = useValidateTokenLazyQuery();
  const [fetchCurrentUser] = useGetLoggedUserLazyQuery();

  return async (token: string) => {
    try {
      await validateToken({ variables: { token } });

      const { data } = await fetchCurrentUser();

      if (!data) {
        throw new Error('Error during auto login');
      }

      userConnected(data.getLoggedUser as User);

      return true;
    } catch (error) {
      return false;
    }
  };
}
