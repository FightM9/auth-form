import { AuthContext } from 'hocs/AuthProvider';
import { useContext } from 'react';

export function useAuth() {
    return useContext(AuthContext);
}