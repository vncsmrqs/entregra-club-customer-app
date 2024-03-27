import type { NavigationGuard } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

export const isGuestMiddleware: NavigationGuard = async () => {
  const authStore = useAuthStore();

  if (authStore.isLogged) {
    return { name: 'home' };
  }
};
